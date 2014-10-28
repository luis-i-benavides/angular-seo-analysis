(function () {
    'use strict';

    angular
        .module('app.services')
        .controller('ServicesCtrl', ServicesCtrl);

    /* @ngInject */
    function ServicesCtrl($log, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;
        vm.title = 'Services';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Services View');
        }
    }
})();