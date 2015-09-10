angular.module('app', []);

(function () {
    "use strict";

    angular
        .module('app')
        .controller('CheckoutController', CheckoutController);

    CheckoutController.$inject = ['$scope'];

    /* @ngInject */
    function CheckoutController($scope) {
        /* jshint validthis: true */
        var checkout = this;

        checkout.activate = activate;
        checkout.title = 'CheckoutController';


        activate();

        ////////////////

        function activate() {
            checkout.total = 0;
            checkout.items =    [{name: "Large Lemonade", price: 3, quantity: 0},
                {name: "Medium Lemonade", price: 2, quantity: 0},
                {name: "Health Snack", price: 4, quantity: 0},
                {name: "Treat", price: 1, quantity: 0}
            ];

            checkout.remove = function(index){
                checkout.items.splice(index,1);
            };

            $scope.$watch('checkout.items',function(){
                var total = 0;
                for(var i= 0;i<checkout.items.length;i++){
                    var currentItem = checkout.items[i];
                    total= total + (currentItem.price * currentItem.quantity);
                }

               checkout.total = total;
            }, true);

        }


    }

})();

