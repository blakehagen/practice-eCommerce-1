var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

var app = express();

app.use(cors());
app.use(bodyParser.json());























// set port

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});