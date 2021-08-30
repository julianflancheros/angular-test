( function (){
    'use strict';

    angular.module('checkLunch',[])

    .controller('checkLunchController', checkLunchController);
    checkLunchController.$inject = ['$scope'];

    function checkLunchController($scope){
        $scope.inputUser = "";
        $scope.wordList = "";
        $scope.message = "";
        $scope.checked = false;

        $scope.checkLunch = function () {
            /*console.log($scope.inputUser.length != 0);*/
            if ($scope.inputUser.length != 0){
                $scope.checked = true;
                splitStringComma($scope.inputUser);
                /*console.log($scope.wordList);*/
            }
            else{
                $scope.empty = true;
            }
        };

        function splitStringComma(string){
            var words = string.split(',');
            $scope.wordList = words;
            var result = validateLengthInputUser(words);
            /*console.log("the list of words ingresed by the user was: " + words + " and the result the system was " +result);*/
            return result;
        };

        function validateLengthInputUser(string){
            if(string.length <=3){
                $scope.message = 'Enjoy!';
            }else {
                $scope.message = 'Too much!';
            }
            return $scope.message;
        };
    
    }
})();