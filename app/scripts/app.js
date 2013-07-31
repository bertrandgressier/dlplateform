'use strict';

angular.module('dlplateformApp', ['t411service']);
angular.module('dlplateformApp').config(function ($routeProvider, $httpProvider ) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common.Authorization = '94785113:212:44e97b74e4acace9da2b32dea7a3ee00';
  });
