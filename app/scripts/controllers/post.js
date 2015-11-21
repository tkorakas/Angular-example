'use strict';

/**
 * @ngdoc function
 * @name drupal8App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the drupal8App
 */
angular.module('drupal8App')
  .controller('PostCtrl',['$scope', '$routeParams','$http', function ($scope, $routeParams, $http) {
    var nid = $routeParams.nid;

    // Article view.
    $http.get('http://www.drupal8.mac/rest/article/' + nid).then(function(response){
      $scope.post = response.data[0];
    });

  }]);
