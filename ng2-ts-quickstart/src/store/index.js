System.register(['redux', '../reducers/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var redux_1, index_1;
    var store;
    return {
        setters:[
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            store = redux_1.createStore(index_1.default);
            console.log('store :', store);
            exports_1("default",store);
        }
    }
});
//# sourceMappingURL=index.js.map