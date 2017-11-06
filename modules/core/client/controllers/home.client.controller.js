(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController() {
    var vm = this;
    vm.patientName = "";

    vm.patientSearch = function() {
      alert(vm.patientName + " not found because we have no API connection!");
    }
  }
}());
