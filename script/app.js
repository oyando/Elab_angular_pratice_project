var app = angular.module("myapp", []);
app.controller("LeftSideController", function($scope) {
$scope.helloTo = {};
$scope.title = "Doctor's Panel";
$scope.patient_form = true;
$scope.doctor_panel = false; 
// shows patient form when add patient button is clicked
$scope.showPatientForm = function() {
    $scope.patient_form = !$scope.patient_form;
    $scope.doctor_panel = !$scope.doctor_panel;
};


//Insuance
$scope.insurance = false;
$scope.hasInsurance = function(){
    $scope.insurance = !$scope.insurance;  
}
//test
$scope.addtest = true;
$scope.addtestForm = false;
$scope.addTest = function(){
    $scope.addtest = !$scope.addtest;
    $scope.addtestForm = !$scope.addtestForm;
}
$scope.Insurance=[{company:'Company',memberNo:'membr'}];
$scope.Tests=[{specimen:'Saliva',lab_test:'Saliva Test',lab:'lab C'}];
$scope.Patients = [{firstName:'John',middleName:'Doe',lastName:'Unknown',dob:'01/01/1900',phone:'0712345678',email:'johndoe@me.com',insuranc:$scope.Insurance,tests:$scope.Tests,diagnosis:'diagnosis'}];

});



