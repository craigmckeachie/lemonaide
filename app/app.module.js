angular.module('app', ['ngRoute','ngMessages','ngResource','restangular','app.filters','app.common.directives','app.services']);

(function () {

    angular.module('app').run(function($rootScope, $location){

        $rootScope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });


})();

