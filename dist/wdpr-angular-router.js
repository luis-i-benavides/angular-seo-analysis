(function() {
    'use strict';

    angular
        .module('wdpr.angular-router', ['ui.router']);
})();;(function() {
    'use strict';

    angular
        .module('wdpr.angular-router')
        .provider('routerHelper', routerHelperProvider);

    /**
     * Provider for the routeHelper service. Configures the optional
     * settings of document title and the resolveAlways
     * @param  {Object} $locationProvider  - UI Router's $locationProvider
     * @param  {Object} $stateProvider     - UI Router's $stateProvider
     * @param  {Object} $urlRouterProvider - UI Router's $urlRouterProvider
     * @return {Object}                    - The routeHelperProvider
     */
    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        var config = {
            docTitle: '',
            errorPath: '/',
            resolveAlways: {}
        };

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        /**
         * Configure the docTitle and resolveAlways settings
         * @param  {Object} cfg - The configuration object to merge in
         * @return {Object}     - The updates configuration object
         */
        this.configure = function(cfg) {
            if (cfg) {
                angular.extend(config, cfg);
            }
            return config;
        };

        /**
         * Instantiates the Constructor for the routeHelper service
         * and returns it when requsted via dependency injection.
         * @param  {Object} $location  - Angular's $location service
         * @param  {Object} $rootScope - Angular's $rootScope service
         * @param  {Object} $state     - Angular's $state service
         * @param  {Object} $log       - Angular's $log service
         * @return {Object}            - The isntance of the routeHelper service
         *
         * @ngInject
         */
        this.$get = function RouterHelper($location, $rootScope, $state, $log) {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;
            ///////////////

            /**
             * Configure the states
             * @param  {Array} states         - List of states to define with the $stateProvider
             * @param  {String} otherwisePath - The path to go when an undefined state is encountered
             * @return {Array} states
             */
            function configureStates(states, otherwisePath) {
                if (!states) { return; }
                states.forEach(function(state) {
                    if (!state.data) { state.data = {}; } 
                    state.data.resolve =
                        angular.extend(state.data.resolve ? state.data.resolve : {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
                return getStates();
            }

            /**
             * Route cancellation:
             * On routing error, go to the dashboard.
             * Provide an exit clause if it tries to do it twice.
             */
            function handleRoutingErrors() {
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) { return; }
                        stateCounts.errors++;
                        handlingStateChangeError = true;
                        var destination = (toState && (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                            'unknown target';
                        var msg = 'Error routing to ' + destination + '. ' +
                            (error.data || '') + '. <br/>' + (error.statusText || '') +
                            ': ' + (error.status || '');
                        //TODO extension point for wdpr-logger
                        $log.warn(msg, [toState]); 
                        $location.path(config.errorPath);
                    }
                );
            }

            /**
             * initialize the RouteHelper service
             */
            function init() {
                handleRoutingErrors();
                updateDocTitle();
            }

            /**
             * Get all states
             * @return {Array} states
             */
            function getStates() { return $state.get(); }

            /**
             * Update the browser's document title
             * @return {String} document title
             */
            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess', stateChangeSuccessCompleted);

                /**
                 * Fires when a state successfully changes
                 * @param  {Object} event      - The event that fired
                 * @param  {Object} toState    - The state it transitioned to
                 * @param  {Object} toParams   - The state it transitioned to parameters
                 * @param  {Object} fromState  - The state it transitioned from
                 * @param  {Object} fromParams - The state it transitioned from parameters
                 */
                function stateChangeSuccessCompleted(event, toState, toParams, fromState, fromParams) {
                    stateCounts.changes++;
                    handlingStateChangeError = false;
                    var title = config.docTitle + ' ' + (toState.title || '');
                    $rootScope.title = title; // data bind to <title>
                }
            }
        };
    }
})();
