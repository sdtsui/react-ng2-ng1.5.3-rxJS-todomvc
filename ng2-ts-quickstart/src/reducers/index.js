System.register(['redux', './todos', './visibilityFilter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var redux_1, todos_1, visibilityFilter_1;
    var todoApp;
    return {
        setters:[
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (todos_1_1) {
                todos_1 = todos_1_1;
            },
            function (visibilityFilter_1_1) {
                visibilityFilter_1 = visibilityFilter_1_1;
            }],
        execute: function() {
            todoApp = redux_1.combineReducers({
                todos: todos_1.default,
                visibilityFilter: visibilityFilter_1.default
            });
            exports_1("default",todoApp);
        }
    }
});
//# sourceMappingURL=index.js.map