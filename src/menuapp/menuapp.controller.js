(function () {
  'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['categories'];
function MenuAppController(categories) {


  var datactrl = this;
  datactrl.categories = categories.data;
  console.log(categories);

  // var promise = MenuDataService.getAllCategories();
  // promise.then (function (response) {
  //   var categories = response.data;
  //   datactrl.categories = categories;
  //   // console.log(response.data);
  // });

  // var otherPromise = MenuDataService.getItemsForCategory('L');
  // otherPromise.then (function (response){
  //   var items = response.data.menu_items;
  //   datactrl.items = items;
  // });


}

})();
