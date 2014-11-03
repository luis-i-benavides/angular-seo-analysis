(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('AboutCtrl', ['$log', '$state', 'Page', AboutCtrl]);

    /* @ngInject */
    function AboutCtrl($log, $state, Page) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;

        Page.setTitle('ACME, Inc. | About Us');
        Page.setDescription('ACME, Inc., about us, a full service locksmith dedicated to your complete satisfaction');
        Page.setH1('About Us');

        activate();

        ////////////////

        function activate() {
            $log.info('Activated About View');
        }
    }
})();