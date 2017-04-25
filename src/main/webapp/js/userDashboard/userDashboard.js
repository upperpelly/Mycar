// Check if "key" exists in the storage
var value = $.jStorage.get("key");
var fbUserId = $.jStorage.get("fbKey");
var myVehicleIDuse=null;
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
		var url="homepage10.html";
		window.location=url;
}
if(!value){
    // if not - load the data from the server
//alert("can inside");
    //value = load_data_from_server()
    // and save it
    $.jStorage.set("key",value);
}
//alert("can"+value.userId);
/*console.log(value);
alert(value);*/
//alert("can"+value.userId);
	
function signingout(){
	
	 $.jStorage.deleteKey("key");
	 $.jStorage.deleteKey("carKey");
	 $.jStorage.deleteKey("fbKey");
	 alert("Successfully Logged Out");
	 window.location="homepage10.html";
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
var userId;
var firstName;
//window.onload= function(){
$(document).ready(function(){
	
	//alert("user js");
	$body = $("body");

	$(document).ajaxStart(function(){
		$body.addClass("loading");
	});

	$(document).ajaxStop(function(){
		$body.removeClass("loading");
	});
	
	
	//changed to Onload
	
	var userDetails ='<a href="#" class="button btn-mini pull-right edit-profile-btn">EDIT PROFILE</a>\
		<h2 class="box-title fullname">' + value.firstName + '</h2>\
		<dl class="term-description">\
	    <dt>user name:</dt><dd>' +value.email+ '</dd>\
	    <dt>first name:</dt><dd>' +value.firstName+ '</dd>\
	    <dt>last name:</dt><dd>' +value.lastName+ '</dd>\
	    <dt>phone number:</dt><dd>' +value.mobile+ '</dd>\
	    <dt>Date of birth:</dt><dd>15 August 1985</dd>\
	    <dt>Street Address and number:</dt><dd>' +value.streetName+ '</dd>\
	    <dt>Town / City:</dt><dd>' +value.areaName+'</dd>\
	    <dt>ZIP code:</dt><dd>' +value.postCode+ '</dd>\
	    <dt>Country:</dt><dd>Australia</dd>\
		</dl>';
	/*alert("onload");
		alert(userDetails);
		console.log(userDetails);*/
	$(".userdetails").append(userDetails);

	
	function parseURLParameter(Parameter)
	{
	
var FullURL= window.location.search.substring(1);
	
		var parametersArray = FullURL.split('&')
		
		for (var i=0; i<parametersArray.length; i++)
			{
				var currentParameter = parametersArray[i].split('=');
				
				if (currentParameter[0] == Parameter)
				{
					return currentParameter[1];
				}
			}
	}
	/* alert("pageName 11  now "); */
	
	userId = value.userId;
	firstName = value.firstName;
	//userId="71";
	//document.getElementById('minValue').innerHTML=priceMin;
	document.getElementById('firstName').innerHTML=value.firstName;
	//var searchId = parseURLParameter('searchId');
	
	if(userId!= null){
		//alert(firstName);
		document.getElementById('welcomeDiv').style.display = "block";
		document.getElementById('welcomeDiv1').style.display = "none";
		document.getElementById('userId').innerHTML="<b>"+"Hi "+firstName+"</b>";
	}
	
	
	
	
  
  //alert("Before call");
	dashBoardCallSearch('car-model-data',userId); 
  
  createCORSRequest("GET", "api/user/70");
	

function createCORSRequest(method, url){
	
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        // XHR has 'withCredentials' property only if it supports CORS
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){ // if IE use XDR
    	//alert("came here");
    	xhr = new XDomainRequest();
        //alert(xhr.open(method, url));
    } else {
        xhr = null;
    }
    return xhr;
}
function dashBoardPhotoUpdate()
{
// start of 

	//alert("came her");
	var jsonInputToAPI = {"userId":userId,
			"photo":null,
			"myVehicleVO":{
				"myVehicleId":null,
				"year": $('#car-years').val(),															      
				"make":$('#car-makes').val(),
						"model" :$('#car-models').val(),
						 "variant":$('#car-model-trims').val(),
						"vin":$('#vin').val(),
						"regNum":$('#regNo').val(),
						"regState":$('#car-model-trims').val(),
						"regExpDate":null,
						"insProv":$('#regState').val(),
						"insProvMan":$('#insProv').val(),
						"insPremPaid":$('#insPrePaid').val(),
						"insPremPaidFreq":$('#premPaidFreq').val(),
						"insExpiry":null,	
						"odoMeter":$('#odoMeter').val(),	
						"lastServiceDt":null,	
						"nextServiceDt":null,	
						"nextServKms":$('#nextServMaiKms').val(),	
						"finProvider":$('#finProv').val(),	
						"loanAmt1":$('#loanAmount').val(),	
						"loanTakenDt":null,
							"loanPaidFreq":$('#loanPaidFreq').val(),	
						"loanAmt2":$('#laonAmount1').val(),	
						"loanPeriod":$('#laonPeriod').val(),	
						"loanInterest":$('#laonIntRate').val(),
							"fuelCardProvider":$('#fuelCardProv').val(),	
						"valFuelCard":$('#valFuelCard').val(),	
						"fuelType":$('#fuelType').val(),
							"photo1":$('#photo1').val(),	
						"photo2":$('#photo2').val(),	
						"photo3":$('#photo3').val(),
							"flex1":"flex1",	
						"flex2":"flex1",	
						"flex3":"flex1",
							"flex4":"flex1",	
						"flex5":12,	
						"flex6":12,
						"flex7":12,
							"flex8":null,	
						"flex9":null
			}
			}


	//alert("Before Call");
	//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/myVehicle/';
	//var wsURL = 'http://www.autoscoop.com.au/api/eBid/myVehicle/';
	
	
		   /* $http({
						method : 'POST',
						url : wsURL,
						data: jsonInputToAPI
										
					}).success(function(data) {
						alert("Successfully Stored..");
										alert("Thank You. Your MyVehicle ID is " + data.myVehicleId);
																		
									});	*/
	
	$.ajax({  
		type: "POST",  
		url: "api/eBid/updatePhoto?_method=PUT",
		data: jsonInputToAPI,
		contentType:'application/json',
		success: function(result){
			
			alert("Successfully upated photo to user");
			
		}
	});
	
}

function dashBoardCallSearch(model_data_id, userid)
{
	//alert("inside");
 this.model_data_id = model_data_id;
      //$("#"+this.model_data_id).html("Loading Model Data...");
    var sender = this;
    //var url = "http://www.autoscoop.com.au/api/user/"+userid;
   var url = "api/user/"+userid;
   //var url = "http://localhost:8080/MyCarDomain/api/user/"+userid;
//var url = "http://localhost:8080/MyCarDomain/api/user/"+userid;
//alert("user id"+url);

    //Get Car Model JSON for the selected make
    //http://localhost:8080/MyCarDomain/api/user/1
    /*alert("came here now changed are 3 Oct1");*/
   $('#car-model-data').html('<img src="images/LoadImg.gif"></img>');
   $('#data1').html('<img src="images/LoadImg.gif"></img>');
   $('#car-model-data2').html('<img src="images/LoadImg.gif"></img>');
   $('#quo-model-data').html('<img src="images/LoadImg.gif"></img>');
   $('#quo-data1').html('<img src="images/LoadImg.gif"></img>');
   $('#quo-model-data2').html('<img src="images/LoadImg.gif"></img>');
   $('#quo-model-data4').html('<img src="images/LoadImg.gif"></img>');
   $('#logBook4').html('<img src="images/LoadImg.gif"></img>');
   $('#fuelCard4').html('<img src="images/LoadImg.gif"></img>');
   $('#servMaint4').html('<img src="images/LoadImg.gif"></img>');
   
    $.ajax({  
    	/*headers: {"X-My-Custom-Header": "*"},*/
   	    type: "GET",  
   	    url: url, 
   	 /*url: "http://localhost:8080/MyCarDomain/api/user/1",*/
   	       success: function(result){
   	    	  
   	    	   
   	    	   
   	    	   
   	    	   
   	    	   
   	    	   
        	   out="";
        	   
        	   var finMax = result.search.length;
        	   document.getElementById('finMax').innerHTML=finMax;
        	   
        	   out += '<tr><th>'+"Car Ebid ID"+'</th><th>'+"Year"+'</th>'+'<th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Autoscoop Variant"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=result.search.length-1;i>=0;i--)
       		{
       		
       			   out= out+'<tr>'+'<td>'+result.search[i].carSearchId+'</td>'+'<td>'+result.search[i].modelYear+'<td>'+result.search[i].modelDisplay+'</td>'+'</td>'+'<td>'+result.search[i].modelName+'</td>'+'<td>'+result.search[i].sModel+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleSearchModal-' + result.search[i].carSearchId + '" data-details=\'' + JSON.stringify(result.search[i]) + '\' class="anchor-editDealerVehicleSearchModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleSearchModal">View</a></td></tr>';
       		
       		}
        	   out = out.replace(/>null</g, ">--NA--<");
        	   out = out.replace(/>undefined</g, ">--NA--<");
        	   //alert(out);
        	   var LogSearch = result.search;

        	   if(LogSearch && result.search.length==0){
        	   outLogT="";
        	   outLogT='<h2>No records found</h2>';
        	   forFinance("car-model-data",outLogT);
        	   }
        	   else{
        	   forFinance("car-model-data",out);}
        	   out1="";
        	   
        	   var finCt = result.searchFinance.length;
        	   document.getElementById('finCt').innerHTML=finCt;
        	   out1 += '<tr><th>'+"Car Finance ID"+'</th><th>'+"Vehicle Value"+'</th><th>'+"Balloon Pay"+'</th><th>'+"Loan Amount"+'</th><th>'+"Operation"+'</th></tr>';
        	   
        	for(i=result.searchFinance.length-1;i>=0;i--)
       		{
       		
       		out1= out1+'<tr>'+'<td>'+result.searchFinance[i].searchFinanceId+'</td>'+'<td>'+result.searchFinance[i].vehValue+'</td>'+'<td>'+result.searchFinance[i].balloonPay+'</td>'+'<td>'+result.searchFinance[i].loanAmount+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleFinanceModal-' + result.searchFinance[i].searchFinanceId + '" data-details=\'' + JSON.stringify(result.searchFinance[i]) + '\' class="anchor-editDealerVehicleFinanceModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleFinanceModal">View</a></td></tr>';
       		
       		
       		}
        	   out1 = out1.replace(/>null</g, ">--NA--<");
        	   out1 = out1.replace(/>undefined</g, ">--NA--<");
        	  
        	  var LogFinance = result.searchFinance;

        	  if(LogFinance && result.searchFinance.length==0){
        	  outLogT="";
        	  outLogT='<h2>No records found</h2>';
        	  forFinance("data1",outLogT);
        	  }
        	  else{
        		  forFinance("data1",out1);
        	  }
        	   /*this.model_data_id = "data1";
        	   alert("came here"+this.model_data_id);
        	   $("#"+sender.model_data_id).append(out1);*/
        	  /* alert("came here"+this.model_data_id);
        	   */
        	  out2="";
        	  var insRCt=result.searchInsurance.length;
        	   document.getElementById('insRCt').innerHTML=insRCt;
        	   out2 += '<tr><th>'+"Car Insurance ID"+'</th><th>'+"Insurance Type"+'</th><th>'+"Market Value"+'</th><th>'+"Agreed Value"+'</th><th>'+"Operation"+'</th></tr>';
        	   
        		   for(i=result.searchInsurance.length-1;i>=0;i--)
       		{
       		
       		out2= out2+'<tr>'+'<td>'+result.searchInsurance[i].searchInsuranceId+'</td>'+'<td>'+result.searchInsurance[i].insuranceType+'</td>'+'<td>'+result.searchInsurance[i].marketValue+'</td>'+'<td>'+result.searchInsurance[i].agreedValue+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleInsuranceModal-' + result.searchInsurance[i].searchInsuranceId + '" data-details=\'' + JSON.stringify(result.searchInsurance[i]) + '\' class="anchor-editDealerVehicleInsuranceModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleInsuranceModal">View</a></td></tr>';
       		
       		
       		}
        	   out2 = out2.replace(/>null</g, ">--NA--<");
        	   out2 = out2.replace(/>undefined</g, ">--NA--<");
        	   
        	   var LogInsurance = result.searchInsurance;

        	   if(LogInsurance && result.searchInsurance.length==0){
        	   outLogT="";
        	   outLogT='<h2>No records found</h2>';
        	   forFinance("car-model-data2",outLogT);
        	   }else{
        	   forFinance("car-model-data2",out2);}

        	   out3="";
        	   var qtRecd = result.vehicleQuotation.length;
        	   document.getElementById('qtRecd').innerHTML=qtRecd;
        	   out3 += '<tr><th>'+"Car Quotation ID"+'</th><th>'+"Dealer Name"+'</th><th>'+"Dealer Stock No"+'</th><th>'+"drive away Price"+'</th><th>'+"Operation"+'</th></tr>';
        	   
        		   for(i=result.vehicleQuotation.length-1;i>=0;i--)
       		{
       		
       		out3= out3+'<tr>'+'<td>'+result.vehicleQuotation[i].quotId+'</td>'+'<td>'+result.vehicleQuotation[i].dealerName+'</td>'+'<td>'+result.vehicleQuotation[i].dealerStockNo+'</td>'+'<td>'+result.vehicleQuotation[i].driveAwayPrice+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleQuotationModal-' + result.vehicleQuotation[i].quotId + '" data-details=\'' + JSON.stringify(result.vehicleQuotation[i]) + '\' class="anchor-editDealerVehicleQuotationModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleQuotationModal">Edit</a></td></tr>';
       		
       		
       		}
        	   out3 = out3.replace(/>null</g, ">--NA--<");
        	   out3 = out3.replace(/>undefined</g, ">--NA--<");
        	   var LogQuotation = result.vehicleQuotation;

        	   if(LogQuotation && result.vehicleQuotation.length==0){
        	   outLogT="";
        	   outLogT='<h2>No records found</h2>';
        	   forFinance("quo-model-data",outLogT);
        	   }else{
        	   forFinance("quo-model-data",out3);}
			
			out4="";
			var finQCt=result.financeQuotation.length;
			document.getElementById('finQCt').innerHTML=finQCt;
			        	   out4 += '<tr><th>'+"Finance Quotation ID"+'</th><th>'+"Dealer Name"+'</th><th>'+"Dealer Stock No"+'</th><th>'+"drive away Price"+'</th><th>'+"Operation"+'</th></tr>';
        	  
        		   for(i=result.financeQuotation.length-1;i>=0;i--)
       		{
       		
        		   out4= out4+'<tr>'+'<td>'+result.financeQuotation[i].finQuotId+'</td>'+'<td>'+result.financeQuotation[i].dealerName+'</td>'+'<td>'+result.financeQuotation[i].dealerStockNo+'</td>'+'<td>'+result.financeQuotation[i].driveAwayPrice+'</td>'+'<td><a href="#" id="anchor-editDealerfin12QuotationModal-' + result.financeQuotation[i].finQuotId + '" data-details=\'' + JSON.stringify(result.financeQuotation[i]) + '\' class="anchor-editDealerfin12QuotationModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerfin12QuotationModal">Edit</a></td></tr>';
       		
       		}
        	   out4 = out4.replace(/>null</g, ">--NA--<");
        	   out4 = out4.replace(/>undefined</g, ">--NA--<");
        	   var LogFinQuo = result.financeQuotation;

        	   if(LogFinQuo && result.financeQuotation.length==0){
        	   outLogT="";
        	   outLogT='<h2>No records found</h2>';
        	   forFinance("quo-data1",outLogT);
        	   }else{
        	   forFinance("quo-data1",out4);}

out5="";
var insQCt=result.insuranceQuotation.length;
        	   document.getElementById('insQCt').innerHTML=insQCt;
        	   out5 += '<tr><th>'+"Car Quotation ID"+'</th><th>'+"Dealer Name"+'</th><th>'+"Dealer Stock No"+'</th><th>'+"drive away Price"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=result.insuranceQuotation.length-1;i>=0;i--)
       		{
       		
       		out5= out5+'<tr>'+'<td>'+result.insuranceQuotation[i].insQuotId+'</td>'+'<td>'+result.insuranceQuotation[i].dealerName+'</td>'+'<td>'+result.insuranceQuotation[i].dealerStockNo+'</td>'+'<td>'+result.insuranceQuotation[i].driveAwayPrice+'</td>'+'<td><a href="#" id="anchor-editDealerins12QuotationModal-' + result.insuranceQuotation[i].insQuotId + '" data-details=\'' + JSON.stringify(result.insuranceQuotation[i]) + '\' class="anchor-editDealerins12QuotationModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerins12QuotationModal">Edit</a></td></tr>';
       		
       		}
        	   out5 = out5.replace(/>null</g, ">--NA--<");
        	   out5 = out5.replace(/>undefined</g, ">--NA--<");
        	   var LogInsQuo = result.insuranceQuotation;

        	   if(LogInsQuo && result.insuranceQuotation.length==0){
        	   outLogT="";
        	   outLogT='<h2>No records found</h2>';
        	   forFinance("quo-model-data2",outLogT);
        	   } else{
        	   forFinance("quo-model-data2",out5);}
        	    
        	   out444="";
        	   var servQCt = result.servMaintQuotation.length;
        	   document.getElementById('servQCt').innerHTML=servQCt;
        	   out444 += '<tr><th>'+"Serv Maint Quotation ID"+'</th><th>'+"Dealer Name"+'</th><th>'+"Dealer Stock No"+'</th><th>'+"drive away Price"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=result.servMaintQuotation.length-1;i>=0;i--)
       		{
       		
       		out444= out444+'<tr>'+'<td>'+result.servMaintQuotation[i].servMaintQuotId+'</td>'+'<td>'+result.servMaintQuotation[i].dealerName+'</td>'+'<td>'+result.servMaintQuotation[i].dealerStockNo+'</td>'+'<td>'+result.servMaintQuotation[i].driveAwayPrice+'</td>'+'<td><a href="#" id="anchor-editDealerservmaintQuotationModal-' + result.servMaintQuotation[i].servMaintQuotId + '" data-details=\'' + JSON.stringify(result.servMaintQuotation[i]) + '\' class="anchor-editDealerservmaintQuotationModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerservmaintQuotationModal">Edit</a></td></tr>';
       		
       		
       		}
        	   out444 = out444.replace(/>null</g, ">--NA--<");
        	   out444 = out444.replace(/>undefined</g, ">--NA--<");
        	   var LogServMaintQuo = result.servMaintQuotation;

        	   if(LogServMaintQuo && result.servMaintQuotation.length==0){
        	   outLogT="";
        	   outLogT='<h2>No records found</h2>';
        	   forFinance("dataservmaintQuot12",outLogT);
        	   } else{
        	   forFinance("dataservmaintQuot12",out444);}
        	   
        	   out555="";
        	   var trasQCt = result.transpServQuotation.length;
        	   document.getElementById('trasQCt').innerHTML=trasQCt;
        	   out555 += '<tr><th>'+" Transp Serv Quotation ID"+'</th><th>'+"Dealer Name"+'</th><th>'+"Dealer Stock No"+'</th><th>'+"drive away Price"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=result.transpServQuotation.length-1;i>=0;i--)
       		{
       		
       		out555= out555+'<tr>'+'<td>'+result.transpServQuotation[i].TranspServQuotId+'</td>'+'<td>'+result.transpServQuotation[i].dealerName+'</td>'+'<td>'+result.transpServQuotation[i].dealerStockNo+'</td>'+'<td>'+result.transpServQuotation[i].driveAwayPrice+'</td>'+'<td><a href="#" id="anchor-editDealertranspservQuotationModal-' + result.transpServQuotation[i].TranspServQuotId + '" data-details=\'' + JSON.stringify(result.transpServQuotation[i]) + '\' class="anchor-editDealertranspservQuotationModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealertranspservQuotationModal">Edit</a></td></tr>';
       		
       		
       		}
        	   out555 = out555.replace(/>null</g, ">--NA--<");
        	   out555 = out555.replace(/>undefined</g, ">--NA--<");
        	   var LogTranspServQuo = result.transpServQuotation;

        	   if(LogTranspServQuo && result.transpServQuotation.length==0){
        	   outLogT="";
        	   outLogT='<h2>No records found</h2>';
        	   forFinance("datatranspservQuot",outLogT);
        	   } else{
        	   forFinance("datatranspservQuot",out555);}
        	   
        	   out6="";
        	  
           	   out6 += '<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Operation"+'</th></tr>';
           	  for(i=result.myVehicle.length-1;i>=0;i--)
          		{
          		
          		out6= out6+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleDetailModal-' + result.myVehicle[i].myVehicleId + '" data-details=\'' + JSON.stringify(result.myVehicle[i]) + '\' class="anchor-editDealerVehicleDetailModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleDetailModal">View</a></td></tr>';
          		
          		
          		}
           	out6 = out6.replace(/>null</g, ">--NA--<");
           	out6 = out6.replace(/>undefined</g, ">--NA--<");
           	var LogMyVehi = result.myVehicle;

           	if(LogMyVehi && result.myVehicle.length==0){
           	outLogT="";
           	outLogT='<h2>No records found</h2>';
            forFinance("quo-model-data4",outLogT);
           	} else{
           	   forFinance("quo-model-data4",out6);}
        	               	   
        	               	   //start
        	               	 var options = '<option value="">Please choose a car</option>';  
        	                 for(i=0;i<result.myVehicle.length;i++)
        	            		{
        	            		
        	            		//out= out+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].make+'</td>' + '</tr>';
        	            		options += '<option value="' +result.myVehicle[i].myVehicleId+ '">' +result.myVehicle[i].make + '</option>';
        	            		
        	            		}
        	            	   
        	                   //alert(options);
        	                   $("#vehicleTypeLogBook").html(options);
        	               	   // end
        	                   
        	                 //start
          	               	 var option1s = '<option value="">Please choose a car</option>';  
          	                 for(i=0;i<result.myVehicle.length;i++)
          	            		{
          	            		
          	            		//out= out+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].make+'</td>' + '</tr>';
          	            		option1s += '<option value="' +result.myVehicle[i].myVehicleId+ '">' +result.myVehicle[i].make + '</option>';
          	            		
          	            		}
          	            	   
          	                   //alert(options);
          	                   $("#vehicleTypeServMaint").html(option1s);
          	               	   // end
          	                   
        	                   
        	               	 out7="";
        	           	  
      	               	   out7 += '<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th></tr>';
      	               	   for(i=0;i<result.myVehicle.length;i++)
      	              		{
      	              		
      	              		out7= out7+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'</tr>';
      	              		
      	              		
      	              		}
      	               	out7 = out7.replace(/>null</g, ">--NA--<");
      	              out7 = out7.replace(/>undefined</g, ">--NA--<");
        	               	   forFinance("logBook4",out7);
        	               	   
        	               	out8="";
          	           	  
       	               	   out8 += '<tr><th>'+"Activity"+'</th><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th></tr>';
       	               	   for(i=0;i<result.myVehicle.length;i++)
       	              		{
       	              		
       	              		
       	               		out8= out8+'<td><a href="#" id="anchor-editDealerVehicleDetailLogBookModal-' + result.myVehicle[i].myVehicleId + '" data-details=\'' + JSON.stringify(result.myVehicle[i]) + '\' class="anchor-editDealerVehicleDetailLogBookModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleDetailLogBookModal">LogBook</a></td><td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'</tr>';
       	              		
       	              		}
       	               	out8 = out8.replace(/>null</g, ">--NA--<");
       	             out8 = out8.replace(/>undefined</g, ">--NA--<");
       	          var LogMyVehLogBoSta = result.myVehicle;

       	       if(LogMyVehLogBoSta && result.myVehicle.length==0){
       	       outLogT="";
       	       outLogT='<h2>No records found</h2>';
       	    forFinance("fuelCard4",outLogT);
       	       } else {
         	               	forFinance("fuelCard4",out8);}
         	               	//alert("logbook loaded");
         	               	
         	               out9="";
         	           	  
      	               	   out9 += '<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th></tr>';
      	               	   for(i=0;i<result.myVehicle.length;i++)
      	              		{
      	              		
      	              		out9= out9+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'</tr>';
      	              		
      	              		
      	              		}
      	               	out9 = out9.replace(/>null</g, ">--NA--<");
      	          	out9 = out9.replace(/>undefined</g, ">--NA--<");
        	               	forFinance("servMaint4",out9);
        	               	
        	               	
        	               	
        	                out10="";
        	         	   
        	         	   var servRCt = result.searchServMaint.length;
        	         	   document.getElementById('servRCt').innerHTML=servRCt;
        	         	   out10 += '<tr><th>'+"Car Serv Maint ID"+'</th><th>'+"Servic L1"+'</th><th>'+"Service L2"+'</th><th>'+"Rego State"+'</th><th>'+"Operation"+'</th></tr>';
        	         	   for(i=result.searchServMaint.length-1;i>=0;i--)
        	        		{
        	        		
        	        		out10= out10+'<tr>'+'<td>'+result.searchServMaint[i].searchServMaintId+'</td>'+'<td>'+result.searchServMaint[i].servMaintL1+'</td>'+'<td>'+result.searchServMaint[i].servMaintL2+'</td>'+'<td>'+result.searchServMaint[i].regoState+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleservmaintModal-' + result.searchFinance[i].searchServMaintId + '" data-details=\'' + JSON.stringify(result.searchServMaint[i]) + '\' class="anchor-editDealerVehicleservmaintModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleservmaintModal">View</a></td></tr>';
        	        		
        	        		
        	        		}
        	         	   out10 = out10.replace(/>null</g, ">--NA--<");
        	         	   out10 = out10.replace(/>undefined</g, ">--NA--<");
        	         	  var LogSearchServMaint = result.searchServMaint;

        	         	 if(LogSearchServMaint && result.searchServMaint.length==0){
        	         	 outLogT="";
        	         	 outLogT='<h2>No records found</h2>';
        	         	forFinance("dataservmaint",outLogT);
        	         	 } else{
        	         	  forFinance("dataservmaint",out10);}
        	         	  
        	         	  
        	         		
      	                out11="";
      	         	  
      	         	   var trasRCt = result.searchTransp.length;
      	         	   document.getElementById('trasRCt').innerHTML=trasRCt;
      	         	   out11 += '<tr><th>'+"Car Trans ID"+'</th><th>'+"pickUpDateTime"+'</th><th>'+"noOfCars"+'</th><th>'+"fromPostCodeAddr"+'</th><th>'+"Operation"+'</th></tr>';
      	         	   for(i=result.searchTransp.length-1;i>=0;i--)
      	        		{
      	        		
      	        		out11= out11+'<tr>'+'<td>'+result.searchTransp[i].searchTranspId+'</td>'+'<td>'+result.searchTransp[i].pickUpDateTime+'</td>'+'<td>'+result.searchTransp[i].noOfCars+'</td>'+'<td>'+result.searchTransp[i].fromPostCodeAddr+'</td>'+'<td><a href="#" id="anchor-editDealerVehicletranspModal-' + result.searchTransp[i].searchTranspId + '" data-details=\'' + JSON.stringify(result.searchTransp[i]) + '\' class="anchor-editDealerVehicletranspModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicletranspModal">View</a></td></tr>';
      	        		
      	        		
      	        		}
      	         	   out11 = out11.replace(/>null</g, ">--NA--<");
      	         	   out11 = out11.replace(/>undefined</g, ">--NA--<");
      	         	var LogSearchTransp = result.searchTransp;

      	         	if(LogSearchTransp && result.searchTransp.length==0){
      	         	outLogT="";
      	         	outLogT='<h2>No records found</h2>';
      	         	forFinance("datatranspserv",outLogT);
      	         	} else {
      	         	  forFinance("datatranspserv",out11);}
      	         	  
      	         	out12="";
   	         	   
   	         	   
   	         	   for(i=result.userNotification.length-1;i>=0;i--)
   	        		{
   	        		
   	        		out12= out12+'<tr>'+'<td>'+result.userNotification[i].code+'</td>'+'<td>'+result.userNotification[i].typeOfReq+'</td>'+'<td>'+result.userNotification[i].makeDescription+'</td>'+'<td>'+result.userNotification[i].comment+'</td></tr>';
   	        		
   	        		
   	        		}
   	         	   out12 = out12.replace(/>null</g, ">--NA--<");
   	         	   out12 = out12.replace(/>undefined</g, ">--NA--<");
   	         	var LogUserNot = result.userNotification;

   	         if(LogUserNot && result.userNotification.length==0){
   	         outLogT="";
   	         outLogT='<h2>No records found</h2>';
   	      forFinance("userNotification",outLogT);
   	         } else {
   	         	  forFinance("userNotification",out12);}
   	         	out14="";
	         	   
	         	   
	         	   for(i=result.currentOffers.length-1;i>=0;i--)
	        		{
	        		
	        		out14= out14+'<tr>'+'<td>'+result.currentOffers[i].code+'</td>'+'<td>'+result.currentOffers[i].makeDescription+'</td></tr>';
	        		
	        		
	        		}
	         	   out14 = out14.replace(/>null</g, ">--NA--<");
	         	   out14 = out14.replace(/>undefined</g, ">--NA--<");
	         	
	         	  forFinance("currentOffers",out14);
        	               	registerEditDealerVehicleQuotationModal();
        	               	registerEditDealerVehicleSearchModal();
        	               	registerEditDealerVehicleFinanceModal();
        	               	registerEditDealerVehicleservmaintModal();
        	               	registerEditDealerfin12QuotationModal();
        	               	registerEditDealerins12QuotationModal();
        	               	registerEditDealerservmaintQuotationModal();
        	               	registerEditDealertranspservQuotationModal();
        	               	registerEditDealerVehicletranspModal();
        	               	registerEditDealerVehicleInsuranceModal();
        	               	registerEditDealerVehicleDetailModal();
        	               	registerEditDealerVehicleDetailLogBookModal();
           } 
   	  }); 
   
}

