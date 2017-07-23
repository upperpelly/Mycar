/**
 * 
 */

function setting(data){
    	//alert("cameheretoset");
    	//$.jStorage.deleteKey(key);
    	/*console.log(data);
    	alert(data);*/
    	$.jStorage.set('Akey',data);
    	$.jStorage.setTTL('mykey1', 3000000000); // expires in 3 seconds
             // alert("came here");

    }
/*
function signingout(){
	
	 $.jStorage.deleteKey("Akey");
	 alert("Successfully Logged Out");
	 window.location="Ad_Betav1.html";
}
*/
var mainApp1 = angular.module("mainApp1", []);
mainApp1
    .controller(
    'myController1',
    function ($scope, $http) { 
    	
    	$scope.logValidation = function(valid){
    		//$body = $("body");
    		if(valid){
    			//$body.addClass("loading");
    			var jsonInputToAPI = { "userName": $scope.username, "password": $scope.password };
        		//'api/tempCarModelMakesForYear?modelYear='+$scope.caryearsins
        				/* alert($scope.username);
        				alert($scope.password); */
            	$http({
                    method : 'POST',
                    url : 'api/adminlo/login1',
                    data: jsonInputToAPI
                }).then(function mySuccess(response) {
                	 //$body.removeClass("loading");
                	 /* console.log(response); */
                	 setting(response.data);/* 
                	 alert(response.data)
                	 alert("1"+response.status);
                	 alert("2"+response.status.value);
                	 alert("3"+response.value);
                	 alert("4"+response.userName);
                	 alert("5"+response.password); */
                	 //alert("successful");
                	 if(response.status == "200"){
                		 var url = "AutoscoopAdmin.html";
                         window.location = url;	 
                	 }
                	 else{
                		 alert("Please enter correct credentials");
                	 }
                	 
                }, function myError(response) {
                	alert("Please enter correct credentials");
                });
    		}
    		
    	}
    });