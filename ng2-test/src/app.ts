console.log("HI app");
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
// import TodoApp from './app'
// import {TodoStore} from './services/store';

bootstrap(TodoApp, [TodoStore]);

console.log("Comp/BS", Component, bootstrap);
import TodoList from './todoList.ts';
console.log("todoList: ", TodoList);

@Component({ //
  selector: 'app',
  directives: [TodoList],
  template: `
    <h1>Todo App</h1>
    <todo-list></todo-list>
  `
})
export default class AppComponent {
  constructor() {
  }
}
bootstrap(AppComponent);