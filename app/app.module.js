angular.module('app', ['ngRoute','ngMessages','app.filters']);

(function () {

    angular.module('app').run(function($rootScope, $location){

        $rootScope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });


})();

