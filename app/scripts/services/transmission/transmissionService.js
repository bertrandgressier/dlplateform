'use strict';

angular.module('transmissionservice', []);

angular.module('transmissionservice').factory('Transmission', function ($http, $q) {

    var Transmission = {};

    var server = localStorage.transmissioServer;
    var auth = localStorage.transmissionAuth;

    var session;


    function config() {
        return {
            headers: {
                Authorization: 'Basic ' + auth,
                'X-Transmission-Session-Id': session
            }
        };
    }

    Transmission.connect = function (connect) {

        localStorage.transmissioServer = connect.server;
        server = connect.server;

        auth = btoa(connect.login + ':' + connect.password);
        localStorage.transmissionAuth = auth;
    };

    Transmission.getServer = function () {
        return localStorage.transmissioServer;
    };

    function callRPC(options) {
        return $http.post(server, options, config()).then(function (data) {
            return data;
        }, function (data) {

            if (data.status === 409) {

                session = data.headers('X-Transmission-Session-Id');
                console.log(session);


                return callRPC(options);
            } else {
                return $q.reject(data);
            }
        });
    }

    Transmission.stats = function () {
        return callRPC({
                method: 'session-stats',
                tag:6667
            });
    };

    Transmission.addTorent = function (torrent) {
        return callRPC({
            method: 'torrent-add',
            arguments:{metainfo:torrent},
            tag:6668
        });
    };


    return Transmission;
});