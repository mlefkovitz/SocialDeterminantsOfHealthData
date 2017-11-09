(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($http) {
    var vm = this;
    vm.patientID = "";

    vm.patientSearch = function() {
      $http.get('https://fhirtesting.hdap.gatech.edu/hapi-fhir-jpaserver-example/baseDstu3/Patient/'+vm.patientID).success(function(data) {
        alert(JSON.stringify(data));
      }).error(function(data) {
        alert(data.issue[0].diagnostics);
      });
    }
  }
}());
