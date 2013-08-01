

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
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common.Authorization = '94785113:212:57e0f24c08fcdce6833d5ad6fbe7a04c';

    console.log($httpProvider.defaults.headers.common);
  });

