/**
 * 
 */
var value = $.jStorage.get("key");
if(!value){
    // if not - load the data from the server
//alert("can inside");
    /*value = ()*/
    // and save it
    $.jStorage.set("key",value);
}
//alert("can"+value.userId);



function logServMaintloadImage()
{
	  
	//alert("came inside log inside script");
	// $('#logServMnt-image').html('<img src="images/LoadImg.gif"></img>');
var fileChooserlogservmaint = document.getElementById('file-chooser-logservmaint');
//var fileChooserlogservmaint1 = document.getElementById('file-1chooser-logservmaint');
// var buttonlogservmaint = document.getElementById('upload-button-logservmaint'); prod 249863545451459 test 238604546585672
var appId = '249863545451459';
 //prod        var roleArn =  'arn:aws:iam::675778862308:role/roleJavaScript'; //local var roleArn = 'arn:aws:iam::675778862308:role/javarolenow';
   var roleArn = 'arn:aws:iam::675778862308:role/roleJavaScript';
   var bucketName = 'elasticbeanstalk-us-east-1-675778862308';
   AWS.config.region = 'us-east-1';
   var bucket = new AWS.S3({
       params: {
           Bucket: bucketName
       }
   });
  //alert("Successfully set..");
  accessToken = $.jStorage.get("fbAToken");
  //alert(accessToken);
			bucket.config.credentials = new AWS.WebIdentityCredentials({
	                  ProviderId: 'graph.facebook.com',
	                  RoleArn: roleArn,
	                  WebIdentityToken: accessToken
	              });

		//alert("came here on click of log service and maintenance");
     var file = fileChooserlogservmaint.files[0];


     if (file) {

     	//alert("came here on click of log service and maintenance12");
         //results.innerHTML = '';


         //Object key will be facebook-USERID#/FILE_NAME


         var objKey = 'facebook-' + fbUserId + '/' + file.name;


         var params = {


             Key: objKey,


             ContentType: file.type,


             Body: file,


             ACL: 'authenticated-read'


         };


         bucket.putObject(params, function (err, data) {
         	//alert("Successfully started to Upload the photos"+file.name+" Please don't refresh or switch from the homepage.. This will take some time..");
         	//alert("came here on click of log service and maintenance14");
             if (err) {

             	//alert("Not saved service and maintenance1"+err);
             	alert("Sorry we are not able to upload your photo "+file.name+"for Log service and maintenance.. It failed with following error "+err+" It could be because of Idle time for more than 10 mins, plz login again and try. However If the issue persists please send the photos and error you encountered to autoscoop support team which will upload photo and link it to your account and also resolve your error / issue thanks..");
                 /* results.innerHTML = 'ERROR: ' + err; */
		        	//signingout();

             } else {
             	//alert("Successfully saved log Service and Maintenance1 into S3");
             	//$('#logServMnt-image').html('');
             	 //alert("Successfully uploaded photo "+file.name+" to database");
             	
             	 
             	$('.result').html('Successfully Stored....');
				var url="Db_BetaV1.html";
				window.location=url;
                 //listObjs();


             }


         });


     } else {

     	//alert("Nothing to upload for service and maintenance 1");
         /* results.innerHTML = 'Nothing to upload.'; */


     }


//start of second image upload
/*var file1 = fileChooserlogservmaint1.files[0];


     if (file1) {

     	//alert("came here on click of log service and maintenance12");
         //results.innerHTML = '';


         //Object key will be facebook-USERID#/FILE_NAME


         var objKey = 'facebook-' + fbUserId + '/' + file1.name;


         var params = {


             Key: objKey,


             ContentType: file1.type,


             Body: file1,


             ACL: 'authenticated-read'


         };


         bucket.putObject(params, function (err, data) {
         	//alert("Successfully started to Upload the photos"+file1.name+" Please don't refresh or switch from the homepage.. This will take some time..");
         	//alert("came here on click of log service and maintenance14");
             if (err) {

             	//alert("Not saved service and maintenance1"+err);
             	alert("Sorry we are not able to upload your photo "+file1.name+"for Log service and maintenance.. It failed with following error "+err+" It could be because of Idle time for more than 10 mins, plz login again and try. However If the issue persists please send the photos and error you encountered to autoscoop support team which will upload photo and link it to your account and also resolve your error / issue thanks..");
                  results.innerHTML = 'ERROR: ' + err; 
		        	//signingout();

             } else {
             	//alert("Successfully saved log Service and Maintenance1 into S3");
             	//$('#logServMnt-image').html('');
             	 alert("Successfully uploaded photo "+file1.name+" to database");

                 //listObjs();


             }


         });


     } else {

     	//alert("Nothing to upload for service and maintenance 1");
          results.innerHTML = 'Nothing to upload.'; 


     }*/
//end of second image upload



 window.fbAsyncInit = function () {


     FB.init({


         appId: appId


     });


     FB.getLoginStatus(function(response) {
     	//alert("Succesfully set..");
     	//alert("Successfully started to Upload the photos.. Please don't refresh or switch from the dashboard.. This will take some time..");
			if (response.status === 'connected') {
				bucket.config.credentials = new AWS.WebIdentityCredentials({


                 ProviderId: 'graph.facebook.com',


                 RoleArn: roleArn,


                 WebIdentityToken: response.authResponse.accessToken


             });


             //fbUserId = response.authResponse.userID;


             //button.style.display = 'block';
			}
		},{
			scope : 'email'
		});





 };


  // Load the Facebook SDK asynchronously


 (function (d, s, id) {


     var js, fjs = d.getElementsByTagName(s)[0];


     if (d.getElementById(id)) {


         return;


     }


     js = d.createElement(s);


     js.id = id;


     js.src = "//connect.facebook.net/en_US/all.js";

js.src = "https://connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);


 }(document, 'script', 'facebook-jssdk'));

}





