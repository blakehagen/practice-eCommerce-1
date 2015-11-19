var Order = require('../models/orders');

module.exports = {
    create: function (req, res, next) {
        var newOrder = new Order(req.body);
        newOrder.save(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },

    get: function (req, res, next) {
        Order.find({})
            .populate('user')
            .exec(function (err, result) {
                if (err) return res.status(500).send(err);
                else res.send(result);
            })
    }

}