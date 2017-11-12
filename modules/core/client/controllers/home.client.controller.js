(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($http) {
    var vm = this;
    vm.patientID = "";
    vm.patient = null;

    vm.patientSearch = function() {
      $http.get('https://fhirtesting.hdap.gatech.edu/hapi-fhir-jpaserver-example/baseDstu3/Patient/'+vm.patientID).success(function(data) {
        //bind json response to patient as a FHIR json Patient
        alert(JSON.stringify(data.address[0].postalCode));
        vm.patient = data;
      }).error(function(data) {
        alert(data.issue[0].diagnostics);
      });
    }

    vm.transportationRisk = function() {
      if(vm.patient) { //TODO: add logic here
        return true;
      }
      else {
        return false;
      }
    }
  }
}());
