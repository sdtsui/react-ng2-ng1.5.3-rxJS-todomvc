declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

import { todoApp } from './reducers';

console.log("todoApp in boot : ", todoApp);

import ng2_redux = require('ng2-redux');
const provider = ng2_redux.provider;
console.log("provider in boot:", provider);
import {createStore, applyMiddleware, compose} from 'redux';

const store = createStore(
  todoApp, //reducer
  {} //initialState
 );

// Original Bootstrap Imports: 

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

console.log("store, before bootstrap : ", store);
bootstrap(
  AppComponent,
  [provider(store)]
);

