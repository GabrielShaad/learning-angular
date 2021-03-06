(function () {
"use strict";

angular.module('public')
.controller('NewsletterController', NewsletterController);

NewsletterController.$inject = ['MenuService'];
function NewsletterController(MenuService) {
  var $ctrl = this;

  $ctrl.getFavorite = function (category) {
    MenuService.getMenuItems(category)
      .then(function() {
        $ctrl.successResponse = true;
        $ctrl.setInfo($ctrl);
      })
      .catch(function() {
        $ctrl.successResponse = false;
      });
  };

  $ctrl.setInfo = function (info) {
    MenuService.setMyInfo(info);
  };
}

})();
