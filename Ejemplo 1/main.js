var http = require("http");

var manejador = function(solicitud, respuesta){
    console.log("Pudimos mandar una solicitud");
    respuesta.end("Hola mundo");
}

var servidor = http.createServer(manejador);
servidor.listen(8080);
