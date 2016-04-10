System.register(['angular2/platform/browser', './components/App.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, App_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (App_component_1_1) {
                App_component_1 = App_component_1_1;
            }],
        execute: function() {
            // import {createStore, applyMiddleware, compose} from './node_modules/redux/index.d.ts';
            // console.log('compose :', compose);
            // import store from './store/index';
            // console.log('store :', store);
            browser_1.bootstrap(App_component_1.AppComponent);
        }
    }
});
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
//# sourceMappingURL=main.js.map