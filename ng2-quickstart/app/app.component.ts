import {Component} from 'angular2/core';
import {TodoList} from './todoList'

@Component({
    selector: 'my-app',
    directives: [TodoList],
    template: `
      <h1>My Second-Last Angular 2 App</h1>
      <todo-list></todo-list>
     `
})
export class AppComponent { }