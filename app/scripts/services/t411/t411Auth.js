'use strict';


angular.module('t411service').factory('T411Auth', function (Properties, $http, $q) {

    var T411Auth = {};

    T411Auth.connect = function (user, password) {
        return $http.post(Properties.t411EndPoint + '/auth',
             'username='+encodeURIComponent(user)+'&password='+encodeURIComponent(password),
            {headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then(function (data) {

                if (data.data.error){
                    return $q.reject(data.data);
                }

                $http.defaults.headers.common.Authorization=data.data.token;

                return data.data;

        },function(data){
            return $q.reject(data.data);
        });
    };

    return T411Auth;
});