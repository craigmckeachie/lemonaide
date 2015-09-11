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
    }

    
}