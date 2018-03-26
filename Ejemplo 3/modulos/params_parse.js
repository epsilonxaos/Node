function parse (req){
    var arreglo_parametros = [], parametros = {};

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

    return parametros;
}

module.exports.parse = parse;