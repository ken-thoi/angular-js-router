angular
    .module("kenApp")
    .service("HelperApi", ["Constants", function (Constants, DeviationRequestApi) {

        this.makeDelegateHeaders = function (delegateFor) {
            var headers = {};
            headers[Constants.HttpHeader.Delegation] = delegateFor;

            return headers;
        };

        this.setTouchedForFieldAll = function (form, isTouched) {
            
            angular.forEach(form.$error, function (field) {
                angular.forEach(field, function (errorField) {
                    if (isTouched) {
                        errorField.$setTouched();
                    } else {
                        errorField.$setUntouched();
                    }
                });
            });
        };

    }]);