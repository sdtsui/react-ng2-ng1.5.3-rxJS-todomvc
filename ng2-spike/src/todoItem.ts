console.log("HI todoItem");

import {Component} from 'angular2/angular2';
console.log("todoItem ng2 componeont :", Component);
@Component({
  selector: 'todo-item',
  properties: ['todo'],
  template: `
    <li class="todo-item">
      {{todo.content}}
    </li>
  `
})
export default class TodoItem {
}

console.log("TodoItem :", TodoItem);
