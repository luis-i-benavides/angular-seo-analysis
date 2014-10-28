(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('AboutCtrl', AboutCtrl);

    /* @ngInject */
    function AboutCtrl($log, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.currentState = $state.current.name;
        vm.title = 'About';

        activate();

        ////////////////

        function activate() {
            $log.info('Activated About View');
        }
    }
})();