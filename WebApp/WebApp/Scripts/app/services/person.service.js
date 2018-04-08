"use strict";

(function () {

    angular
        .module("kenApp")
        .service("PersonService", ["$http", "Constants", function ($http, Constants) {

            this.getAllPersons = function () {

                return $http({
                    method: "GET",
                    url: RootUrl + "Default/GetAllPersons",
                    contentType: "application/json",
                    cache: false
                }).then(resp => resp.data);
            };

            this.getPersonDetails = function (personId) {

                return $http({
                    method: "POST",
                    url: RootUrl + "Default/GetPersonDetails",
                    contentType: "application/json",
                    cache: false,
                    data: {
                        personId: personId
                    }
                }).then(resp => resp.data);
            };

        }]);

})();