var mysql = require("mysql");

function REST_ROUTER(router, connection, md5) {
  var self = this;
  self.handleRoutes(router, connection, md5);
}
REST_ROUTER.prototype.handleRoutes = function (router, connection, md5) {
  router.delete("/json/users/:id", function (req, res) {
    var query = "DELETE from ?? where ??=?";
    var table = ["employee_details", "id", req.params.id];
    query = mysql.format(query, table);
    connection.query(query, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": "Error executing MySQL query" + req.params.id });
      } else {
        res.json({ "Error": false, "Message": "Deleted the user with id " + req.params.id });
      }
    });
  });
}
