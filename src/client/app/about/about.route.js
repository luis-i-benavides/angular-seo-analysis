(function() {
    'use strict';

    angular
        .module('app.about')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'about',
                config: {
                    url: '/',
                    templateUrl: 'app/about/acme-about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'vm',
                    data: {
                        menuNavPosition: 1,
                        title: 'About'
                    }
                }
            }
        ];
    }
})();
