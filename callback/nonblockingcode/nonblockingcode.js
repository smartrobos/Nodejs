var fs = require("fs");
console.log(Date(), "Asynchronous method file read about to start")
fs.readFile('../input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log(Date(), "Did not wait for complete file read operation");
