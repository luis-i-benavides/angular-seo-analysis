(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('AboutCtrl', ['$log', '$state', AboutCtrl]);

    /* @ngInject */
    function AboutCtrl($log, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;
        // Page.setTitle('ACME, Inc. About Us');
        vm.title = 'About Us';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated About View');
        }
    }
})();