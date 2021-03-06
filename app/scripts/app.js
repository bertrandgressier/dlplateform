'use strict';

angular.module('dlplateformApp', ['t411service','transmissionservice','ngRoute']);
angular.module('dlplateformApp').config(function ($routeProvider, $httpProvider) {

    $routeProvider.when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        }).when('/connect',{
            templateUrl: 'views/connect.html',
            controller: 'T411ConnectCtrl'
        }).when('/connectTr',{
            templateUrl: 'views/transmissionConnect.html',
            controller: 'TransmissionConnectCtrl'
        }).when('/transmissionInfo',{
            templateUrl: 'views/transmissionInfo.html',
            controller: 'TransmissionInfoCtrl'
        }).when('/results',{
            templateUrl: 'views/main.html',
            controller: 'ResultController'
        }).
        otherwise({
            redirectTo: '/'
        });

    delete $httpProvider.defaults.headers.common['X-Requested-With'];

});
