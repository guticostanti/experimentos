const http = require('http');
const url = require('url')
const fs = require('fs');

http.createServer((request, response) => {

    let path = url.parse(request.url).pathname;

    let method = request.method;
    console.log(method);

    if (path == '' || path == '/') {
        path = "/index.html";
    }

    let fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
        if (err) {
            response.writeHead(400, { "Content-Type": "text/html; charset=utf8" });
            response.end("Página não encontrada.");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        }
    })

}).listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Servidor rodando na porta 3000.");
    }
})