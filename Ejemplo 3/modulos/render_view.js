function renderizar (html, parametros){
    let variables = html.match(/[^\{\}]+(?=\})/g);
    
    for (var i = variables.length -1; i >= 0; i --) {

        html = html.replace("{"+variables[i]+"}", parametros[variables[i]]);
    };

    return html;
}

module.exports.renderizar = renderizar;