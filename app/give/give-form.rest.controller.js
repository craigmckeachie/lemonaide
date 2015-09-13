(function () {
    "use strict";

    angular
        .module('app')
        .controller('GiveFormRestController', GiveFormRestController);

    GiveFormRestController.$inject = ['PhilanthropistRestService','AlertsService','$route'];

    /* @ngInject */
    function GiveFormRestController(philanthropistService, alertsService, $route) {
        /* jshint validthis: true */
        var formCtrl = this;

        formCtrl.activate = activate;

        activate();

        ////////////////

        function activate() {
            formCtrl.giver = {
                name: '',
                phone: '',
                email: '',
                contact: ''
            };

            formCtrl.submit = function(){
                var form = formCtrl.giveForm;

                if(!form.$dirty){
                    alertsService.addInfo('Please fill out the form before submitting.');
                    return false;
                }

                if(form.$valid){
                    addDonor();
                }else{
                    alertsService.addDanger('Please fix the errors below and resubmit the form.');
                }

                return false;
            };
        }

        function addDonor(){
            var promiseKept = philanthropistService.post(formCtrl.giver);

            promiseKept.then(function() {
                alertsService.addSuccess('Thank you for donating your time. We will be contacting you shortly.');
                $route.reload();
            }, function(response) {
                alertsService.addDanger('No go: backend down - try again: ');
            });

        }


    }

})();
