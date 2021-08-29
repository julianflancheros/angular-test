(function (){
'use strict';

angular.module('MyFirstApp', [])

.controller('MyFirstController', function($scope){
    $scope.name = "Julian";
    $scope.sayHello = function (){
        return "Hello Coursera!";
    };
});

})();