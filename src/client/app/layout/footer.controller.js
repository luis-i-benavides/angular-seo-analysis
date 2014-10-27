(function() {
    'use strict';

    angular
        .module('app')
        .controller('FooterCtrl', FooterCtrl);

    /* @ngInject */
    function FooterCtrl(routerHelper) {
        /*jshint validthis: true */
        var vm = this;
        vm.stateCounts = routerHelper.stateCounts;
    }
})();