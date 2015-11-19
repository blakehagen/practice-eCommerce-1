var Cart = require('../models/carts');

module.exports = {

    create: function (req, res, next) {
        var newCart = new Cart(req.body);
        newCart.save(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },

    update: function (req, res, next) {
        Cart.findByIdAndUpdate(req.params.id)
            .populate('product')
            .exec(function (err, result) {
                if (err) return res.status(500).send(err);
                else res.send(result);
            })
    }









}