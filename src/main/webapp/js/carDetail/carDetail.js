/**
 * Its all about Car detail screen
 */
// Check if "key" exists in the storage
var value = $.jStorage.get("key");
if(!value){
    // if not - load the data from the server
//alert("can inside");
    /*value = ()*/
    // and save it
    $.jStorage.set("key",value);
}
//alert("can"+value.userId);

function alreadyLogged(){
	var value = $.jStorage.get("key");
	//alert("Checking logged or not");
	if(!value){
	    // if not - return false
	return false;
	}
	else{
		//alert("Successfully logged in..");
		return true;
	}
	

}
if(!alreadyLogged())
{
		var url="Hm_BetaV1.html";
		window.location=url;
}
var value1 = $.jStorage.get("carKey");
if(!value1){
    $.jStorage.set("carKey",value1);
}
//alert(value1.priceMin+"&priceMax="+value1.priceMax+"I can user");
//alert("value1");
//alert(JSON.stringify(value1));
//console.log(JSON.stringify(value1));
function signingout(){
	
	 $.jStorage.deleteKey("key");
	 $.jStorage.deleteKey("carKey");
	 alert("Successfully Logged Out");
	 window.location="Hm_BetaV1.html";
}

var modelYear=null;
    var modelDisplay =null;
    var modelName = null;
    var trimValue =  null;
    var modelTrim = null;
    var userId = null;
    firstName=null;
    searchId=null;
    window.onload= function()
    {
    	var priceMin = value1.priceMin;
    	document.getElementById('minValue').innerHTML=priceMin;
    	//alert("market value");
    	var priceMax = value1.priceMax;
    	document.getElementById('maxValue').innerHTML=priceMax;
    	
    	var insMin = value1.insMin;
    	document.getElementById('insMin').innerHTML=insMin;
    	
    	var insMax = value1.insMax;
    	document.getElementById('insMax').innerHTML=insMax;
    	
    	var avgSavMin = value1.avgSavMin;
    	document.getElementById('avgSavMin').innerHTML=avgSavMin;
    	
    	var avgSavMax = value1.avgSavMax;
    	document.getElementById('avgSavMax').innerHTML=avgSavMax;
    	
    	var finMin = value1.finMin;
    	document.getElementById('finMin').innerHTML=finMin;
    	
    	var finMax = value1.finMax;
    	document.getElementById('finMax').innerHTML=finMax;
    	
    	var noDealers = value1.noDealers;
    	document.getElementById('noDealers').innerHTML=noDealers;
    	
    	var noStock = value1.noStock;
    	document.getElementById('noStock').innerHTML=noStock;
    	modelYear = value1.modelYear;
    	modelDisplay = value1.modelDisplay;
    	modelName = value1.modelName;
    	modelTrim = value1.modelTrim;
    	trimValue = value1.trimValue;
    	firstName = value.firstName;
    	userId = value.userId;
    	address=value.streetNumber+value.streetName;
    	if(userId!= null){
			document.getElementById('welcomeDiv').style.display = "block";
			document.getElementById('welcomeDiv1').style.display = "none";
			document.getElementById('userId').innerHTML="<b>"+"Hi "+firstName+"</b>";
		}/*
      var carquery = new CarQuery();
      carquery.init();
    	carquery.populateCarDataSpec('car-model-data',value1);*/
    }
    
    
    
    
    
    function carDataHTMLSpec(data)
    {
	     var sold_in_us = "No";
	     var out = '<table class="model-data">';
	
	     out += '<tr><th colspan="2">'+data.tempCarModelHeaderVO.modelYear+' '+data.tempCarModelHeaderVO.modelDisplay+' '+data.tempCarModelHeaderVO.modelName+' '+data.tempCarModelHeaderVO.modelVariant+'</th></tr>';
	
	     out += '<tr><td colspan="2">Car Specification<hr/></td></tr>';
	     out += '<tr><td>Autoscoop Trim:</td><td>'+data.tempCarModelHeaderVO.flex1+'</td></tr>';
	     out += '<tr><td>Model Series:</td><td>'+data.tempCarModelHeaderVO.modelSeries+'</td></tr>';
	     out += '<tr><td>Model Batch:</td><td>'+data.tempCarModelHeaderVO.modelBatch+'</td></tr>';
	     out += '<tr><td>Model Trim:</td><td>'+data.tempCarModelHeaderVO.modelTrim+'</td></tr>';
	     out += '<tr><td>Manufactured Year:</td><td>'+data.tempCarModelHeaderVO.manfYear+'</td></tr>';
	     out += '<tr><td>Model Body:</td><td>'+data.tempCarModelHeaderVO.modelBody+'</td></tr>';
	     out += '<tr><td>Engine size:</td><td>'+data.tempCarModelHeaderVO.engineSize+'</td></tr>';
	     out += '<tr><td>Engine Cylinders:</td><td>'+data.tempCarModelHeaderVO.cylinder+'</td></tr>';
	     out += '<tr><td>No of Gears:</td><td>'+data.tempCarModelHeaderVO.noOfGears+'</td></tr>';
	     out += '<tr><td>Engine Fuel Type:</td><td>'+data.tempCarModelHeaderVO.fuelType+'</td></tr>';
	     out += '<tr><td>Drive:</td><td>'+data.tempCarModelHeaderVO.driveType+'</td></tr>';
	     out += '<tr><td>Transmission Type:</td><td>'+data.tempCarModelHeaderVO.transimission+'</td></tr>';
	     out += '<tr><td>Changed Doors:<html:text property="region" </td><td>'+data.tempCarModelHeaderVO.modelDoors+'</td></tr>';
	     out += '<tr><td>Seats:</td><td>'+data.tempCarModelHeaderVO.modelSeats+'</td></tr>';
    
	     out +='<br/>';
	     var options = '<option value="">Please choose a Color</option>';  
	     for(i=0;i<data.tempCarModelHeaderVO.carModel3.length;i++)
     		{
	    	 options += '<option value="' +data.tempCarModelHeaderVO.carModel3[i].availableColour+ '">' +data.tempCarModelHeaderVO.carModel3[i].availableColour + '</option>';
     		}
	     $("#carColor").html(options);
	     $("#carColor2").html(options);
	     out += '<tr><td colspan="2"><hr/></td></tr>';
	     out += '</table>';

	     out = out.replace(/>null</g, ">Not Available<");

	     return out;
    }

    function redirect() {
    	//alert("Thank You. Your are redirected.. ");
    	//alert("userid"+userId);
    	var url="Db_BetaV1.html";
    	//var url="Db_BetaV1.html?userId="+userId+"&searchId="+searchId+"&firstName="+firstName;
    	
    	window.location=url;
    }
    
    function stringToDate(_date,_format,_delimiter)
    {
                var formatLowerCase=_format.toLowerCase();
                var formatItems=formatLowerCase.split(_delimiter);
                var dateItems=_date.split(_delimiter);
                var monthIndex=formatItems.indexOf("mm");
                var dayIndex=formatItems.indexOf("dd");
                var yearIndex=formatItems.indexOf("yyyy");
                var month=parseInt(dateItems[monthIndex]);
                month-=1;
                var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
                return formatedDate;
    }

   //stringToDate("17/9/2014","dd/MM/yyyy","/");
    //stringToDate("9/17/2014","mm/dd/yyyy","/")
    //stringToDate("9-17-2014","mm-dd-yyyy","-")
    //angular js
    
    

	var mainApp1 = angular.module("mainApp1", []);
	mainApp1.controller('myController1',function($scope,$http) {
		$body = $("body");
		populateInsuranceProv();
    	//$scope.populateInsuranceProv = function (){
    	function populateInsuranceProv(){
    		$body.addClass("loading");
        	$http({
                method : 'GET',
                url : 'api/insuranceProv'
            }).then(function mySuccess(response) {
            	 $body.removeClass("loading");
            	 $scope.InsuranceProvs = response.data;
            }, function myError(response) {
            	$scope.InsuranceProvs = response.statusText;
            });
    	}
    	
    	var value1 = $.jStorage.get("carKey");
    	if(!value1){
    	    $.jStorage.set("carKey",value1);
    	}
		
    	populateCarDataSpec('car-model-data',value1);
    	function populateCarDataSpec(model_data_id, data)
        {
            $("#"+model_data_id).html("Loading Model Data Specification...");
    	    var out = '<table class="model-data">';
    	
    	     out += '<tr><th colspan="2">'+data.tempCarModelHeaderVO.modelYear+' '+data.tempCarModelHeaderVO.modelDisplay+' '+data.tempCarModelHeaderVO.modelName+' '+data.tempCarModelHeaderVO.modelVariant+'</th></tr>';
    	
    	     out += '<tr><td colspan="2">Car Specification<hr/></td></tr>';
    	     out += '<tr><td>Autoscoop Trim:</td><td>'+data.tempCarModelHeaderVO.flex1+'</td></tr>';
    	     out += '<tr><td>Model Series:</td><td>'+data.tempCarModelHeaderVO.modelSeries+'</td></tr>';
    	     out += '<tr><td>Model Batch:</td><td>'+data.tempCarModelHeaderVO.modelBatch+'</td></tr>';
    	     out += '<tr><td>Model Trim:</td><td>'+data.tempCarModelHeaderVO.modelTrim+'</td></tr>';
    	     out += '<tr><td>Manufactured Year:</td><td>'+data.tempCarModelHeaderVO.manfYear+'</td></tr>';
    	     out += '<tr><td>Model Body:</td><td>'+data.tempCarModelHeaderVO.modelBody+'</td></tr>';
    	     out += '<tr><td>Engine size:</td><td>'+data.tempCarModelHeaderVO.engineSize+'</td></tr>';
    	     out += '<tr><td>Engine Cylinders:</td><td>'+data.tempCarModelHeaderVO.cylinder+'</td></tr>';
    	     out += '<tr><td>No of Gears:</td><td>'+data.tempCarModelHeaderVO.noOfGears+'</td></tr>';
    	     out += '<tr><td>Engine Fuel Type:</td><td>'+data.tempCarModelHeaderVO.fuelType+'</td></tr>';
    	     out += '<tr><td>Drive:</td><td>'+data.tempCarModelHeaderVO.driveType+'</td></tr>';
    	     out += '<tr><td>Transmission Type:</td><td>'+data.tempCarModelHeaderVO.transimission+'</td></tr>';
    	     out += '<tr><td>Changed Doors:<html:text property="region" </td><td>'+data.tempCarModelHeaderVO.modelDoors+'</td></tr>';
    	     out += '<tr><td>Seats:</td><td>'+data.tempCarModelHeaderVO.modelSeats+'</td></tr>';
       
    	     out +='<br/>';
    	     var options = '<option value="">Please choose a Color</option>';  
    	     for(i=0;i<data.tempCarModelHeaderVO.carModel3.length;i++)
        		{
    	    	 options += '<option value="' +data.tempCarModelHeaderVO.carModel3[i].availableColour+ '">' +data.tempCarModelHeaderVO.carModel3[i].availableColour + '</option>';
        		}
    	     $("#carColor").html(options);
    	     $("#carColor2").html(options);
    	     out += '<tr><td colspan="2"><hr/></td></tr>';
    	     out += '</table>';

    	     out = out.replace(/>null</g, ">Not Available<");
            country = data.make_country;
            modelYear= data.model_year;
            modelDisplay=data.make_display;
            modelName=data.model_name;
            modelTrim=data.model_trim;
            $("#"+model_data_id).html(out);   
        }
    	
		var value = $.jStorage.get("key");
		if(!value){
		    // if not - load the data from the server
		//alert("can inside");
		    /*value = ()*/
		    // and save it
		    $.jStorage.set("key",value);
		}
    	address=value.streetNumber+value.streetName;
    	$scope.abcFnameperson=value.firstName;
    	$scope.abcLnameperson=value.lastName;
    	$scope.abcAddress=address;
    	$scope.postCode=value.postCode;
    	$scope.marketValue = value1.tempCarModelHeaderVO.carModel1[0].priceWhenNew;
    	//alert("biscuit");
		$scope.insFlag=false;
		$scope.finFlag=false;
		var finKey=$.jStorage.get("finCheckKey");
		if(!finKey){
			var key1="FNC";
		    $.jStorage.set("finCheckKey",key1);
		}
		var insKey=$.jStorage.get("insCheckKey");
		if(!insKey){
			var key2="INC";
		    $.jStorage.set("insCheckKey",key2);
		}
		if(finKey == "FChecked" && insKey== "IChecked"){
			$(".addFinIns").hide();
		}
		 if(insKey== "IChecked"){
			 $scope.insFlag=true;
	    }
	    if(finKey == "FChecked"){
	    	$scope.finFlag=true;
	    }
		$scope.submitSearchForm = function (isValid) {													
 														//alert("before submit form finance"+$scope.finFlag);
 														//alert("before submit form insurance"+$scope.insFlag);
 														//alert(document.getElementById("extraExternal6").checked);
 														//alert(isValid);
														//alert("inside cdddd"+$('#startdate').data('datepicker').viewDate);
														/*var dateInFormat= stringToDate($('#startdate').val(),"dd/MM/yyyy","/");
														var dateInFormat1= stringToDate($('#startdate').val(),"dd/MM/yyyy","/");*/
														//alert("inside cdddd"+dateInFormat);
														//alert("inside cdddd"+dateInFormat1)
													if(isValid)
														{
														
														var jsonInputToAPI = 
														{
																"userId":userId,
																"finance":$scope.finFlag,
																"insurance": $scope.insFlag,
																"searchLead":{
																"newer":value1.newCarEbid,
																"used":value1.usedCarEbid,
																"modelYear":value1.modelYear,
																"modelDisplay": value1.modelDisplay,
																"modelName": value1.modelName,															      
																"modelTrim": value1.autoTrim,
																"sModel": $('#carColor2').val(),//2nd specification color
																"carColor" : $('#carColor').val(),//1st specified color
																 "postCode":$('#postCode').val(),
																"sMake":$('#extraExternal1').val(),
																"state":$('#moreNotes').val(),
																"extraExter2":$('#extraExternal2').val(),
																"extraExter3":$('#extraExternal3').val(),	
																"extraExter4":$('#extraExternal4').val(),	
																"extraExter5":$('#extraExternal5').val(),	
																"extraIntern1":$('#extraInternal1').val(),	
																"extraIntern2":$('#extraInternal2').val(),	
																"extraIntern3":$('#extraInternal3').val(),	
																"extraIntern4":$('#extraInternal4').val(),	
																"extraIntern5":$('#extraInternal5').val(),
																"extraExter6":$('#extraExternal6').val(),
																},
																"financeLead":{
																	"newer":value1.newCarEbid,
																	"used":value1.usedCarEbid,
																	"year":value1.modelYear,
																	"make": value1.modelDisplay,
																	"model": value1.modelName,															      
																	"autoscoopTrim": modelTrim,
																	"postCode":$scope.postCode,
																	"incomeType":$scope.incomeType,
																	"yearEmploymentBusiness":$scope.yearEmployement,
																	"incomeBeforeSuperTax": "",
								                                    "incomeAfterSuperTax": "",
								                                    "ifBusinessProvideABN":$scope.ifBusPABN,
								                                    "creditRating": $scope.creditRating,
								                                    "vehValue": 0.0,
								                                    "balloonPay": "",
																	"annualIncome":$scope.annualIncome,
																	"loanAmount":$scope.loanAmount,
																	 "loanPeriod":$scope.loanPeriod,
																	 "dateOfBirth":$scope.abcDriverDOB,
																	 "rego": "",
								                                    "regoState": "",
								                                    "streetNo": "",
								                                    "streetName": $scope.abcAddress,//Full Address is passed
								                                    "mr": $scope.abcTitlePerson,
								                                    "firstName": $scope.abcFnameperson,
								                                    "lastName": $scope.abcLnameperson
																},
																"insuranceLead":{
																	"newer":value1.newCarEbid,
																	"used":value1.usedCarEbid,
																	"year":value1.modelYear,
																	"make": value1.modelDisplay,
																	"model": value1.modelName,															      
																	"autoscoopTrim": modelTrim,
																	"postCode":$scope.postCode,
																	"insuranceType":$scope.insuranceType,
																	"searchInsAdditionalDriv": [],
																	"regNo":"",
																	"regoState":"",
																	"marketValue":$scope.marketValue,
																	"agreedValue":$scope.agreedValue,
																	"otherIssues":"",
																	"prefExcessAmount":$scope.insuranceExcessAmount,
																	"drivingLicenceType":$scope.drivingLicenseType,
																	"drivingLicenceNumber":$scope.drivingLicenseNumber,
																	"drivingLicenceIssuingState":"",
																	"noOfAtFaultClaims":$scope.noOfAtFaultsClaims,
																	"dateOfBirth":$scope.abcDriverDOB,
																	"curInsProv": $scope.abcinsprov,
																	"indicativeExcessAmount":0,
																	"ageOfAdditionalDriver":null,
																	"streetNO": "",
																	"carParkedAt": $scope.abcinscarParked,
								                                    "streetName": $scope.abcAddress,//Full Address is passed
								                                    "carUsedfor": $scope.abcinsCarUsage,
								                                    "typeOfBusiness": $scope.abcinsifBusiness,
								                                    "driverFirstName": $scope.abcFnameperson,
								                                    "driverLastName": $scope.abcLnameperson,
								                                    "driverMobileNo": $scope.abcMobile,
								                                    "driverEmailId": "",
								                                    "licenseIssueDate": $scope.abcinsLicIssueDt,
								                                    "lastAtFaultClaimDate": $scope.abcinsLastfaultDt,
								                                    "reasonForSuspension": $scope.abcinsReasonSusp,
								                                     "AnyDriver": $scope.intExt3,//Allow Under 25 Driver 
								                                    "FreeWindScreen": $scope.extExt2,//Excess Free wind Screen
								                                    "RentalCar": $scope.extExt3,//Excess Free Window Screen
								                                    "NewCarRepl": $scope.extExt4,// New Car Replace 
								                                    "Roadsideasst":$scope.extExt5,//Road Side Assistance
								                                    "LifetimeWarrep":$scope.intExt1,//Life time Warranty repairs
								                                    "intsnokel": $scope.intExt2,//No Claim Bonus Protection
								                                    "intBullBar": $scope.intExt4,//Cover Theft & Fire
								                                    "intNudgeBar": $scope.intExt5,//Cover Towing Cost
								                                    "HireCar": $scope.extExt1,//Hire Car after Accident(if any)
								                                    "extsnokel":$scope.intExt6, //Essential Temporary Repairs
								                                    "extBullBar":$scope.intExt7, //Accidental Damage
								                                    "extNudgeBar":$scope.intExt8,//Emergency accommodation and Transport
								                                    "avgNoOfKmYr": $scope.abcinsAvgNoOfKms,
								                                    "noOfDrivers": $scope.abcinsDriversCt,
								                                    "licenseGotSuspened": $scope.abcinsLICSusp
																}
															}

														
														$body.addClass("loading");
														//alert(JSON.stringify(jsonInputToAPI));
														var table1 = $("#my-table944");
											            var table = table1.tableToJSON({
											                ignoreColumns:[0], 
											                headings: ['firstName', 'lastName', 'drivingLicenseType','dateOfBirth']
											              });
											            //delete table[0];
											            
											            table.splice(0,1);
											            
											            jsonInputToAPI.insuranceLead.searchInsAdditionalDriv = table ;
											            //alert(JSON.stringify(jsonInputToAPI));
											            //console.log(JSON.stringify(jsonInputToAPI));
														//alert("Before Call");
														var wsURL = 'api/eBid/car';
														//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/car';
														//var wsURL = 'http://www.autoscoop.com.au/api/eBid/car';
																   $http({
																			method : 'POST',
																			url : wsURL,
																			data: jsonInputToAPI
																							
																		}).success(function(data) {
																			$body.removeClass("loading");
																			alert("Successfully Stored.. ");
																			//alert(data);
																			var url="Db_BetaV1.html#travel-stories";
																			/*var url="Db_BetaV1.html?userId="+data.userId+"&searchId="+ data.searchId+"&firstName="+firstName;*/
																							alert("Thank You. Your Search ID is " + data.searchId);
																							window.location=url;								
																						}); 
														}
													else
														{
														alert("Please enter the fields which are mandatory and highlighted in Red.");
														//$("form:input.ng-invalid,select.ng-invalid").first().focus();
														$('input.ng-invalid').first().focus();
														$('select.ng-invalid').first().focus();
														}
																										
													};
					});
