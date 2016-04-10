console.log("BOOTSTRAPPING IMPORT :");

import {bootstrap}    from 'angular2/platform/browser';
console.log("bootstrap imported :", bootstrap, AppComponent);
import {AppComponent} from './components/App.component';
bootstrap(AppComponent);

import 'babel-polyfill'
import { createStore } from 'redux'
import todoApp from './reducers/index'
// import App from './components/App'
let store = createStore(todoApp)
console.log('new store :', store);
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
