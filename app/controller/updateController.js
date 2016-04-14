var updateCtrl = angular.module('updateCtrl',['myFactory']);


updateCtrl.controller('updateController',['$scope','myappFactory',function($scope,myappFactory){
	
	$scope.customers=myappFactory.getCustomers();
					
	$scope.edit=function(id){
							for(i in $scope.customers){
							if(i==id){
							$scope.nameTxt=$scope.customers[i].name;
							$scope.locationTxt=$scope.customers[i].location;
							$scope.idTxt=id;
							}
							}
						  }
	$scope.update=	function(ids){
					for(i in $scope.customers){
					if(i==ids){
					$scope.customers[i].name=$scope.nameTxt;
					$scope.customers[i].location=$scope.locationTxt;
					$scope.nameTxt="";
					$scope.locationTxt="";
					$scope.idTxt="";
							  }
							}
				    }					
						  

}]);

	 
				 
				 
				 
				 