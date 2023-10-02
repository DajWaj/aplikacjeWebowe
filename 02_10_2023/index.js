const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html');
const dziekujemy = fs.readFileSync('dziekujemy.html');
const api = fs.readFileSync('api.html');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(index);
    }
    if(url==='/dziekujemy'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(dziekujemy);
    }
    if(url==='/api'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(api);
    }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});