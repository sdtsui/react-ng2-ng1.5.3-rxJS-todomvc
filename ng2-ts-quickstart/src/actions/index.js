System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var nextTodoId, addTodo, setVisibilityFilter, toggleTodo;
    return {
        setters:[],
        execute: function() {
            nextTodoId = 0;
            exports_1("addTodo", addTodo = function (text) {
                return {
                    type: 'ADD_TODO',
                    id: nextTodoId++,
                    text: text
                };
            });
            exports_1("setVisibilityFilter", setVisibilityFilter = function (filter) {
                return {
                    type: 'SET_VISIBILITY_FILTER',
                    filter: filter
                };
            });
            exports_1("toggleTodo", toggleTodo = function (id) {
                return {
                    type: 'TOGGLE_TODO',
                    id: id
                };
            });
        }
    }
});
//# sourceMappingURL=index.js.map