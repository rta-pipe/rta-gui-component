var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static(path.join(__dirname, '/examples')))
app.use("/imports", express.static(path.join(__dirname, '/imports')));
app.use("/styles", express.static(path.join(__dirname, '/styles')));

app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')))
app.use(express.static(path.join(__dirname, '/bower_components/MathJax')))


app.use('/components', express.static(path.join(__dirname, '/components')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('RTA-GUI-Components TestPage app listening on port 3000!');
});
