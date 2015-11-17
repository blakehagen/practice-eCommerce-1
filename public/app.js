angular.module('ecommerceApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './features/home/homeTmpl.html',
            controller: 'homeCtrl'
        })

        .state('admin', {
            url: '/admin',
            templateUrl: './features/admin/adminTmpl.html',
            controller: 'adminCtrl'
        })

    $urlRouterProvider
        .otherwise('/');


});