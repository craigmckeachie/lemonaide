
(function () {
    "use strict";


    angular
        .module('app')
        .controller('CheckoutController', CheckoutController);

    CheckoutController.$inject = ['$scope','ProductService','$log'];

    /* @ngInject */
    function CheckoutController($scope, ProductService, $log) {
        /* jshint validthis: true */
        var checkout = this;
        checkout.items = [];

        checkout.activate = activate;
        checkout.title = 'Checkout';
        $scope.activeTab = "checkout";


        activate();

        ////////////////

        function activate() {
            checkout.total = 0;


            ProductService.list()
                .then(productListSuccess, productListFailure);


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

        function productListSuccess(result){
            checkout.items = result.data;
        }

        function productListFailure(result){
            $log.error(result.status);
        }



    }

})();

