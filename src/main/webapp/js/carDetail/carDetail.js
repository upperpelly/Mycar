/**
 * Its all about Car detail screen
 */

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
    	/* alert("pageName 11  now "); */
    	
    	var priceMin = URL.getParameter('price');
    	document.getElementById('minValue').innerHTML=priceMin;
    	
    	var priceMax = URL.getParameter('priceMax');
    	document.getElementById('maxValue').innerHTML=priceMax;
    	
    	var insMin = URL.getParameter('insMin');
    	document.getElementById('insMin').innerHTML=insMin;
    	
    	var insMax = URL.getParameter('insMax');
    	document.getElementById('insMax').innerHTML=insMax;
    	
    	var avgSavMin = URL.getParameter('avgSavMin');
    	document.getElementById('avgSavMin').innerHTML=avgSavMin;
    	
    	var avgSavMax = URL.getParameter('avgSavMax');
    	document.getElementById('avgSavMax').innerHTML=avgSavMax;
    	
    	var finMin = URL.getParameter('finMin');
    	document.getElementById('finMin').innerHTML=finMin;
    	
    	var finMax = URL.getParameter('finMax');
    	document.getElementById('finMax').innerHTML=finMax;
    	
    	var noDealers = URL.getParameter('noDealers');
    	document.getElementById('noDealers').innerHTML=noDealers;
    	
    	var noStock = URL.getParameter('noStock');
    	document.getElementById('noStock').innerHTML=noStock;
    	modelYear = URL.getParameter('modelYear');
    	modelDisplay = URL.getParameter('modelDisplay');
    	modelName = URL.getParameter('modelName');
    	modelTrim = URL.getParameter('modeltrim');
    	trimValue = URL.getParameter('trimValue');
    	firstName = URL.getParameter('firstName');
    	userId = URL.getParameter('userId');
    	alert(userId);
    	alert("inside abc userid"+firstName);
    	if(userId!= null){
			alert(firstName);
			document.getElementById('welcomeDiv').style.display = "block";
			document.getElementById('welcomeDiv1').style.display = "none";
			document.getElementById('userId').innerHTML="<b>"+"Hi "+firstName+"</b>";
		}
