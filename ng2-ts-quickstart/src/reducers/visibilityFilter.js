System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var visibilityFilter;
    return {
        setters:[],
        execute: function() {
            visibilityFilter = function (state, action) {
                if (state === void 0) { state = 'SHOW_ALL'; }
                switch (action.type) {
                    case 'SET_VISIBILITY_FILTER':
                        return action.filter;
                    default:
                        return state;
                }
            };
            exports_1("default",visibilityFilter);
        }
    }
});
//# sourceMappingURL=visibilityFilter.js.map