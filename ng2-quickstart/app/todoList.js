System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var Todo, TODOS, TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            //don't need to import TodoItem? 
            // import TodoItem from './todoItem';
            // @Component({
            //   selector: 'todo-list',
            //   template: `<ul>hi</ul>`
            // })
            // export class TodoList { }
            Todo = (function () {
                function Todo(title) {
                    this.completed = false;
                    this.editing = false;
                    this.title = title.trim();
                }
                Object.defineProperty(Todo.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    set: function (value) {
                        this._title = value.trim();
                    },
                    enumerable: true,
                    configurable: true
                });
                return Todo;
            }());
            exports_1("Todo", Todo);
            TODOS = [
                new Todo("FRP Things"),
                new Todo("Sleep")
            ];
            TodoList = (function () {
                function TodoList() {
                    this.todos = TODOS;
                }
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "\n    <ul>hi</ul>\n    <div *ngFor=\"#todo of todos\">\n      <label>\n        {{todo.title}}\n      </label>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoList);
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});
// template: `
//   <ul>
//     <todo-item *ng-for="#todo of todos" [todo]="todo"></todo-item>
//   </ul>
// `
// [todo]="todo" -- what does  this do? 
//# sourceMappingURL=todoList.js.map