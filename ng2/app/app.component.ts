import {Component} from 'angular2/core';
import {createStore, applyMiddleware, compose} from 'redux';
console.log('createStore:', createStore);
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>`
})

export class AppComponent { }
