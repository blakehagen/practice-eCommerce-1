angular.module('ecommerceApp').controller('homeCtrl', function($scope, productService){
    
    $scope.get = function(){
        productService.getProducts().then(function(response){
            $scope.products = response;
            console.log

        })
    }
    
    $scope.get();
    
    
    
    $scope.test = "Hello World.  Buy a Cool Hat!"
    
});