(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;

    buy.toBuy = ShoppingListCheckOffService.getToBuyItems();

    buy.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.alreadyBought = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
      { name: "cookies", quantity: 10 },
      { name: "soda", quantity: 5 },
      { name: "chocolate", quantity: 3 },
      { name: "ice cream", quantity: 8},
      { name: "milk", quantity: 1 }
    ];

    var alreadyBought = [];

    service.getToBuyItems = function () {
      return toBuy;
    };

    service.getAlreadyBoughtItems = function () {
      return alreadyBought;
    };

    service.buyItem = function (index) {
      alreadyBought.push(toBuy[index]);
      toBuy.splice(index, 1);
    };
  }
})();
