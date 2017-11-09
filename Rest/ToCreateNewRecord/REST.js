var mysql = require("mysql");

function REST_ROUTER(router, connection, md5) {
  var self = this;
  self.handleRoutes(router, connection, md5);
}
REST_ROUTER.prototype.handleRoutes = function (router, connection, md5) {
  router.post("/json/signup", function (req, res) {
    var query = "INSERT INTO ?? (??,??,??,??) VALUES (?,?,?,?)";
    var table = ["employee_details", "name", "location", "salary", "email", req.body.name, req.body.location, req.body.salary, req.body.email];
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
}
