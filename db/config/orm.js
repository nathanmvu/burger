// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: (cb) => {
    connection.query('SELECT * FROM burgers', function(err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  
  insertOne: (vals, cb) => {
    let burgerStr = `INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)`
    connection.query(burgerStr, vals, function(err, res) {
      if (err) throw err;
      cb(res);
    })
  },
  
  updateOne: (id, cb) => {
    let burgerStr = `UPDATE burgers SET devoured=true WHERE id = ?`;
    connection.query(burgerStr, [id], function(err, res) {
      if (err) throw err;
      cb(res);
    })
  }
}

// Export the orm object for the model (cat.js).
module.exports = orm;
