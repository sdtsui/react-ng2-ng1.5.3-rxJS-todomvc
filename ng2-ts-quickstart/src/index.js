System.register(['angular2/platform/browser', './components/App.component', 'babel-polyfill', 'redux', './reducers/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, App_component_1, redux_1, index_1;
    var store;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (App_component_1_1) {
                App_component_1 = App_component_1_1;
            },
            function (_1) {},
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            console.log("BOOTSTRAPPING IMPORT :");
            console.log("bootstrap imported :", browser_1.bootstrap, App_component_1.AppComponent);
            browser_1.bootstrap(App_component_1.AppComponent);
            // import App from './components/App'
            store = redux_1.createStore(index_1.default);
            console.log('new store :', store);
        }
    }
});
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
//# sourceMappingURL=index.js.map