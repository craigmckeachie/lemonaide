(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.
                    when('/checkout', {
                        templateUrl: 'checkout/checkout.html',
                        controller: 'CheckoutController',
                        controllerAs: 'checkout'
                    }).
                    when('/sales', {
                        templateUrl: 'sales/sales.html',
                        controller: 'SalesController',
                        controllerAs: 'sales'
                    }).
                    when('/give', {
                        templateUrl: 'give/give.html',
                        controller: 'GiveController',
                        controllerAs: 'give'
                    }).
                    when('/donars', {
                        templateUrl: 'donars/donars.html',
                        controller: 'DonarsRestController',
                        controllerAs: 'donarsCtrl'
                    }).
                    otherwise({
                        redirectTo: '/checkout'
                    });
            }]);


    angular
        .module('app')
        .config(function(RestangularProvider){
            RestangularProvider.setBaseUrl("http://localhost:3000");
        });



})();
