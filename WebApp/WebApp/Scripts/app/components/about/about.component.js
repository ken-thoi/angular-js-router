"use strict";

(function () {

    angular
        .module('kenApp')
        .component('about', {

            template:
                '<h4>Its the UI-Router</h4>' +
                '<div ng-cloak>Hello {{AppName}} System app</div>',
            bindings: {
                data: '<',
                onWhateverClick: '&'
            },
            controller: ['$scope', 'Constants', function ($scope, Constants) {

                $scope.AppName = Constants.App.ApplicationName;
            }]
        });

})();