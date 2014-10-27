(function () {
    'use strict';

    angular
        .module('app.guest')
        .controller('PartyCtrl', PartyCtrl);

    /* @ngInject */
    function PartyCtrl($log, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;
        vm.title = 'Party';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated Party View');
        }
    }
})();
