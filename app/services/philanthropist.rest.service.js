(function () {
    "use strict";
    angular
        .module('app')
        .factory('PhilanthropistRestService', PhilanthropistRestService);

    PhilanthropistRestService.$inject = ['Restangular'];

    /* @ngInject */
    function PhilanthropistRestService(Restangular) {
        return Restangular.all('Philanthropists');
    }

})();

