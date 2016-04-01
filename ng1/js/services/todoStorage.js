//global
angular.module('todomvc')
  .factory('todoStorage', function ($http, $injector) {
    'use strict';
    console.log("todoStorage returning __appState", __appState);
    return __appState;
  })