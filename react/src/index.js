var Rx = require('rx');
var Model = require('./model');
import Intent from './intent';

var Observable = Model.subject.map(function (appState) {
  // Do Nothing for Now:
  return appState;
});


// ***** React Implementation *****
var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('./react/TodoApp');

//react entrypoint
Observable.subscribe((appState) => {
  appState.Intent = Intent;

  console.log("appState:", appState);
  ReactDOM.render(
    <TodoApp {...appState}/>,
    document.getElementById('app')
  );
});


// ***** Angular 1.5.3 Implementation *****




// ***** Angular 2 Implementation *****
