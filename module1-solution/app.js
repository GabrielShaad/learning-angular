(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.result = "";

    $scope.saveDishes = function () {
      $scope.numOfDishes = $scope.dishes.split(',');
      $scope.checkDishes();
    };

    $scope.checkDishes = function () {
      if ($scope.dishes == "") {
        $scope.result = "Please enter data first";
      } else if ($scope.numOfDishes.length <= 3) {
        $scope.result = "Enjoy!";
      } else if ($scope.numOfDishes.length > 3) {
        $scope.result = "Too much!";
      }
    };
  }
})();
