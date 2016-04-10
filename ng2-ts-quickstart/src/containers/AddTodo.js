System.register(['react-redux', '../actions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var react_redux_1, actions_1;
    var AddTodo;
    return {
        setters:[
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (actions_1_1) {
                actions_1 = actions_1_1;
            }],
        execute: function() {
            AddTodo = function (_a) {
                var dispatch = _a.dispatch;
                var input;
                return onSubmit = {
                    e: function () {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return;
                        }
                        dispatch(actions_1.addTodo(input.value));
                        input.value = '';
                    }
                } >
                    ref;
                {
                    (function (node) {
                        input = node;
                    });
                }
                />
                    < button;
                type = "submit" >
                    Add;
                Todo
                    < /button>
                    < /form>
                    < /div>;
            };
            AddTodo = react_redux_1.connect()(AddTodo);
            exports_1("default",AddTodo);
        }
    }
});
//# sourceMappingURL=AddTodo.js.map