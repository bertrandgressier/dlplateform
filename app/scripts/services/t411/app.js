'use strict';

angular.module('t411service',['config']).run(function($http){
    //reload token
    if (localStorage.t411token != null) {
        $http.defaults.headers.common.Authorization = localStorage.t411token;
    }
});
