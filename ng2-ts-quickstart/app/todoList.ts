import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
//don't need to import TodoItem? 
// import TodoItem from './todoItem';


// @Component({
//   selector: 'todo-list',
//   template: `<ul>hi</ul>`
// })
// export class TodoList { }
export class Todo {
  completed: Boolean;
  editing: Boolean;

  private _title: String;
  get title() {
    return this._title;
  }
  set title(value: String) {
    this._title = value.trim();
  }

  constructor(title: String) {
    this.completed = false;
    this.editing = false;
    this.title = title.trim();
  }
}

var TODOS = [
  new Todo("FRP Things"),
  new Todo("Sleep")
]

@Component({
  selector: 'todo-list',
  directives: [CORE_DIRECTIVES],
  template: `
    <ul>hi</ul>
    <div *ngFor="#todo of todos">
      <label>
        {{todo.title}}
      </label>
    </div>
  `
})
export class TodoList {
  todos: Array<Todo>;

  constructor() {
    this.todos = TODOS;
  }

}


// template: `
//   <ul>
//     <todo-item *ng-for="#todo of todos" [todo]="todo"></todo-item>
//   </ul>
// `


// [todo]="todo" -- what does  this do?