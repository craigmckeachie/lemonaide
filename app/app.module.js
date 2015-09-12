angular.module('app', ['ngRoute','ngMessages','ngResource','app.filters']);

(function () {

    angular.module('app').run(function($rootScope, $location){

        $rootScope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });


})();

