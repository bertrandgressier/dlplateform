'use strict';

angular.module('dlplateformApp', ['t411service']);
angular.module('dlplateformApp').config(function ($routeProvider, $httpProvider) {

    $routeProvider.when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        }).when('/connect',{
            templateUrl: 'views/connect.html',
            controller: 'T411ConnectCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
