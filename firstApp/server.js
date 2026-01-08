const express = require('express');
const app = express();
app.listen(4000);

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log(req.params.splat);
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('{*splat}', (req, res) => {
    res.send('404 Not Found');
});