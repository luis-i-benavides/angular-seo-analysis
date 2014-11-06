(function () {
    'use strict';

    angular
        .module('app.services')
        .controller('ServicesCtrl', ['$log', '$state', '$location', 'Page', ServicesCtrl]);

    /* @ngInject */
    function ServicesCtrl($log, $state, $location, Page) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;

        Page.setTitle('Our Services | ACME, Inc.');
        Page.setDescription('ACME, Inc., our services include auto, residential, and business lockouts.');
        Page.setCanonicalUrl($location.absUrl());
        Page.setH1('Our Services');

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Services View');
        }
    }
})();