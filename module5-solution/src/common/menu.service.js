(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    category = category.toUpperCase();
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      service.favorite = response.data;
      return response.data;
    });
  };

  service.setMyInfo = function (signedInfo) {
    service.info = signedInfo;
  };

}



})();
