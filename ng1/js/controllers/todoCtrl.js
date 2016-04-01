/*global angular */
/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */
angular.module('todomvc')
  .controller('TodoCtrl', function TodoCtrl($scope, $routeParams, $filter, store) {
    'use strict';

    var todos = $scope.todos = store.todos;
    console.log("todos ", todos);
    console.log("scope todos ", $scope.todos);
    console.log("store todos ", store.todos);

    var intent = store.Intent;
    console.log("todos in controller :", todos);

    $scope.newTodo = '';
    $scope.editedTodo = null;

    $scope.$watchCollection('todos', function () {
      console.log("COLLECTION CHANGED in bootstrap ");
      $scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
      $scope.completedCount = todos.length - $scope.remainingCount;
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
      $scope.$watchCollection('todos', function () {
        console.log("COLLECTION CHANGED inside add ", store);
        todos = store.todos;
        $scope.todos = store.todos;

        $scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
        $scope.completedCount = todos.length - $scope.remainingCount;
        $scope.allChecked = !$scope.remainingCount;
      }, true);

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
      // Blur events are automatically triggered after the form submit event.
      // This does some unfortunate logic handling to prevent saving twice.
      // if (event === 'blur' && $scope.saveEvent === 'submit') {
      //   $scope.saveEvent = null;
      //   return;
      // }

      // $scope.saveEvent = event;

      // if ($scope.reverted) {
      //   // Todo edits were reverted-- don't save.
      //   $scope.reverted = null;
      //   return;
      // }

      // todo.title = todo.title.trim();

      // if (todo.title === $scope.originalTodo.title) {
      //   $scope.editedTodo = null;
      //   return;
      // }

      // store[todo.title ? 'put' : 'delete'](todo)
      //   .then(function success() {}, function error() {
      //     todo.title = $scope.originalTodo.title;
      //   })
      //   .finally(function () {
      //     $scope.editedTodo = null;
      //   });
    };

    $scope.revertEdits = function (todo) {
      console.log("revertEdits :", todo);
      // todos[todos.indexOf(todo)] = $scope.originalTodo;
      // $scope.editedTodo = null;
      // $scope.originalTodo = null;
      // $scope.reverted = true;
    };

    $scope.removeTodo = function (todo) {
      console.log("removeTodo :", todo);
      intent.del(todo.id);
      // store.delete(todo);
    };

    $scope.saveTodo = function (todo) {
      console.log("saveTodo :", todo);
      // store.put(todo);
    };

    $scope.toggleCompleted = function (todo, completed) {
      console.log("toggleCompleted :", todo, completed);
      // if (angular.isDefined(completed)) {
      //   todo.completed = completed;
      // }
      // store.put(todo, todos.indexOf(todo))
      //   .then(function success() {}, function error() {
      //     todo.completed = !todo.completed;
      //   });
    };

    $scope.clearCompletedTodos = function () {
      console.log("clearCompleted!!");

      // store.clearCompleted();
    };

    $scope.markAll = function (completed) {
      console.log("markAll : ", completed);
      // todos.forEach(function (todo) {
      //   if (todo.completed !== completed) {
      //     $scope.toggleCompleted(todo, completed);
      //   }
      // });
    };
  });
