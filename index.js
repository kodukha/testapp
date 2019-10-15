var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controller = require('./controllers/batchController');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/batch', controller.processBatch);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
