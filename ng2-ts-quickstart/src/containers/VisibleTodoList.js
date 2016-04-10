System.register(['react-redux', '../actions', '../components/TodoList'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var react_redux_1, actions_1, TodoList_1;
    var getVisibleTodos, mapStateToProps, mapDispatchToProps, VisibleTodoList;
    return {
        setters:[
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (actions_1_1) {
                actions_1 = actions_1_1;
            },
            function (TodoList_1_1) {
                TodoList_1 = TodoList_1_1;
            }],
        execute: function() {
            getVisibleTodos = function (todos, filter) {
                switch (filter) {
                    case 'SHOW_ALL':
                        return todos;
                    case 'SHOW_COMPLETED':
                        return todos.filter(function (t) { return t.completed; });
                    case 'SHOW_ACTIVE':
                        return todos.filter(function (t) { return !t.completed; });
                }
            };
            mapStateToProps = function (state) {
                return {
                    todos: getVisibleTodos(state.todos, state.visibilityFilter)
                };
            };
            mapDispatchToProps = function (dispatch) {
                return {
                    onTodoClick: function (id) {
                        dispatch(actions_1.toggleTodo(id));
                    }
                };
            };
            VisibleTodoList = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TodoList_1.default);
            exports_1("default",VisibleTodoList);
        }
    }
});
//# sourceMappingURL=VisibleTodoList.js.map