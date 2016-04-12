declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

import { addTodo } from './actions';
import { Component } from 'angular2/core';
console.log("addTodo", addTodo);

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>`
})

export class AppComponent { 

}
//reducers go into this folder.