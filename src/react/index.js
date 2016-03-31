var Rx = require('rx');
var Model = require('../rx/model');
var React = require('react');
var TodoApp = require('./TodoApp');
import Intent from '../rx/intent';

// **since we're not filtering, we should just be able to use Model.subject, as it inherits Observable
var Observable = Model.subject.map(function (appState) {
  // Do Nothing for Now:
  return appState;
});

//react entrypoint
Observable.subscribe((appState) => {
  //TODO: clean up
  appState.Intent = Intent;

  React.render(
    <TodoApp {...appState}/>,
    document.getElementById('app')
  );
});