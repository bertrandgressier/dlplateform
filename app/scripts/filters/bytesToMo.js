'use strict';

angular.module('dlplateformApp').filter('bytesToMo', function () {
    return function (input) {
        var fileSize = Math.round(parseFloat(input) / 1000000);
        if (fileSize < 1000) {
            return fileSize + ' Mo';
        } else {
            return Math.round(fileSize / 10) / 100 + ' Go';
        }


        //return parseFloat(input/1000000);
    };
});


//return parseFloat(input)/8000000;

