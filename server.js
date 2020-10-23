var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
 
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');