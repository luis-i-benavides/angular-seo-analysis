(function() {
    'use strict';

    angular
        .module('app.events')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'events',
                config: {
                    url: '/acme-events',
                    templateUrl: 'app/events/acme-events.html',
                    controller: 'EventsCtrl',
                    controllerAs: 'vm',
                    data: {
                        menuNavPosition: 4,
                        title: 'Events'
                    }
                }
            }
        ];
    }
})();
