var http  = require("http"),
    fs = require("fs");

http.createServer(function(req, res){
    if (req.url.indexOf("favicon.ico") > 0){ return; }
    fs.readFile("./index.html", function(err, html){
        var html_string = html.toString();
        var arreglo_parametros = [], parametros = {};
        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        if(req.url.indexOf("?") > 0){
            // Separando los datos de la url
            // /?nombre=Jesus
            // [/][nombre=jesus]
            var url_data = req.url.split("?");
            // en caso de tener varios parametros
            //[/][nombre=Jesus, otra=parametro]
            arreglo_parametros = url_data[1].split("&");
        }

        for (var i = arreglo_parametros.length -1; i >= 0; i--){
            // Nombre=Jesus
            var parametro = arreglo_parametros[i];
            // [nombre,Jesus]
            var param_data = parametro.split("=");
            // {nombre: Jesus}
            parametros[param_data[0]] = param_data[1];

        }

        for (var i = variables.length -1; i >= 0; i --) {

            html_string = html_string.replace("{"+variables[i]+"}", parametros[variables[i]]);
        };
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8080);
