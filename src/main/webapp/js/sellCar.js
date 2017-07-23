/**
 * 
 */


var mainApp1 = angular.module("mainApp1", []);
	mainApp1.controller('myController1',function($scope,$http) {
		
		 $scope.submitSearchForm = function() {
         	alert("invoke");
         	if (alreadyLogged()) {
     				$('.result').html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>Saving,Please wait...');
                     userId = $.jStorage.get('key').userId;
						/*var autobid=false;
						autobid = document.getElementById("autoBid").value;
						*///var classified = document.getElementById("postClassified").value;
						//alert("Came here c"+autobid);			SellvehicleType
						var jsonInputToAPI = {
															"refId":35,
													"modelYear": $scope.sellVehYear,
													"modelDisplay": $scope.SellVehMake,
													"modelName": $scope.sellVehModel,															      
													"modelTrim": $scope.sellVehAutotrim,
													"typeOfCar": $scope.vehicleCondition,
													"vehicleDescriptin": $scope.headText,
													"make": $scope.financeOwning,
													"variant": $scope.getOffers,
													"price": $scope.displayPrice,
													"bodyType":$scope.classAdv,
													"transmission": $scope.autoQuote,
													"fuelType": $scope.addrSell,
													"engine": null,
													"regNo": $scope.regno,
													"driveType": $scope.driveType,
													"kilometer": 120,
													"extColor": $scope.extColor,
													"warranty": null,
													"regExpiryDate": $scope.RegExpDate,
													"vinNumber": $scope.vinnumber,
													"vendorStockNo": $scope.stockNo,
													"noOfDoors": 0,
													"intColor": $scope.intColor,
													"wheelSize": $scope.labelOnVehicle,
													"seatMake": $scope.sellCarAddNotes,
													"extFittingFlex1": $scope.extraExternal1,
													"extFittingFlex2": $scope.extraExternal2,
													"extFittingFlex3": $scope.extraExternal3,
													"extFittingFlex4": $scope.extraExternal4,
													"extFittingFlex5": $scope.extraExternal5,
													"extFittingFlex6": $scope.extraExternal6,
													"extFittingFlex7": null,
													"extFittingFlex8": null,
													"extFittingFlex9": null,
													"extFittingFlex10": $scope.extraInternal11,
													"intFittingFlex1": $scope.extraInternal1,
													"intFittingFlex2": $scope.extraInternal2,
													"intFittingFlex3": $scope.extraInternal3,
													"intFittingFlex4": $scope.extraInternal4,
													"intFittingFlex5": $scope.extraInternal5,
													"intFittingFlex6": $scope.extraInternal6,
													"intFittingFlex7": $scope.extraInternal7,
													"intFittingFlex8": $scope.extraInternal8,
													"intFittingFlex9": $scope.extraInternal9,
													"intFittingFlex10": $scope.extraInternal10,
													"salePersonLooking": $scope.accidentHistory,
													"contName": $scope.conName,
													"contPhone": $scope.MobNum,
													"contEmail": null,
													"logBookService": $scope.roadCert,//road certification
													"cameIntoInv": null,
													"counterOfViewingCar": 0,
													"counterOfEnquiryCar": 0,
													"saleDate": null,
													"features": [],
													"photos": [],
													"carColor": $scope.extColor,
													"state": $scope.regState,
													"region": $scope.SellvehicleType,
													"postCode":$scope.postcode11,
													"yearOfMake": null,
													"ausCapTer": null,
													"insCompAmountMin": 0,
													"insCompAmountMax": 0,
													"dealAmountMin": $scope.QRangeMin,
													"dealAmountMax": $scope.QRangeMax,
													"insthirdInsuanceMin": 0,
													"insthirdInsuanceMax": 0,
													"finAmountMin": 0,
													"newCar": false,
													"StockItem": autoBid
									}
									var wsURL = 'api/dealer/addInventory';
										    $http({
														method : 'POST',
														url : wsURL,
														data: jsonInputToAPI
																		
													}).success(function(data) {
														$('.result').html('Successfully Stored....');
														alert("Successfully Stored.. ");
														alert("Thank You. Your Inventory is saved"+data.inventoryId);
																						
																	});
         	}

             else {
                 alert("Please Login and Make Sell");
             }
		};
		
		
		$scope.firstForm = function(valid) {
			//alert("in first form");
			$scope.firstFlag=true;
			//alert(valid);
			if(valid){
				//alert("inside valid");
				//alert(this);
				$(document.getElementById("first").parentElement.parentElement).slideToggle();			
				$(document.getElementById("first").parentElement.parentElement.previousElementSibling).find('h3').removeClass('active');
				$(document.getElementById("first").parentElement.parentElement.parentElement).next().find('.Registration').slideToggle();			
				$(document.getElementById("first").parentElement.parentElement.parentElement).next().find('h3').addClass('active');
				/*$('#first').removeClass('disabled');
		        $('#first1').attr('data-toggle','pill');
		        $('#first1').attr('href','#CarDet');
		        document.getElementById("first1").click();*/
		        $scope.firstFlag=false;
			}else{
				//alert("inside invalid");
				$scope.firstFlag=true;
			}
			
	        //$('#menu1').show();
	        //$('a#first1').click();
		};
		
		$scope.secondForm = function(valid) {
			//alert("in second form");secondFlag
			$scope.secondFlag=true;
			if(valid){
				/*$('#second').removeClass('disabled');
		        $('#second1').attr('data-toggle','pill');
		        $('#second1').attr('href','#CarExtr');
		        document.getElementById("second1").click();*/
				$(document.getElementById("second").parentElement.parentElement).slideToggle();			
				$(document.getElementById("second").parentElement.parentElement.previousElementSibling).find('h3').removeClass('active');
				$(document.getElementById("second").parentElement.parentElement.parentElement).next().find('.Registration').slideToggle();			
				$(document.getElementById("second").parentElement.parentElement.parentElement).next().find('h3').addClass('active');
		        $scope.secondFlag=false;
			}else{
				//alert("inside invalid");
				$scope.secondFlag=true;
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
				/*$('#four').removeClass('disabled');
		        $('#four1').attr('data-toggle','pill');
		        $('#four1').attr('href','#CarList');
		        document.getElementById("four1").click();*/
				$(document.getElementById("four").parentElement.parentElement).slideToggle();			
				$(document.getElementById("four").parentElement.parentElement.previousElementSibling).find('h3').removeClass('active');
				$(document.getElementById("four").parentElement.parentElement.parentElement).next().find('.Registration').slideToggle();			
				$(document.getElementById("four").parentElement.parentElement.parentElement).next().find('h3').addClass('active');
		        $scope.fourthFlag=false;
			}else{
				//alert("inside invalid");
				$scope.fourthFlag=true;
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
		
		
		$scope.sixthForm = function(valid) {
			$scope.sixthFlag=true;
			if(valid){
				//alert("Valid");
		        $scope.sixthFlag=false;
		        $('.result').html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>Saving,Please wait...');
                userId = $.jStorage.get('key').userId;
                alert(userId);
					//var classified = document.getElementById("postClassified").value;
					//alert("Came here c"+autobid);			SellvehicleType
					var jsonInputToAPI = {
							"refId":117,
							"modelYear": $scope.sellVehYear,
							"modelDisplay": $scope.SellVehMake,
							"modelName": $scope.sellVehModel,															      
							"modelTrim": $scope.sellVehAutotrim,
							"typeOfCar": $scope.optradio,
							"vehicleDescriptin": $scope.headText,
							"make": null,
							"variant": $scope.getOffers,
							"price": $scope.displayPrice,
							"bodyType":$scope.classAdv,
						"transmission": $scope.autoQuote,
								"fuelType": $scope.addrSell,
							"engine":$scope.MobNum,
							"regNo": $scope.regno,
							"driveType": $scope.pricingType,//fixed negotiable
							"kilometer": $scope.currOdometer,
							"extColor": $scope.extColor,
							"warranty": null,
							"regExpiryDate": $scope.RegExpDate,
							"vinNumber": $scope.vinnumber,
							"vendorStockNo": null,
							"noOfDoors": $scope.negotiaPer,//negotiable perce
							"intColor": $scope.intColor,
							"wheelSize": $scope.labelOnVehicle,
							"seatMake": $scope.sellCarAddNotes,
							"extFittingFlex1": $scope.extraExternal1,
							"extFittingFlex2": $scope.extraExternal2,
							"extFittingFlex3": $scope.extraExternal3,
							"extFittingFlex4": $scope.extraExternal4,
							"extFittingFlex5": $scope.extraExternal5,
							"extFittingFlex6": $scope.extraExternal6,
							"extFittingFlex7": null,
							"extFittingFlex8": null,
							"extFittingFlex9": null,
							"extFittingFlex10": $scope.extraInternal11,
							"intFittingFlex1": $scope.extraInternal1,
							"intFittingFlex2": $scope.extraInternal2,
							"intFittingFlex3": $scope.extraInternal3,
							"intFittingFlex4": $scope.extraInternal4,
							"intFittingFlex5": $scope.extraInternal5,
							"intFittingFlex6": $scope.extraInternal6,
							"intFittingFlex7": $scope.extraInternal7,
							"intFittingFlex8": $scope.extraInternal8,
							"intFittingFlex9": $scope.extraInternal9,
							"intFittingFlex10": $scope.extraInternal10,
							"salePersonLooking":null,
							"contName": $scope.conName,
							"contPhone": 0,
							"contEmail": null,
							"logBookService": $scope.roadCert,//road certification
							"cameIntoInv": null,
							"counterOfViewingCar": 0,
							"counterOfEnquiryCar": 0,
							"saleDate": null,
							"features": [],
							"photos": [],
							"carColor": $scope.extColor,
							"state": $scope.regState,
							"region": $scope.addrSell,
							"postCode":$scope.postcode11,
							"yearOfMake": null,
							"ausCapTer": null,
							"insCompAmountMin": 0,
							"insCompAmountMax": 0,
							"dealAmountMin": $scope.QRangeMin,
							"dealAmountMax": $scope.QRangeMax,
							"insthirdInsuanceMin": 0,
							"insthirdInsuanceMax": 0,
							"finAmountMin": 0,
							"newCar": false,
							"StockItem": $scope.notRegister
								}
								var wsURL = 'api/dealer/addInventory';
									    $http({
													method : 'POST',
													url : wsURL,
													data: jsonInputToAPI
																	
												}).success(function(data) {
													$('.result').html('Successfully Stored....');
													alert("Successfully Stored.. ");
													alert("Thank You. Your Inventory is saved"+data.inventoryId);
																					
																});

			}else{
				//alert("inside invalid");
				$scope.sixthFlag=true;
			}
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