function forFinance(model_data_id, out)
{
 this.model_data_id = model_data_id;
     
        	   $("#"+model_data_id).html(out);
        	   
}
function registerEditDealerservmaintQuotationModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerservmaintQuotationModal = '<div class="modal fade" id="editDealerservmaintQuotationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>Edit Vehicle Quotation</center></h4>\
		        <form id="edit-dealer-servmaint-quotation-content-form">\
				<div class="modal-body edit-dealer-servmaint-quotation-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
	                <button type="button" class="btn btn-primary submit-editDealerservmaintQuotationModal" data-dismiss="modal">Save changes</button>\
	            </div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
		</div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerservmaintQuotationModal);
	
		
	$('a.anchor-editDealerservmaintQuotationModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="servMaintQuotId" value="' + data.servMaintQuotId + '" />';
		var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		
		
		var editDealerservmaintQuotationForm = '<form id="edit-dealer-servmaint-quotation-content-form"><table>\
			<tr><td>Quotation ID</td><td>' + data.servMaintQuotId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>User ID</td><td>' + data.userId + '</td></tr>\
			<tr><td>Model Year</td><td>' + data.modelYear + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.modelName + '</td></tr>\
			<tr><td>Model Display</td><td>' + data.modelDisplay + '</td></tr>\
			<tr><td>Auto Bid</td><td>' + data.autoBid + '</td></tr>\
			<tr><td>Dealer Id</td><td>' + data.dealerId + '</td><td>Dealer Search Id</td><td>' + data.dealServMaintId + '</td></tr>\
			<tr><td>Car Search Id</td><td>' + data.carServMaintId + '</td><td>Ref Id</td><td>' + data.refId + '</td></tr>\
			<tr><td>Dealer Name</td><td>' + data.dealerName + '</td><td>Dealer ABN</td><td>' + data.dealerABN + '</td></tr>\
			<tr><td>Quot Header FreeText</td><td>' + data.quotHeaderFreeText + '</td><td>servMaintL1</td><td>' + data.servMaintL1 + '</td></tr>\
			<tr><td>Rego No</td><td>' + data.regoNo + '</td><td>servMaintL2</td><td>' + data.servMaintL2 + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoStat + '</td><td>Dealer Stock No</td><td>' + data.dealerStockNo + '</td></tr>\
			<tr><td>No Of Kms</td><td>' + data.noOfKms + '</td><td>Drive Away Price</td><td>' + data.driveAwayPrice + '</td></tr>\
			<tr><td>Negotiable</td><td>' + data.negotiable + '</td><td>Offer Valid Date</td><td>' + data.offerValidDate + '</td></tr>\
			<tr><td>First Come Serve</td><td>' + data.firstCumServe + '</td><td>curInsProv</td><td>' + data.curInsProv + '</td></tr>\
			<tr><td>Fuel Type</td><td>' + data.fuelType + '</td><td>Dealer Preferred Location</td><td>' + data.delPrefLocation + '</td></tr>\
			<tr><td>Offer Price 2</td><td>' + data.offerPrice2 + '</td><td>Offer Price 3</td><td>' + data.offerPrice3 + '</td></tr>\
			</table></form>';
		editDealerservmaintQuotationForm = editDealerservmaintQuotationForm.replace(/>null</g, ">--NA--<");
		editDealerservmaintQuotationForm = editDealerservmaintQuotationForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-servmaint-quotation-content").html(editDealerservmaintQuotationForm);
	});
	
	$('button.submit-editDealerservmaintQuotationModal').on('click', function(e) {
		
		var jsonInput = $("#edit-dealer-servmaint-quotation-content-form").convertFormDataToJSON();
		
		
		$.ajax({  
			type: "POST",  
			url: "api/servmaintQuotation?_method=PUT",
			data: jsonInput,
			contentType:'application/json',
			success: function(result){
				$("#anchor-editDealerservmaintQuotationModal-" + result.quotId).data('details', result);
				alert("Successfully upated and moved to user");
				
			}
		});

		
	});
	
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}

function registerEditDealertranspservQuotationModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealertranspservQuotationModal = '<div class="modal fade" id="editDealertranspservQuotationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>Edit Transport Service Quotation</center></h4>\
		        <form id="edit-dealer-transpserv-quotation-content-form">\
				<div class="modal-body edit-dealer-transpserv-quotation-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
	                <button type="button" class="btn btn-primary submit-editDealertranspservQuotationModal" data-dismiss="modal">Save changes</button>\
	            </div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
		</div>\
	    </div>\
	</div>';

	$(document.body).append(editDealertranspservQuotationModal);
	
		
	$('a.anchor-editDealertranspservQuotationModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="TranspServQuotId" value="' + data.TranspServQuotId + '" />';
		var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		
		
		var editDealertranspservQuotationForm = '<form id="edit-dealer-transpserv-quotation-content-form"><table>\
			<tr><td>Quotation ID</td><td>' + data.TranspServQuotId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>User ID</td><td>' + data.userId + '</td></tr>\
			<tr><td>Model Year</td><td>' + data.modelYear + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.modelName + '</td></tr>\
			<tr><td>Model Display</td><td>' + data.modelDisplay + '</td></tr>\
			<tr><td>Auto Bid</td><td>' + data.autoBid + '</td></tr>\
			<tr><td>Dealer Id</td><td>' + data.dealerId + '</td><td>Dealer Search Id</td><td>' + data.dealTranspServId + '</td></tr>\
			<tr><td>Car Search Id</td><td>' + data.userTranspServId + '</td><td>Ref Id</td><td>' + data.refId + '</td></tr>\
			<tr><td>Dealer Name</td><td>' + data.dealerName + '</td><td>Dealer ABN</td><td>' + data.dealerABN + '</td></tr>\
			<tr><td>Quot Header FreeText</td><td>' + data.quotHeaderFreeText + '</td><td>fromPostCodeAddr</td><td>' + data.fromPostCodeAddr + '</td></tr>\
			<tr><td>toPostCodeAddr</td><td>' + data.toPostCodeAddr + '</td><td>transTypeReq</td><td>' + data.transTypeReq + '</td></tr>\
			<tr><td>pickUpDateTime</td><td>' + data.pickUpDateTime + '</td><td>Dealer Stock No</td><td>' + data.dealerStockNo + '</td></tr>\
			<tr><td>No Of Kms</td><td>' + data.noOfKms + '</td><td>Drive Away Price</td><td>' + data.driveAwayPrice + '</td></tr>\
			<tr><td>Negotiable</td><td>' + data.negotiable + '</td><td>Offer Valid Date</td><td>' + data.offerValidDate + '</td></tr>\
			<tr><td>First Come Serve</td><td>' + data.firstCumServe + '</td><td>noOfCars</td><td>' + data.noOfCars + '</td></tr>\
			<tr><td>transpInsReq</td><td>' + data.transpInsReq + '</td><td>howMay</td><td>' + data.howMay + '</td></tr>\
			<tr><td>fromStreetNo</td><td>' + data.fromStreetNo + '</td><td>toStreetName</td><td>' + data.toStreetName + '</td></tr>\
			<tr><td>toStreetNo</td><td>' + data.toStreetNo + '</td><td>Dealer Preferred Location</td><td>' + data.delPrefLocation + '</td></tr>\
			<tr><td>Offer Price 2</td><td>' + data.offerPrice2 + '</td><td>Offer Price 3</td><td>' + data.offerPrice3 + '</td></tr>\
			</table></form>';
		editDealertranspservQuotationForm = editDealertranspservQuotationForm.replace(/>null</g, ">--NA--<");
		editDealertranspservQuotationForm = editDealertranspservQuotationForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-transpserv-quotation-content").html(editDealertranspservQuotationForm);
	});
	
	$('button.submit-editDealertranspservQuotationModal').on('click', function(e) {
		
		var jsonInput = $("#edit-dealer-transpserv-quotation-content-form").convertFormDataToJSON();
		
		
		$.ajax({  
			type: "POST",  
			url: "api/transpservQuotation?_method=PUT",
			data: jsonInput,
			contentType:'application/json',
			success: function(result){
				$("#anchor-editDealertranspservQuotationModal-" + result.quotId).data('details', result);
				alert("Successfully upated and moved to user");
				
			}
		});

		
	});
	
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}

