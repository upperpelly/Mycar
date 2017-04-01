// Check if "key" exists in the storage
var value = $.jStorage.get("key");
var fbUserId = $.jStorage.get("fbKey");
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
var userId;
var firstName;

window.onload= function(){
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
    $.ajax({  
    	/*headers: {"X-My-Custom-Header": "*"},*/
   	    type: "GET",  
   	    url: url, 
   	 /*url: "http://localhost:8080/MyCarDomain/api/user/1",*/
   	       success: function(result){
   	    	   /*alert(result.abnNumber);
        	   alert(result.userId);
        	   alert(result.search);
        	   alert(result.search[0].carSearchId);
        	   alert(result.search.length);*/
        	   out="";
        	   /*alert(Object.keys( result.search ).length);*/
        	   /*var json = JSON.parse(result1);*/
        	   /*var json = $.parseJSON(result1);*/
        	   var finMax = result.search.length;
        	   document.getElementById('finMax').innerHTML=finMax;
        	   //out += '<tr><th>'+"Car Search ID"+'</th><th>'+"Autoscoop Trim"+'</th><th>'+'</th><th>'+"Model Trim"+'</th><th>'+"Model Display"+'</th><th>'+"Model Year"+'</th><th>'+"Operation"+'</th></tr>';
        	   out += '<tr><th>'+"Car Ebid ID"+'</th><th>'+"Year"+'</th>'+'<th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Autoscoop Variant"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=result.search.length-1;i>=0;i--)
       		{
       		/*alert(result.search[i].carSearchId); //111 111-1111
       		alert(result.search[i].modelDisplay);
       		alert(result.search[i].modelTrim);
       		alert(result.search[i].modelYear);*/
       		//out= out+'<tr>'+'<td>'+result.search[i].carSearchId+'</td>'+'<td>'+result.search[i].sModel+'</td>'+'<td>'+result.search[i].modelTrim+'</td>'+'<td>'+result.search[i].modelDisplay+'</td>'+'<td>'+result.search[i].modelYear+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleSearchModal-' + result.search[i].carSearchId + '" data-details=\'' + JSON.stringify(result.search[i]) + '\' class="anchor-editDealerVehicleSearchModal" data-toggle="modal" data-target="#editDealerVehicleSearchModal">View</a></td></tr>';
        		   out= out+'<tr>'+'<td>'+result.search[i].carSearchId+'</td>'+'<td>'+result.search[i].modelYear+'<td>'+result.search[i].modelDisplay+'</td>'+'</td>'+'<td>'+result.search[i].modelName+'</td>'+'<td>'+result.search[i].sModel+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleSearchModal-' + result.search[i].carSearchId + '" data-details=\'' + JSON.stringify(result.search[i]) + '\' class="anchor-editDealerVehicleSearchModal" data-toggle="modal" data-target="#editDealerVehicleSearchModal">View</a></td></tr>';
       		
       		}
        	   //alert(out);
        	   forFinance("car-model-data",out);/*
        	   $("#"+sender.model_data_id).append(out);*/
        	   //alert("came here 2");
        	   out1="";
        	   /*alert(Object.keys( result.search ).length);*/
        	   /*var json = JSON.parse(result1);*/
        	   /*var json = $.parseJSON(result1);*/
        	   var finCt = result.search.length;
        	   document.getElementById('finCt').innerHTML=finCt;
        	   out1 += '<tr><th>'+"Car Finance ID"+'</th><th>'+"Vehicle Value"+'</th><th>'+"Balloon Pay"+'</th><th>'+"Loan Amount"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=0;i<result.searchFinance.length;i++)
       		{
       		/*alert(result.search[i].carSearchId); //111 111-1111
       		alert(result.search[i].modelDisplay);
       		alert(result.search[i].modelTrim);
       		alert(result.search[i].modelYear);*/
       		out1= out1+'<tr>'+'<td>'+result.searchFinance[i].searchFinanceId+'</td>'+'<td>'+result.searchFinance[i].vehValue+'</td>'+'<td>'+result.searchFinance[i].balloonPay+'</td>'+'<td>'+result.searchFinance[i].loanAmount+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleFinanceModal-' + result.searchFinance[i].searchFinanceId + '" data-details=\'' + JSON.stringify(result.searchFinance[i]) + '\' class="anchor-editDealerVehicleFinanceModal" data-toggle="modal" data-target="#editDealerVehicleFinanceModal">View</a></td></tr>';
       		
       		
       		}
        	  forFinance("data1",out1);
        	   
        	   /*this.model_data_id = "data1";
        	   alert("came here"+this.model_data_id);
        	   $("#"+sender.model_data_id).append(out1);*/
        	  /* alert("came here"+this.model_data_id);
        	   */
        	  out2="";
        	  var insRCt=result.searchInsurance.length;
        	   document.getElementById('insRCt').innerHTML=insRCt;
        	   out2 += '<tr><th>'+"Car Insurance ID"+'</th><th>'+"Insurance Type"+'</th><th>'+"Market Value"+'</th><th>'+"Agreed Value"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=0;i<result.searchInsurance.length;i++)
       		{
       		
       		out2= out2+'<tr>'+'<td>'+result.searchInsurance[i].searchInsuranceId+'</td>'+'<td>'+result.searchInsurance[i].insuranceType+'</td>'+'<td>'+result.searchInsurance[i].marketValue+'</td>'+'<td>'+result.searchInsurance[i].agreedValue+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleInsuranceModal-' + result.searchInsurance[i].searchInsuranceId + '" data-details=\'' + JSON.stringify(result.searchInsurance[i]) + '\' class="anchor-editDealerVehicleInsuranceModal" data-toggle="modal" data-target="#editDealerVehicleInsuranceModal">View</a></td></tr>';
       		
       		
       		}
        	   
        	   forFinance("car-model-data2",out2);
//alert("result.search.length"+result.vehicleQuotation.length);
        	   out3="";
        	   var qtRecd = result.vehicleQuotation.length;
        	   document.getElementById('qtRecd').innerHTML=qtRecd;
        	   out3 += '<tr><th>'+"Car Quotation ID"+'</th><th>'+"Dealer Name"+'</th><th>'+"Dealer Stock No"+'</th><th>'+"drive away Price"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=0;i<result.vehicleQuotation.length;i++)
       		{
       		
       		out3= out3+'<tr>'+'<td>'+result.vehicleQuotation[i].quotId+'</td>'+'<td>'+result.vehicleQuotation[i].dealerName+'</td>'+'<td>'+result.vehicleQuotation[i].dealerStockNo+'</td>'+'<td>'+result.vehicleQuotation[i].driveAwayPrice+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleQuotationModal-' + result.vehicleQuotation[i].quotId + '" data-details=\'' + JSON.stringify(result.vehicleQuotation[i]) + '\' class="anchor-editDealerVehicleQuotationModal" data-toggle="modal" data-target="#editDealerVehicleQuotationModal">Edit</a></td></tr>';
       		
       		
       		}
        	   
        	   forFinance("quo-model-data",out3);
//alert("result.search.length"+result.financeQuotation.length);
out4="";
var finQCt=result.financeQuotation.length;
document.getElementById('finQCt').innerHTML=finQCt;
        	   out4 += '<tr><th>'+"Car Quotation ID"+'</th><th>'+"Insurance Type"+'</th><th>'+"Market Value"+'</th><th>'+"Agreed Value"+'</th></tr>';
        	   for(i=0;i<result.financeQuotation.length;i++)
       		{
       		
       		out4= out4+'<tr>'+'<td>'+result.financeQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.financeQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.financeQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.financeQuotation[i].vehicleQuotationId+'</td>'+'</tr>';
       		
       		
       		}
        	   
        	   forFinance("quo-data1",out4);
//alert("result.search.length"+result.insuranceQuotation.length);
out5="";
var insQCt=result.insuranceQuotation.length;
        	   document.getElementById('insQCt').innerHTML=insQCt;
        	   out5 += '<tr><th>'+"Car Quotation ID"+'</th><th>'+"Insurance Type"+'</th><th>'+"Market Value"+'</th><th>'+"Agreed Value"+'</th></tr>';
        	   for(i=0;i<result.insuranceQuotation.length;i++)
       		{
       		
       		out5= out5+'<tr>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'</tr>';
       		
       		
       		}
        	   
        	   forFinance("quo-model-data2",out5);
        	   
        	 //alert("result.search.length"+result.insuranceQuotation.length);
        	   out6="";
        	  
        	               	   out6 += '<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Operation"+'</th></tr>';
        	               	   for(i=0;i<result.myVehicle.length;i++)
        	              		{
        	              		
        	              		out6= out6+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleDetailModal-' + result.myVehicle[i].myVehicleId + '" data-details=\'' + JSON.stringify(result.myVehicle[i]) + '\' class="anchor-editDealerVehicleDetailModal" data-toggle="modal" data-target="#editDealerVehicleDetailModal">View</a></td></tr>';
        	              		
        	              		
        	              		}
        	               	
        	               	   forFinance("quo-model-data4",out6);
        	               	   
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
      	              
        	               	   forFinance("logBook4",out7);
        	               	   
        	               	out8="";
          	           	  
       	               	   out8 += '<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th></tr>';
       	               	   for(i=0;i<result.myVehicle.length;i++)
       	              		{
       	              		
       	              		out8= out8+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'</tr>';
       	              		
       	              		
       	              		}
       	               	   
         	               	forFinance("fuelCard4",out8);
         	               	
         	               out9="";
         	           	  
      	               	   out9 += '<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th></tr>';
      	               	   for(i=0;i<result.myVehicle.length;i++)
      	              		{
      	              		
      	              		out9= out9+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'</tr>';
      	              		
      	              		
      	              		}
      	               	   
        	               	forFinance("servMaint4",out9);
        	               	registerEditDealerVehicleQuotationModal();
        	               	registerEditDealerVehicleSearchModal();
        	               	registerEditDealerVehicleFinanceModal();
        	               	registerEditDealerVehicleInsuranceModal();
        	               	registerEditDealerVehicleDetailModal();
           } 
   	  }); 
   /* $.ajax({
        url: "http://localhost:8080/MyCarDomain/api/user/70",
        data: { signature: authHeader },
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
        success: function() { alert('Success!' + authHeader); }
     });*/
}

