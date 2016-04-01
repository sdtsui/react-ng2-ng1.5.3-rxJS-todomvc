System.register(['angular2/core', './todoList'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todoList_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todoList_1_1) {
                todoList_1 = todoList_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                // todoStore: Array<{}>;
                function AppComponent() {
                    // this.todoStore = todoStore;
                    console.log("todoStore :", []);
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [todoList_1.TodoList],
                        templateUrl: 'app/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// export class Todo {
//   completed: Boolean;
//   editing: Boolean;
//   private _title: String;
//   get title() {
//     return this._title;
//   }
//   set title(value: String) {
//     this._title = value.trim();
//   }
//   constructor(title: String) {
//     this.completed = false;
//     this.editing = false;
//     this.title = title.trim();
//   }
// }
// var DEFAULT_TODOS = [
//   new Todo("FRP Things"),
//   new Todo("Sleep")
// ] 
//# sourceMappingURL=app.component.js.map