import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import TodoItem from './todoItem.ts';
console.log("HI todoList");

var TODOS = [
  {
    content: 'Discuss new feature',
    isCompleted: false
  },
  {
    content: 'Fix issue',
    isCompleted: false
  }
]

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo-item *ng-for="#todo of todos" [todo]="todo"></todo-item>
    </ul>
  `,
  directives: [CORE_DIRECTIVES, TodoItem]
})
export default class TodoList {
  public todos: Array<any>;
  constructor() {
    this.todos = TODOS;
  }
}