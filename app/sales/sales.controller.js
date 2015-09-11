(function () {
    "use strict";

    angular
        .module('app')
        .controller('SalesController', SalesController);

    SalesController.$inject = ['SalesService','$log'];

    /* @ngInject */
    function SalesController(SalesService, $log) {
        /* jshint validthis: true */
        var sales = this;

        sales.activate = activate;
        sales.title = 'Sales';
        sales.activeTab = "sales";

        activate();

        ////////////////

        function activate() {

            SalesService.list()
                .then(salesListSuccess, salesListFailure);

        }

        function salesListSuccess(transactions){
            sales.transactions = transactions;
            sales.numberOfRows = 10; //sales.transactions.length;
        }

        function salesListFailure(error){
            $log.log(error);
        }



    }


})();

