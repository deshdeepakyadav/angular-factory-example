var myFact = angular.module('myFactory',[]);

myFact.factory('myappFactory',function(){
var customers=[
					{"name":"Desh","location":"Noida"},
					{"name":"Deepak","location":"Delhi"},
					{"name":"Ajay","location":"Noida"},
					{"name":"Shiv","location":"Delhi"},
					{"name":"Manjeet","location":"Chandigarh"}
			  ];
			
var factoryObj={};
factoryObj.getCustomers= function(){
								return customers;
								}

return factoryObj;						  

});

		 
				 
				 
				 