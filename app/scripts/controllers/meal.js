'use strict';

angular.module('rkcApp')
  .controller('MealCtrl', function ($scope, $http) {
    $http.get('/api/meal').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
