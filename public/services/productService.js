angular.module('ecommerceApp').service('productService', function ($http, $q) {

    // GET
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
    
    // POST
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

    // PUT
    this.editProduct = function (editObj, id) {
        return $http({
            method: 'PUT',
            url: '/products?id=' + id,
            dataType: 'json',
            data: editObj
        }).then(function (response) {
            console.log(response);
            return "Product Changed";
        }, function (error) {
            console.log(error);
            return "Error";
        })
    };

    // DELETE
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