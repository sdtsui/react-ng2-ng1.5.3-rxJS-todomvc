import {Component} from 'angular2/core';

@Component({
  selector: 'todo-item',
  properties: ['todo'],
  template: `
    <li class="todo-item">
      {{todo.content}}
    </li>
  `
})
export class TodoItem { }