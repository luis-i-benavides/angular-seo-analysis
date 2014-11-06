(function () {
    'use strict';

    angular
        .module('app.locations')
        .controller('LocationsCtrl', ['$log', '$state', '$location', 'Page', LocationsCtrl])
        .controller('RedmondLakesCtrl', ['$location', 'Page', RedmondLakesCtrl])
        .controller('RedondoBeachCtrl', ['$location', 'Page', RedondoBeachCtrl])
        .controller('VenturaCtrl', ['$location', 'Page', VenturaCtrl]);

    /* @ngInject */
    function LocationsCtrl($log, $state, $location, Page) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;

        Page.setTitle('Our Locations | ACME, Inc.');
        Page.setDescription('ACME, Inc., we have locations all over northern California.');
        Page.setCanonicalUrl($location.absUrl());
        Page.setH1('Our Locations');

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Locations View');
        }
    }

    /* @ngInject */
    function RedmondLakesCtrl($location, Page) {
        /* jshint validthis:true */
        Page.setTitle('Redmond Lakes store | ACME, Inc.');
        Page.setDescription('ACME, Inc. Redmond Lakes store.');
        Page.setCanonicalUrl($location.absUrl());
    }
    /* @ngInject */
    function RedondoBeachCtrl($location, Page) {
        /* jshint validthis:true */
        Page.setTitle('Redondo Beach store | ACME, Inc.');
        Page.setDescription('ACME, Inc. Redondo Beach store.');
        Page.setCanonicalUrl($location.absUrl());
    }
    /* @ngInject */
    function VenturaCtrl($location, Page) {
        /* jshint validthis:true */
        Page.setTitle('Ventura store | ACME, Inc.');
        Page.setDescription('ACME, Inc. Ventura store.');
        Page.setCanonicalUrl($location.absUrl());
    }

})();