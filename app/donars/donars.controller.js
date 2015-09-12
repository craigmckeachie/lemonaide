(function () {
    "use strict";

    angular
        .module('app')
        .controller('DonarsController', DonarsController);

    DonarsController.$inject = ['PhilanthropistService','$log','$route'];

    /* @ngInject */
    function DonarsController(PhilanthropistService, $log,$route) {
        /* jshint validthis: true */
        var donarsCtrl = this;

        donarsCtrl.activate = activate;
        donarsCtrl.title = 'Donars';

        activate();

        ////////////////

        function activate() {
            donarsCtrl.donars = [];

            PhilanthropistService.query().$promise
                .then(philanthropistQuerySuccess, philanthropistQueryFailure);

            donarsCtrl.remove = function(donar){
                PhilanthropistService.delete({id:donar.id}).$promise
                    .then(philanthropistDeleteSuccess, philanthropistDeleteFailure);
                return false;
            };

        }

        function philanthropistQuerySuccess(data){
            $log.log(data);
            donarsCtrl.donars = data;
        }

        function philanthropistQueryFailure(error){
            $log.log(error);
        }

        function philanthropistDeleteSuccess(response){
            donarsCtrl.message = "successfully deleted";
            $route.reload();
        }

        function philanthropistDeleteFailure(error){
            $log.log(error);
        }


    }

})();


