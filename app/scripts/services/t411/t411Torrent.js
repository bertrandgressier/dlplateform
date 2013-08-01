'use strict';




angular.module('t411service').factory('Torrent', function (Properties, $http) {

    var Torrent = {};

    Torrent.top100 = function () {
        return $http.get(Properties.t411EndPoint + '/torrents/top/100/').then(function (data) {
            return data.data;
        });
    };

    return Torrent;
});