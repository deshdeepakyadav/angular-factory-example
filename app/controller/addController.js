var addCtrl = angular.module('addCtrl',['myFactory']);


addCtrl.controller('addController',['$scope','myappFactory',function($scope,myappFactory){
	
	
	$scope.customers=myappFactory.getCustomers();
				 
				 
	$scope.add=	function(){
					$scope.customers.push({'name':$scope.nameTxt,'location':$scope.locationTxt})
					$scope.nameTxt="";
					$scope.locationTxt="";
						  }
						  
	

}]);

	 
				 
				 
				 
				 