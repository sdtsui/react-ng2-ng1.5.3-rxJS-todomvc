declare var require: {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
import todoApp from './reducers';
import provider = require('ng2-redux').provider;
import {createStore, applyMiddleware, compose} from 'redux';

const store = createStore(
  todoApp, //reducer
  {}
 );

// Original Bootstrap Imports: 

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(
  AppComponent,
  [provider(store)]
);

