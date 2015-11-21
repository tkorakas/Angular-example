'use strict';

/**
 * @ngdoc function
 * @name drupal8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the drupal8App
 */
angular.module('drupal8App')
  .controller('CreateCtrl',['$scope', '$http', function ($scope, $http) {
    var data = {};

    // Data.
    $scope.create = function(){
      data.title = [{"value":$scope.title}];
      data.type = [{"target_id":"article"}];
      data.body = [{"value":$scope.body}];
      data._links = {"type":{"href":"http://www.drupal8.mac/rest/type/node/article"}}

      $http({
        url: "http://www.drupal8.mac/entity/node",
        method: "POST",
        data: data,
        headers: {
          "Authorization": "Basic YWRtaW46YWRtaW4=", // Base 64 encrypted password "admin/admin"
          "Content-Type": "application/hal+json",
        },
      })
        .success(function(data, status, headers, config){
          $scope.data = data;
          $scope.title = "";
          $scope.body = "";
          });
    }

  }]);
