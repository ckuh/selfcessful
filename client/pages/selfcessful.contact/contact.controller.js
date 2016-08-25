(function() {
  'use strict'

  angular
  .module('selfcessful.contact', [])
    .controller("ContactController", ContactController);

    function ContactController() {
      var vm = this;
      vm.input = {};
      vm.messageSent = false;
      vm.submit = function() {
        vm.input = {};
        vm.messageSent = true;
      }
    }

})();
