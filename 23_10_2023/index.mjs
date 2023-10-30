import express from 'express';
import { promises as rs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {apiRouter} from './routes/api_route.mjs'
const host = 'localhost'
const port = 3000
const app = express()
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter)

app.use('/static', express.static(path.join(__dirname, 'public/js')))

app.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    const html_main = await rs.readFile('index.html')
    res.end(html_main)
})

app.get('/styleIndex.css', (req, res) => {
    res.sendFile(path.join(__dirname, './public/css/styleIndex.css'));
});

app.get('/styleKontakt.css', (req, res) => {
    res.sendFile(path.join(__dirname, './public/css/styleKontakt.css'));
});


app.get('/kontakt', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    const html_form = await rs.readFile('kontakt.html')
    res.end(html_form)
})

app.post('/kontakt', (req, res) => {
    console.log('Dane z formularza:', req.body);
    res.redirect('/');
});

app.listen(port, function (err) {
    if (err) console.log(err);
    console.log(`Server running at http://${host}:${port}/`)
});