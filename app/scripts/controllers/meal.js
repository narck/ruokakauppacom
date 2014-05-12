'use strict';

angular.module('rkcApp')
  .controller('MealCtrl', function ($scope, $http) {
    $http.get('/api/meal').success(function(meal) {
        
      $scope.meal = meal;
      $scope.starter = meal.starter;
      $scope.maincourse = meal.maincourse;
      $scope.desserts = meal.desserts;

    });
  });
