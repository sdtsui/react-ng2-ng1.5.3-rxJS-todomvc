declare var require: any
console.log("require", require);
import provider = require('ng2-redux').provider;

import {Component} from 'angular2/core';
// import {createStore, applyMiddleware, compose} from 'redux';
// console.log('createStore:', createStore);
// import { provider } from 'ng2-redux';
// console.log("provider", provider);
// const provider = require('ng2-redux').provider;
// const provider = require('ng2-redux').provider;
// const store = configureStore({});

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>`
})

export class AppComponent { }
//reducers go into this folder.