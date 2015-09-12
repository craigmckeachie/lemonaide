(function () {
    "use strict";
    angular
        .module('app')
        .factory('PhilanthropistService', PhilanthropistService);

    PhilanthropistService.$inject = ['$resource'];

    /* @ngInject */
    function PhilanthropistService($resource) {
        return $resource('http://localhost:3000/philanthropists/:id', {}, {});
    }

})();


//    'post': {
//        method: 'POST'
//    },
//    'put': {
//        method: 'PUT'
//    },
//    'remove': {
//        method: 'DELETE'
//    }

