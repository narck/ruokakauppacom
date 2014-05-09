'use strict';

angular.module('rkcApp')
  .controller('ProductsCtrl', function ($scope, $http, $routeParams) {
    var sku = $routeParams.id;
    if (sku === undefined) {
    // return to products view
      $http.get('/api/products').success(function(wewProducts) {
        $scope.wewProducts = wewProducts;
      });
    } else {
      $http.get('/api/products/' + sku).success(function(p) {
        $scope.product = p;
      });
    }

  });
