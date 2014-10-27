(function() {
    'use strict';

    angular
        .module('app.core')
        .config(configure);

    /* @ngInject */
    function configure(routerHelperProvider) {
        var resolveAlways = { /* @ngInject */
            ready: function($log) {
                return $log.info('Route resolver works!');
            }
        };

        configureStateHelper();

        ////////////////

        function configureStateHelper() {
            routerHelperProvider.configure({
                docTitle: 'wdpr.angular-router demo',
                resolveAlways: resolveAlways,
                errorPath: '/'
            });
        }
    }
})();