(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;
        
        service.getAllCategories = function () {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
            var endpoint = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=', categoryShortName;
            return $http({
                method: 'GET',
                url: endpoint
            }).then(function (response) {
                service.items = response.data;
            }).catch(function() {
                console.log('Unsuccessful data request');
            });
        }
    }
})();