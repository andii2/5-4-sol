(function () {
  'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['MenuDataService'];
function MenuAppController(MenuDataService) {


  var datactrl = this;

  var promise = MenuDataService.getAllCategories();

  promise.then (function (response) {
    var categories = response.data;
    datactrl.categories = categories;
    // console.log(response.data);
  });



}

})();
