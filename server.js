var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
// var mongojs = require('mongojs');
var mongoose = require('mongoose');

//CONTROLLERS//
var productCtrl = require('./controllers/productControllerBack');
var orderCtrl = require('./controllers/orderControllerBack');
var cartCtrl = require('./controllers/cartCtrlBack');

//EXPRESS//
var app = express();
app.use(cors());
app.use(bodyParser.json());

//MONGOOSE//
var mongoUri = "mongodb://localhost:27017/ecommerce";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connection to mongoDB successful')
});

//PRODCUT ENDPOINTS//
app.post('/api/products', productCtrl.create);
app.get('/api/products', productCtrl.getAll);
app.get('/api/products/:id', productCtrl.getProduct);
app.put('/apiproducts/:id', productCtrl.update);
app.delete('/api/products/:id', productCtrl.delete); 

//ORDER ENDPOINTS//
app.post('/api/order', orderCtrl.create);
app.get('/api/order', orderCtrl.get);

//CART ENDPOINTS//
app.post('/api/cart', cartCtrl.create);
app.put('/api/cart', cartCtrl.update);


//LINK TO FRONT//
app.use(express.static(__dirname + '/public'));

//PORT//
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Listening on port ' + port);
});