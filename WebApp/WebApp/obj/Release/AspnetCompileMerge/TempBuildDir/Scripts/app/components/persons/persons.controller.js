"use strict";

(function () {

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