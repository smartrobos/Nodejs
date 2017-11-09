var mysql = require("mysql");

function REST_ROUTER(router, connection, md5) {
  var self = this;
  self.handleRoutes(router, connection, md5);
}
REST_ROUTER.prototype.handleRoutes = function (router, connection, md5) {
  router.get("/json/users", function (req, res) {
    var query = "SELECT * FROM ?? ORDER BY id ASC";
    var table = ["employee_details"];
    query = mysql.format(query, table);
    connection.query(query, function (err, rows) {
      if (err) {
        res.json({ "Error": true, "Message": "Error executing MySQL query" });
      } else {
        res.json({
          "Error": false,
          "Message": "Success - Got " + rows.length + " Records",
          "Users": rows,
        });
      }
    });
  });
}
