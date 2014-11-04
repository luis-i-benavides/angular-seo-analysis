(function() {
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
                    url: '#!/acme-locations',
                    templateUrl: 'app/locations/acme-locations.html',
                    controller: 'LocationsCtrl',
                    controllerAs: 'vm',
                    data: {
                        menuNavPosition: 3,
                        title: 'Locations'
                    }
                }
            }
        ];
    }
})();
