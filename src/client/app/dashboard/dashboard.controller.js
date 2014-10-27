(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardCtrl', DashboardCtrl);

    /* @ngInject */
    function DashboardCtrl($log, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;
        vm.title = 'Dashboard';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Dashboard View');
        }
    }
})();