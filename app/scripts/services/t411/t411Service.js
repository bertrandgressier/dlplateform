'use strict';

angular.module('t411service').factory('T411Authz', function (Properties, $http) {

    var T411Authz = {};

    T411Authz.connect = function (login, password) {
        return $http.post(Properties.t411EndPoint + '/auth/', {
            username: login,
            secret: password
          });
      };

    return T411Authz;
  });