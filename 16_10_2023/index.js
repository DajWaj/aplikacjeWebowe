const http = require('http');
const fs = require('fs/promises');
const express = require("express");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url==='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const html = await fs.readFile('index.html');
        res.write(html);
        res.end();
    }
    else if(url==='/styleIndex.css'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        const css = await fs.readFile('styleIndex.css');
        res.write(css);
        res.end();
    }
    else if (url==='/kontakt') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const html = await fs.readFile('kontakt.html');
        res.write(html);
        res.end();
    }
    else if(url==='/styleKontakt.css'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        const css = await fs.readFile('styleKontakt.css');
        res.write(css);
        res.end();
    }
    else if (url==='/uga.js') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript');
        const js = await fs.readFile('./public/js/uga.js');
        res.write(js);
        res.end();
    }
    else {
        res.statusCode = 404
        res.setHeader('content-type', 'application/json')
        res.write('{"error": "404 this page does not exist"}')
        res.end()
    }
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});