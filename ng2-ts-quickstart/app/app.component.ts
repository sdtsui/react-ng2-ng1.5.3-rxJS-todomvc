import {Component} from 'angular2/core';
import {TodoList} from './todoList'
import * as Intent from './intent.js';

@Component({
    selector: 'my-app',
    directives: [TodoList],
    templateUrl: 'app/app.html'
})
export class AppComponent { 
  // todoStore: Array<{}>;

  constructor() {
    // this.todoStore = todoStore;
    console.log("todoStore :", []);
  }

  // stopEditing(todo: Todo, editedTitle: string) {
  //   todo.title = editedTitle;
  //   todo.editing = false;
  // }

  // cancelEditingTodo(todo: Todo) {
  //   todo.editing = false;
  // }

  // updateEditingTodo(todo: Todo, editedTitle: string) {
  //   editedTitle = editedTitle.trim();
  //   todo.editing = false;

  //   if (editedTitle.length === 0) {
  //     return this.todoStore.remove(todo);
  //   }

  //   todo.title = editedTitle;
  // }

  // editTodo(todo: Todo) {
  //   todo.editing = true;
  // }

  // removeCompleted() {
  //   this.todoStore.removeCompleted();
  // }

  // toggleCompletion(todo: Todo) {
  //   this.todoStore.toggleCompletion(todo);
  // }

  // remove(todo: Todo){
  //   this.todoStore.remove(todo);
  // }

  // addTodo() {
  //   if (this.newTodoText.trim().length) {
  //     this.todoStore.add(this.newTodoText);
  //     this.newTodoText = '';
  //   }
  // }

}


// export class Todo {
//   completed: Boolean;
//   editing: Boolean;

//   private _title: String;
//   get title() {
//     return this._title;
//   }
//   set title(value: String) {
//     this._title = value.trim();
//   }

//   constructor(title: String) {
//     this.completed = false;
//     this.editing = false;
//     this.title = title.trim();
//   }
// }

// var DEFAULT_TODOS = [
//   new Todo("FRP Things"),
//   new Todo("Sleep")
// ]