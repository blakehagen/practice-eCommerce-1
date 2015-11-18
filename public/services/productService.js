angular.module('ecommerceApp').service('productService', function ($http, $q) {

    this.getProducts = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/products'
        }).then(function (response) {
            // console.log(response.data);
            deferred.resolve(response.data);
        })
        return deferred.promise
    };

    this.postNew = function (newProduct) {
        return $http({
            method: 'POST',
            url: '/products',
            dataType: 'json',
            data: newProduct
        }).then(function (response) {
            console.log(response);
            return "Product Added";
        }, function (error) {
            console.log(error);
            return "Error";
        })
    };




    this.deleteProduct = function (id) {
        return $http({
            method: 'DELETE',
            url: '/products?id=' + id,
            dataType: 'json',
            data: id
        }).then(function (response) {
            console.log(response);
            return "Product Deleted";
        }, function (error) {
            console.log(error);
            return "Error";
        })
    };



});