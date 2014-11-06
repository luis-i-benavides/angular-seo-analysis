(function() {
    'use strict';

    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);

    /* @ngInject */
    function NavCtrl(routerHelper) {
        /*jshint validthis: true */
        var vm = this;
        vm.menuStates = [];
        vm.stateCounts = routerHelper.stateCounts;

        activate();

        function activate() {
            var states = routerHelper.getStates();
            vm.menuStates = states.filter(function(state) {
                return state.data && state.data.menuNavPosition && state.name.indexOf('.') == -1;
            });
        }
    }
})();