var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: [{
        team: { type: String, required: true },
        color: { type: String },
        price: { type: Number, required: true },
        id: { type: String, required: true }
    }]
})

module.exports = mongoose.model('Order', OrderSchema);