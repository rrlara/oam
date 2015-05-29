/**
 * Created by renerodriguez on 5/26/15.
 */
var app = angular.module('oamFrontPage', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
})

app.controller('frontPage', function($scope, $filter, $http, $location, $window) {

    console.log("hola", $window.innerHeight);


    $scope.imageHeight = $window.innerHeight - 67;

    $scope.myprop = function() {
        return {

            height: $scope.imageHeight + 'px'
        };
    };


});
