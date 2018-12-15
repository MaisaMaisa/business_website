const express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/index.html')
})

app.listen(3000)