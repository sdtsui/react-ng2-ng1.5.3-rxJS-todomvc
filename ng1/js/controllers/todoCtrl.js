/*global angular */
/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('todomvc')
  .controller('TodoCtrl', function TodoCtrl($scope, observeOnScope, $routeParams, $filter, store) {
    'use strict';
    var todos = $scope.todos = __appState.todos;
    $scope.todos = __appState.todos;
    var intent = store.Intent;

    $scope.newTodo = '';
    $scope.editedTodo = null;

    Observable.subscribe((appState) => {
      appState.Intent = Intent;
      $scope.todos = appState.todos;
      __appState = appState;
      console.log("___in Controller :  new todos: ", $scope.todos);
    });

    $scope.$watchCollection('todos', function () {
      console.log("dirty assign :::");
      $scope.todos = __appState.todos;

      $scope.remainingCount = $filter('filter')($scope.todos, { completed: false }).length;
      console.log('length :', $scope.todos.length);
      console.log('scope remaining :', $scope.remainingCount);
      $scope.completedCount = $scope.todos.length - $scope.remainingCount;
      $scope.allChecked = !$scope.remainingCount;
    }, true);

    // Monitor the current route for changes and adjust the filter accordingly.
    $scope.$on('$routeChangeSuccess', function () {
      var status = $scope.status = $routeParams.status || '';
      $scope.statusFilter = (status === 'active') ?
        { completed: false } : (status === 'completed') ?
        { completed: true } : {};
    });

    $scope.addTodo = function () {
      var newText = $scope.newTodo.trim();
      console.log("___addTod Invoked :", newText);

      if (!newText) {
        return;
      }
      $scope.saving = true;

      // $scope.$digest();
      intent.add(newText);
      // $scope.todos.push($scope.todos.pop());
      // $scope.$apply();
      $scope.newTodo = '';
      $scope.saving = false;
      // $scope.$watchCollection('todos', function () {
      //   console.log("COLLECTION CHANGED inside add ", store);
      //   console.log("Inside watchCollection : ", $scope.todos);
      //   todos = $scope.todos;
      //   $scope.todos = $scope.todos;

      //   $scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
      //   $scope.completedCount = todos.length - $scope.remainingCount;
      //   $scope.allChecked = !$scope.remainingCount;
      // }, true);

    };

    $scope.editTodo = function (todo) {
      console.log("edit todo:", todo);
      $scope.editedTodo = todo;
      // Clone the original todo to restore it on demand.
      $scope.originalTodo = angular.extend({}, todo);
    };

    $scope.saveEdits = function (todo, event) {
      console.log("saveEdits : ", todo, event);
      intent.edit(todo.id, todo.text);
    };

    $scope.revertEdits = function (todo) {
      console.log("THIS SHOULD NEVER GET CALLED :", todo);
    };

    $scope.removeTodo = function (todo) {
      console.log("removeTodo :", todo);
      intent.del(todo.id);
    };

    $scope.saveTodo = function (todo) {
      console.log("THIS SHOULD NEVER GET CALLED : saveTodo", todo);
    };

    $scope.toggleCompleted = function (todo, completed) {
      console.log("calling Complete Once", todo, completed);
      intent.complete(todo.id);
    };

    $scope.clearCompletedTodos = function () {
      intent.clearCompleted();
    };

    $scope.markAll = function (completed) {
      intent.completeAll();
    };
  });
