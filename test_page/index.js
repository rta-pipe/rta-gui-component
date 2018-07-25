var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')))
app.use('/components', express.static(path.join(__dirname, '/components')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('RTA-GUI-Components TestPage app listening on port 3000!');
});
