(function (){
'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouteProvider) {
    //fallback to...
    $urlRouteProvider.otherwise('/');


    //states..
    $stateProvider
    //home
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/home.state.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/categories.state.template.html',
      controller: 'MenuAppController as menuapp',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/menuapp/items.state.template.html',
      controller: 'ItemsController as itemsctrl',
      resolve: {
        items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);

        }]
      }
    });
    // $urlRouteProvider.html5Mode(true);
  };

})();
