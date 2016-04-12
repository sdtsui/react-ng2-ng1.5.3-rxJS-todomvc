declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
console.log("require", require);
import provider = require('ng2-redux').provider;
console.log("provider :", provider);;
import _ = require('lodash');





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