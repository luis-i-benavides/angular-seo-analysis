(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('AboutCtrl', ['$log', '$state', '$location', 'Page', AboutCtrl]);

    /* @ngInject */
    function AboutCtrl($log, $state, $location, Page) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;

        Page.setTitle('About Us | ACME, Inc.');
        Page.setDescription('ACME, Inc. is a full service locksmith dedicated to your complete satisfaction.');
        Page.setCanonicalUrl($location.absUrl());
        Page.setH1('About Us');

        activate();

        ////////////////

        function activate() {
            $log.info('Activated About View');
        }
    }
})();