"use strict";
(function () {

    var kenApp = angular.module('kenApp', ['ui.router']);

    kenApp.config(['$stateProvider', '$urlRouterProvider', '$urlServiceProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $urlServiceProvider, $locationProvider) {

            // An array of state definitions
            var states = [

                {
                    name: 'home',
                    url: '/home',
                    // Using component: instead of template:
                    component: 'home'
                },

                {
                    name: 'about',
                    url: '/about',
                    component: 'about'
                },

                {
                    name: 'persons',
                    url: '/persons',
                    component: 'persons',
                    // This state defines a 'persons' resolve
                    // It delegates to the PersonService to HTTP fetch (async)
                    // The persons component receives this via its `bindings: `
                    //resolve: {
                    //    persons: function (PersonService) {
                    //        return [];
                    //    }
                    //}
                },

                {
                    name: 'person',
                    // This state takes a URL parameter called personId
                    url: '/person/{personId}',
                    component: 'person',
                    // This state defines a 'person' resolve
                    // It delegates to the PersonService, passing the personId parameter
                    //resolve: {
                    //    person: function (PersonService, $transition$) {
                    //        return PersonService.getPerson($transition$.params().personId);
                    //    }
                    //}
                }
            ];

            // Loop over the state definitions and register them
            states.forEach(function (state) {
                $stateProvider.state(state);
            });

            // 
            $urlServiceProvider.rules.otherwise({ state: 'home' });

        }]);

})();