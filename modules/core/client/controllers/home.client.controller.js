(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($http) {
    var vm = this;
    vm.patientName = "";

    vm.patientSearch = function() {
      $http.get('https://fhirtesting.hdap.gatech.edu/hapi-fhir-jpaserver-example/baseDstu3/Patient?name='+vm.patientName).success(function(data) {
        alert(JSON.stringify(data));
      }).error(function(data) {
        alert("error!" + JSON.stringify(data));
      });
    }
  }
}());
