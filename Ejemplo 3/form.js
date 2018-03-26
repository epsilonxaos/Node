var http  = require("http"),
    fs = require("fs"),
    parser = require("./modulos/params_parse.js"),
    rendere = require("./modulos/render_view.js");

var p = parser.parse;
var re = rendere.renderizar;

http.createServer(function(req, res){
    if (req.url.indexOf("favicon.ico") > 0){ return; }
    fs.readFile("./index.html", function(err, html){

        var parametros = p(req);

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(re(html.toString(), parametros));
        res.end();
    });
}).listen(8080);
