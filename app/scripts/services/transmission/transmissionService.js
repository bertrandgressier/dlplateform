'use strict';

angular.module('transmissionservice', ['localStorage']);

angular.module('transmissionservice').factory('Transmission', function ($http, $q, $log, $window,localStorageService) {

    var Transmission = {};

    var tranmissionConfig = localStorageService.get('transmission');

    var session;


    function config() {
        return {
            headers: {
                Authorization: 'Basic ' + tranmissionConfig.auth,
                'X-Transmission-Session-Id': session
            }
        };
    }

    Transmission.connect = function (connect) {

        tranmissionConfig = {
            server : connect.server,
            auth: $window.btoa(connect.login + ':' + connect.password)
        };

        localStorageService.add('transmission', tranmissionConfig );
    };

    Transmission.getServer = function () {

        if (tranmissionConfig){
            return tranmissionConfig.server;
        }

        return null;
    };

    function callRPC(transmissionOption) {

        $log.debug('transmission call '+transmissionOption.method);

        return $http.post(tranmissionConfig.server, transmissionOption, config()).then(function (data) {
            return data;
        }, function (data) {

            if (data.status === 409) {

                session = data.headers('X-Transmission-Session-Id');

                return callRPC(transmissionOption);
            } else {
                return $q.reject(data);
            }
        });
    }

    Transmission.stats = function () {

        return callRPC({
                method: 'session-stats',
                tag:0
            });
    };


    Transmission.addTorent = function (torrent) {

        var base64Torrent=  $window.btoa(String.fromCharCode.apply(null, new Uint8Array(torrent)));
        return   callRPC({
                method: 'torrent-add',
                arguments:{metainfo:base64Torrent}
            });

        //TODO listen callback and reject call if added torrent in transmission failed @see RPC transmission doc : https://trac.transmissionbt.com/browser/trunk/extras/rpc-spec.txt
    };

    return Transmission;
});