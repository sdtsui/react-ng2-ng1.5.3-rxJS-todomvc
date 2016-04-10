System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var todo, todos;
    return {
        setters:[],
        execute: function() {
            todo = function (state, action) {
                switch (action.type) {
                    case 'ADD_TODO':
                        return {
                            id: action.id,
                            text: action.text,
                            completed: false
                        };
                    case 'TOGGLE_TODO':
                        if (state.id !== action.id) {
                            return state;
                        }
                        return Object.assign({}, state, {
                            completed: !state.completed
                        });
                    default:
                        return state;
                }
            };
            todos = function (state, action) {
                if (state === void 0) { state = []; }
                switch (action.type) {
                    case 'ADD_TODO':
                        return state.concat([
                            todo(undefined, action)
                        ]);
                    case 'TOGGLE_TODO':
                        return state.map(function (t) {
                            return todo(t, action);
                        });
                    default:
                        return state;
                }
            };
            exports_1("default",todos);
        }
    }
});
//# sourceMappingURL=todos.js.map