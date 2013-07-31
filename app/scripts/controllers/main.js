'use strict';

angular.module('dlplateformApp').controller('MainCtrl', function ($scope, $log, Torrent) {

    $log.info('coucou');

    Torrent.top100().then(function(data){
      $scope.data=data.data;
    });
  });
