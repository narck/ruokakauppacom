'use strict';

angular.module('rkcApp')
  .controller('FoodCtrl', function ($scope, $http) {
    $http.get('/api/products/foods').success(function(foodProducts) {
      $scope.foodProducts = foodProducts;
    });
  });
