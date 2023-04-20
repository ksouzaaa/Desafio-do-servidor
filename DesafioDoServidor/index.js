const http = require('http');
var url = require('url');
var fs = require('fs');


// Função para ler o arquivo
function readFile(response, file) {
    fs.readFile(file, function(err, data) {
        response.end(data)
    })
}

var callback = function (request, response){
    response.writeHead(200, {'Content-type': "text/html"});

    var parts = url.parse(request.url);
    var path = parts.path;

    if (parts.path == "/"){
        readFile(response, 'views/index.html')
    } 
    else if (parts.path == "/contatos"){
        readFile(response, 'views/contato.html')
    } 
    else if (parts.path == "/produtos"){
        readFile(response, 'views/produto.html')
    } 
    else if (parts.path == "/catalogos"){
        readFile(response, 'views/catalogo.html')
    } 
    else if (parts.path == "/abertura/tipoDocx"){
        response.writeHead(200, {'Content-type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});
        readFile(response, 'recursos/arquivo.docx')
    } 
    else if (parts.path == "/abertura/tipoJpeg"){
        response.writeHead(200, {'Content-type': "image/jpeg"});
        readFile(response, 'recursos/arquivo.jpeg')
    } 
    else if (parts.path == "/abertura/tipoJson"){
        response.writeHead(200, {'Content-type': "application/json"});
        readFile(response, 'recursos/arquivo.json')
    } 
    else if (parts.path == "/abertura/tipoMd"){
        response.writeHead(200, {'Content-type': "text/markdown"});
        readFile(response, 'recursos/arquivo.md')
    } 
    else if (parts.path == "/abertura/tipoMp3"){
        response.writeHead(200, {'Content-type': "audio/mpeg"});
        readFile(response, 'recursos/arquivo.mp3')
    } 
    else if (parts.path == "/abertura/tipoMp4"){
        response.writeHead(200, {'Content-type': "video/mp4"});
        readFile(response, 'recursos/arquivo.mp4')
    } 
    else if (parts.path == "/abertura/tipoPdf"){
        response.writeHead(200, {'Content-type': "application/pdf"});
        readFile(response, 'recursos/arquivo.pdf')
    } 
    else {
        readFile(response, 'views/404.html')
    }
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/");