declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

import { combineReducers } from 'redux'
// import { todos } from './todos'
// import { visibilityFilter } from './visibilityFilter'

let todos = require('./todos').todos;
let visibilityFilter = require('./visibilityFilter').visibilityFilter;


console.log("in reducer index: todos: ", todos);
console.log("in reducer index: visibilityFilter: ", visibilityFilter);

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

console.log("inside reducer index: ", todoApp);

// export default todoApp
// 
exports.todoApp = todoApp;
