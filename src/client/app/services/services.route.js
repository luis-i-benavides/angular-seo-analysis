(function() {
    'use strict';

    angular
        .module('app.services')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/acme-services');
    }

    function getStates() {
        return [
            {
                state: 'services',
                config: {
                    url: '#!/acme-services',
                    templateUrl: 'app/services/acme-services.html',
                    controller: 'ServicesCtrl',
                    controllerAs: 'vm',
                    data: {
                        menuNavPosition: 2,
                        title: 'Services'
                    }
                }
            }
        ];
    }
})();
