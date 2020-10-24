var express = require("express");
var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
})

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burger.create([
    req.body.burger_name, false
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.devour(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  burger.delete(req.params.id, function(result) {
    if (result.affectedRows == 1) {
      res.status(200).end();
    } else {
      return res.status(404).end();
    }
  });
});

module.exports = router;


