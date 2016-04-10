# udf-ee-todomvc

TodoMVC examples in React, Angular2 and Angular 1.5.
[TODO: Image, with Titles]()

### Notes: 

##### React: 

Data flow is unidirectional; uses an RxJS observable to handle events and state changes.  Model and Intent code could be cleaned up. Meets all requirements except for saving in localStorage. 

##### Angular1.5: 

Demo, for how RxJs can be used inside an Angular Controller. Uses the same data layer as React example above. 

##### Angular 2:

The [EventEmitter](https://angular.io/docs/js/latest/api/core/EventEmitter-class.html) API didn't seem ready.  I went for a fully functional TypeScript implementation with a deeper directive heirarchy structure than other examples.

### Inspiration:  
  - react-rxjs-flow by Justin Woo
  - Patrick Stapleton's work on Angular2
  - todoMVC angular2 example