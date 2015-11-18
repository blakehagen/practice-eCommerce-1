angular.module('ecommerceApp').controller('homeCtrl', function ($scope, productService) {

    $scope.test = "Hello World.  Buy a Cool Hat!"

    // Get Products for Home View
    $scope.get = function () {
        productService.getProducts().then(function (response) {
            $scope.products = response;
        })
    }
    $scope.get();

});