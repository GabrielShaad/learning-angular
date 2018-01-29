(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var favorite = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    category = category.toUpperCase();
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      favorite = response.data;
      return response.data;
    });
  };

}



})();
