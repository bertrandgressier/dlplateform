'use strict';

angular.module('dlplateformApp').controller('T411ConnectCtrl', function ($scope,T411Auth,$location) {

    $scope.connect=function(){
        T411Auth.connect($scope.user.login, $scope.user.password).then(function(){

            $scope.error='';
            $location.path('/');
        },function(error){
            $scope.error=error;
        });
    }

});
