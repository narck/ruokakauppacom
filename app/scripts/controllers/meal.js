'use strict';

angular.module('rkcApp')
  .controller('MealCtrl', function ($scope, $http, Cartlink) {
    $http.get('/api/meal').success(function(meal) {
        
      $scope.meal = meal;
      $scope.starter = meal.starter;
      $scope.maincourse = meal.maincourse;
      $scope.desserts = meal.desserts;
      $scope.link = Cartlink.generateLink(meal.cart);

    });
  });
