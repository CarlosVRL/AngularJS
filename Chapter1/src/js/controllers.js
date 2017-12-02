'use strict';
angular
    .module('myApp.controllers', [])
        .controller('helloWorldCtrl', function($scope) {
            $scope.name = "World";
        }); // end controller