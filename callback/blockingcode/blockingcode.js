var fs = require("fs");
console.log("Synchronous method file read about to start");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");
