//global

// Okay. Observables will work.
var todos = [];
setInterval(function () {
  todos.push({});
}, 1000);

angular.module('todomvc')
  .factory('todoStorage', function ($http, $injector) {
    'use strict';
    return {
      todos: todos,
      intent: {},
      numTodos: todos.length
    }
  })