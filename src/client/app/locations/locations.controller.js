(function () {
    'use strict';

    angular
        .module('app.locations')
        .controller('LocationsCtrl', ['$log', '$state', 'Page', LocationsCtrl]);

    /* @ngInject */
    function LocationsCtrl($log, $state, Page) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;

        Page.setTitle('ACME, Inc. | Our Locations');
        Page.setDescription('ACME, Inc., we have locations all over northern California.');

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Locations View');
        }
    }
})();