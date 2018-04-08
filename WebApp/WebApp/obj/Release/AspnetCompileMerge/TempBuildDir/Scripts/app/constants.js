"use strict";

(function () {

    angular
        .module("kenApp")
        .constant("Constants", {

            HttpHeader: {
                Delegation: "Delegated"
            },

            App: {
                ApplicationName: "Ken Thoi"
            },

            Messages: {
                Confirm: "Are you sure?",
                ConfirmWithdraw: "Are you sure to withdraw the application?",
            },

            DataSources: {
                YesNoNull: [
                    { Name: "", Value: null },
                    { Name: "Yes", Value: true },
                    { Name: "No", Value: false }
                ]
            },

            ErrorPath: {
                Unauthorized: "/error/unauthorized"
            }
        });

})();