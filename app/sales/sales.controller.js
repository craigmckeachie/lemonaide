angular
    .module('app')
    .controller('SalesController', SalesController);

SalesController.$inject = [];

/* @ngInject */
function SalesController() {
    /* jshint validthis: true */
    var sales = this;

    sales.activate = activate;
    sales.title = 'Sales';
    sales.activeTab = "sales";

    activate();

    ////////////////

    function activate() {


        sales.transactions = [{
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

        sales.numberOfRows = 10; //sales.transactions.length;

    }

    
}