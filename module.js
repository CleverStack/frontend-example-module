/**
 * @file Instantiates and configures angular modules for your module.
 */
define(['angular'], function (ng) {
  'use strict';

  ng.module('frontend_example.controllers', []);
  ng.module('frontend_example.providers', []);
  ng.module('frontend_example.services', []);
  ng.module('frontend_example.factories', []);

  var module = ng.module('frontend_example', [
    'cs_common',
    'frontend_example.controllers',
    'frontend_example.providers',
    'frontend_example.services',
    'frontend_example.factories'
  ]);

  module.config([
    '$routeProvider',
    'CSTemplateProvider',
    function ($routeProvider, CSTemplate) {

      // Set the subfolder of your module that contains all your view templates.
      CSTemplate.setPath('/modules/frontend_example/views');

      // Register any routes you need for your module.
      $routeProvider
        .when('/example', {
          templateUrl: CSTemplate.view('example-view'),
          controller: 'CSExampleController',
          public: true
        });
    }

  ]);

  return module;
});
