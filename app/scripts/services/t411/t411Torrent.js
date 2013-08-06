'use strict';




angular.module('t411service').factory('Torrent', function (Properties, $http, T411Auth) {

    var Torrent = {};

    function config (){
        return {
            headers:{
                Authorization: T411Auth.getAuthorization()
            }
        };
    }

    Torrent.top100 = function () {
        return $http.get(Properties.t411EndPoint + '/torrents/top/100/',config()).then(function (data) {
            return data.data;
        });
    };

    Torrent.download = function (id) {
        return $http.get(Properties.t411EndPoint + '/torrents/download/'+id,config()).then(function (data) {
            return data.data;
        });
    }

    return Torrent;
});