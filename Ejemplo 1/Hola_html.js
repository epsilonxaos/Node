// Leer un archivo con node
var http  = require("http"),
    fs = require("fs");

var html = fs.readFile("./index.html", function(error, html){
    http.createServer(function(req, res){
        res.write(html);
        res.end();
    }).listen(8080);

});
