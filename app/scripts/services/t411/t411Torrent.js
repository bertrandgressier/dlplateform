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

        var configMap = config();

        //receive binary
        configMap.responseType = 'arraybuffer';

        return $http.get(Properties.t411EndPoint + '/torrents/download/'+id,configMap).then(function (data) {
            return data.data;
        });
    };

    Torrent.search = function (search) {
        return $http.get(Properties.t411EndPoint + '/torrents/search/'+encodeURIComponent(search)+'&offset=10&limit=10',config()).then(function (data) {
            return data.data.torrents;
        });
    };

    return Torrent;
});