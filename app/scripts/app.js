'use strict';

angular.module('dlplateformApp', ['t411service']);
angular.module('dlplateformApp').config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
