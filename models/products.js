var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    team: { type: String, required: true },
    color: { type: String },
    price: { type: Number, required: true },
})

module.exports = mongoose.model('Product', ProductSchema);