(function () {
    "use strict";

    angular.module('app')
        .config(function ($provide) {

            $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
                return function (exception, cause) {
                    $delegate(exception, cause);

                    var alertsService = $injector.get("AlertsService");
                    alertsService.addDanger(exception.message);
                };
            });

        });

})();
