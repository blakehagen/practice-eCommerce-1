var mongoose = require('mongoose');
var productSchema = require('../models/products')

var OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: 
    // [productSchema]
    
    [{
        team: { type: String, required: true },
        color: { type: String },
        price: { type: Number, required: true },
    }]
})

module.exports = mongoose.model('Order', OrderSchema);