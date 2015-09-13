(function () {
    "use strict";

    angular
        .module('app')
        .controller('DonarsRestController', DonarsRestController);

    DonarsRestController.$inject = ['PhilanthropistRestService','$log','$route'];

    /* @ngInject */
    function DonarsRestController(Philanthropists, $log,$route) {
        /* jshint validthis: true */
        var donarsCtrl = this;

        donarsCtrl.activate = activate;
        donarsCtrl.title = 'Donars';

        activate();

        ////////////////

        function activate() {
            donarsCtrl.donars = [];

            donarsCtrl.donars = Philanthropists.getList().$object;

            //Philanthropists.getList()
            //    .then(philanthropistQuerySuccess, philanthropistQueryFailure);

            donarsCtrl.remove = function(donar){
                donar.remove()
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


