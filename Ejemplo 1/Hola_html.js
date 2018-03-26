// Leer un archivo con node
var http  = require("http"),
    fs = require("fs");

var html = fs.readFile("./index.html", function(error, html){
    http.createServer(function(req, res){
        //Parametros:
         // - StatusCode(200-ok, 400-No found, 300-el dato se movio, 500- error)
         // - StatusMesaage
         // - Header
        res.writeHead(200, {"Content-Type": "application/json"})
        // Imprimiendo un JSON
        res.write(JSON.stringify({nombre: "Jesus", username: "angelotr12"}));
        res.end();
    }).listen(8080);

});
