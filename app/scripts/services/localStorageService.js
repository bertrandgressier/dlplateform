'use strict';

angular.module('localStorage', []);

// Set a prefix to identify all data in the local storage as wikeo data
angular.module('localStorage').value('appPrefix', 'dlp');

angular.module('localStorage').factory('localStorageService',function(appPrefix) {

    return {
        add: function(key, value) {
            // Convert undefined values to null to get the value consistent
            if (typeof value === 'undefined') {
                value = null;
            }

            if (angular.isObject(value) || angular.isArray(value)) {
                value = angular.toJson(value);
            }

            localStorage.setItem(appPrefix + key, value);
        },
        get: function(key) {
            var item = localStorage.getItem(appPrefix + key);

            if (!item) {
                return null;
            }

            if (item.charAt(0) === '{' || item.charAt(0) === '[') {
                return angular.fromJson(item);
            }
            return item;
        }
    };
});