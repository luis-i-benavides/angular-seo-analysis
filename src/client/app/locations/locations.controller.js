(function () {
    'use strict';

    angular
        .module('app.locations')
        .controller('LocationsCtrl', LocationsCtrl);

    /* @ngInject */
    function LocationsCtrl($log, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;
        vm.title = 'Locations';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Locations View');
        }
    }
})();