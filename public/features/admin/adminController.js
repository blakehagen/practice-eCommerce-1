angular.module('ecommerceApp').controller('adminCtrl', function ($scope, productService) {


    // Toggle Admin Action Buttons //
    
    $scope.newProductRow = false;
    $scope.editProductRow = false;
    $scope.deleteProductRow = false;
    $scope.idRow = false;

    $scope.newButton = function () {
        $scope.newProductRow = !$scope.newProductRow;
        $scope.editProductRow = false;
        $scope.deleteProductRow = false;
        $scope.idRow = false;
    }

    $scope.editButton = function () {
        $scope.editProductRow = !$scope.editProductRow;
        $scope.newProductRow = false;
        $scope.deleteProductRow = false;
        $scope.idRow = false;
    }

    $scope.deleteButton = function () {
        $scope.deleteProductRow = !$scope.deleteProductRow;
        $scope.newProductRow = false;
        $scope.editProductRow = false;
        $scope.idRow = false;
    }

    $scope.productDetailsButton = function () {
        $scope.idRow = !$scope.idRow;
        $scope.newProductRow = false;
        $scope.editProductRow = false;
        $scope.deleteProductRow = false;
    }


    // Submit Data to Database //

    $scope.productDetails = false;

    $scope.get = function () {
        productService.getProducts().then(function (response) {
            $scope.products = response;
        })
        $scope.productDetails = !$scope.productDetails;
    }


});