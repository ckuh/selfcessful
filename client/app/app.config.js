(function() {
  'use strict'
  angular
  .module('selfcessful.config', [])
    .config(config);
    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          auth: false,
          templateUrl: '../pages/selfcessful.home/templates/home.html',
          controller: 'HomeController as vm'
        })
        .state('apparel', {
          url: '/apparel',
          auth: false,
          templateUrl: '../pages/selfcessful.apparel/templates/apparel.html',
          controller: 'ApparelController as vm'
        })
      $urlRouterProvider
        .otherwise('/home');
    }
})();
