var orm = require('../db/config/orm.js');

var burgers =  {
  selectAll: function(cb) {
    orm.selectAll(cb);
  },
  create: function(vals, cb) {
    orm.insertOne(vals, cb);
  },
  devour: function(id, cb) {
    orm.updateOne(id, cb);
  } 
}

module.exports = burgers;