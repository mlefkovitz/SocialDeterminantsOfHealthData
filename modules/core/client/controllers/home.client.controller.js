(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($http) {
    var vm = this;
    vm.patientID = "";
    vm.patient = null;
    vm.patientScore = null;
    vm.scoreThreshold = 1.0;

    vm.patientSearch = function() {
      $http.get('https://fhirtesting.hdap.gatech.edu/hapi-fhir-jpaserver-example/baseDstu3/Patient/'+vm.patientID).success(function(data) {
        //bind json response to patient as a FHIR json Patient
        vm.patient = data;
        vm.scoreZip();
      }).error(function(data) {
        alert(data.issue[0].diagnostics);
      });
    }

    vm.scoreZip = function() {
      $http.get('https://fhirtesting.hdap.gatech.edu/SocialDeterminantHealth/scoreZip/' + vm.patient.address[0].postalCode).success(function(data) {
        vm.patientScore = data;
        alert(vm.patientScore);
      }).error(function(data) {
        alert(JSON.stringify(data));
      });


    }

    vm.transportationRisk = function() {
      return vm.patientScore !== null && vm.patientScore <= vm.scoreThreshold;
    }
  }
}());
