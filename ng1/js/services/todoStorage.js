//global




angular.module('todomvc')
  .factory('todoStorage', function ($http, $injector) {
    'use strict';
    return {
      todos: [],
      intent: {}
    }
  })