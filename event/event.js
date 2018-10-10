var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1(a) {
   console.log('listner1 executed with arg: ' + a);
}

// listener #2
var listner2 = function listner2(a) {
  console.log('listner2 executed with arg: ' + a);
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection',listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection','arg1');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection','arg2');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");