"use strict";

(function () {

    angular
        .module('kenApp')
        .component('persons', {

            bindings: { person: '<' },
            templateUrl: RootUrl + 'Scripts/app/components/persons/persons.html',
            controller: ["$scope", "$rootScope", "PersonService", PersonsController]
        });

    // controller
    function PersonsController($scope, $rootScope, PersonService) {

        $scope.persons = [];

        PersonService
            .getAllPersons()
            .then(function (response) {
                $scope.persons = response.persons;
            });
    };

})();