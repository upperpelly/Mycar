/**
 * 
 */


var mainApp1 = angular.module("mainApp1", []);
	mainApp1.controller('myController1',function($scope,$http) {
		$scope.firstForm = function(valid) {
			//alert("in first form");
			$scope.firstFlag=true;
			if(valid){
				//alert("inside valid");
				$('#first').removeClass('disabled');
		        $('#first1').attr('data-toggle','pill');
		        $('#first1').attr('href','#CarDet');
		        document.getElementById("first1").click();
		        $scope.firstFlag=false;
			}else{
				alert("inside invalid");
			}
			
	        //$('#menu1').show();
	        //$('a#first1').click();
		};
		
		$scope.secondForm = function(valid) {
			//alert("in second form");secondFlag
			$scope.secondFlag=true;
			if(valid){
				$('#second').removeClass('disabled');
		        $('#second1').attr('data-toggle','pill');
		        $('#second1').attr('href','#CarExtr');
		        document.getElementById("second1").click();
		        $scope.secondFlag=false;
			}else{
				alert("inside invalid");
			}
			
	        //$('#second1').click();
	        //$('#menu2').show();
		};
		
		$scope.thirdForm = function() {
			//alert("in third form");
			$('#third').removeClass('disabled');
	        $('#third1').attr('data-toggle','pill');
	        $('#third1').attr('href','#CarPric');
	        document.getElementById("third1").click();	        
		};
		$scope.fourthForm = function(valid) {
			//alert("in four form");fourthFlag
			$scope.fourthFlag=true;
			if(valid){
				$('#four').removeClass('disabled');
		        $('#four1').attr('data-toggle','pill');
		        $('#four1').attr('href','#CarList');
		        document.getElementById("four1").click();
		        $scope.fourthFlag=false;
			}else{
				alert("inside invalid");
			}
			
	        //$('#second1').click();
	        //$('#menu2').show();
		};
		
		$scope.fifthForm = function() {
			//alert("in fifth form");
			$('#five').removeClass('disabled');
	        $('#five1').attr('data-toggle','pill');
	        $('#five1').attr('href','#CarAddrCon');
	        document.getElementById("five1").click();	        
		};
		$body = $("body");
		$body.addClass("loading");
    	$http({
            method : 'GET',
            url : 'api/tempCarModelYears'
        }).then(function mySuccess(response) {
        	 $body.removeClass("loading");
        	 $scope.yearsCar = response.data;
        }, function myError(response) {
        	$scope.yearsCar = response.statusText;
        });
    	
		$scope.makeForYear = function (year){
    		$body.addClass("loading");
    		$scope.MakesCarYear = "";
    		$scope.ModelsCarYearMake = "";
    		$scope.VarsCarYearMakeMod ="";
    		//'api/tempCarModelMakesForYear?modelYear='+$scope.caryearsins
        	$http({
                method : 'GET',
                url : 'api/tempCarModelMakesForYear?modelYear='+year
            }).then(function mySuccess(response) {
            	 $body.removeClass("loading");
            	 $scope.MakesCarYear = response.data;
            }, function myError(response) {
            	$scope.MakesCarYear = response.statusText;
            });
    	}
    	
    	$scope.modelForYearMake = function (make,year){
    		$body.addClass("loading");
    		//'api/tempCarModelNamesForMake?modelDisplay='+$scope.carmakesins+'&modelYear='+$scope.caryearsins
        	$http({
                method : 'GET',
                url : 'api/tempCarModelNamesForMake?modelDisplay='+make+'&modelYear='+year
            }).then(function mySuccess(response) {
            	 $body.removeClass("loading");
            	 $scope.ModelsCarYearMake = response.data;
            }, function myError(response) {
            	$scope.ModelsCarYearMake = response.statusText;
            });
    	}
    	
    	$scope.varForYearMakeMod = function (model,make,year){
    		$body.addClass("loading");
    		//'api/tempCarModelVariantForModel?modelName='+$scope.carmodelsins+'&modelDisplay='+$scope.carmakesins+'&modelYear='+$scope.caryearsins
        	$http({
                method : 'GET',
                url : 'api/tempCarModelTrimForAllSelect?modelName='+model+'&modelDisplay='+make+'&modelYear='+year
            }).then(function mySuccess(response) {
            	 $body.removeClass("loading");
            	 $scope.VarsCarYearMakeMod = response.data;
            }, function myError(response) {
            	$scope.VarsCarYearMakeMod = response.statusText;
            });
    	}
		
		
	});
