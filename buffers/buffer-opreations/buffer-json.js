var buffer = new Buffer('Hello World!');
var json = buffer.toJSON(buffer);
console.log(json);
