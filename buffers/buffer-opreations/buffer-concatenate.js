var buffer1 = new Buffer('Hello ');
var buffer2 = new Buffer('to the World of Node.js');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 content are: " + buffer3.toString())
