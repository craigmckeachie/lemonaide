(function () {
    "use strict";

    angular
        .module('app')
        .controller('GiveFormController', GiveFormController);

    GiveFormController.$inject = [];

    /* @ngInject */
    function GiveFormController() {
        /* jshint validthis: true */
        var formCtrl = this;

        formCtrl.activate = activate;



            activate();

        ////////////////

        function activate() {
            formCtrl.submit = function(){
                formCtrl.message = '';
                var form = formCtrl.giveForm;

                if(!form.$dirty){
                    formCtrl.message = 'Please fill out the form before submitting.';
                    return;
                }

                if(form.$valid){
                    formCtrl.message = 'Thank you for your donation. We will be contacting you shortly.';
                }else{
                    formCtrl.message = 'Please fix the errors below and resubmit the form.';
                }

            };
        }


    }

})();
