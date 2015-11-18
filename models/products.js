var mongoose = require('mongoose');

var productModel = new mongoose.Schema({
    team: {
        type: String,
        // unique: true,
        required: true
    },
    color: String,
    price: {
        type: Number,
        required: true
        // gt: 0
    }
})

module.exports = mongoose.model('products', productModel);