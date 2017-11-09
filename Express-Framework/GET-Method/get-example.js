var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/get-example.html', function (req, res) {
  res.sendFile(__dirname + "/" + "get-example.html");
})
app.get('/process_get', function (req, res) {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})
var server = app.listen(8000, function () {

  var host = '127.0.0.1';
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})  
