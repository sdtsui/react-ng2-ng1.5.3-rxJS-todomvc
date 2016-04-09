/**
 * Define Keys
 */

console.log("Rx : ", Rx);

var Keys = keyMirror({
  TODO_ADD: null,
  TODO_DELETE: null,
  TODO_EDIT: null,
  TODO_COMPLETE: null,
  TODOS_COMPLETE_ALL: null,
  TODOS_CLEAR_COMPLETED: null,
});

console.log("keyMirror :", keyMirror, Keys);
/**
 * Define Intent
 */
var intentSubject = new Rx.ReplaySubject(1);
var Intent = {
  subject: intentSubject,

  add: function (text) {
    intentSubject.onNext({
      key: Keys.TODO_ADD,
      text: text,
    });
  },

  del: function (id) {
    intentSubject.onNext({
      key: Keys.TODO_DELETE,
      id: id,
    });
  },

  edit: function (id, text) {
    intentSubject.onNext({
      key: Keys.TODO_EDIT,
      id: id,
      text: text,
    });
  },

  complete: function (id) {
    intentSubject.onNext({
      key: Keys.TODO_COMPLETE,
      id: id,
    });
  },

  completeAll: function () {
    intentSubject.onNext({
      key: Keys.TODOS_COMPLETE_ALL,
    });
  },

  clearCompleted: function () {
    intentSubject.onNext({
      key: Keys.TODOS_CLEAR_COMPLETED,
    });
  },
};

/**
 * Declare Model Subject
 */
console.log("RxReplaySubject: ", Rx.ReplaySubject);

var _modelSubject = new Rx.ReplaySubject(1);
console.log("Rx: ", Rx);
console.log("_modelSubject: ", _modelSubject);

let defaultTodo = {
  id: 0,
  text: "RFP Things",
  completed: false,
};

let defaultTodo1 = {
  id: 1,
  text: "RFP Things1",
  completed: false,
};

let defaultTodo2 = {
  id: 2,
  text: "RFP Things2",
  completed: false,
};


var state = {
  todos: [defaultTodo, defaultTodo1, defaultTodo2],
};
/**
 * Helper method to create new todos. 
 * When invoked without an id, creates a new Todo.
 * When invoked with an id, edits to completes the Todo with that Id.
 * @param  {[type]}  text      []
 * @param  {Boolean} completed []
 * @param  {[type]}  id        [for completing/editing TODOs]
 * @return {[Obj]}            [new todo]
 */
function _createNewTodo(text, completed = false, id = undefined) {
  let newTodo = Object.assign({}, {
    id: id ? id : state.todos.length,
    text: text,
    completed: completed,
  });

  return newTodo;
}

function add(text) {
  let newTodo = _createNewTodo(text);
  let todos = state.todos.slice();

  todos.push(newTodo);
  state = Object.assign(
    {},
    state,
    {todos: todos}
  );

  _modelSubject.onNext(state);
}

function del(id) {
  let todos = state.todos.slice();
  todos = todos.filter(todo => todo.id !== id);

  state = Object.assign(
    {},
    state,
    {todos: todos}
  );

  _modelSubject.onNext(state);
}

function edit(id, text) {
  let editOneTodo = (todo) => {
    if (todo.id === id) {
      let editedTodo = Object.assign(
        {},
        _createNewTodo(text, todo.completed, todo.id)
      );
      return editedTodo;
    } else {
      return todo;
    }
  };
  let todos = state.todos.slice();
  todos = todos.map(editOneTodo);

  state = Object.assign(
    {},
    state,
    {todos: todos}
  );

  _modelSubject.onNext(state);
}

function complete(id) {
  let completeOneTodo = (todo) => {
    if (todo.id === id) {
      let completedTodo = Object.assign(
        {},
        _createNewTodo(todo.text, !todo.completed, id)
      );
      return completedTodo;
    } else {
      return todo;
    }
  };
  let todos = state.todos.slice();
  todos = todos.map(completeOneTodo);

  state = Object.assign(
    {},
    state,
    {todos: todos}
  );

  _modelSubject.onNext(state);
}

function _toggleAllTodos(todo) {
  let completedTodo = Object.assign(
    {},
    _createNewTodo(todo.text, !todo.completed, todo.id)
  );

  return completedTodo;
}


function completeAll() {
  let completeAllTodos = (todo) => {
    let completedTodo = Object.assign(
      {},
      _createNewTodo(todo.text, true, todo.id)
    );

    return completedTodo;
  }

  let todos = state.todos.slice();
  if (
    todos.every((todo) => {return todo.completed === true})
    ||
    todos.every((todo) => {return todo.completed === false})
  ) {
    todos = todos.map(_toggleAllTodos);
  } else {
    todos = todos.map(completeAllTodos);
  }

  state = Object.assign(
    {},
    state,
    {todos: todos}
  );

  _modelSubject.onNext(state);

}

function clearCompleted() {
  let notComplete = (todo) => !todo.completed

  let todos = state.todos.slice();
  todos = todos.filter(notComplete);

  state = Object.assign(
    {},
    state,
    {todos: todos}
  );

  _modelSubject.onNext(state);
}

/**
 * Subscribe handler to Intent.subject
 */

Intent.subject.subscribe(function (payload) {
  switch(payload.key) {
    case Keys.TODO_ADD:
      add(payload.text);
      break;
    case Keys.TODO_DELETE:
      del(payload.id);
      break;
    case Keys.TODO_EDIT:
      edit(
        payload.id,
        payload.text
      );
      break;
    case Keys.TODO_COMPLETE:
      complete(payload.id);
      break;
    case Keys.TODOS_COMPLETE_ALL:
      completeAll();
      break;
    case Keys.TODOS_CLEAR_COMPLETED:
      clearCompleted();
      break;
    default:
      console.warn(`${payload.key} not recognized in model.`);
  }
});

// Set initial State
_modelSubject.onNext(state);

/**
 * Declare initialized Model
 * @type {Object}
 */
var Model = {
  subject: _modelSubject
}

var Observable = Model.subject.map(function (appState) {
  // Do Nothing for Now:
  return appState;
});

var __appState = {};

Observable.subscribe((appState) => {
  appState.Intent = Intent;
  __appState = appState;
});

console.log("__appState :", __appState);
