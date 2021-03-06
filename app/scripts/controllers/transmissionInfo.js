'use strict';

angular.module('dlplateformApp').controller('TransmissionInfoCtrl', function ($scope, Transmission, $timeout) {

    $scope.refresh = true;

    function refresh() {

        if (!$scope.refresh) {
            return;
        }

        Transmission.getTorrents().then(function (torrents) {
            return torrents.data['arguments'].torrents;
        }).then(function (torrents) {
                $scope.torrents = torrents;
            });

        $scope.info = Transmission.stats().then(function (stats) {
            return stats.data['arguments'];
        });

        $timeout(function () {
            refresh();
        }, 3000);
    }

    refresh();

    $scope.$watch('refresh', function () {
        if ($scope.refresh) {
            refresh();
        }
    });


});