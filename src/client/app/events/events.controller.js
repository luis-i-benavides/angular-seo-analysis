(function () {
    'use strict';

    angular
        .module('app.events')
        .controller('EventsCtrl', ['$log', '$state', '$location', 'Page', EventsCtrl]);

    /* @ngInject */
    function EventsCtrl($log, $state, $location, Page) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;

        Page.setTitle('Events | ACME, Inc.');
        Page.setDescription('ACME, Inc. upcoming events.');
        Page.setCanonicalUrl($location.absUrl());
        Page.setH1('Events');

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Events View');
        }
    }
})();