const express = require('express');
const path = require('path');

const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.route('/kontakt')
    .get(async (req, res) => {
        res.sendFile(path.join(__dirname, 'kontakt.html'));
    })

    .post((req, res) => {
        console.log('Form send')
    })

app.get('/styleIndex.css', (req, res) => {
    res.sendFile(path.join(__dirname, './public/css/styleIndex.css'));
});

app.get('/styleKontakt.css', (req, res) => {
    res.sendFile(path.join(__dirname, './public/css/styleKontakt.css'));
});

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})