/*global angular */
/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute', 'ngResource', 'rx'])
  .config(function ($routeProvider) {
    'use strict';
    var routeConfig = {
      controller: 'TodoCtrl',
      templateUrl: 'todomvc-index.html',
      resolve: {
        store: function (todoStorage) {
          return todoStorage;
        }
      }
    };
    $routeProvider
      .when('/', routeConfig)
      .when('/:status', routeConfig)
      .otherwise({
        redirectTo: '/'
      });
  });
