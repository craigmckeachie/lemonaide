(function () {
    "use strict";

    angular
        .module('app')
        .controller('GiveController', GiveController);

    GiveController.$inject = [];

    /* @ngInject */
    function GiveController() {
        /* jshint validthis: true */
        var give = this;

        give.activate = activate;
        give.title = 'Give your time to a great cause.';

        activate();

        ////////////////

        function activate() {
        }


    }


})();
