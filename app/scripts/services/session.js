'use strict';

angular.module('rkcApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
