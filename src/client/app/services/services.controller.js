(function () {
    'use strict';

    angular
        .module('app.services')
        .controller('ServicesCtrl', ['$log', '$state', 'Page', ServicesCtrl]);

    /* @ngInject */
    function ServicesCtrl($log, $state, Page) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;

        Page.setTitle('ACME, Inc. | Our Services');
        Page.setDescription('ACME, Inc., our services include auto, residential, and business lockouts.');
        Page.setH1('Our Services');

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Services View');
        }
    }
})();