'use strict';

angular.module('dlplateformApp').controller('MainCtrl', function ($scope, $log, T411Authz) {

    $log.info('coucou');

    T411Authz.connect('mortadeo','G1seedbox&');
  });
