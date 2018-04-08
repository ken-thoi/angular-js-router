"use strict";

angular
    .module("kenApp")
    .service("TitleRequestApi", ["$http", "$q", "Constants", "HelperApi", function ($http, $q, Constants, HelperApi) {
        
        this.getTitles = function (employeeId) {
            return $http({
                method: "POST",
                url: RootUrl + "Service/GetTitles",
                cache: false,
                contentType: "application/json",
                data: { employeeId: employeeId }
            });
        }

        this.removeAllTitles = function (employeeId) {
            return $http({
                method: "POST",
                url: RootUrl + "Service/RemoveAllTitles",
                cache: false,
                contentType: "application/json",
                data: { employeeId: employeeId }
            });
        }

        this.insertUpdateTitles = function (employeeId, titles) {
            return $http({
                method: "POST",
                url: RootUrl + "Service/InsertUpdateTitles",
                cache: false,
                contentType: "application/json",
                data: { employeeId: employeeId, titles: titles }
            });
        }
    }]);