(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        
        function getAllCategories() {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            }).then(function (response) {
                return response.data;
            }).catch(function() {
                console.log('Unsuccessful data request');
            });
        }

        function getItemsForCategory(categoryShortName) {
            var endpoint = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=', categoryShortName
            return $http({
                method: 'GET',
                url: endpoint
            }).then(function (response) {
                return response.data;
            }).catch(function() {
                console.log('Unsuccessful data request');
            });
        }
    }
})();