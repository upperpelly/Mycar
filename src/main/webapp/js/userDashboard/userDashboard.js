$(window).load(function(){
	
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
	
	var userId = parseURLParameter('userId');
	//userId="71";
	//document.getElementById('minValue').innerHTML=priceMin;
	
	var searchId = parseURLParameter('searchId');
	var firstName = parseURLParameter('firstName');
	if(userId!= null){
		alert(firstName);
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
        alert(xhr.open(method, url));
    } else {
        xhr = null;
    }
    return xhr;
}

function dashBoardCallSearch(model_data_id, userid)
{
	alert("inside");
 this.model_data_id = model_data_id;
      //$("#"+this.model_data_id).html("Loading Model Data...");
    var sender = this;
var url = "api/user/"+userid;
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
        	   out += '<tr><th colspan="2">'+"Car Search ID"+'       '+"Model Trim"+'     '+"Model Display"+'        '+"Model Year"+'</th></tr>';
        	   for(i=0;i<result.search.length;i++)
       		{
       		/*alert(result.search[i].carSearchId); //111 111-1111
       		alert(result.search[i].modelDisplay);
       		alert(result.search[i].modelTrim);
       		alert(result.search[i].modelYear);*/
       		out= out+'<tr>'+'<td>'+result.search[i].carSearchId+'</td>'+'<td>'+result.search[i].modelTrim+'</td>'+'<td>'+result.search[i].modelDisplay+'</td>'+'<td>'+result.search[i].modelYear+'</td>'+'</tr>';
       		
       		
       		}
        	   //alert(out);
        	   $("#"+sender.model_data_id).append(out);
        	   //alert("came here 2");
        	   out1="";
        	   /*alert(Object.keys( result.search ).length);*/
        	   /*var json = JSON.parse(result1);*/
        	   /*var json = $.parseJSON(result1);*/
        	   var finCt = result.search.length;
        	   document.getElementById('finCt').innerHTML=finCt;
        	   out1 += '<tr><th colspan="2">'+"Car Finance ID"+'       '+"Vehicle Value"+'     '+"Balloon Pay"+'        '+"Loan Amount"+'</th></tr>';
        	   for(i=0;i<result.searchFinance.length;i++)
       		{
       		/*alert(result.search[i].carSearchId); //111 111-1111
       		alert(result.search[i].modelDisplay);
       		alert(result.search[i].modelTrim);
       		alert(result.search[i].modelYear);*/
       		out1= out1+'<tr>'+'<td>'+result.searchFinance[i].searchFinanceId+'</td>'+'<td>'+result.searchFinance[i].vehValue+'</td>'+'<td>'+result.searchFinance[i].balloonPay+'</td>'+'<td>'+result.searchFinance[i].loanAmount+'</td>'+'</tr>';
       		
       		
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
        	   out2 += '<tr><th colspan="2">'+"Car Insurance ID"+'       '+"Insurance Type"+'     '+"Market Value"+'        '+"Agreed Value"+'</th></tr>';
        	   for(i=0;i<result.searchInsurance.length;i++)
       		{
       		
       		out2= out2+'<tr>'+'<td>'+result.searchInsurance[i].searchInsuranceId+'</td>'+'<td>'+result.searchInsurance[i].insuranceType+'</td>'+'<td>'+result.searchInsurance[i].marketValue+'</td>'+'<td>'+result.searchInsurance[i].agreedValue+'</td>'+'</tr>';
       		
       		
       		}
        	   
        	   forFinance("car-model-data2",out2);
//alert("result.search.length"+result.vehicleQuotation.length);
        	   out3="";
        	   var qtRecd = result.vehicleQuotation.length;
        	   document.getElementById('qtRecd').innerHTML=qtRecd;
        	   out3 += '<tr><th colspan="2">'+"Car Quotation ID"+'       '+"Dealer Name"+'     '+"Dealer Stock No"+'        '+"drive away Price"+'</th></tr>';
        	   for(i=0;i<result.vehicleQuotation.length;i++)
       		{
       		
       		out3= out3+'<tr>'+'<td>'+result.vehicleQuotation[i].quotId+'</td>'+'<td>'+result.vehicleQuotation[i].dealerName+'</td>'+'<td>'+result.vehicleQuotation[i].dealerStockNo+'</td>'+'<td>'+result.vehicleQuotation[i].driveAwayPrice+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleQuotationModal-' + result.vehicleQuotation[i].quotId + '" data-details=\'' + JSON.stringify(result.vehicleQuotation[i]) + '\' class="anchor-editDealerVehicleQuotationModal" data-toggle="modal" data-target="#editDealerVehicleQuotationModal">Edit</a></td></tr>';
       		
       		
       		}
        	   
        	   forFinance("quo-model-data",out3);
//alert("result.search.length"+result.financeQuotation.length);
out4="";
var finQCt=result.financeQuotation.length;
document.getElementById('finQCt').innerHTML=finQCt;
        	   out4 += '<tr><th colspan="2">'+"Car Quotation ID"+'       '+"Insurance Type"+'     '+"Market Value"+'        '+"Agreed Value"+'</th></tr>';
        	   for(i=0;i<result.financeQuotation.length;i++)
       		{
       		
       		out4= out4+'<tr>'+'<td>'+result.financeQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.vehicleQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.vehicleQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.vehicleQuotation[i].vehicleQuotationId+'</td>'+'</tr>';
       		
       		
       		}
        	   
        	   forFinance("quo-data1",out4);
//alert("result.search.length"+result.insuranceQuotation.length);
out5="";
var insQCt=result.insuranceQuotation.length;
        	   document.getElementById('insQCt').innerHTML=insQCt;
        	   out5 += '<tr><th colspan="2">'+"Car Quotation ID"+'       '+"Insurance Type"+'     '+"Market Value"+'        '+"Agreed Value"+'</th></tr>';
        	   for(i=0;i<result.insuranceQuotation.length;i++)
       		{
       		
       		out5= out5+'<tr>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'</tr>';
       		
       		
       		}
        	   
        	   forFinance("quo-model-data2",out5);
        	   
        	 //alert("result.search.length"+result.insuranceQuotation.length);
        	   out6="";
        	  
        	               	   out6 += '<tr><th colspan="2">'+"My Vehicle ID"+'       '+"Year"+'     '+"Make"+'        '+"Model"+'</th></tr>';
        	               	   for(i=0;i<result.myVehicle.length;i++)
        	              		{
        	              		
        	              		out6= out6+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'</tr>';
        	              		
        	              		
        	              		}
        	               	   
        	               	   forFinance("quo-model-data4",out6);
        	   
        	               	registerEditDealerVehicleQuotationModal();
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
	                <h4 class="modal-title" id="myModalLabel">Edit Vehicle Quotation</h4>\
	            </div>\
		        <form id="edit-dealer-vehicle-quotation-content-form">\
				<div class="modal-body edit-dealer-vehicle-quotation-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
	                <button type="button" class="btn btn-primary submit-editDealerVehicleQuotationModal" data-dismiss="modal">Save changes</button>\
	            </div>\
	            </form>\
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

	
	
});