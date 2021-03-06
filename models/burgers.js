var orm = require('../config/orm.js');

var burgers =  {
  selectAll: function(cb) {
    orm.selectAll(cb);
  },
  create: function(vals, cb) {
    orm.insertOne(vals, cb);
  },
  devour: function(id, cb) {
    orm.updateOne(id, cb);
  },
  delete: function(id, cb) {
    orm.delete(id, cb);
  } 
}

module.exports = burgers;