function forFinance(model_data_id, out)
{
 this.model_data_id = model_data_id;
      //$("#"+this.model_data_id).html("Loading Model Data...");
 //alert("came here 2 inside");
    
//alert("out"+out);
    
        	   //alert(out);
        	   $("#"+model_data_id).append(out);
        	   //alert("came here 2");
        	  
   /* $.ajax({
        url: "http://localhost:8080/MyCarDomain/api/user/70",
        data: { signature: authHeader },
        type: "GET",
        beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
        success: function() { alert('Success!' + authHeader); }
     });*/
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
		/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';*/
		
		
		var editDealerVehicleSearchForm = '<form id="edit-dealer-vehicle-search-content-form"><table>\
			<tr><td>Search ID</td><td>' + data.carSearchId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>Model Year</td><td>' + data.modelYear + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.modelName + '</td></tr>\
			<tr><td>Model Display</td><td>' + data.modelDisplay + '</td></tr>\
			</table></form>';
		
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
		/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';*/
		
		
		var editDealerVehicleFinanceForm = '<form id="edit-dealer-vehicle-finance-content-form"><table>\
			<tr><td>Search ID</td><td>' + data.searchFinanceId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
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
		/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; 
		if(data.moveToUser)
		  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';*/
		
		
		var editDealerVehicleInsuranceForm = '<form id="edit-dealer-vehicle-insurance-content-form"><table>\
			<tr><td>Search ID</td><td>' + data.searchInsuranceId + '</td></tr>\
			<tr><td>Post Code</td><td>' + data.postCode + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
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

}

