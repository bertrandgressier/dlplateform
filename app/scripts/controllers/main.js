'use strict';

angular.module('dlplateformApp').controller('MainCtrl', function ($scope, Torrent, Transmission) {

    Torrent.top100().then(function (top100) {
        $scope.top100 = top100;
    });

    $scope.getIt = function (id) {
        Torrent.download(id).then(function(torrent){
            Transmission.addTorent(torrent);
        });

    };
});
