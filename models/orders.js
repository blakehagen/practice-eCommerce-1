var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: [String],
})


module.exports = mongoose.model('Order', OrderSchema);