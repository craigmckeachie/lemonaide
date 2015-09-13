(function () {
    "use strict";

    angular.module('app.common.directives')
        .directive('alertBar', AlertBar);

    AlertBar.$inject = ['AlertsService'];

    /* @ngInject */
    function AlertBar(AlertsService){
        return {
            restrict: "AE",
            templateUrl: "/directives/alertbar.html",
            scope: true,
            controller: function($scope) {
                $scope.removeAlert = function (alert) {
                    AlertsService.removeAlert(alert);
                };
            },
            link: function (scope) {
                scope.currentAlerts = AlertsService.currentAlerts;
            }
        };

    }

})();


