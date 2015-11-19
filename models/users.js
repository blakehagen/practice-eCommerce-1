var mongoose = require('mongoose');
var cartSchema = require('../models/carts')

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cart: [cartSchema]
})

module.exports = mongoose.model('User', UserSchema)