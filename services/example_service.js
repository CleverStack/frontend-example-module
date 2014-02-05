define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('frontend_example.services')
  .service('ExampleService', [
    '$http',
    function ($http) {

      return {

        example: function () {
          return $http.get('/example')
            .then(function(response){
              return response.data;
            });
        }

      };

    }

  ]);

});
