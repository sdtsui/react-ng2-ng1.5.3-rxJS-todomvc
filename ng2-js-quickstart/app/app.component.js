(function(app) {
  app.TodoItemComponent = 
    ng.core.Component({
      selector: 'todo-item',
      templateUrl: './app/todoItem.html'
    })
    .Class({
      constructor: function() {}
    });


  app.TodoListComponent = 
    ng.core.Component({
      selector: 'todo-list',
      directives: [app.TodoItemComponent],
      templateUrl: './app/todoList.html'
    })
    .Class({
      constructor: function() {}
    });

  app.AppComponent =
    ng.core.Component({
      selector: 'todo-app',
      directives: [app.TodoListComponent],
      templateUrl: './app/todoApp.html'
    })
    .Class({
      constructor: function() {}
    });


})(window.app || (window.app = {}));