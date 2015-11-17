angular.module('ecommerceApp').service('productService', function ($http, $q) {

    this.getProducts = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:3000/products'
        }).then(function (response) {
            console.log(response.data);
            
            
            
            
            deferred.resolve(response.data);
        })
        return deferred.promise
    };





});