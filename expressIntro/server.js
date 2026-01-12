const express = require('express');
const app = express();
app.listen(4000);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/getdata', (req, res) => {
  console.log(req.query);
  res.send('Data received');
});

let movies = [{
    name: "dhurandhar",
    rating: 5
},
{
    name: "kgf",
    rating: 6
}, {
    name: "avengers",
    rating: 8
},
{
    name: "captain america",
    rating: 7
},
];

app.get('/getMovie', (req, res) => {
    let name = req.query.name;
    let data = movies.find((item) => item.name == name);
    res.json(data);
});

app.get('/file', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});