/* alert("in onload now"); */
    	
         
      
      var carquery = new CarQuery();
      carquery.init();
     /*  alert("came here"+trimValue); */
    	carquery.populateCarDataSpec('car-model-data',trimValue); 
    	/* carquery.initYearMakeModelTrim('car-years', 'car-makes', 'car-models', 'car-model-trims'); */
    	/* alert("pageName  22 now "+document.getElementById('minValue').innerHTML);
    	alert("pageName  12322 now "+document.getElementById('maxValue').innerHTML); */
    }
    
    
    

    function redirect() {
    	alert("Thank You. Your Seach ID is ");
    	alert("userid"+userId);
    	var url="dashboard1.html?userId="+userId+"&searchId="+searchId+"&firstName="+firstName;
    	
    	window.location=url;
    }
    
    
    //angular js
    
    

	var mainApp1 = angular.module("mainApp1", [ 'ui.bootstrap', 'ngResource' ]);
	mainApp1.controller('overviewController', function($scope, $stateParams) {
	    var index = $stateParams.index;
	    var anotherKey = $stateParams.anotherKey;
	});
	mainApp1
			.controller(
					'myController1',
					function($scope,$http) {

						$scope.predicate = 'name';
						$scope.reverse = true;
						$scope.currentPage = 1;
						$scope.order = function(predicate) {
							$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse
									: false;
							$scope.predicate = predicate;
						};

						$scope.updatePagination = function() {
							$scope.totalItems = $scope.biil.details.length;
							$scope.numPerPage = 5;
							$scope.paginate = function(value) {
								var begin, end, index;
								begin = ($scope.currentPage - 1)
										* $scope.numPerPage;
								end = begin + $scope.numPerPage;
								index = $scope.biil.details.indexOf(value);
								return (begin <= index && index < end);
							};
						};
						function submitSearchForm() {
													
/* alert("Came here"+modelYear);
alert("Came here"+modelDisplay);
alert("Came here"+modelName);
alert("Came here"+modelTrim);							
 */														
 														alert("submit form");
 														alert(userId);
														var jsonInputToAPI = 
														{
																"userId":99,
																"searchLead":{
																	"modelYear":modelYear,
																	"modelDisplay": modelDisplay,
																	"modelName": modelName,															      
																	"modelTrim": modelTrim,
																			"carColor" : $('#carColor').val(),
																			 "postCode":$('#postCode').val(),
																			"make":$('#seats').val(),
																			"bodyType":$('#driveType').val(),
																			"state":$('#fuelType').val(),
																			"region":$('#freetext').val(),
																			"ausCapTer":$('#vehiclePurpose').val(),
																			"region":$('#transmission').val(),
																			"sMake":$('#extraExternal1').val(),
																			"extraExter2":$('#extraExternal2').val(),
																			"extraExter3":$('#extraExternal3').val(),	
																			"extraExter4":$('#extraExternal4').val(),	
																			"extraExter5":$('#extraExternal5').val(),	
																			"extraIntern1":$('#extraInternal1').val(),	
																			"extraIntern2":$('#extraInternal2').val(),	
																			"extraIntern3":$('#extraInternal3').val(),	
																			"extraIntern4":$('#extraInternal4').val(),	
																			"extraIntern5":$('#extraInternal5').val()
																},
																"financeLead":{
																	"modelYear":modelYear,
																	"modelDisplay": modelDisplay,
																	"modelName": modelName,															      
																	"modelTrim": modelTrim,
																	"postCode":$('#postCode').val(),
																	"incomeType":$('#incomeType').val(),
																	"yearEmploymentBusiness":$('#yearEmployement').val(),
																	"incomeBeforeSuperTax":$('#incomebefore').val(),
																	"incomeAfterSuperTax":$('#incomeAfter').val(),
																	"ifBusinessProvideABN":$('#ifBusPABN').val(),
																	"creditRating":$('#creditRating').val(),
																	"vehValue":$('#vehValue').val(),
																	"balloonPay":$('#balloonPay').val(),
																	"annualIncome":$('#annualIncome').val(),
																	"loanAmount":$('#loanAmount').val(),
																	 "loanPeriod":$('#loanPeriod').val(),
																	 "dateOfBirth":null,
																	 "noOfDependence":$('#noDependencies').val()
																},
																"insuranceLead":{
																	"modelYear":modelYear,
																	"modelDisplay": modelDisplay,
																	"modelName": modelName,															      
																	"modelTrim": modelTrim,
																	"postCode":$('#postCode').val(),
																	"insuranceType":$('#insuranceType').val(),
																	"regNo":$('#reg-no').val(),
																	"regoState":$('#regoState').val(),
																	"marketValue":$('#marketValue').val(),
																	"agreedValue":$('#agreedValue').val(),
																	"otherIssues":$('#OtherIssue').val(),
																	"prefExcessAmount":$('#insurance-excessAmount').val(),
																	"drivingLicenceType":$('#drivingLicenseType').val(),
																	"drivingLicenceNumber":$('drivingLicenseNumber').val(),
																	"drivingLicenceIssuingState":$('drivingLicenseIssuingState').val(),
																	"noOfAtFaultClaims":$('noOfAtFaultsClaims').val(),
																	"dateOfBirth":null,
																	"indicativeExcessAmount":$('indicativeExcessAmount').val(),
																	"ageOfAdditionalDriver":null
																}
															}

														$body = $("body");
														$body.addClass("loading");
													   
													    
													    	
												
															
															
														//alert("Before Call");
														var wsURL = 'api/eBid/car';
														//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/car';
														//var wsURL = 'http://www.autoscoop.com.au/api/eBid/car';
														/* 
														$.ajax({  
			type: "POST",  
			url: wsURL,
			data: jsonInputToAPI,
			contentType:'application/json',
			success: function(data){
				alert("Successfully Stored.. ");
				var url="dashboard1.html?userId="+data.userId+"&searchId="+ data.searchId+"&firstName="+firstName;
								alert("Thank You. Your Search ID is " + data.searchId);
								window.location=url;	
				
			}
		}); */							   $http({
																			method : 'POST',
																			url : wsURL,
																			data: jsonInputToAPI
																							
																		}).success(function(data) {
																			$body.removeClass("loading");
																			alert("Successfully Stored.. ");
																			var url="dashboard1.html?userId="+data.userId+"&searchId="+ data.searchId+"&firstName="+firstName;
																							alert("Thank You. Your Seach ID is " + data.searchId);
																							window.location=url;								
																						}); 

								
														
													};

					    

						$scope.submitSearchForm = submitSearchForm;
						$scope.init = function() {
							$scope.biil = {
								details : []
							};
							$scope.submitForm();
						};

					});
