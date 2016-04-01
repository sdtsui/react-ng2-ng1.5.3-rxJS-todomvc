import {Component} from 'angular2/core';
import {TodoList} from './todoList'

@Component({
    selector: 'my-app',
    directives: [TodoList],
    templateUrl: 'app/app.html'
})
export class AppComponent { }