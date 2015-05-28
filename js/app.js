/**
 * Created by renerodriguez on 5/26/15.
 */
var app = angular.module('oamFrontPage', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
})

app.controller('frontPage', function($scope, $filter, $http, $location, $window) {

    console.log("hola", $window);

});
