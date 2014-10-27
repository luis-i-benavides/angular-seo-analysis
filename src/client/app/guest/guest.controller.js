(function () {
    'use strict';

    angular
        .module('app.guest')
        .controller('GuestCtrl', GuestCtrl);

    /* @ngInject */
    function GuestCtrl($log, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;
        vm.title = 'Guest';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Guest View');
        }
    }
})();
