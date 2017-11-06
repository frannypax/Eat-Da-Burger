
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("views/public/js"));
app.use(express.static("views/public/css"));
app.use(express.static("views/public/img"));

app.use(bodyParser.urlencode({
	extended:false
}));
app.use(methodOverride("_method"));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


app.listen(PORT, function(){
	console.log("App listening on port: "+ PORT);
})


module.exports = app;