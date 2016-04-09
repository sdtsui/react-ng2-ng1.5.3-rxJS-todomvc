(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("App:", app);
    ng.platform.browser.bootstrap(app.AppComponent);
    ng.platform.browser.bootstrap(app.TodoListComponent);
    ng.platform.browser.bootstrap(app.TodoItemComponent);
    console.log("rx:", Rx);
  });
})(window.app || (window.app = {}));