(function () {
    "use strict";

    angular.module('app.common.directives')
        .directive('cnFocus',function() {
            return {
                link: function(scope, element, attrs) {
                    element[0].focus();
                }
            };
        });

})();


