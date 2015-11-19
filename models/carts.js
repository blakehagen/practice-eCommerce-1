var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
})

module.exports = mongoose.model('Cart', cartSchema);