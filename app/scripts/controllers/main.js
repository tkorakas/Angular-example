'use strict';

/**
 * @ngdoc function
 * @name drupal8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drupal8App
 */
angular.module('drupal8App')
  .controller('MainCtrl',['$scope', '$http', function ($scope, $http) {

    // Articles view.
    $http.get('http://www.drupal8.mac/rest/articles').then(function(response){
      $scope.posts = response.data;
    });
  }]);
