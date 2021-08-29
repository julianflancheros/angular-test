( function (){
'use strict';

angular.module('countFoodLunch',[])

.controller('countFoodLunchController', function($scope){
    $scope.inputUser = "";
    $scope.wordList = "";

    $scope.displayWords = function () {
        var words = splitStringComma($scope.inputUser);
        $scope.wordList = words;
    };

    function splitStringComma(string){
        var strUser = string;
        var words = strUser.split(',');
        console.log(words);
        return words;
    };


});



})();