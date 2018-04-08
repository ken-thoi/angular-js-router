"use strict";

(function () {

    angular
        .module('kenApp')
        .component('person', {
            bindings: { $transition$: '<', person: '<' },
            templateUrl: RootUrl + 'Scripts/app/components/person-details/person-details.html',
            controller: PersonDetailsController
        });

    PersonDetailsController.$inject = ['$scope', '$location', 'PersonService'];

    // controller
    function PersonDetailsController($scope, $location, PersonService) {

        $scope.location = $location;
        $scope.absUrl = $location.absUrl();
        $scope.url = $location.url();
        $scope.host = $location.host();

        $scope.$watch('location.search()', function () {
            $scope.target = ($location.search()).personId;
        }, true);

        $scope.person = {};

        var personId = ($location.search()).personId;

        PersonService
            .getPersonDetails(personId)
            .then(function (response) {
                $scope.person = response.person;
            });
    };

})();