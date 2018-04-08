"use strict";

(function () {

    angular
        .module('kenApp')
        .component('home', {

            templateUrl: RootUrl + 'Scripts/app/components/home/home.html',
            bindings: {
                data: '<',
                onWhateverClick: '&'
            },
            controller: function () {
                this.greeting = 'Home page';

                this.toggleGreeting = function () {
                    this.greeting = (this.greeting === 'Home page') ? "What's up" : "Home page";
                }
            }
        });

})();
