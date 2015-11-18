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
        $scope.productDetails = false;
    }

    $scope.editButton = function () {
        $scope.editProductRow = !$scope.editProductRow;
        $scope.newProductRow = false;
        $scope.deleteProductRow = false;
        $scope.idRow = false;
        $scope.productDetails = false;
    }

    $scope.deleteButton = function () {
        $scope.deleteProductRow = !$scope.deleteProductRow;
        $scope.newProductRow = false;
        $scope.editProductRow = false;
        $scope.idRow = false;
        $scope.productDetails = false;
    }

    $scope.productDetailsButton = function () {
        $scope.idRow = !$scope.idRow;
        $scope.newProductRow = false;
        $scope.editProductRow = false;
        $scope.deleteProductRow = false;
    }
    
    // // // // // // // // // // // // // // // // // //

    // GET Product Info Details from Database //

    $scope.productDetails = false;

    $scope.get = function () {
        productService.getProducts().then(function (response) {
            $scope.products = response;
        })
        $scope.productDetails = !$scope.productDetails;
    };
    
    // // // // // // // // // // // // // // // // // //
    
    // POST New Product //

    $scope.newProduct = function () {
        $scope.productDetails = false;
        var newProduct = {
            "team": $scope.teamNew,
            "color": $scope.colorNew,
            "price": parseInt($scope.priceNew)
        };
        productService.postNew(newProduct).then(function (response) {
            console.log(response);
            $scope.teamNew = '';
            $scope.colorNew = '';
            $scope.priceNew = '';
        })
    };
    
    // // // // // // // // // // // // // // // // // //
    
    // PUT (EDIT) Product //

    $scope.edit = function () {
        $scope.productDetails = false;
        var editObj = {
            "team": $scope.teamEdit,
            "color": $scope.colorEdit,
            "price": parseInt($scope.priceEdit)
        };
        productService.editProduct(editObj, $scope.idEdit).then(function (response) {
            console.log(response);
            $scope.idEdit = '';
            $scope.teamEdit = '';
            $scope.colorEdit = '';
            $scope.priceEdit = '';
        })
    };
    
    // // // // // // // // // // // // // // // // // //
    
    // DELETE Product //

    $scope.delete = function () {
        $scope.productDetails = false;
        var id = $scope.idDelete;
        console.log(id);
        productService.deleteProduct(id).then(function (response) {
            console.log(response);
            $scope.idDelete = '';
        })
    };
    
    // // // // // // // // // // // // // // // // // //


});