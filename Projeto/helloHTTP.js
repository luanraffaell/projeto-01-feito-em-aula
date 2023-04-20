
//Importar a biblioteca que use o protocolo http E URL
const http = require('http')
const url = require('url')
const fs = require('fs')

// Montar o server
// var server = http.createServer(function(request,response){
//     //response.writeHead(200, {"Content-type" : "text/html"} )
//     response.writeHead(200, {"Content-type" : "text/plain"} )
//     response.end("Ola Mundo Node da Cruzeiro")
// });

// // Configurar a porta que será utilizada
// server.listen(3000)


// // Mostrar mensagem no temrinal para indicar status do web server
// console.log("[STATUS - ok]... Servidor montado em http://localhost:3000")

// var callback = function(request,response){
//     response.writeHead(200, {"Content-type" : "text/html"} )
//     response.end("Unicsul - Aula com Node.js")
// }

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data)
    })
}

var callback = function(request,response){
    response.writeHead(200, {"Content-type" : "text/plain"} )
    
    var parts = url.parse(request.url);
    var path = parts.path

    if(parts.path == "/"){
        response.end("Quero abrir SiteBatata.html")
    }else if(parts.path == "/rota1"){
        response.writeHead(200, {"Content-type" : "application/pdf"} )
        readFile(response,"arquivo1.pdf")

    }else if(parts.path == "/rota2"){
        response.writeHead(200, {"Content-type" : "application/json"} )
        readFile(response, "arquivo2.json") 

    }else if(parts.path == "/rota3"){
        response.writeHead(200, {"Content-type" : "image/png"} )
        readFile(response,"arquivo3.png") 

    }
    else if(parts.path == "/rota4"){
        response.writeHead(200, {"Content-type" : "application/zip"} )
        readFile(response,"arquivo.zip")

    }
    else if(parts.path == "/rota5"){
        response.writeHead(200, {"Content-type" : "text/html"} )
        readFile(response,"Geradores.html")

    }
    else if(parts.path == "/rota6"){
        response.writeHead(200, {"Content-type" : "text/html"} )
        readFile(response,"SiteUnicsul.html")

    }
    else if(parts.path == "/rota7"){
        response.writeHead(200, {"Content-type" : "image/jpg"} )
        readFile(response,"unicsul.jpg")

    }
    else{
        response.writeHead(404, {"Content-type" : "text/html"} )
        readFile(response,"notFound.html")
    }
}

var server = http.createServer(callback)
server.listen(3000)
console.log("[STATUS - ok]... Servidor montado em http://localhost:3000")