// end of window onload


function redirect() {
	alert("Thank You. Your Seach ID is ");

	var url="homepage10.html?userId="+userId+"&firstName="+firstName;
	
	window.location=url;
}


//angular JS start
var mainApp1 = angular.module("mainApp13", []);
mainApp1.controller('myController13',function($scope, $http) {
					//alert("in user con");
					$scope.submitSearchForm = function() {
												
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
												var wsURL = 'api/eBid/myVehicle';
												
													    $http({
																	method : 'POST',
																	url : wsURL,
																	data: jsonInputToAPI
																					
																}).success(function(data) {
																	alert("Successfully Stored..");
																					alert("Thank You. Your MyVehicle ID is " + data.myVehicleId);
																													
																				});													
												};

																			
											
												$scope.submitSearchFormLogBook = function() {
													alert("inside Log Book");
													alert(""+$('#vehicleTypeLogBook').val());
													var jsonInputToAPI = {"myVehicleId":$('#vehicleTypeLogBook').val(),
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

													console.log(JSON.stringify(jsonInputToAPI));
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
														      alert(status);
														      alert(statusText);
														      alert(JSON.stringify(data));
														      alert(headers);
														      alert(config);
														      alert("Successfully Stored..");
																alert("Thank You. Your MyVehicle ID is ");
															
														    }, function onError(response) {
														      // Handle error
														      /*var data = response.data;
														      var status = response.status;
														      var statusText = response.statusText;
														      var headers = response.headers;
														      var config = response.config;*/
														      alert("Something went wrong in error storing LogBook");
														     /* alert(status);
														      alert(statusText);
														      alert(JSON.stringify(data));
														      alert(headers);
														      alert(config);*/
														    });
													};
													
													$scope.submitSearchFormServMaint = function() {
														alert("inside Serv Maint");
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
														var wsURL = 'api/eBid/myVehicle';
														
															    $http({
																			method : 'POST',
																			url : wsURL,
																			data: jsonInputToAPI
																							
																		}).success(function(data) {
																			alert("Successfully Stored..");
																							alert("Thank You. Your MyVehicle ID is " + data.myVehicleId);
																															
																						});													
														};


												
				});
//angular.bootstrap(document, ['mainApp1']);
//angular JS end




