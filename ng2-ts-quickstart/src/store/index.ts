import {createStore, applyMiddleware, compose} from 'redux';
import todoApp from '../reducers/index'
let store = createStore(todoApp)
console.log('store :', store);
export default store;
