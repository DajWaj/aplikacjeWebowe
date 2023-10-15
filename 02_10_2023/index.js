const http = require('http');
const fs = require('fs/promises');

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
    else if(url==='/dziekujemy'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const html = await fs.readFile('dziekujemy.html');
        res.write(html);
        res.end();
    }
    else if(url==='/styleDziekujemy.css'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        const css = await fs.readFile('styleDziekujemy.css');
        res.write(css);
        res.end();
    }
    else if(url==='/api'){
        function Worker(name, surname, age) {
            this.name = name
            this.surname = surname
            this.age = age
        }
        const w1 = new Worker('Juan', 'Pablo', 67)
        const w2 = new Worker('Karol', 'Wojtyla', 52)
        const w3 = new Worker('Marcin', 'Prokop', 56)
        const workers = [w1,w2,w3]

        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(workers))
        res.end()
    }
    else if(url==='/styleApi.css'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        const css = await fs.readFile('styleDziekujemy.css');
        res.write(css);
        res.end();
    }
    else if (url==='/kontakt' && method =='POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk.toString())
            body.push(chunk)
        })

        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            await fs.writeFile(`./contact/message-${Date.now().toString()}.txt`, message)
            res.statusCode = 302
            res.setHeader('Location', '/dziekujemy')
            return res.end()
        })
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