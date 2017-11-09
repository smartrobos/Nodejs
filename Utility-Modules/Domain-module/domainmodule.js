// Import events and domain.
var events = require("events");
var domain = require("domain");
//-----------------------------------An example of the Explicit binding.
var emitter1st = new events.EventEmitter();
// Create a domain 1st
var domain1st = domain.create();
domain1st.on('error', function (err) {
  console.log("domain1 handled this error (" + err.message + ")");
});
domain1st.add(emitter1st);
emitter1st.on('error', function (err) {
  console.log("The listener will handle this error (" + err.message + ")");
});
emitter1st.emit('error', new Error('It is to be handled by the listener'));
emitter1st.removeAllListeners('error');
emitter1st.emit('error', new Error('It is to be handled by the 1st domain'));
domain1st.remove(emitter1st);
emitter1st.emit('error', new Error('It is converted to exception. Therefore the system will crash.'));
//------------------------------------An example of the Implicit binding.
var domain2nd = domain.create();
domain2nd.on('error', function (err) {
  console.log("2nd domain will handle this error (" + err.message + ")");
});
domain2nd.run(function () {
  var emitter2nd = new events.EventEmitter();
  emitter2nd.emit('error', new Error('It is to be handled by the 2nd domain'));
});
