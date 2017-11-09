var mysql = require("mysql");

function REST_ROUTER(router, connection, md5) {
  var self = this;
  self.handleRoutes(router, connection, md5);
}
REST_ROUTER.prototype.handleRoutes = function (router, connection, md5) {
    router.get("/json/users/:id", function (req, res) {
      var query = "SELECT * FROM ?? WHERE ??=?";
      var table = ["employee_details", "id", req.params.id];
      query = mysql.format(query, table);
      connection.query(query, function (err, rows) {
        if (err) {
          res.json({ "Error": true, "Message": "Error executing MySQL query" });
        } else {
          res.json({
            "Error": false,
            "Message": "Success - Got " + rows.length + " Records",
            "users": rows[0],
          });
        }
      });
    });
