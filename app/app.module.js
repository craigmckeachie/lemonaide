angular.module('app', ['ngRoute','ngMessages','ngResource','restangular','app.filters','app.common.directives','app.services','templates']);

//module used by the build process to cache templates
angular.module('templates', []);

(function () {

    angular.module('app').run(function($rootScope, $location){

        $rootScope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });


})();

