angular
    .module('app')
    .factory('SalesService', SalesService);

SalesService.$inject = ['$http','$q'];

/* @ngInject */
function SalesService($http, $q) {
    var service = {
        list: listSalesWrapInPromise
    };

    return service;

    ////////////////

    function loadSalesData(){

        //uncomment to test failure case
        //throw "Oh No. Sale Fail.";

        return  [{
            date: '1-1-2012',
            quantity: '500',
            netSale: '750',
            costOfGoods: '400'
        }, {
            date: '2-1-2012',
            quantity: '425',
            netSale: '650',
            costOfGoods: '300'
        }, {
            date: '3-1-2012',
            quantity: '300',
            netSale: '450',
            costOfGoods: '300'
        }, {
            date: '4-1-2012',
            quantity: '600',
            netSale: '750',
            costOfGoods: '400'
        }, {
            date: '5-1-2012',
            quantity: '100',
            netSale: '250',
            costOfGoods: '175'
        }, {
            date: '6-1-2012',
            quantity: '100',
            netSale: '250',
            costOfGoods: '150'
        }, {
            date: '7-1-2012',
            quantity: '425',
            netSale: '750',
            costOfGoods: '400'
        }, {
            date: '8-1-2012',
            quantity: '300',
            netSale: '450',
            costOfGoods: '250'
        }, {
            date: '9-1-2012',
            quantity: '650',
            netSale: '850',
            costOfGoods: '650'
        }, {
            date: '10-1-2012',
            quantity: '100',
            netSale: '350',
            costOfGoods: '250'
        }, {
            date: '11-1-2012',
            quantity: '100',
            netSale: '350',
            costOfGoods: '250'
        }, {
            date: '12-1-2012',
            quantity: '300',
            netSale: '450',
            costOfGoods: '250'
        }, {
            date: '1-1-2013',
            quantity: '300',
            netSale: '550',
            costOfGoods: '350'
        }, {
            date: '2-1-2013',
            quantity: '650',
            netSale: '750',
            costOfGoods: '450'
        }, {
            date: '3-1-2013',
            quantity: '300',
            netSale: '450',
            costOfGoods: '250'
        }, {
            date: '4-1-2013',
            quantity: '650',
            netSale: '850',
            costOfGoods: '650'
        }, {
            date: '5-1-2013',
            quantity: '100',
            netSale: '350',
            costOfGoods: '150'
        }, {
            date: '6-1-2013',
            quantity: '100',
            netSale: '250',
            costOfGoods: '150'
        }, {
            date: '7-1-2013',
            quantity: '500',
            netSale: '350',
            costOfGoods: '250'
        }, {
            date: '8-1-2013',
            quantity: '500',
            netSale: '750',
            costOfGoods: '550'
        }, {
            date: '9-1-2013',
            quantity: '650',
            netSale: '850',
            costOfGoods: '550'
        }, {
            date: '10-1-2013',
            quantity: '300',
            netSale: '550',
            costOfGoods: '350'
        }, {
            date: '11-1-2013',
            quantity: '100',
            netSale: '350',
            costOfGoods: '250'
        }, {
            date: '12-1-2013',
            quantity: '150',
            netSale: '450',
            costOfGoods: '150'
        }];

    }


    function listSalesWrapInPromise () {
        var deferred = $q.defer();

        try{
            var sales = loadSalesData();
            deferred.resolve(sales);
        }
        catch(err){
            deferred.reject(err);
        }

        return deferred.promise;
    }


}

