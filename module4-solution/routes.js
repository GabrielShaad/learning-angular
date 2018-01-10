(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html'
            })

            .state('categoriesList', {
                url: '/categories',
                templateUrl: 'templates/categories-list.html',
                controller: 'CategoriesListController as categoriesList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories()
                            .then(function (resp) {
                                return resp.data;
                            });
                    }]
                }
            });
    }
})();