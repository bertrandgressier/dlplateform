'use strict';

angular.module('dlplateformApp').controller('MainCtrl', function ($scope,Torrent) {

    Torrent.top100().then(function(top100){
      $scope.top100=top100;
    });
  });