function alreadyLogged(){
	var value = $.jStorage.get("key");
	//alert("Checking logged or not");
	if(!value){
	    // if not - return false
		alert("false");
	return false;
	}
	else{
		//alert("Successfully logged in..");
		alert("true");
		return true;
	}
	

}
/*if(!alreadyLogged())
{
		var url="Hm_BetaV1.html";
		window.location=url;
}*/
function signingout(){
	
	 $.jStorage.deleteKey("key");
	 $.jStorage.deleteKey("carKey");
	 alert("Successfully Logged Out");
	 window.location="Hm_BetaV1.html";
}
window.onload= function()
{
	var value = $.jStorage.get("key");
	if(value){
	firstName = value.firstName;
	userId = value.userId;
	address=value.streetNumber+value.streetName;
	if(userId!= null){
		document.getElementById('welcomeDiv').style.display = "block";
		document.getElementById('welcomeDiv1').style.display = "none";
		document.getElementById('userId').innerHTML="<b>"+"Hi "+firstName+"</b>";
	}
	}
}


var mainApp1 = angular.module("mainApp1", []);
	mainApp1.controller('myController1',function($scope,$http) {
		
		 $scope.submitSearchForm = function() {
         	//alert("invoke");
         	if (alreadyLogged()) {
     				$('.result').html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>Saving,Please wait...');
                     userId = $.jStorage.get('key').userId;
                     var fileChooserlogservmaint = document.getElementById('file-chooser-logservmaint');
                     //alert("fileChooserlogservmaint"+fileChooserlogservmaint);
						var filefileChooserlogservmaint = fileChooserlogservmaint.files[0];
						var objKeyfilefileChooserlogservmaint ='noImage';
						if(filefileChooserlogservmaint){
						objKeyfilefileChooserlogservmaint = 'facebook-' + fbUserId + '/' + filefileChooserlogservmaint.name;}

						/*var fileChooserlogservmaint1 = document.getElementById('file-1chooser-logservmaint');
						  //alert("file1Chooserlogservmaint"+fileChooserlogservmaint1);
						var filefileChooserlogservmaint1 = fileChooserlogservmaint1.files[0];
						var objKeyfilefileChooserlogservmaint1 ='noImage';
						if(filefileChooserlogservmaint1){
						objKeyfilefileChooserlogservmaint1 = 'facebook-' + fbUserId + '/' + filefileChooserlogservmaint1.name;}
*/
						/*var autobid=false;
						autobid = document.getElementById("autoBid").value;
						*///var classified = document.getElementById("postClassified").value;
						//alert("Came here c"+autobid);			SellvehicleType
						var jsonInputToAPI = {
															"refId":35,
															"userId":userId,
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
													"engine": objKeyfilefileChooserlogservmaint,
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
														//alert("Successfully Stored.. ");
														//alert("Thank You. Your Inventory is saved"+data.inventoryId);
																						
														$('.result').html('Successfully Stored....');
																			alert("Successfully Stored Sell My Car request with ID "+data.inventoryId+" However, Plz wait for the images to upload.. don't refresh or switch from your sellMycar page..  the upload of images will start soon..");
														//alert("Successfully Stored.. ");
												                			if(filefileChooserlogservmaint && fileChooserlogservmaint1){
												                				alert("Plz wait for the images to upload.. don't refresh or switch from sellMycar.. the upload of images will start soon..");
																			logServMaintloadImage();
																			//alert("Before reset correct15689899");
												                			//document.getElementById("logservmaintfrm").reset();
												                			}
												                			else {
											                                	alert("No upload of images found..");
											                                	$('.result').html('Successfully Stored....');
											                    				var url="Db_BetaV1.html";
											                    				window.location=url;
											                                    //alert("Before reset correct15689899");
													                			//document.getElementById("logservmaintfrm").reset();
											                                	}
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
			if(alreadyLogged() && valid){
				//alert("Valid changed");
		        $scope.sixthFlag=false;
		        $('.result').html('<i class="fa fa-spinner fa-spin" style="font-size:24px"></i>Saving,Please wait...');
                userId = $.jStorage.get('key').userId;
                //alert(userId);
                fbUserId = $.jStorage.get("fbKey");
                
                var fileChooserlogservmaint = document.getElementById('file-chooser-logservmaint');
                //alert("fileChooserlogservmaint"+fileChooserlogservmaint);
					var filefileChooserlogservmaint = fileChooserlogservmaint.files[0];
					var objKeyfilefileChooserlogservmaint ='noImage';
					if(filefileChooserlogservmaint){
					objKeyfilefileChooserlogservmaint = 'facebook-' + fbUserId + '/' + filefileChooserlogservmaint.name;}

					/*var fileChooserlogservmaint1 = document.getElementById('file-1chooser-logservmaint');
					  //alert("file1Chooserlogservmaint"+fileChooserlogservmaint1);
					var filefileChooserlogservmaint1 = fileChooserlogservmaint1.files[0];
					var objKeyfilefileChooserlogservmaint1 ='noImage';
					if(filefileChooserlogservmaint1){
					objKeyfilefileChooserlogservmaint1 = 'facebook-' + fbUserId + '/' + filefileChooserlogservmaint1.name;}
*/
					//var classified = document.getElementById("postClassified").value;
					//alert("Came here c"+fbUserId+"object"+objKeyfilefileChooserlogservmaint1);			
					var jsonInputToAPI = {
							"refId":35,
							"userId":userId,
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
							"warranty": objKeyfilefileChooserlogservmaint,
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
					console.log(JSON.stringify(jsonInputToAPI));
								var wsURL = 'api/dealer/addInventoryUser';
									    $http({
													method : 'POST',
													url : wsURL,
													data: jsonInputToAPI
																	
												}).success(function(data) {
													//$('.result').html('Successfully Stored....');
													//alert("Successfully Stored.. ");
													//alert("Thank You. Your Inventory is saved"+data.inventoryId);

													//$('.result').html('Successfully Stored....');
													//alert("Successfully Stored.. ");
													//alert("Thank You. Your Inventory is saved"+data.inventoryId);
																					
													//$('.result').html('Successfully Stored....');
																		//alert("Successfully Stored Sell My Car request with ID "+data.inventoryId+" However, Plz wait for the images to upload.. don't refresh or switch from your sellMycar page..  the upload of images will start soon..");
													//alert("Successfully Stored.. ");
											                			if(filefileChooserlogservmaint){
											                				//alert("Plz wait for the images to upload.. don't refresh or switch from sellMycar.. the upload of images will start soon..");
																		logServMaintloadImage();
																		//alert("Before reset correct15689899");
											                			//document.getElementById("logservmaintfrm").reset();
																		/*$('.result').html('Successfully Stored....');
																		var url="Db_BetaV1.html";
																		window.location=url;*/
											                			}
											                			else {
										                                	//alert("No upload of images found..");
										                                	$('.result').html('Successfully Stored....');
										                                	//alert("Before reset correct15689899");
												                			//document.getElementById("logservmaintfrm").reset();
										                                	var url="Db_BetaV1.html";
										                            		window.location=url;
										                                	}
																
																					
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
