"use strict";

(function () {

    angular
        .module('kenApp')
        .component('person', {
            bindings: { $transition$: '<', person: '<' },
            templateUrl: RootUrl + 'Scripts/app/components/person-details/person-details.html',
            controller: PersonDetailsController
        });

    // inject into controller
    PersonDetailsController.$inject = ['$scope', '$location', 'PersonService'];

    // controller
    function PersonDetailsController($scope, $location, PersonService) {

        $scope.absUrl = $location.absUrl();
        $scope.host = $location.host();
        $scope.url = $location.url();
        $scope.path = $location.path();
        $scope.search = $location.search();

        //$scope.templateUrl = $route.current.templateUrl;
        //$scope.params = $route.current.params;
        //$scope.scopeName = $route.current.scope.name;
        //$scope.routeParams = $routeParams;

        $scope.$watch('location.search()', function () {
            $scope.target = $scope.search.personId;
        }, true);

        $scope.person = {};

        var personId = $scope.search.personId;

        PersonService
            .getPersonDetails(personId)
            .then(function (response) {
                $scope.person = response.person;
            });
    };

})();