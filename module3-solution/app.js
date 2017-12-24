(function() {
    'use strict';

    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var foundItems = this;
        var menu = MenuSearchService;

        menu.getMatchedMenuItems();

        foundItems.search = function (searchTerm) {
            menu.search(searchTerm);
            foundItems.items = menu.getItems();
        }

        foundItems.removeItem = function (itemIndex) {
            menu.removeItem(itemIndex);
        }
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;
        var menu = {};
        var searched = [];

        service.getMatchedMenuItems = function () {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (response) {
                menu = response.data;
            })
            .catch(function(error) {
                console.log('Could not reach out to the server: ', error);
            });
        }

        service.search = function (searchTerm) {
            searched = [];
            if (searchTerm) {
                searched = menu.menu_items.filter(function (item) {
                    if (item.description.includes(searchTerm)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        }

        service.getItems = function () {
            return searched;
        }

        service.removeItem = function (itemIndex) {
            searched.splice(itemIndex, 1);
        }
    }

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'foundItems',
            bindToController: true
        }

        return ddo;
    }
})();