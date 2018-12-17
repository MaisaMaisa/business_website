const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/pre-home.html', (req, res) => {
  res.send('pre-home')
});

app.get('/index.html', (req, res) => {
  res.send('index')
});

app.get('/gallery.html', (req, res) => {
  res.send('gallery')
});

app.get('/contact.html', (req, res) => {
  res.send('contact')
});

app.listen(port, () => {
  console.log(`app.js is listening on port ${port}`)
});