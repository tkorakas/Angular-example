'use strict';

/**
 * @ngdoc overview
 * @name drupal8App
 * @description
 * # drupal8App
 *
 * Main module of the application.
 */
var app = angular
  .module('drupal8App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$httpProvider','$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {

    $httpProvider.defaults.headers.common.Accept = 'application/hal+json';

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/post/:nid', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);
