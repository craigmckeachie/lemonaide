(function () {
    "use strict";

    angular
        .module('app')
        .controller('GiveFormController', GiveFormController);

    GiveFormController.$inject = ['PhilanthropistService'];

    /* @ngInject */
    function GiveFormController(philanthropistService) {
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
                formCtrl.message = '';
                var form = formCtrl.giveForm;

                if(!form.$dirty){
                    formCtrl.message = 'Please fill out the form before submitting.';
                    return;
                }

                if(form.$valid){
                    addDonor();
                }else{
                    formCtrl.message = 'Please fix the errors below and resubmit the form.';
                }

                return false;
            };
        }

        function addDonor(){
            var promiseKept = philanthropistService.save(formCtrl.giver).$promise;

            promiseKept.then(function() {
                formCtrl.message = 'Thank you for donating your time. We will be contacting you shortly.';
            }, function(response) {
                formCtrl.message = 'No go: backend down - try again: ' + response.data.error;
            });

        }


    }

})();
