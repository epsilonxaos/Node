// Leer un archivo con node
var http  = require("http"),
    fs = require("fs");

fs.readFile("./index.html", function(error, html){
    http.createServer(function(req, res){
            var html_string = html.toString();

            var variables = html_string.match(/[^\{\}]+(?=\})/g);
            var nombre = "Prueba";

            //Variables [arreglo de strings]
            for (var i = variables.length - 1; i >= 0; i--) {
                var value = eval(variables[i]);

                html_string = html_string.replace("{"+variables[i]+"}",value);
            }

            res.writeHead(200, {"Content-Type": "text/html"})
            // Imprimiendo un JSON
            res.write(html_string);
            res.end();
        }).listen(8080);

    });
