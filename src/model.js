var Rx = require('rx');
var Keys = require('./keys');
var Intent = require('./intent');

var subject = new Rx.ReplaySubject(1);

let defaultTodo = {
  id: 0,
  text: "RFP Things",
  completed: false,
};

var state = {
  todos: [defaultTodo],
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
    {todos: todos},
  );

  subject.onNext(state);
}

function del(id) {
  console.log("del called with id: ", id);
  let todos = state.todos.slice();
  todos = todos.filter(todo => todo.id !== id);

  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);
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
    {todos: todos},
  );

  subject.onNext(state);
}

function complete(id) {
  let completeOneTodo = (todo) => {
    if (todo.id === id) {
      let completedTodo = Object.assign(
        {},
        _createNewTodo(todo.text, !todo.completed, id),
      );
      return completedTodo;
    } else {
      return todo;
    }
  };
  let todos = state.todos.slice();
  console.log('todos :', todos);
  todos = todos.map(completeOneTodo);
  console.log('todos after Map:', todos);

  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);
}

function _toggleAllTodos(todo) {
  let completedTodo = Object.assign(
    {},
    _createNewTodo(todo.text, !todo.completed, todo.id),
  );

  return completedTodo;
}


function completeAll() {
  let completeAllTodos = (todo) => {
    let completedTodo = Object.assign(
      {},
      _createNewTodo(todo.text, true, todo.id),
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
    {todos: todos},
  );

  subject.onNext(state);

}

function clearCompleted() {
  let notComplete = (todo) => !todo.completed

  let todos = state.todos.slice();
  todos = todos.filter(notComplete);

  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);
}

Intent.subject.subscribe(function (payload) {
  console.log("EVENT:", payload);
  console.log("EVENT:", payload.key);
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
        payload.text,
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

subject.onNext(state);

module.exports = {
  subject: subject
};
