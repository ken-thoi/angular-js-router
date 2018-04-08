"use strict";

angular
    .module("kenApp")
    .factory("SessionInfo", ["$resource", function ($resource) {
        
        return $resource(RootUrl + "Service/GetSessionInfo", {}, {
            getSessionInfo: {
                method: "GET",
                isArray: false
            }
        });
    }]);