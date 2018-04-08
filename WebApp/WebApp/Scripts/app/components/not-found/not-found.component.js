"use strict";

(function () {

    angular
        .module('kenApp')
        .component('not-found', {

            templateUrl: RootUrl + 'Scripts/app/components/not-found/not-found.html',
            bindings: {
                data: '<',
                onWhateverClick: '&'
            },
            controller: function () {
            }
        });

})();
