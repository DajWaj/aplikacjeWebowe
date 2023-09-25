const http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.php'); 

const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
    if(req==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(index);
    }
    if(req==='/style.css'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        var style = fs.readFileSync('style.css'); 
        res.end(index);
    }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});