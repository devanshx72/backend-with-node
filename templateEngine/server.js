const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const todos = ['code', 'eat', 'sleep', 'repeat'];
app.get('/todos', (req, res) => {
    res.render('todos', { todos , title: 'My Todo List' });
});

app.get('/about', (req, res) => {
    res.render('about');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});