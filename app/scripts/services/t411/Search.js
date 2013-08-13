'use strict';

angular.module('t411service').factory('Search', function (){
    var Search = {};
    var searchValue = '';


    Search.SetSearchValue = function(value){
       searchValue = value;
    };

    Search.GetSearchValue = function(){
        return searchValue;
    };

    return Search;
});
