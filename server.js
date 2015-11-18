var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
// var mongojs = require('mongojs');
var mongoose = require('mongoose');

var productCtrl = require('./controllers/productControllerBack')

var app = express();

app.use(cors());
app.use(bodyParser.json());

// var db = mongojs('ecommerce');
// var products = db.collection('products');
var mongoUri = "mongodb://localhost:27017/ecommerce";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connection to mongoDB successful')
});


app.post('/products', productCtrl.create);
app.get('/products', productCtrl.getAll);
app.get('/products/:id', productCtrl.getProduct);
app.put('/products/:id', productCtrl.update);
app.delete('/products/:id', productCtrl.delete); 



//where front end lives
app.use(express.static(__dirname + '/public'));

// set port
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});