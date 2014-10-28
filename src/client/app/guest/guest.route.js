(function() {
    'use strict';

    angular
        .module('app.guest')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'guest',
                config: {
                    url: '/guest',
                    templateUrl: 'app/guest/guest.html',
                    controller: 'GuestCtrl',
                    controllerAs: 'vm',
                    data: {
                        menuNavPosition: 3,
                        title: 'Guest'
                    }
                }
            },
            {
                state: 'party',
                config: {
                    url: '/party',
                    templateUrl: 'app/guest/party.html',
                    controller: 'PartyCtrl',
                    controllerAs: 'vm',
                    data: {
                        menuNavPosition: 4,
                        title: 'Party'
                    }
                }
            },
            {
                state: 'error-state',
                config: {
                    url: '/error',
                    templateUrl: 'this-does-not-exist.html',
                    data: {
                        menuNavPosition: 5,
                        title: 'Error'
                    }
                }
            }

        ];
    }
})();
