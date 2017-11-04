(function () {
  'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {


  var itemsctrl = this;
  itemsctrl.items = items.data.menu_items;
  console.log(items);

}

})();
