define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('frontend_example.controllers')
  .controller('ExampleController', [
    '$scope',
    function ($scope) {
      $scope.something = 'Example Module';
    }

  ]);

});
