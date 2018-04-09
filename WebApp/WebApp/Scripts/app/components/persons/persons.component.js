"use strict";

(function () {

    angular
        .module('kenApp')
        .component('persons', {
            bindings: { person: '<' },
            templateUrl: RootUrl + 'Scripts/app/components/persons/persons.html',
            controller: ["$scope", "$rootScope", "$timeout", "PersonService", PersonsController]
        });

    // controller
    function PersonsController($scope, $rootScope, $timeout, PersonService) {

        $scope.isLoaded = false;

        $scope.persons = [];

        // init data
        $scope.init = function init() {
            PersonService
                .getAllPersons()
                .then(function (response) {
                    $scope.persons = response.persons;
                })
                .catch(function (error) {
                    /* potentially some code for generating an error specific message here */
                    $scope.persons = [];
                })
                .finally(function () {
                    $scope.isLoaded = true;
                });
        };

        // call init function
        $scope.init();
    };

})();