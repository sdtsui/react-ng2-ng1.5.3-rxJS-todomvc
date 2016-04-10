System.register(['react-redux', '../actions', '../components/Link'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var react_redux_1, actions_1, Link_1;
    var mapStateToProps, mapDispatchToProps, FilterLink;
    return {
        setters:[
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (actions_1_1) {
                actions_1 = actions_1_1;
            },
            function (Link_1_1) {
                Link_1 = Link_1_1;
            }],
        execute: function() {
            mapStateToProps = function (state, ownProps) {
                return {
                    active: ownProps.filter === state.visibilityFilter
                };
            };
            mapDispatchToProps = function (dispatch, ownProps) {
                return {
                    onClick: function () {
                        dispatch(actions_1.setVisibilityFilter(ownProps.filter));
                    }
                };
            };
            FilterLink = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Link_1.default);
            exports_1("default",FilterLink);
        }
    }
});
//# sourceMappingURL=FilterLink.js.map