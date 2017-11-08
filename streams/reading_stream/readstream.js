var fs = require("fs");
var data = '';
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');
// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
    console.log(Date(), 'chunk received:' + chunk)
    data += chunk;
});
readerStream.on('end', function () {
    console.log("Read File:" + data);
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log(Date(), 'This is asynchronous.i did not wait to read complete data,it goes parallely');
