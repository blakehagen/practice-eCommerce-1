var Product = require('../models/products');

module.exports = {

    create: function (req, res, next) {
        var newProduct = new Product(req.body);
        newProduct.save(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },

    getAll: function (req, res, next) {
        Product.find({})
            .exec(function (err, result) {
                if (err) return res.status(500).send(err);
                else res.send(result);
            })
    },

    getProduct: function (req, res, next) {
        Product.findById(req.params.id, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },

    update: function (req, res, next) {
        Product.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },

    delete: function (req, res, next) {
        Product.findByIdAndRemove(req.params.id, req.body, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    }

}