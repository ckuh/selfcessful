(function() {
  'use strict'
  angular
  .module('selfcessful.apparel')
    .directive("selfcessfulItems", selfcessfulItems);
    function selfcessfulItems() {
      var directive = {
        scope: {
          sentimentValue: '='
        },
        templateUrl: '../pages/selfcessful.apparel/templates/items.html',
        restrict: 'E',
        controller: selfcessfulItemsCtrl,
        controllerAs: 'vm',
        bindToController: true
      };
      return directive;
    }
    selfcessfulItemsCtrl.$inject = [];
    function selfcessfulItemsCtrl() {
      var vm = this;

      vm.items = [{
        id: 'Selfcessful-Shirt',
        image: '../pictures/shirt.png',
        text: '24.99'
      },{
        id: 'Selfcessful-Tank',
        image: '../pictures/tank.png',
        text: '19.99'
      }]
    }
})();
