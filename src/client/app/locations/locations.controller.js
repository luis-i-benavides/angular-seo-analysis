(function () {
    'use strict';

    angular
        .module('app.locations')
        .controller('LocationsCtrl', ['$log', '$state', '$location', 'Page', LocationsCtrl]);

    /* @ngInject */
    function LocationsCtrl($log, $state, $location, Page) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;

        Page.setTitle('ACME, Inc. | Our Locations');
        Page.setDescription('ACME, Inc., we have locations all over northern California.');
        Page.setCanonicalUrl($location.absUrl());
        Page.setH1('Our Locations');
        
        activate();

        ////////////////

        function activate() {
            $log.info('Activated Locations View');
        }
    }
})();