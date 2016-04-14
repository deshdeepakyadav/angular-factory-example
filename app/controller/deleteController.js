var removeCtrl = angular.module('removeCtrl',['myFactory']);


removeCtrl.controller('removeController',['$scope','myappFactory',function($scope,myappFactory){

	$scope.customers=myappFactory.getCustomers();
				 

	$scope.remove=function(id){
							$scope.customers.splice(id,1);							
							}					
						  

}]);

	 
				 
				 
				 
				 