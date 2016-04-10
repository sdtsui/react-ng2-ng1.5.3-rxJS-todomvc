import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/App.component';
// import {createStore, applyMiddleware, compose} from './node_modules/redux/index.d.ts';
// console.log('compose :', compose);
// import store from './store/index';
// console.log('store :', store);
bootstrap(AppComponent);


// console.log('createStore', createStore);
// import todoApp from '../reducers/index'
// let store = createStore(todoApp)
// console.log('new store :', store);
// 
// 
// Configure store like this :
// import { enableProdMode, provide } from 'angular2/core';
// import { bootstrap} from 'angular2/bootstrap';
// import { ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router';
// import configureStore from './store/configure-store';
// import { RioSampleApp } from './containers/sample-app';

// const provider = require('ng2-redux').provider;
// const store = configureStore({});
// declare let __PRODUCTION__: any;

// if (__PRODUCTION__) {
//   enableProdMode();
// }

// bootstrap(RioSampleApp, [
//   provider(store),
//   ROUTER_PROVIDERS,
//   provide(APP_BASE_HREF, { useValue: '/' })
// ]);