function registerEditDealerfin12QuotationModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerfin12QuotationModal = '<div class="modal fade" id="editDealerfin12QuotationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>Edit Finance Quotation</center></h4>\
		        <form id="edit-dealer-fin12-quotation-content-form">\
				<div class="modal-body edit-dealer-fin12-quotation-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
	                <button type="button" class="btn btn-primary submit-editDealerfin12QuotationModal" data-dismiss="modal">Save changes</button>\
	            </div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
		</div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerfin12QuotationModal);
	
		
	$('a.anchor-editDealerfin12QuotationModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="finQuotId" value="' + data.finQuotId + '" />';
		var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		
		
		var editDealerfin12QuotationForm = '<form id="edit-dealer-fin12-quotation-content-form"><table>\
			<tr><td>Quotation ID</td><td>' + data.finQuotId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>User ID</td><td>' + data.userId + '</td></tr>\
			<tr><td>Model Year</td><td>' + data.modelYear + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.modelName + '</td></tr>\
			<tr><td>Model Display</td><td>' + data.modelDisplay + '</td></tr>\
			<tr><td>Auto Bid</td><td>' + data.autoBid + '</td></tr>\
			<tr><td>Dealer Id</td><td>' + data.dealerId + '</td><td>Dealer Search Id</td><td>' + data.dealSearchId + '</td></tr>\
			<tr><td>Car Search Id</td><td>' + data.carSearchId + '</td><td>Ref Id</td><td>' + data.refId + '</td></tr>\
			<tr><td>Dealer Name</td><td>' + data.dealerName + '</td><td>Dealer ABN</td><td>' + data.dealerABN + '</td></tr>\
			<tr><td>Quot Header FreeText</td><td>' + data.quotHeaderFreeText + '</td><td>VIN Number</td><td>' + data.vinNumber + '</td></tr>\
			<tr><td>Rego No</td><td>' + data.regoNo + '</td><td>Rego End Date</td><td>' + data.regoEndDate + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoStat + '</td><td>Dealer Stock No</td><td>' + data.dealerStockNo + '</td></tr>\
			<tr><td>No Of Kms</td><td>' + data.noOfKms + '</td><td>Drive Away Price</td><td>' + data.driveAwayPrice + '</td></tr>\
			<tr><td>Negotiable</td><td>' + data.negotiable + '</td><td>Offer Valid Date</td><td>' + data.offerValidDate + '</td></tr>\
			<tr><td>First Come Serve</td><td>' + data.firstCumServe + '</td><td>Color</td><td>' + data.color + '</td></tr>\
			<tr><td>Transmission</td><td>' + data.transmission + '</td><td>Drive Type</td><td>' + data.driveType + '</td></tr>\
			<tr><td>Fuel Type</td><td>' + data.fuelType + '</td><td>No Of Seats</td><td>' + data.noOfSeats + '</td></tr>\
			<tr><td>No Of Doors</td><td>' + data.noOfDoors + '</td><td>Dealer Preferred Location</td><td>' + data.delPrefLocation + '</td></tr>\
			<tr><td>Offer Price 2</td><td>' + data.offerPrice2 + '</td><td>Offer Price 3</td><td>' + data.offerPrice3 + '</td></tr>\
			</table></form>';
		editDealerfin12QuotationForm = editDealerfin12QuotationForm.replace(/>null</g, ">--NA--<");
		editDealerfin12QuotationForm = editDealerfin12QuotationForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-fin12-quotation-content").html(editDealerfin12QuotationForm);
	});
	
	$('button.submit-editDealerfin12QuotationModal').on('click', function(e) {
		
		var jsonInput = $("#edit-dealer-fin12-quotation-content-form").convertFormDataToJSON();
		
		
		$.ajax({  
			type: "POST",  
			url: "api/fin12Quotation?_method=PUT",
			data: jsonInput,
			contentType:'application/json',
			success: function(result){
				$("#anchor-editDealerfin12QuotationModal-" + result.quotId).data('details', result);
				alert("Successfully upated and moved to user");
				
			}
		});

		
	});
	
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}
function registerEditDealerins12QuotationModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerins12QuotationModal = '<div class="modal fade" id="editDealerins12QuotationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>Edit Insurance Quotation</center></h4>\
		        <form id="edit-dealer-ins12-quotation-content-form">\
				<div class="modal-body edit-dealer-ins12-quotation-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
	                <button type="button" class="btn btn-primary submit-editDealerins12QuotationModal" data-dismiss="modal">Save changes</button>\
	            </div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
		</div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerins12QuotationModal);
	
		
	$('a.anchor-editDealerins12QuotationModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="insQuotId" value="' + data.insQuotId + '" />';
		var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		
		
		var editDealerins12QuotationForm = '<form id="edit-dealer-ins12-quotation-content-form"><table>\
			<tr><td>Quotation ID</td><td>' + data.insQuotId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>User ID</td><td>' + data.userId + '</td></tr>\
			<tr><td>Model Year</td><td>' + data.modelYear + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.modelName + '</td></tr>\
			<tr><td>Model Display</td><td>' + data.modelDisplay + '</td></tr>\
			<tr><td>Auto Bid</td><td>' + data.autoBid + '</td></tr>\
			<tr><td>Dealer Id</td><td>' + data.dealerId + '</td><td>Dealer Search Id</td><td>' + data.dealSearchId + '</td></tr>\
			<tr><td>Car Search Id</td><td>' + data.carSearchId + '</td><td>Ref Id</td><td>' + data.refId + '</td></tr>\
			<tr><td>Dealer Name</td><td>' + data.dealerName + '</td><td>Dealer ABN</td><td>' + data.dealerABN + '</td></tr>\
			<tr><td>Quot Header FreeText</td><td>' + data.quotHeaderFreeText + '</td><td>VIN Number</td><td>' + data.vinNumber + '</td></tr>\
			<tr><td>Rego No</td><td>' + data.regoNo + '</td><td>Rego End Date</td><td>' + data.regoEndDate + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoStat + '</td><td>Dealer Stock No</td><td>' + data.dealerStockNo + '</td></tr>\
			<tr><td>No Of Kms</td><td>' + data.noOfKms + '</td><td>Drive Away Price</td><td>' + data.driveAwayPrice + '</td></tr>\
			<tr><td>Negotiable</td><td>' + data.negotiable + '</td><td>Offer Valid Date</td><td>' + data.offerValidDate + '</td></tr>\
			<tr><td>First Come Serve</td><td>' + data.firstCumServe + '</td><td>Color</td><td>' + data.color + '</td></tr>\
			<tr><td>Transmission</td><td>' + data.transmission + '</td><td>Drive Type</td><td>' + data.driveType + '</td></tr>\
			<tr><td>Fuel Type</td><td>' + data.fuelType + '</td><td>No Of Seats</td><td>' + data.noOfSeats + '</td></tr>\
			<tr><td>No Of Doors</td><td>' + data.noOfDoors + '</td><td>Dealer Preferred Location</td><td>' + data.delPrefLocation + '</td></tr>\
			<tr><td>Offer Price 2</td><td>' + data.offerPrice2 + '</td><td>Offer Price 3</td><td>' + data.offerPrice3 + '</td></tr>\
			</table></form>';
		editDealerins12QuotationForm = editDealerins12QuotationForm.replace(/>null</g, ">--NA--<");
		editDealerins12QuotationForm = editDealerins12QuotationForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-ins12-quotation-content").html(editDealerins12QuotationForm);
	});
	
	$('button.submit-editDealerins12QuotationModal').on('click', function(e) {
		
		var jsonInput = $("#edit-dealer-ins12-quotation-content-form").convertFormDataToJSON();
		
		
		$.ajax({  
			type: "POST",  
			url: "api/ins12Quotation?_method=PUT",
			data: jsonInput,
			contentType:'application/json',
			success: function(result){
				$("#anchor-editDealerins12QuotationModal-" + result.quotId).data('details', result);
				alert("Successfully upated and moved to user");
				
			}
		});

		
	});
	
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}
function registerEditDealerVehicleQuotationModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerVehicleQuotationModal = '<div class="modal fade" id="editDealerVehicleQuotationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>Edit Vehicle Quotation</center></h4>\
		        <form id="edit-dealer-vehicle-quotation-content-form">\
				<div class="modal-body edit-dealer-vehicle-quotation-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
	                <button type="button" class="btn btn-primary submit-editDealerVehicleQuotationModal" data-dismiss="modal">Save changes</button>\
	            </div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
		</div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerVehicleQuotationModal);
	
		
	$('a.anchor-editDealerVehicleQuotationModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="quotId" value="' + data.quotId + '" />';
		var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		
		
		var editDealerVehicleQuotationForm = '<form id="edit-dealer-vehicle-quotation-content-form"><table>\
			<tr><td>Quotation ID</td><td>' + data.quotId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>User ID</td><td>' + data.userId + '</td></tr>\
			<tr><td>Model Year</td><td>' + data.modelYear + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.modelName + '</td></tr>\
			<tr><td>Model Display</td><td>' + data.modelDisplay + '</td></tr>\
			<tr><td>Auto Bid</td><td>' + data.autoBid + '</td></tr>\
			<tr><td>Dealer Id</td><td>' + data.dealerId + '</td><td>Dealer Search Id</td><td>' + data.dealSearchId + '</td></tr>\
			<tr><td>Car Search Id</td><td>' + data.carSearchId + '</td><td>Ref Id</td><td>' + data.refId + '</td></tr>\
			<tr><td>Dealer Name</td><td>' + data.dealerName + '</td><td>Dealer ABN</td><td>' + data.dealerABN + '</td></tr>\
			<tr><td>Quot Header FreeText</td><td>' + data.quotHeaderFreeText + '</td><td>VIN Number</td><td>' + data.vinNumber + '</td></tr>\
			<tr><td>Rego No</td><td>' + data.regoNo + '</td><td>Rego End Date</td><td>' + data.regoEndDate + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoStat + '</td><td>Dealer Stock No</td><td>' + data.dealerStockNo + '</td></tr>\
			<tr><td>No Of Kms</td><td>' + data.noOfKms + '</td><td>Drive Away Price</td><td>' + data.driveAwayPrice + '</td></tr>\
			<tr><td>Negotiable</td><td>' + data.negotiable + '</td><td>Offer Valid Date</td><td>' + data.offerValidDate + '</td></tr>\
			<tr><td>First Come Serve</td><td>' + data.firstCumServe + '</td><td>Color</td><td>' + data.color + '</td></tr>\
			<tr><td>Transmission</td><td>' + data.transmission + '</td><td>Drive Type</td><td>' + data.driveType + '</td></tr>\
			<tr><td>Fuel Type</td><td>' + data.fuelType + '</td><td>No Of Seats</td><td>' + data.noOfSeats + '</td></tr>\
			<tr><td>No Of Doors</td><td>' + data.noOfDoors + '</td><td>Dealer Preferred Location</td><td>' + data.delPrefLocation + '</td></tr>\
			<tr><td>Offer Price 2</td><td>' + data.offerPrice2 + '</td><td>Offer Price 3</td><td>' + data.offerPrice3 + '</td></tr>\
			</table></form>';
		editDealerVehicleQuotationForm = editDealerVehicleQuotationForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleQuotationForm = editDealerVehicleQuotationForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-quotation-content").html(editDealerVehicleQuotationForm);
	});
	
	$('button.submit-editDealerVehicleQuotationModal').on('click', function(e) {
		
		var jsonInput = $("#edit-dealer-vehicle-quotation-content-form").convertFormDataToJSON();
		
		
		$.ajax({  
			type: "POST",  
			url: "api/vehicleQuotation?_method=PUT",
			data: jsonInput,
			contentType:'application/json',
			success: function(result){
				$("#anchor-editDealerVehicleQuotationModal-" + result.quotId).data('details', result);
				alert("Successfully upated and moved to user");
				
			}
		});

		
	});
	
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}

function registerEditDealerVehicleSearchModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerVehicleSearchModal = '<div class="modal fade" id="editDealerVehicleSearchModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>View Vehicle Search Details</center></h4>\
		        <form id="edit-dealer-vehicle-search-content-form">\
				<div class="modal-body edit-dealer-vehicle-search-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default pull-right" data-dismiss="modal">Close</button>\
		<p><center>&copy; 2017 Autoscoop</center></p>\
			</div>\
	            </form>\
	        </div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerVehicleSearchModal);
	
		
	$('a.anchor-editDealerVehicleSearchModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="carSearchId" value="' + data.carSearchId + '" />';
		var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.newer)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		var moveToUser1 = '<input type="checkbox" name="moveToUser1" />'; 
		if(data.used)
		  moveToUser1 = '<input type="checkbox" name="moveToUser1" checked="checked" />';
		
		//alert(JSON.stringify(data));
		var editDealerVehicleSearchForm = '<form id="edit-dealer-vehicle-search-content-form"><table>\
			<tr><td>Search ID</td><td>' + data.carSearchId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>New</td><td>' + moveToUser + '</td></tr>\
			<tr><td>Used</td><td>' + moveToUser1 + '</td></tr>\
			<tr><td>Model Year</td><td>' + data.modelYear + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.modelName + '</td></tr>\
			<tr><td>Model Display</td><td>' + data.modelDisplay + '</td></tr>\
			<tr><td>Model Trim</td><td>' + data.modelTrim + '</td></tr>\
			<tr><td>Finance</td><td>' + data.finance + '</td></tr>\
			<tr><td>Insurance</td><td>' + data.insurance + '</td></tr>\
			<tr><td>Dealer</td><td>' + data.dealer + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Body Type</td><td>' + data.bodyType + '</td></tr>\
			<tr><td>Car Color</td><td>' + data.carColor + '</td></tr>\
			<tr><td>State</td><td>' + data.state + '</td></tr>\
			<tr><td>Region</td><td>' + data.region + '</td></tr>\
			<tr><td>PostCode</td><td>' + data.postCode + '</td></tr>\
			<tr><td>Finance Amount Min</td><td>' + data.finAmountMin + '</td></tr>\
			<tr><td>Finance Amount Max</td><td>' + data.finAmountMax + '</td></tr>\
			<tr><td>Support 24/7</td><td>' + data.support247 + '</td></tr>\
			<tr><td>Road Side Assistance</td><td>' + data.roadSideAssistance + '</td></tr>\
			<tr><td>Guarantee Replacement</td><td>' + data.guaranteeReplacement + '</td></tr>\
			<tr><td>Hiring Car</td><td>' + data.hiringCar + '</td></tr>\
			<tr><td>Comprehensive Cover</td><td>' + data.comprehensiveCover + '</td></tr>\
			<tr><td>ThirdParty Cover</td><td>' + data.thirdPartyCover + '</td></tr>\
			<tr><td>AusCapTer</td><td>' + data.ausCapTer + '</td></tr>\
			<tr><td>SModel</td><td>' + data.sModel + '</td></tr>\
			<tr><td>SMake</td><td>' + data.sMake + '</td></tr>\
			<tr><td>Extra External 1</td><td>' + data.ExtraExter2 + '</td></tr>\
			<tr><td>Extra External 2</td><td>' + data.ExtraExter3 + '</td></tr>\
			<tr><td>Extra External 3</td><td>' + data.ExtraExter4 + '</td></tr>\
			<tr><td>Extra External 4</td><td>' + data.ExtraExter5 + '</td></tr>\
			<tr><td>Extra Internal 1</td><td>' + data.ExtraIntern1 + '</td></tr>\
			<tr><td>Extra Internal 2</td><td>' + data.ExtraIntern2 + '</td></tr>\
			<tr><td>Extra Internal 3</td><td>' + data.ExtraIntern3 + '</td></tr>\
			<tr><td>Extra Internal 4</td><td>' + data.ExtraIntern4 + '</td></tr>\
			<tr><td>Extra Internal 5</td><td>' + data.ExtraIntern5 + '</td></tr>\
			</table></form>';
		editDealerVehicleSearchForm = editDealerVehicleSearchForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleSearchForm = editDealerVehicleSearchForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-search-content").html(editDealerVehicleSearchForm);
	});
	
		
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}
function registerEditDealerVehicletranspModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerVehicletranspModal = '<div class="modal fade" id="editDealerVehicletranspModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>View Vehicle Transport Lead Details</center></h4>\
		        <form id="edit-dealer-vehicle-transp-content-form">\
				<div class="modal-body edit-dealer-vehicle-transp-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
				</div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
	        </div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerVehicletranspModal);
	
		
	$('a.anchor-editDealerVehicletranspModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="searchTranspId" value="' + data.searchTranspId + '" />';
		/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.newer)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		var moveToUser1 = '<input type="checkbox" name="moveToUser1" />'; 
		if(data.used)
		  moveToUser1 = '<input type="checkbox" name="moveToUser1" checked="checked" />';*/

		
		
		var editDealerVehicletranspForm = '<form id="edit-dealer-vehicle-transp-content-form"><table>\
			<tr><td>Search ID</td><td>' + data.searchTranspId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>From PostCode Addr</td><td>' + data.fromPostCodeAddr + '</td></tr>\
			<tr><td>To PostCode Addr;</td><td>' + data.toPostCodeAddr + '</td></tr>\
			<tr><td>transport Type Request</td><td>' + data.transTypeReq + '</td></tr>\
			<tr><td>pickUpDateTime</td><td>' + data.pickUpDateTime + '</td></tr>\
			<tr><td>noOfCars</td><td>' + data.noOfCars + '</td></tr>\
			<tr><td>Free Text</td><td>' + data.freeText + '</td></tr>\
			<tr><td>transpInsReq</td><td>' + data.transpInsReq + '</td></tr>\
			</table></form>';
		editDealerVehicletranspForm = editDealerVehicletranspForm.replace(/>null</g, ">--NA--<");
		editDealerVehicletranspForm = editDealerVehicletranspForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-transp-content").html(editDealerVehicletranspForm);
	});
	
		
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}
function registerEditDealerVehicleservmaintModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerVehicleservmaintModal = '<div class="modal fade" id="editDealerVehicleservmaintModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>View Vehicle Service Maintainence Details</center></h4>\
		        <form id="edit-dealer-vehicle-servmaint-content-form">\
				<div class="modal-body edit-dealer-vehicle-servmaint-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
				</div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
	        </div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerVehicleservmaintModal);
	
		
	$('a.anchor-editDealerVehicleservmaintModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="servMaintId" value="' + data.searchServMaintId + '" />';
		/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.newer)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		var moveToUser1 = '<input type="checkbox" name="moveToUser1" />'; 
		if(data.used)
		  moveToUser1 = '<input type="checkbox" name="moveToUser1" checked="checked" />';*/

		
		
		var editDealerVehicleservmaintForm = '<form id="edit-dealer-vehicle-servmaint-content-form"><table>\
			<tr><td>Search ID</td><td>' + data.searchServMaintId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>Fuel Type</td><td>' + data.feulType + '</td></tr>\
			<tr><td>Service Level 1</td><td>' + data.servMaintL1 + '</td></tr>\
			<tr><td>Service Level 2</td><td>' + data.servMaintL2 + '</td></tr>\
			<tr><td>Covered Under Insurance</td><td>' + data.coveredUnderIns + '</td></tr>\
			<tr><td>Current Insurance Provider</td><td>' + data.curInsProv + '</td></tr>\
			<tr><td>Free Text</td><td>' + data.freeText + '</td></tr>\
			<tr><td>Rego No</td><td>' + data.regNo + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoState + '</td></tr>\
			</table></form>';
		editDealerVehicleservmaintForm = editDealerVehicleservmaintForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleservmaintForm = editDealerVehicleservmaintForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-servmaint-content").html(editDealerVehicleservmaintForm);
	});
	
		
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}
function registerEditDealerVehicleFinanceModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerVehicleFinanceModal = '<div class="modal fade" id="editDealerVehicleFinanceModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>View Vehicle Finance Details</center></h4>\
		        <form id="edit-dealer-vehicle-finance-content-form">\
				<div class="modal-body edit-dealer-vehicle-finance-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
				</div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
	        </div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerVehicleFinanceModal);
	
		
	$('a.anchor-editDealerVehicleFinanceModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="financeSearchId" value="' + data.searchFinanceId + '" />';
		var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.newer)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		var moveToUser1 = '<input type="checkbox" name="moveToUser1" />'; 
		if(data.used)
		  moveToUser1 = '<input type="checkbox" name="moveToUser1" checked="checked" />';

		
		
		var editDealerVehicleFinanceForm = '<form id="edit-dealer-vehicle-finance-content-form"><table>\
			<tr><td>Search ID</td><td>' + data.searchFinanceId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>New</td><td>' + moveToUser + '</td></tr>\
			<tr><td>Used</td><td>' + moveToUser1 + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>Autoscoop Trim</td><td>' + data.autoscoopTrim + '</td></tr>\
			<tr><td>Vehicle Value</td><td>' + data.vehValue + '</td></tr>\
			<tr><td>Balloon Pay</td><td>' + data.balloonPay + '</td></tr>\
			<tr><td>Loan Amount</td><td>' + data.loanAmount + '</td></tr>\
			<tr><td>Loan Period</td><td>' + data.loanPeriod + '</td></tr>\
			<tr><td>Annual Income</td><td>' + data.annualIncome + '</td></tr>\
			<tr><td>Income Type</td><td>' + data.incomeType + '</td></tr>\
			<tr><td>Credit Rating</td><td>' + data.creditRating + '</td></tr>\
			<tr><td>Date of Birth</td><td>' + data.dateOfBirth + '</td></tr>\
			<tr><td>Year Employment Business</td><td>' + data.yearEmploymentBusiness + '</td></tr>\
			<tr><td>Income Before Super Tax</td><td>' + data.incomeBeforeSuperTax + '</td></tr>\
			<tr><td>Income After Super Tax</td><td>' + data.incomeAfterSuperTax + '</td></tr>\
			<tr><td>If Business Provide ABN</td><td>' + data.ifBusinessProvideABN + '</td></tr>\
			</table></form>';
		editDealerVehicleFinanceForm = editDealerVehicleFinanceForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleFinanceForm = editDealerVehicleFinanceForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-finance-content").html(editDealerVehicleFinanceForm);
	});
	
		
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}	

function registerEditDealerVehicleInsuranceModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerVehicleInsuranceModal = '<div class="modal fade" id="editDealerVehicleInsuranceModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>View Vehicle Insurance Details</center></h4>\
		        <form id="edit-dealer-vehicle-insurance-content-form">\
				<div class="modal-body edit-dealer-vehicle-insurance-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
				</div>\
	            </form>\
	        	<p><center>&copy; 2017 Autoscoop</center></p>\
	        </div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerVehicleInsuranceModal);
	
		
	$('a.anchor-editDealerVehicleInsuranceModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="financeSearchId" value="' + data.searchInsuranceId + '" />';
		var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.newer)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
		var moveToUser1 = '<input type="checkbox" name="moveToUser1" />'; 
		if(data.used)
		  moveToUser1 = '<input type="checkbox" name="moveToUser1" checked="checked" />';

		
		
		var editDealerVehicleInsuranceForm = '<form id="edit-dealer-vehicle-insurance-content-form"><table>\
			<tr><td>Search ID</td><td>' + data.searchInsuranceId + '</td></tr>\
			<tr><td>Post Code</td><td>' + data.postCode + '</td></tr>\
			 <tr><td>New</td><td>' + moveToUser + '</td></tr>\
				<tr><td>Used</td><td>' + moveToUser1 + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>Autoscoop Trim</td><td>' + data.autoscoopTrim + '</td></tr>\
			<tr><td>insuranceType</td><td>' + data.insuranceType + '</td></tr>\
			<tr><td>Registration No:</td><td>' + data.regNo + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoState + '</td></tr>\
			<tr><td>Market Value</td><td>' + data.marketValue + '</td></tr>\
			<tr><td>Agreed Value</td><td>' + data.agreedValue + '</td></tr>\
			<tr><td>Finance</td><td>' + data.finance + '</td></tr>\
			<tr><td>Finance Provider</td><td>'+ data.financeProvider + '</td></tr>\
			<tr><td>Driving License Type</td><td>' + data.drivingLicenseType + '</td></tr>\
			<tr><td>Driving License No:</td><td>' + data.drivingLicenseNo + '</td></tr>\
			<tr><td>Driving License Issue State</td><td>' + data.drivingLicenseIssueState + '</td></tr>\
			<tr><td>No Of AtFaults</td><td>' + data.noOfAtFaults + '</td></tr>\
			<tr><td>Other Issues</td><td>' + data.otherIssues + '</td></tr>\
			<tr><td>Current Ins-Prov</td><td>' + data.curInsProv + '</td></tr>\
			<tr><td>Pref Excess Amount</td><td>' + data.prefExcessAmount + '</td></tr>\
			<tr><td>DateOfBirth</td><td>' + data.dateOfBirth + '</td></tr>\
			<tr><td>Age Of Additional Driver</td><td>' + data.ageOfAdditionalDriver + '</td></tr>\
			</table></form>';
		editDealerVehicleInsuranceForm = editDealerVehicleInsuranceForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleInsuranceForm = editDealerVehicleInsuranceForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-insurance-content").html(editDealerVehicleInsuranceForm);
	});
	
		
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}	

function registerEditDealerVehicleDetailModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerVehicleDetailModal = '<div class="modal fade" id="editDealerVehicleDetailModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
	            </div>\
				<h4 class="modal-title" id="myModalLabel"><center>View My Vehicle Details</center></h4>\
		        <form id="edit-dealer-vehicle-detail-content-form">\
				<div class="modal-body edit-dealer-vehicle-detail-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
				</div>\
	            </form>\
				<p><center>&copy; 2017 Autoscoop</center></p>\
	        </div>\
	    </div>\
	</div>';

	$(document.body).append(editDealerVehicleDetailModal);
	
		
	$('a.anchor-editDealerVehicleDetailModal').on('click', function(event) {
		
		
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="myVehicleId" value="' + data.myVehicleId + '" />';
		/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';*/
		
		
		var editDealerVehicleDetailForm = '<form id="edit-dealer-vehicle-detail-content-form"><table>\
			<tr><td>My Vehicle ID</td><td>' + data.myVehicleId + '</td></tr>\
			<tr><td>Post Code</td><td>' + data.postCode + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>VIN</td><td>' + data.vin + '</td></tr>\
			<tr><td>Registration No:</td><td>' + data.regNum + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regState + '</td></tr>\
			<tr><td>Reg Expirty Date</td><td>' + data.regExpDate + '</td></tr>\
			<tr><td>Insurance Provider</td><td>' + data.insProv + '</td></tr>\
			<tr><td>Insurance Provider Man</td><td>' + data.insProvMan + '</td></tr>\
			<tr><td>Insurance Premium Paid</td><td>'+ data.insPremPaid + '</td></tr>\
			<tr><td>Insurance Premium Freq</td><td>' + data.insPremPaidFreq + '</td></tr>\
			<tr><td>Insurance Expiry</td><td>' + data.insExpiry + '</td></tr>\
			<tr><td>ODO Meter</td><td>' + data.odoMeter + '</td></tr>\
			<tr><td>Last Service Dt</td><td>' + data.lastServiceDt + '</td></tr>\
			<tr><td>Next Service Dt</td><td>' + data.nextServiceDt + '</td></tr>\
			<tr><td>Next Service Kms</td><td>' + data.nextServKms + '</td></tr>\
			<tr><td>Finance Provider</td><td>' + data.finProvider + '</td></tr>\
			<tr><td>Loan Amount1</td><td>' + data.loanAmt1 + '</td></tr>\
			<tr><td>Age Of Additional Driver</td><td>' + data.loanTakenDt + '</td></tr>\
			<tr><td>Loan Paid Freq</td><td>' + data.loanPaidFreq + '</td></tr>\
			<tr><td>Loan Period</td><td>' + data.loanPeriod + '</td></tr>\
			<tr><td>Loan Interest</td><td>' + data.loanInterest + '</td></tr>\
			<tr><td>Fuel Card Provider</td><td>' + data.fuelCardProvider + '</td></tr>\
			<tr><td>value Fuel Card</td><td>' + data.valFuelCard + '</td></tr>\
			<tr><td>Fuel Type</td><td>' + data.fuelType + '</td></tr>\
			</table></form>';
		editDealerVehicleDetailForm = editDealerVehicleDetailForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleDetailForm = editDealerVehicleDetailForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-detail-content").html(editDealerVehicleDetailForm);
	});
	
		
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}

