(function() {
    'use strict';

    angular
        .module('app')
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.
                    when('/checkout', {
                        templateUrl: 'app/checkout/checkout.html',
                        controller: 'CheckoutController',
                        controllerAs: 'checkout'
                    }).
                    when('/sales', {
                        templateUrl: 'app/sales/sales.html',
                        controller: 'SalesController',
                        controllerAs: 'sales'
                    }).
                    when('/give', {
                        templateUrl: 'app/give/give.html',
                        controller: 'GiveController',
                        controllerAs: 'give'
                    }).
                    when('/donars', {
                        templateUrl: 'app/donars/donars.html',
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
