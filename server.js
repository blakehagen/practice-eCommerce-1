var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

var app = express();

app.use(cors());
app.use(bodyParser.json());

var db = mongojs('ecommerce');
var products = db.collection('products');


app.get('/products', function (req, res, next) {
    products.find(req.query, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});


app.post('/products', function (req, res, next) {
    products.insert(req.body, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});

app.put('/products', function (req, res, next) {
    products.update({ "_id": mongojs.ObjectId(req.query.id) }, req.body, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});


app.delete('/products', function (req, res, next) {
    // console.log(req.query.id);
    products.remove({ "_id": mongojs.ObjectId(req.query.id) }, function (err, result) {
        if (err) res.send(err);
        else res.send(result);
    })
});























// set port

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});