function registerEditDealerVehicleDetailLogBookModal(){       

// change here
	//alert("log html gene");
	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	/*var editDealerVehicleDetailLogBookModal = '<div id="selectedRecord">\
		<h4><center>Log Book Details for Vehicle</center></h4><a class="button btn-mini pull-right" id="BackToVehicles">Back To Vehicles Log</a>\
		<div class="edit-dealer-vehicle-detail-logbook-content">\
	            </div>\
		<br/>\
		<br/>\
		<ul class="nav nav-tabs">\
	    <li class="active"><a data-toggle="tab" href="#logTrip">Log Trip</a></li>\
	    <li><a data-toggle="tab" href="#LogExp">Log Expenses</a></li>\
	    <li><a data-toggle="tab" href="#ServMain">Service & Maintenance Log</a></li>\
	  </ul>\
	  <div class="tab-content">\
	    <div id="logTrip" class="tab-pane fade in active">\
	    <div class="col-md-12"><button id="LogNewButton">Log a New Trip</button></div>\
		<div class="booking-section travelo-box" id="LogNew">\
		<form class="booking-form">\
    	<div class="form-group row">\
		   <div class="col-sm-6 col-md-6">\
				<label>Vehicle Type</label>\
				<input type="text" id="vehicleType" name="vehicleType" class="input-text full-width" value="" placeholder="" />\
			</div>\
			<div class="col-sm-6 col-md-6">\
					<label>Trip Type</label>\
					<div class="selector">\
						<select class="full-width" id="tripType" name="tripType">\
							<option>Private</option>\
							<option>Business</option>\
							<option>Other</option>\
						</select>\
					</div>\
			 </div>\
		</div>\
		<div class="form-group row">\
			<div class="col-sm-6 col-md-6">\
				<label>Trip Description</label>\
				<input type="text" id="tripDescription" name="tripDescription" class="input-text full-width" value="" placeholder="" />\
			</div>\
			<div class="col-sm-6 col-md-6">\
				<label>From Location Post Code</label>\
				<input type="text" id="lPostCode" name="lPostCode" class="input-text full-width" value="" placeholder="" />\
			</div>\
		</div>\
		<div class="form-group row">\
			<div class="col-sm-6 col-md-6">\
				<label>From Location Address</label>\
				<input type="text" id="lAPostCode" name="lAPostCode" class="input-text full-width" value="" placeholder="" />\
			</div>\
			<div class="col-sm-6 col-md-6">\
				<label>To Location Post Code</label>\
				<input type="text" id="tPostCode" name="tPostCode" class="input-text full-width" value="" placeholder="" />\
			</div>\
		</div>\
		<div class="form-group row">\
			<div class="col-sm-6 col-md-6">\
				<label>To Location Address</label>\
				<input type="text" id="tAPostCode" name="tAPostCode" class="input-text full-width" value="" placeholder="" />\
			</div>\
			<div class="col-sm-6 col-md-6">\
				<label>Odo Meter Start of the Trip Kms/Miles</label>\
				<input type="text" id="odoMeterStartTripKmsMiles" name="odoMeterStartTripKmsMiles" class="input-text full-width" value="" placeholder="" />\
			</div>\
		</div>\
		<div class="form-group row">\
			<div class="col-sm-6 col-md-6">\
				<label>Odometer End of the Trip</label>\
				<input type="text" id="odometerEndoftheTrip" name="odometerEndoftheTrip" class="input-text full-width" value="" placeholder="" />\
			</div>\
			 <div class="col-sm-6 col-md-6">\
				<label>Rout Kms/Miles</label>\
				<input type="text" id="routKmsMiles" name="routKmsMiles" class="input-text full-width" value="" placeholder="" />\
			</div>\
		</div>\
        <div class="form-group row">\
			<div class="col-sm-6 col-md-5">\
				<button type="button" class="full-width btn-large" id="LogSave" >Save</button>\
			</div>\
        </div>\
		</form>\
		</div>\
	    </div>\
	    <div id="LogExp" class="tab-pane fade">\
		<div class="col-md-12"><button id="LogNewExpButton">Log a New Expenses</button></div>\
	      <p>Your Expenses goes here</p>\
	    </div>\
	    <div id="ServMain" class="tab-pane fade">\
		<div class="col-md-12"><button id="LogNewSerButton">Log New Service & Maintenance</button></div>\
	      <p>Your Service & maintenance goes here</p>\
	    </div>\
	  </div>\
 	  </div>';*/

	//$(document.body).append(editDealerVehicleDetailLogBookModal);
		
	$('a.anchor-editDealerVehicleDetailLogBookModal').on('click', function(event) {
		//alert("invoke sscs clddaick");
		$('#fuelCard4').toggle();
		//document.getElementById("fuelCard4").style.display = "none";
		var data = $(event.target).data('details');
		//var json = JSON.stringify(data);
		
		var quotIdHiddenField = '<input type="hidden" name="myVehicleId" value="' + data.myVehicleId + '" />';
		/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';*/
		
		$('#fuelCard41').toggle();
		myVehicleIDuse = data.myVehicleId;
		//vehicleRetrievalforLogBook();
		//alert("before call");
		angular.element(document.getElementById('myController13')).scope().vehicleRetrievalforLogBook();
		/*var wsURL = 'api/Myvehicle/'+data.myVehicleId;
		$.ajax({  
			type: "GET",  
			url: wsURL,
			contentType:'application/json',
			success: function(result){
				//alert(JSON.stringify(result));
				var LogT = result.myVehicleLogBook;
				outLogT="";
				//alert(LogT);
				//alert(result.myVehicleLogBook.length);
				//alert("viscuit");
				if(LogT && result.myVehicleLogBook.length!=0)
					{
					var logTripTable = '<table>\
						<tr><th>'+"Trip Type"+'</th><th>'+"TripStart Addr"+'</th><th>'+"TripEnd Addr"+'</th><th>'+"Trip Date"+'</th><th>'+"OdoMeter Start"+'</th><th>'+"OdoMeter End"+'</th><th>'+"No of Kms"+'</th><th>'+"Purpose of Trim"+'</th><th>'+"Driver Name"+'</th><th>'+"Trip Log Date"+'</th></tr>\
						<tr><td>' + data.myVehicleId + '</td>\
						<td>' + data.year + '</td>\
						<td>' + data.make + '</td>\
						<td>' + data.model + '</td>\
						<td>' + data.variant + '</td></tr>\
						</table>';
					logTlen = result.myVehicleLogBook.length;
					outLogT += '<tr><th>'+"Trip Type"+'</th><th>'+"TripStart Addr"+'</th><th>'+"TripEnd Addr"+'</th><th>'+"Trip Date"+'</th><th>'+"OdoMeter Start"+'</th><th>'+"OdoMeter End"+'</th><th>'+"No of Kms"+'</th><th>'+"Purpose of Trip"+'</th><th>'+"Driver Name"+'</th><th>'+"Trip Log Date"+'</th></tr>';
	           	    for(i=0;i<logTlen;i++)
	          		 {
	           	    	outLogT= outLogT+'<tr>'+'<td>'+result.myVehicleLogBook[i].tripType+'</td>'+'<td>'+result.myVehicleLogBook[i].fromLocation+'</td>'+'<td>'+result.myVehicleLogBook[i].toLocation+'</td>'+'<td>'+result.myVehicleLogBook[i].date+'</td>'+'<td>'+result.myVehicleLogBook[i].odoMeterStartOfTrip+'</td>'+'<td>'+result.myVehicleLogBook[i].odoMeterEndOfTrip+'</td>'+'<td>'+result.myVehicleLogBook[i].routeKm+'</td>'+'<td>'+result.myVehicleLogBook[i].tripDescription+'</td>'+'<td>'+result.myVehicleLogBook[i].flex1+'</td></tr>';
	          		 }
	           	 outLogT = outLogT.replace(/>null</g, ">--NA--<");
	           	outLogT = outLogT.replace(/>undefined</g, ">--NA--<");
					}
				else
					{
					outLogT='<h2>No records for Log Trips</h2>';
					}
				$('#logTripTable').html(outLogT);
				
				
				var LogE = result.myVehicleFuelExpenses;
				outLogE="";
				//alert(result.myVehicleFuelExpenses.length);
				if(LogE && result.myVehicleFuelExpenses.length!=0)
				{
					var  logServMainTable = '<table>\
						<tr><th>'+"Type of Service"+'</th><th>'+"Date of Service"+'</th><th>'+"Mileage/OdoMeter @Service"+'</th><th>'+"Detail Work Performed"+'</th><th>'+"List of Service"+'</th><th>'+"Notes"+'</th><th>'+"Technician"+'</th><th>'+"Service & maintenancec Company"+'</th><th>'+"Uploadedd Maintenance record"+'</th></tr>\
						<tr><td>' + data.myVehicleId + '</td>\
						<td>' + data.year + '</td>\
						<td>' + data.make + '</td>\
						<td>' + data.model + '</td>\
						<td>' + data.variant + '</td></tr>\
						</table>';
					logElen = result.myVehicleFuelExpenses.length;
					outLogE += '<tr><th>'+"Expensive Type"+'</th><th>'+"Expensive Category"+'</th><th>'+"Expensive Date"+'</th><th>'+"Expensive Description"+'</th><th>'+"Amount"+'</th><th>'+"Uploaded Photo"+'</th></tr>';
	           	    for(i=0;i<logElen;i++)
	          		 {
	           	    	outLogE= outLogE+'<tr>'+'<td>'+result.myVehicleFuelExpenses[i].recordType+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].business+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].date+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].others+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].amount+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].photoOfInvoice+'</td></tr>';
	          		 }
	           	 outLogE = outLogE.replace(/>null</g, ">--NA--<");
	           	outLogE = outLogE.replace(/>undefined</g, ">--NA--<");

				}
			else
				{
				outLogE='<h2>No records for log Expenses</h2>';
				}
				$('#logExpTable').html(outLogE);
				
				
				
				//alert(result.myVehicleServMaint.length);
				var LogS = result.myVehicleServMaint;
				outLogS="";
				if(LogS && result.myVehicleServMaint.length!=0)
				{
					var logExpTable = '<table>\
						<tr><th>'+"Expensive Type"+'</th><th>'+"Expensive Category"+'</th><th>'+"Expensive Date"+'</th><th>'+"Expensive Description"+'</th><th>'+"Amount"+'</th><th>'+"Uploaded Photo"+'</th></tr>\
						<tr><td>' + data.myVehicleId + '</td>\
						<td>' + data.year + '</td>\
						<td>' + data.make + '</td>\
						<td>' + data.model + '</td>\
						<td>' + data.variant + '</td></tr>\
						</table>';
					
					logSlen = result.myVehicleServMaint.length;
					outLogS += '<tr><th>'+"Type of Service"+'</th><th>'+"Date of Service"+'</th><th>'+"Mileage/OdoMeter @Service"+'</th><th>'+"Detail Work Performed"+'</th><th>'+"List of Service"+'</th><th>'+"Notes"+'</th><th>'+"Technician"+'</th><th>'+"Service & maintenancec Company"+'</th><th>'+"Uploaded Maintenance record"+'</th></tr>'; 
						
	           	    for(i=0;i<logSlen;i++)
	          		 {
	           	    	outLogS= outLogS+'<tr>'+'<td>'+result.myVehicleServMaint[i].typeOfServMaint+'</td>'+'<td>'+result.myVehicleServMaint[i].date+'</td>'+'<td>'+result.myVehicleServMaint[i].odoMeterKm+'</td>'+'<td>'+result.myVehicleServMaint[i].flex1+'</td>'+'<td>'+result.myVehicleServMaint[i].flex2+'</td>'+'<td>'+result.myVehicleServMaint[i].flex3+'</td><td>'+result.myVehicleServMaint[i].mechanicName+'</td>'+'<td>'+result.myVehicleServMaint[i].companyName+'</td><td>'+result.myVehicleServMaint[i].flex4+'</td></tr>';
	          		 }
	           	 outLogS = outLogS.replace(/>null</g, ">--NA--<");
	           	outLogS = outLogS.replace(/>undefined</g, ">--NA--<");
				}
			else
				{
				outLogS='<h2>No records for Service maintenance</h2>';
				}
				$('#logServMainTable').html(outLogS);
			}
		});*/
		
		
		
		
		
		
		//document.getElementById("fuelCard41").style.display = "block";
		var editDealerVehicleDetailLogBookForm = '<table>\
			<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Variant"+'</th></tr>\
			<tr><td>' + data.myVehicleId + '</td>\
			<td>' + data.year + '</td>\
			<td>' + data.make + '</td>\
			<td>' + data.model + '</td>\
			<td>' + data.variant + '</td></tr>\
			</table>';
		editDealerVehicleDetailLogBookForm = editDealerVehicleDetailLogBookForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleDetailLogBookForm = editDealerVehicleDetailLogBookForm.replace(/>undefined</g, ">--NA--<");
		//$("#fuelCard41").append(editDealerVehicleDetailLogBookModal);
		$(".edit-dealer-vehicle-detail-logbook-content").html(editDealerVehicleDetailLogBookForm);
		 $("#BackToVehicles").click(function(){
		        $('#fuelCard41').hide();
		        //$( "#fuelCard41" ).empty();
		        $('#fuelCard4').show();
		        //document.getElementById("fuelCard41").style.display = "none";
		        //document.getElementById("fuelCard4").style.display = "block";
		        //alert("The paragraph ssswas showed.");
		    });
		 
		   
		 
		/*$("#LogSave").click(function(){
		        //alert("Log Save alertsssaasa.");
		        //angular.element(document.getElementById('LogNew')).scope().submitSearchFormLogBook();

				//alert("inside Log Book");
				//alert(""+$('#vehicleTypeLogBook').val());
				var jsonInputToAPI = {"myVehicleId":data.myVehicleId,
						"myVehicleLogBookVO":{
							"myVehicleLogBookId":null,
							"recordType": $('#vehicleTypeLogBook').val(),															      
							"tripType":$('#tripType').val(),
									"tripDescription" :$('#tripDescription').val(),
									 "fromLocation":$('#lPostCode').val(),
									"toLocation":$('#tPostCode').val(),
									"flex1":$('#lAPostCode').val(),
									"flex2":$('#tAPostCode').val(),
									"odoMeterStartOfTrip":$('#odoMeterStartTripKmsMiles').val(),
									"odoMeterEndOfTrip":$('#odometerEndoftheTrip').val(),
									"routeKm":$('#routKmsMiles').val(),
									"flex5":0,
									"flex6":0,
									"flex7":0
						}
						}

				var wsURL = 'api/myvehicle/addMyVehicleLogBook';
				//alert("before Ajax");
				alert($('#lPostCode').val());
				$.ajax({  
					type: "POST",  
					url: wsURL,
					data: JSON.stringify(jsonInputToAPI),
					contentType:'application/json',
					success: function(result){
						
						alert("Successfully saved");
						
					}
				});
				
		    });*/
	});
	
	
		
	$.fn.convertFormDataToJSON = function(){
		var checkboxes = [];
		$(this).find('input:checkbox:checked').each(function(){
			checkboxes.push($(this).attr("name"));
		});
		var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] != undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            if($.inArray(this.name, checkboxes) != -1)
	              o[this.name].push('true' || '');
	            else
	            	o[this.name].push(this.value || '');
	        } else {
	        	if($.inArray(this.name, checkboxes) != -1)
	        		o[this.name] = 'true' || '';
		        else
		           	o[this.name] = this.value || '';
	        }
	    });
	    return JSON.stringify(o);
	}

	
}


});

// end of window onload


function redirect() {
	//alert("Thank You. Your Seach ID is ");

	var url="homepage10.html?userId="+userId+"&firstName="+firstName;
	
	window.location=url;
}


