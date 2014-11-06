(function () {
    'use strict';

    angular
        .module('app.locations')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/acme-locations');
    }

    function getStates() {
        return [
            {
                state: 'locations',
                config: {
                    url: '/acme-locations',
                    templateUrl: 'app/locations/acme-locations.html',
                    controller: 'LocationsCtrl',
                    controllerAs: 'vm',
                    data: {
                        menuNavPosition: 3,
                        title: 'Locations'
                    }
                }
            },
            {
                state: 'locations.redmond-lakes',
                config: {
                    url: '/redmond-lakes',
                    template: '234 Main St.<br>Redmond Lakes, 32569 CA',
                    controller: 'RedmondLakesCtrl'
                }
            },
            {
                state: 'locations.redondo-beach',
                config: {
                    url: '/redondo-beach',
                    template: '123 Broad Ave.<br>Redondo Beach, 32523 CA',
                    controller: 'RedondoBeachCtrl'
                }
            },
            {
                state: 'locations.ventura',
                config: {
                    url: '/ventura',
                    template: '1 Narrow Dr.<br>Ventura, 32678 CA',
                    controller: 'VenturaCtrl'
                }
            }
        ];
    }
})();
