var express = require('express');
var app = express();
var path = require('path');

if( process.argv.length < 3 ) {
  return console.log(`Please, insert the test web page!`);
}
var filename = process.argv[2]

var fs = require('fs');
if ( ! fs.existsSync('./test_pages/'+filename)) {
  return console.log(`The webpage ${filename} doesnt exist!`);
}

dirname = __dirname.substr(  0, __dirname.lastIndexOf('/') + 1);

app.use('/static', express.static(path.join(__dirname, '/examples')))
app.use("/real_data", express.static(path.join(__dirname, '/real_data')));


app.use("/imports", express.static(path.join(dirname, '/imports')));
app.use("/styles", express.static(path.join(dirname, '/styles')));
app.use('/bower_components', express.static(path.join(dirname, '/bower_components')))
app.use('/extensions', express.static(path.join(dirname, '/bower_components/MathJax/extensions')))
app.use('/components', express.static(path.join(dirname, '/components')))






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/test_pages/'+filename));
});

app.listen(3000, function () {
  console.log('RTA-GUI-Components '+filename+' app listening on port 3000!');
});
