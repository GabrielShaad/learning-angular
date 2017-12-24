(function() {
    'use strict';

    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var foundItems = this;
        var found = {};
        var searched = {};

        var menu = MenuSearchService.getMatchedMenuItems();

        menu.then(function(response) {
            found = response.data;
            console.log(found);
        })
        .catch(function(error) {
            console.log('Could not reach out to the server: ', error);
        });

        foundItems.search = function(searchTerm) {
            searched = found.menu_items.filter(function(item) {
                if (item.description.includes(searchTerm)) {
                    return true;
                } else {
                    return false;
                }
            });

        };
    };

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function() {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            });

            return result;
        }
    }
})();