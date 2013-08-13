'use strict';

angular.module('dlplateformApp').controller('TransmissionInfoCtrl', function ($scope,Transmission) {

    $scope.info = Transmission.stats();

});