var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Welcome to SmartCodeLab!');
});
app.get('/help', function (req, res) {
  res.send('How can I help You?');
});
var server = app.listen(8000, function () {
  var host = '127.0.0.1'
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})  
