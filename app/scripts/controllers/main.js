'use strict';

angular.module('dlplateformApp').controller('MainCtrl', function ($scope, Torrent, Transmission) {

    Torrent.top100().then(function (top100) {
        $scope.top100 = top100;
    });

    $scope.getIt = function (id) {
        Torrent.download(id).then(function(torrent){
            Transmission.addTorent(torrent);
        });
    };
});


angular.module('dlplateformApp').controller('SearchController', function($scope, $location, $route, Search){
    $scope.performSearch = function(){

        Search.SetSearchValue($scope.currentSearch);
        if($location.path() == "/results") $route.reload();
        else $location.path("/results");
    };
});

angular.module('dlplateformApp').controller('ResultController', function($scope, Torrent, Search){
        Torrent.search(Search.GetSearchValue()).then(function(searchdatas){
            $scope.top100 = searchdatas;
        });
});