//angular JS start
var mainApp1 = angular.module("mainApp13", []);
mainApp1.controller('myController13',function($scope, $http) {
					//alert("in user con");function vehicleRetrievalforLogBook(){
	//alert("in angular");
	$scope.vehicleRetrievalforLogBook = function() {				
						//alert("inside ne method");
						var wsURL = 'api/Myvehicle/'+myVehicleIDuse;
						$.ajax({  
							type: "GET",  
							url: wsURL,
							contentType:'application/json',
							success: function(result){
								//alert(JSON.stringify(result));
								var LogT = result.myVehicleLogBook;
								outLogT="";
								//alert(LogT);
								//alert(result.myVehicleLogBook.length);
								//alert("viscuit");
								if(LogT && result.myVehicleLogBook.length!=0)
									{
									/*var logTripTable = '<table>\
										<tr><th>'+"Trip Type"+'</th><th>'+"TripStart Addr"+'</th><th>'+"TripEnd Addr"+'</th><th>'+"Trip Date"+'</th><th>'+"OdoMeter Start"+'</th><th>'+"OdoMeter End"+'</th><th>'+"No of Kms"+'</th><th>'+"Purpose of Trim"+'</th><th>'+"Driver Name"+'</th><th>'+"Trip Log Date"+'</th></tr>\
										<tr><td>' + data.myVehicleId + '</td>\
										<td>' + data.year + '</td>\
										<td>' + data.make + '</td>\
										<td>' + data.model + '</td>\
										<td>' + data.variant + '</td></tr>\
										</table>';*/
									logTlen = result.myVehicleLogBook.length;
									outLogT += '<tr><th>'+"Trip Type"+'</th><th>'+"TripStart Addr"+'</th><th>'+"TripEnd Addr"+'</th><th>'+"Trip Date"+'</th><th>'+"OdoMeter Start"+'</th><th>'+"OdoMeter End"+'</th><th>'+"No of Kms"+'</th><th>'+"Purpose of Trip"+'</th><th>'+"Driver Name"+'</th><th>'+"Trip Log Date"+'</th></tr>';
					           	    for(i=0;i<logTlen;i++)
					          		 {
					           	    	outLogT= outLogT+'<tr>'+'<td>'+result.myVehicleLogBook[i].tripType+'</td>'+'<td>'+result.myVehicleLogBook[i].fromLocation+'</td>'+'<td>'+result.myVehicleLogBook[i].toLocation+'</td>'+'<td>'+result.myVehicleLogBook[i].date+'</td>'+'<td>'+result.myVehicleLogBook[i].odoMeterStartOfTrip+'</td>'+'<td>'+result.myVehicleLogBook[i].odoMeterEndOfTrip+'</td>'+'<td>'+result.myVehicleLogBook[i].routeKm+'</td>'+'<td>'+result.myVehicleLogBook[i].tripDescription+'</td>'+'<td>'+result.myVehicleLogBook[i].flex1+'</td></tr>';
					          		 }
					           	 outLogT = outLogT.replace(/>null</g, ">--NA--<");
					           	outLogT = outLogT.replace(/>undefined</g, ">--NA--<");
									}
								else
									{
									outLogT='<h2>No records for Log Trips</h2>';
									}
								$('#logTripTable').html(outLogT);
								
								
								var LogE = result.myVehicleFuelExpenses;
								outLogE="";
								//alert(result.myVehicleFuelExpenses.length);
								if(LogE && result.myVehicleFuelExpenses.length!=0)
								{
									/*var  logServMainTable = '<table>\
										<tr><th>'+"Type of Service"+'</th><th>'+"Date of Service"+'</th><th>'+"Mileage/OdoMeter @Service"+'</th><th>'+"Detail Work Performed"+'</th><th>'+"List of Service"+'</th><th>'+"Notes"+'</th><th>'+"Technician"+'</th><th>'+"Service & maintenancec Company"+'</th><th>'+"Uploadedd Maintenance record"+'</th></tr>\
										<tr><td>' + data.myVehicleId + '</td>\
										<td>' + data.year + '</td>\
										<td>' + data.make + '</td>\
										<td>' + data.model + '</td>\
										<td>' + data.variant + '</td></tr>\
										</table>';*/
									logElen = result.myVehicleFuelExpenses.length;
									outLogE += '<tr><th>'+"Expensive Type"+'</th><th>'+"Expensive Category"+'</th><th>'+"Expensive Date"+'</th><th>'+"Expensive Description"+'</th><th>'+"Amount"+'</th><th>'+"Uploaded Photo"+'</th></tr>';
					           	    for(i=0;i<logElen;i++)
					          		 {
					           	    	outLogE= outLogE+'<tr>'+'<td>'+result.myVehicleFuelExpenses[i].recordType+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].business+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].date+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].others+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].amount+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].photoOfInvoice+'</td></tr>';
					          		 }
					           	 outLogE = outLogE.replace(/>null</g, ">--NA--<");
					           	outLogE = outLogE.replace(/>undefined</g, ">--NA--<");
				
								}
							else
								{
								outLogE='<h2>No records for log Expenses</h2>';
								}
								$('#logExpTable').html(outLogE);
								
								
								
								//alert(result.myVehicleServMaint.length);
								var LogS = result.myVehicleServMaint;
								outLogS="";
								if(LogS && result.myVehicleServMaint.length!=0)
								{
									/*var logExpTable = '<table>\
										<tr><th>'+"Expensive Type"+'</th><th>'+"Expensive Category"+'</th><th>'+"Expensive Date"+'</th><th>'+"Expensive Description"+'</th><th>'+"Amount"+'</th><th>'+"Uploaded Photo"+'</th></tr>\
										<tr><td>' + data.myVehicleId + '</td>\
										<td>' + data.year + '</td>\
										<td>' + data.make + '</td>\
										<td>' + data.model + '</td>\
										<td>' + data.variant + '</td></tr>\
										</table>';
									*/
									logSlen = result.myVehicleServMaint.length;
									outLogS += '<tr><th>'+"Type of Service"+'</th><th>'+"Date of Service"+'</th><th>'+"Mileage/OdoMeter @Service"+'</th><th>'+"Detail Work Performed"+'</th><th>'+"List of Service"+'</th><th>'+"Notes"+'</th><th>'+"Technician"+'</th><th>'+"Service & maintenancec Company"+'</th><th>'+"Uploaded Maintenance record"+'</th></tr>'; 
										
					           	    for(i=0;i<logSlen;i++)
					          		 {
					           	    	outLogS= outLogS+'<tr>'+'<td>'+result.myVehicleServMaint[i].typeOfServMaint+'</td>'+'<td>'+result.myVehicleServMaint[i].date+'</td>'+'<td>'+result.myVehicleServMaint[i].odoMeterKm+'</td>'+'<td>'+result.myVehicleServMaint[i].flex1+'</td>'+'<td>'+result.myVehicleServMaint[i].flex2+'</td>'+'<td>'+result.myVehicleServMaint[i].flex3+'</td><td>'+result.myVehicleServMaint[i].mechanicName+'</td>'+'<td>'+result.myVehicleServMaint[i].companyName+'</td><td>'+result.myVehicleServMaint[i].flex4+'</td></tr>';
					          		 }
					           	 outLogS = outLogS.replace(/>null</g, ">--NA--<");
					           	outLogS = outLogS.replace(/>undefined</g, ">--NA--<");
								}
							else
								{
								outLogS='<h2>No records for Service maintenance</h2>';
								}
								$('#logServMainTable').html(outLogS);
							}
						});
					}

					$scope.submitSearchForm = function() {
						var RegExpDate= stringToDate($('#RegExpDate').val(),"dd/MM/yyyy","/");
						var InsExpDate= stringToDate($('#InsExpDate').val(),"dd/MM/yyyy","/");
						var LastServDate= stringToDate($('#LastServDate').val(),"dd/MM/yyyy","/");
						var NextServDate= stringToDate($('#NextServDate').val(),"dd/MM/yyyy","/");
						var LoanTakenDate = stringToDate($('#LoanTakenDate').val(),"dd/MM/yyyy","/");

						var jsonInputToAPI = {"userId":userId,
								"myVehicleVO":{
									"myVehicleId":null,
									"year": $('#car-years').val(),															      
									"make":$('#car-makes').val(),
											"model" :$('#car-models').val(),
											 "variant":$('#car-model-trims').val(),
											"vin":$('#vin').val(),
											"regNum":$('#regNo').val(),
											"regState":$('#car-model-trims').val(),
											"regExpDate":RegExpDate,
											"insProv":$('#regState').val(),
											"insProvMan":$('#insProv').val(),
											"insPremPaid":$('#insPrePaid').val(),
											"insPremPaidFreq":$('#premPaidFreq').val(),
											"insExpiry":InsExpDate,	
											"odoMeter":$('#odoMeter').val(),	
											"lastServiceDt":LastServDate,	
											"nextServiceDt":NextServDate,	
											"nextServKms":$('#nextServMaiKms').val(),	
											"finProvider":$('#finProv').val(),	
											"loanAmt1":$('#loanAmount').val(),	
											"loanTakenDt":LoanTakenDate,
												"loanPaidFreq":$('#loanPaidFreq').val(),	
											"loanAmt2":$('#laonAmount1').val(),	
											"loanPeriod":$('#laonPeriod').val(),	
											"loanInterest":$('#laonIntRate').val(),
												"fuelCardProvider":$('#fuelCardProv').val(),	
											"valFuelCard":$('#valFuelCard').val(),	
											"fuelType":$('#fuelType').val(),
												"photo1":$('#photo1').val(),	
											"photo2":$('#photo2').val(),	
											"photo3":$('#photo3').val(),
												"flex1":"flex1",	
											"flex2":"flex1",	
											"flex3":"flex1",
												"flex4":"flex1",	
											"flex5":12,	
											"flex6":12,
											"flex7":12,
												"flex8":null,	
											"flex9":null
								}
								}


												//alert("Before Call");
												//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/myVehicle/';
												//var wsURL = 'http://www.autoscoop.com.au/api/eBid/myVehicle/';
												var wsURL = 'api/eBid/myVehicle';
												
													    $http({
																	method : 'POST',
																	url : wsURL,
																	data: jsonInputToAPI
																					
																}).success(function(data) {
																	alert("Successfully Stored..");
																					alert("Thank You. Your MyVehicle ID is " + data.myVehicleId);
																													
																				});													
							};//end of submitsearch

																			
											
												$scope.submitSearchFormLogBook = function() {
													alert("inside Log Book");
													alert(myVehicleIDuse);												
													
													//alert(data.myVehicleId);
													var jsonInputToAPI = {"myVehicleId":myVehicleIDuse,
															"myVehicleLogBookVO":{
																"myVehicleLogBookId":null,
																"recordType": $('#vehicleTypeLogBook').val(),															      
																"tripType":$('#tripType').val(),
																		"tripDescription" :$('#tripDescription').val(),
																		 "fromLocation":$('#lPostCode').val(),
																		"toLocation":$('#tPostCode').val(),
																		"flex1":$('#lAPostCode').val(),
																		"flex2":$('#tAPostCode').val(),
																		"odoMeterStartOfTrip":$('#odoMeterStartTripKmsMiles').val(),
																		"odoMeterEndOfTrip":$('#odometerEndoftheTrip').val(),
																		"routeKm":$('#routKmsMiles').val(),
																		"flex5":0,
																		"flex6":0,
																		"flex7":0
															}
															}

													//console.log(JSON.stringify(jsonInputToAPI));
													//alert("Before Call");
													//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/myVehicle/';
													//var wsURL = 'http://www.autoscoop.com.au/api/eBid/myVehicle/';
													var wsURL = 'api/myvehicle/addMyVehicleLogBook';
													
														  /*  $http({
																		method : 'POST',
																		url : wsURL,
																		data: jsonInputToAPI
																						
																	}).success(function(data) {
																		alert("Successfully Stored..");
																						alert("Thank You. Your MyVehicle ID is ");
																														
																					});	
														    */
														    
														    
														    $http({
														    		method : 'POST',
																	url : wsURL,
																	data: jsonInputToAPI
														    }).
														    then(function onSuccess(response) {
														      // Handle success
														      var data = response.data;
														      var status = response.status;
														      var statusText = response.statusText;
														      var headers = response.headers;
														      var config = response.config;
														      /*alert(status);
														      alert(statusText);
														      alert(JSON.stringify(data));
														      alert(headers);
														      alert(config);*/
														      $scope.vehicleRetrievalforLogBook();
														      alert("Your Log is Successfully Stored..");
														      
														      //alert("Thank You. Your MyVehicle ID is ");
															
														    }, function onError(response) {
														      // Handle error
														      /*var data = response.data;
														      var status = response.status;
														      var statusText = response.statusText;
														      var headers = response.headers;
														      var config = response.config;*/
														      alert("Something went wrong in error storing LogBook\n Please try Again");
														     /* alert(status);
														      alert(statusText);
														      alert(JSON.stringify(data));
														      alert(headers);
														      alert(config);*/
														    });
													};
													
													$scope.submitSearchFormServMaint = function() {
														/*alert("inside Sesdarv Maint");
														alert(myVehicleIDuse);*/
														/*var vehicleTypeServMaint= stringToDate($('#vehicleTypeServMaint').val(),"dd/MM/yyyy","/");
														var nextServiceMaintenanceDate= stringToDate($('#nextServiceMaintenanceDate').val(),"dd/MM/yyyy","/");*/
														var jsonInputToAPI = {"myVehicleId":myVehicleIDuse,
																"myVehicleServMaintVO":{
																	"myVehicleServMaintId":null,
																	"date":$('#vehicleTypeServMaint').val(),
																	"Time":null,
																	"recordType":"Service&Maintenance",
																	"mechanicName":$('#mechanicNameCompanyName').val(),
																	"companyName":"pqrs",
																	"typeOfServMaint":$('#typeServiceMaintenance').val(),
																	"mechanicAddress":$('#mechanicAddress').val(),
																	"contactDetails":$('#contactDetails').val(),
																	"odoMeterKm":$('#odoMeterKmsMilesServMaint').val(),
																	"totalAmount":$('#totalAmount').val(),
																	"nextOdoMeterKm":$('#NextServiceMaintenanceOdoMeterKmsmils').val(),
																	"nextServDate":$('#nextServiceMaintenanceDate').val(),
																	"uploadPhoto":"XYz",
																	"flex1":null,
																	"flex2":null,
																	"flex3":null,
																	"flex4":null,
																	"flex5":0,
																	"flex6":0,
																	"flex7":0,
																	"flex8":null,
																	"flex9":null
																}
																}


														//alert("Before Call");
														//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/myVehicle/';
														//var wsURL = 'http://www.autoscoop.com.au/api/eBid/myVehicle/';
														var wsURL = 'api/myvehicle/addMyVehicleServMaint';
														
															    $http({
																			method : 'POST',
																			url : wsURL,
																			data: jsonInputToAPI
																							
																		}).success(function(data) {
																			$scope.vehicleRetrievalforLogBook();
																			alert("Service & Maintenance Successfully Stored..");
																															
																						});													
														};
														
														
														
														
														$scope.submitMyVehicleFuelExpenses = function() {
															alert("inside Fuel Expe");
															//alert(myVehicleIDuse);
															var jsonInputToAPI = {"myVehicleId":myVehicleIDuse,
																	"myVehicleFuelExpensesVO":{
																		"myVehicleFuelExpensesId":null,
																		"date":$('#ExpDate').val(),
																		"Time":$.now(),
																		"recordType":"Fuel Expense",
																		"noOfLitres":2,
																		"amount":$('#ExpAmt').val(),
																		"business":$('#ExpType').val(),
																		"private2":" ",
																		"others":$('#ExpDesc').val(),
																		"photoOfInvoice":" ",
																		"flex1":null,
																		"flex2":null,
																		"flex3":null,
																		"flex4":null,
																		"flex5":0,
																		"flex6":0,
																		"flex7":0,
																		"flex8":null,
																		"flex9":null
																	}
																	}


															//alert("Before Call");
															//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/myVehicle/';
															//var wsURL = 'http://www.autoscoop.com.au/api/eBid/myVehicle/';
															var wsURL = 'api/myvehicle/addMyVehicleFuelExpenses';
															
																    $http({
																				method : 'POST',
																				url : wsURL,
																				data: jsonInputToAPI
																								
																			}).success(function(data) {
																				$scope.vehicleRetrievalforLogBook();
																				alert("Fuel Expenses Successfully Stored..");
																																
																							});													
															};



												
				});
//angular.bootstrap(document, ['mainApp1']);
//angular JS end




