var app=angular.module('myApp',[
	'multipleSelect'
]);
app.controller('multiselectController',['$scope', function($scope){
	$scope.optionsList = [
		  {id: 1,  name : "shankarimanohar10@gmail.com"},
		  {id: 2,  name : "nirmalkumar@gmail.com"},
		  {id: 3,  name : "balakumar@gmail.com"},
		  {id: 4,  name : "solomon@gmail.com"},
		  {id: 5,  name : "suresh@gmail.com"},
		  {id: 6,  name : "monoshree@gmail.com"},
		  {id: 7,  name : "atul@gmail.com"},
		  {id: 8,  name : "amit@gmail.com"},
	];
}])