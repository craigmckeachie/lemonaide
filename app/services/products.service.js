(function () {
    "use strict";

    angular
        .module('app')
        .service('ProductService', ProductService);

    ProductService.$inject = ['$http'];

    /* @ngInject */
    function ProductService($http) {

        this.list = function(){
            return $http({
                method: 'get',
                url: 'http://localhost:63342/lemonaide/app/data/products.json'
            });
        };
    }


})();

