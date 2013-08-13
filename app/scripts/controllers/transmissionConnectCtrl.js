'use strict';

angular.module('dlplateformApp').controller('TransmissionConnectCtrl', function ($scope, $location, Transmission) {

    $scope.user = {server: Transmission.getServer()};

    $scope.connect = function () {
        Transmission.connect($scope.user);
        $location.path('/transmissionInfo');
    };
});
