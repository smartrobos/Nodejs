// Import the events module
var eventsInstance = require('events');
// Create an eventEmitter instance
var eventEmitter = new eventsInstance.EventEmitter();
// Create an event handler as follows
var customer = function (name) {
    // do something
    console.log('Customer Name: ' + name);
};
// Bind the event with the handler
eventEmitter.on('customer', customer);
eventEmitter.on('message', function (msg) {
    // do something
    console.log('message: ' + msg);
});
// Fire the events
eventEmitter.emit('customer', 'Ram');
eventEmitter.emit('customer', 'Rahim');
eventEmitter.emit('message', 'this is the first message');
eventEmitter.emit('message', 'this is the second message');
eventEmitter.emit('message', 'welcome to nodejs');
