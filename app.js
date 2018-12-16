const express = require('express');
let app = express();

app.use('/css', express.static('css'))
app.use('/img', express.static('img'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/pre-home.html');
  console.log(req.query);
});

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + '/html/index.html')
});

app.get('/gallery.html', function(req, res) {
  res.sendFile(__dirname + '/html/gallery.html')
});

app.get('/contact.html', function(req, res) {
  res.sendFile(__dirname + '/html/contact.html')
});

app.listen(3000)