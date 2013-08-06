'use strict';

angular.module('dlplateformApp').controller('TransmissionConnectCtrl', function ($scope, $location, Transmission) {

    $scope.user={server:Transmission.getServer()};

    $scope.connect=function(){
        Transmission.connect($scope.user).then(function(){

            $scope.error='';
            $location.path('/');
        },function(error){
            $scope.error=error.data;
        });
    };

});
