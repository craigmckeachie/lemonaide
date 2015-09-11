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
                    otherwise({
                        redirectTo: '/checkout'
                    });
            }]);

})();
