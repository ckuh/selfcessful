(function() {
  'use strict'
  angular
  .module('selfcessful.home')
    .directive("selfcessfulCarousel", selfcessfulCarousel);
    function selfcessfulCarousel() {
      var directive = {
        scope: {
          sentimentValue: '='
        },
        templateUrl: '../pages/selfcessful.home/templates/carousel.html',
        restrict: 'E',
        controller: selfcessfulCarouselCtrl,
        controllerAs: 'vm',
        bindToController: true
      };
      return directive;
    }
    selfcessfulCarouselCtrl.$inject = [];
    function selfcessfulCarouselCtrl() {
      var vm = this;
      vm.myInterval = 4000;
      vm.noWrapSlides = false;
      vm.active = 0;

      vm.slides = [{
        id: 0,
        image: '../pictures/ny.jpg',
        text: ['']
      },{
        id: 1,
        image: '../pictures/mks.jpg',
        text: ['']
      },{
        id: 2,
        image: '../pictures/solo_1.jpg',
        text: ['']
      }]
    }
})();
