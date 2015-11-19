var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    product: {}, // NEED REF HERE

})

module.exports = mongoose.model('Cart', cartSchema);