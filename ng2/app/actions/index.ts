declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

let nextTodoId = 0;

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

var Actions = {
  addTodo,
  setVisibilityFilter,
  toggleTodo
};

console.log("Actions.ts : Actions", Actions);


// typescript syntax for module exporting, here:
// 
// 
// ng2- connecting here:
// https://github.com/wbuchwalter/ng2-redux
// 
// http://stackoverflow.com/questions/32805559/typescript-es6-import-module-file-is-not-a-module-error
export module Actions {

}
exports.Actions = Actions;

