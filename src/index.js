var Rx = require('rx');
var Model = require('./model');
var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('./react/TodoApp');
import Intent from './intent';

// **since we're not filtering, we should just be able to use Model.subject, as it inherits Observable
var Observable = Model.subject.map(function (appState) {
  // Do Nothing for Now:
  return appState;
});

//react entrypoint
Observable.subscribe((appState) => {
  //TODO: clean up
  appState.Intent = Intent;

  ReactDOM.render(
    <TodoApp {...appState}/>,
    document.getElementById('app')
  );
});
