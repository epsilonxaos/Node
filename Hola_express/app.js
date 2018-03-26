var express = require("express");

var app = express();

app.set("view engine", "pug");

app.get("/", function(req, res){
    res.render("index", {hola: "Hola Jesus"})
})

app.listen(8080);