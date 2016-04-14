var showDataCtrl = angular.module('showDataCtrl',['myFactory']);


showDataCtrl.controller('showDataController',['$scope','myappFactory',function($scope,myappFactory){
	
	$scope.customers=myappFactory.getCustomers();
						  

}]);

	 
				 
				 
				 
				 