var isChecked = false;

        function allSelected() 
        {
           alert("inside check box");
        	// this line is for toggle the check
            //isChecked = !isChecked;
        	if(!isChecked){
            document.getElementById("autoBid").value=true;
            isChecked = !isChecked;
        	}
        	else{
        		document.getElementById("autoBid").value=false;
        	}
        		
            //below line refers to 'jpCheckbox' class
            //$('input:checkbox.jpCheckbox').attr('checked',isChecked);

            //OR,
            //$('input:checkbox.jpCheckbox').attr('checked','checked');
        }

$(window).load(function(){
	//alert("onload");
	$body = $("body");

	$(document).ajaxStart(function(){
		$body.addClass("loading");
	});

	$(document).ajaxStop(function(){
		$body.removeClass("loading");
	});
	/*
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
	 alert("pageName 11  now "); 
	
	var dealerId = parseURLParameter('dealerId');*/
	
	dealerId="28";
	
	
	
	
  
  //alert("Before call");
  dealerBoardCallSearch('inventory-list',dealerId); 
  
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

function dealerBoardCallSearch(model_data_id, userid)
{
 this.model_data_id = model_data_id;
      //$("#"+this.model_data_id).html("Loading Model Data...");
    var sender = this;
   // var url = "http://www.autoscoop.com.au/api/dealer/"+userid;
    var url = "api/dealer/"+userid;
    //var url = "http://localhost:8080/MyCarDomain/api/dealer/28";
//alert("user id"+url);
	//alert(url);
    //Get Car Model JSON for the selected make
    //http://localhost:8080/MyCarDomain/api/user/1
    /*alert("came here now changed are 3 Oct1");*/
    $.ajax({  
    	/*headers: {"X-My-Custom-Header": "*"},*/
   	    type: "GET",  
   	    url: url, 
   	 //async: false,
   	 /*url: "http://localhost:8080/MyCarDomain/api/user/1",*/
   	       success: function(result){
        	   alert("Succcess");
        	   //alert(JSON.stringify(result));
        	   out="";
        	
        	  var invC = result.inventory;
        	  if(invC){
        		  invC = result.inventory.length;
        		  		document.getElementById('invC').innerHTML=invC;
		           	    out += '<tr><th>'+"Inventory ID"+'</th><th>'+"Variant"+'</th><th>'+"Make"+'</th><th>'+"Year"+'</th><th>'+"Operation"+'</th></tr>';
		           	    for(i=0;i<result.inventory.length;i++)
		          		 {
		          		   out= out+'<tr>'+'<td>'+result.inventory[i].repoId+'</td>'+'<td>'+result.inventory[i].modelTrim+'</td>'+'<td>'+result.inventory[i].modelDisplay+'</td>'+'<td>'+result.inventory[i].modelYear+'</td>'+'<td><a href="#" id="anchor-editDealerIvemtoryModal-' + result.inventory[i].repoId + '" data-details=\'' + JSON.stringify(result.inventory[i]) + '\' class="anchor-editDealerIvemtoryModal" data-toggle="modal" data-target="#editDealerIvemtoryModal">View</a></td></tr>';
		          		 }
        		  
        	  }
        	  else
        		  {
        		  out='<h2>No records for Inventory</h2>';
        		  alert("inventory biscuit");
        		  }

         	    $("#"+model_data_id).append(out);
        	   //alert("came here 2");
        	   //alert("know");
        	   out2="";
        	    var vehQRecd = result.vehicleQuotation;
        	    if(vehQRecd)
        	    	{
		        	    	vehQRecd = result.vehicleQuotation.length;
		            	    //alert(JSON.stringify(result.vehicleQuotation));
		            	   document.getElementById('vehQRecd').innerHTML=vehQRecd;
		            	   out2 += '<tr><th>'+"Quotation ID"+'</th><th>'+"Variant"+'</th><th>'+"Make"+'</th><th>'+"Year"+'</th><th>'+"Operation"+'</th></tr>';
		            	   //alert(out2);
		            	   for(i=0;i<result.vehicleQuotation.length;i++)
		           		{
		           		out2= out2+'<tr>'+'<td>'+result.vehicleQuotation[i].quotId+'</td>'+'<td>'+result.vehicleQuotation[i].modelTrim+'</td>'+'<td>'+result.vehicleQuotation[i].modelDisplay+'</td>'+'<td>'+result.vehicleQuotation[i].modelYear+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleQuotationModal-' + result.vehicleQuotation[i].quotId + '" data-details=\'' + JSON.stringify(result.vehicleQuotation[i]) + '\' class="anchor-editDealerVehicleQuotationModal" data-toggle="modal" data-target="#editDealerVehicleQuotationModal">Edit</a></td></tr>';
		           		//alert(out2);
		           		
		           		}
        	    	}
        	    else
        	    	{
        	    	out2='<h2>No records for Quotation</h2>';
        	    	}
        	    
        	  forFinance("quotation1",out2);
        	  //alert("after q")
        	   
        	  out1="";
       	   /*alert(Object.keys( result.search ).length);*/
       	   /*var json = JSON.parse(result1);*/
       	   /*var json = $.parseJSON(result1);*/
       	    var vehMax = result.dealSearch;
       	    if(vehMax)
       	    	{
	       	    	vehMax = result.dealSearch.length;;
	            	document.getElementById('vehMax').innerHTML=vehMax;
	           	    out1 += '<tr><th>'+"Car Lead ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Variant"+'</th><th>'+"Operation"+'</th></tr>';
	           	    for(i=0;i<result.dealSearch.length;i++)
	          		{
	           		   out1= out1+'<tr>'+'<td>'+result.dealSearch[i].dealSearchId+'</td><td>'+result.dealSearch[i].modelYear+'</td><td>'+result.dealSearch[i].modelDisplay+'</td><td>'+result.dealSearch[i].modelName+'</td><td>'+result.dealSearch[i].modelTrim+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleSearchLeadsModal-' + result.dealSearch[i].dealSearchId + '" data-details=\'' + JSON.stringify(result.dealSearch[i]) + '\' class="anchor-editDealerVehicleSearchLeadsModal" data-toggle="modal" data-target="#editDealerVehicleSearchLeadsModal">View</a></td></tr>';
	          		}
       	    	
       	    	}
       	    else
       	    	{
       	    		out1='<h2>No records for Dealer Search</h2>';
       	    	}
       	  
       	  forFinance("data1",out1);
        out5 = "";
   	    var finMax = result.dealSearchFinance;
   	    if(finMax)
   	    {
	   	    finMax = result.dealSearchFinance.length;
     	   document.getElementById('finMax').innerHTML=finMax;
    	   out5 += '<tr><th>'+"Car Lead ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Variant"+'</th><th>'+"Operation"+'</th></tr>';
    	   for(i=0;i<result.dealSearchFinance.length;i++)
   			{
    		   out5= out5+'<tr>'+'<td>'+result.dealSearchFinance[i].dealerSearchFinanceId+'</td><td>'+result.dealSearchFinance[i].year+'</td><td>'+result.dealSearchFinance[i].make+'</td><td>'+result.dealSearchFinance[i].model+'</td><td>'+result.dealSearchFinance[i].variant+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleSearchLeadsModal-' + result.dealSearchFinance[i].dealSearchId + '" data-details=\'' + JSON.stringify(result.dealSearchFinance[i]) + '\' class="anchor-editDealerVehicleSearchLeadsModal" data-toggle="modal" data-target="#editDealerVehicleSearchLeadsModal">View</a></td></tr>';
   			}
   	    	
   	    }
   	    else
   	    {
   	    	out5='<h2>No records for Dealer Search Finance</h2>';
   	    }
   	    
   	    forFinance("data12",out5);
   	  	out6 ="";
	    var finQRecd = result.financeQuotation;
	    if(finQRecd)
	    {
	    	finQRecd = result.financeQuotation.length;
	 	    document.getElementById('finQRecd').innerHTML=finQRecd;
	 	    out6 += '<tr><th>'+"Car Lead ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Variant"+'</th><th>'+"Operation"+'</th></tr>';
	 	    for(i=0;i<result.financeQuotation.length;i++)
	 		{
	 		   out6= out6+'<tr>'+'<td>'+result.financeQuotation[i].finQuotId+'</td><td>'+result.financeQuotation[i].modelYear+'</td><td>'+result.financeQuotation[i].modelDisplay+'</td><td>'+result.financeQuotation[i].modelName+'</td><td>'+result.financeQuotation[i].modelTrim+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleSearchLeadsModal-' + result.financeQuotation[i].finQuotId + '" data-details=\'' + JSON.stringify(result.financeQuotation[i]) + '\' class="anchor-editDealerVehicleSearchLeadsModal" data-toggle="modal" data-target="#editDealerVehicleSearchLeadsModal">View</a></td></tr>';
	 		}
	    }
	    else
	    {
	    	out6='<h2>No records for Finance Quotation</h2>';
	    }
	    
	    forFinance("data1",out6);
       	registerEditDealerVehicleQuotationModal();
       	registereditDealerVehicleSearchLeadsModal();
       	registereditDealerIvemtoryModal();
           } 
   	  }); 
   
}

function forFinance(model_data_id, out)
{
		 this.model_data_id = model_data_id;
		 $("#"+model_data_id).append(out);
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
			<tr><td>Year</td><td>' + data.modelYear + '</td></tr>\
			<tr><td>Make</td><td>' + data.modelName + '</td></tr>\
			<tr><td>Model</td><td>' + data.modelDisplay + '</td></tr>\
			<tr><td>Move To User</td><td>' + moveToUser + '</td></tr>\
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
		alert(jsonInput);
		
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

//for dealer Search



function registereditDealerVehicleSearchLeadsModal(){



//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details

var editDealerVehicleSearchLeadsModal = '<div class="modal fade" id="editDealerVehicleSearchLeadsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
<div class="modal-dialog">\
<div class="modal-content">\
<div class="modal-header">\
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
<h4 class="modal-title" id="myModalLabel">View Vehicle Search Leads</h4>\
</div>\
<form id="edit-dealer-search-lead-content-form">\
<div class="modal-body edit-dealer-search-lead-content">\
</div>\
<div class="modal-footer">\
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
</div>\
</form>\
</div>\
</div>\
</div>';

$(document.body).append(editDealerVehicleSearchLeadsModal);

$('a.anchor-editDealerVehicleSearchLeadsModal').on('click', function(event) {

var data = $(event.target).data('details');

//var json = JSON.stringify(data);

var quotIdHiddenField = '<input type="hidden" name="quotId" value="' + data.dealSearchId + '" />';

/*var moveToUser = '<input type="checkbox" name="moveToUser" />';

if(data.moveToUser)

moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';*/

var editDealerVehicleQuotationForm = '<form id="edit-dealer-search-lead-content-form"><table>\
<tr><td>Search ID</td><td>' + data.dealSearchId + '</td></tr>\
<tr><td>' + quotIdHiddenField + '</td></tr>\
<tr><td>User ID</td><td>' + data.userId + '</td></tr>\
<tr><td>Model Year</td><td>' + data.modelYear + '</td></tr>\
<tr><td>Model Name</td><td>' + data.modelName + '</td></tr>\
<tr><td>Model Display</td><td>' + data.modelDisplay + '</td></tr>\
<tr><td>Move To User</td><td>' + '</td></tr>\
<tr><td>Auto Bid</td><td>' + data.autoBid + '</td></tr>\
<tr><td>Income Before Super Tax</td><td>' + data.incomeBeforeSuperTax + '</td> <td>Income After Super Tax</td><td>' + data.incomeAfterSuperTax + '</td></tr>\
<tr><td>If Business Provide ABN</td><td>' + data.ifBusinessProvideABN + '</td> <td>Credit Rating</td><td>' + data.creditRating + '</td></tr>\
<tr><td>Body Type</td><td>' + data.sBodyType + '</td> <td>Car Color</td><td>' + data.sCarColor + '</td></tr>\
<tr><td>incomeType</td><td>' + data.incomeType + '</td> <td>yearEmploymentBusiness</td><td>' + data.yearEmploymentBusiness + '</td></tr>\
<tr><td>Extra External</td><td>' + data.extraExter2 + '</td> <td>Extra External</td><td>' + data.extraExter3 + '</td></tr>\
<tr><td>Extra External</td><td>' + data.extraExter4 + '</td> <td>Extra External</td><td>' + data.extraExter5 + '</td></tr>\
<tr><td>Extra Internal</td><td>' + data.extraIntern2 + '</td><td>Extra Internal</td><td>' + data.extraIntern3 + '</td></tr>\
<tr><td>Extra Internal</td><td>' + data.extraIntern4 + '</td> <td>Extra Internal</td><td>' + data.extraIntern5 + '</td></tr>\
</table></form>';
$(".edit-dealer-search-lead-content").html(editDealerVehicleQuotationForm);

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

//End	


//for inventory Search



function registereditDealerIvemtoryModal(){



//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details

var editDealerIvemtoryModal = '<div class="modal fade" id="editDealerIvemtoryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
<div class="modal-dialog">\
<div class="modal-content">\
<div class="modal-header">\
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
<h4 class="modal-title" id="myModalLabel">View Vehicle Inventory</h4>\
</div>\
<form id="edit-dealer-inventory-form">\
<div class="modal-body edit-dealer-inventory-content">\
</div>\
<div class="modal-footer">\
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
</div>\
</form>\
</div>\
</div>\
</div>';

$(document.body).append(editDealerIvemtoryModal);

$('a.anchor-editDealerIvemtoryModal').on('click', function(event) {

var data = $(event.target).data('details');

//var json = JSON.stringify(data);

var quotIdHiddenField = '<input type="hidden" name="quotId" value="' + data.dealSearchId + '" />';

/*var moveToUser = '<input type="checkbox" name="moveToUser" />';

if(data.moveToUser)

moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';*/

var editDealerIvemtoryModal = '<form id="edit-dealer-inventory-form"><table>\
<tr><td>Inventory ID</td><td>' + data.repoId + '</td></tr>\
<tr><td>Dealer ID</td><td>' + data.refId + '</td></tr>\
<tr><td>Year</td><td>' + data.modelYear + '</td></tr>\
<tr><td>Make</td><td>' + data.modelName + '</td></tr>\
<tr><td>Model</td><td>' + data.modelDisplay + '</td></tr>\
<tr><td>Variant</td><td>' + data.modelTrim + '</td></tr>\
<tr><td>Type Of  Car</td><td>' + data.typeOfCar + '</td></tr>\
<tr><td>Vehicle Description</td><td>' + data.vehicleDescriptin + '</td></tr>\
<tr><td>Model price</td><td>' + data.price + '</td></tr>\
<tr><td>Body Type</td><td>' + data.bodyType + '</td></tr>\
<tr><td>Transmission</td><td>' + data.transmission + '</td></tr>\
<tr><td>Fuel Type</td><td>' + data.fuelType + '</td></tr>\
<tr><td>Engine</td><td>' + data.engine + '</td></tr>\
<tr><td>RegNo</td><td>' + data.regNo + '</td></tr>\
<tr><td>Drive Type</td><td>' + data.driveType + '</td></tr>\
<tr><td>Kilometer</td><td>' + data.kilometer + '</td></tr>\
<tr><td>Ext Color</td><td>' + data.extColor + '</td></tr>\
<tr><td>Registration Expiry Date</td><td>' + data.regExpiryDate + '</td></tr>\
<tr><td>VIN Number</td><td>' + data.vinNumber + '</td></tr>\
<tr><td>Vendor Stock No</td><td>' + data.vendorStockNo + '</td></tr>\
<tr><td>No Of Doors/td><td>' + data.noOfDoors + '</td></tr>\
<tr><td>AutoBID</td><td>' + data.stockItem + '</td></tr>\
<tr><td>Move to User</td><td>' + data.newCar + '</td></tr>\
<tr><td>Dealer Amount Max</td><td>' + data.dealAmountMax + '</td></tr>\
<tr><td>Dealer Amount Min</td><td>' + data.dealAmountMin + '</td></tr>\
<tr><td>Year Of Make</td><td>' + data.yearOfMake + '</td></tr>\
<tr><td>PostCode</td><td>' + data.postCode + '</td></tr>\
<tr><td>Region</td><td>' + data.region + '</td></tr>\
<tr><td>State</td><td>' + data.state + '</td></tr>\
</table></form>';
$(".edit-dealer-inventory-content").html(editDealerIvemtoryModal);

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

//End	


});



var mainApp1 = angular.module("mainApp12", []);
mainApp1.controller('myController12',function($scope,$http) {
	//alert("inside dealer c");
	$scope.submitSearchForm = function() {
								var e = document.getElementById("car-model-trims"); 
								var strUser = e.options[e.selectedIndex].text;	
								var autobid=false;
								autobid = document.getElementById("autoBid").value;
								//var classified = document.getElementById("postClassified").value;
								//alert("Came here c"+autobid);			
								var jsonInputToAPI = {
																	"refId":29,
																	"modelYear": $('#car-years').val(),
																	"modelDisplay": $('#car-makes').val(),
																	"modelName": $('#car-models').val(),															      
																	"modelTrim": strUser,
																	"typeOfCar": $('#vehicleCondition').val(),
																	"vehicleDescriptin": $('#headerText').val(),
																	"make": $('#financeOwning').val(),
																	"variant": $('#hotOffer').val(),
																	"price": $('#displayPrice').val(),
																	"bodyType": $('#bodyType').val(),
																	"transmission": $('#transmission').val(),
																	"fuelType": $('#fuelType').val(),
																	"engine": null,
																	"regNo": $('#regno').val(),
																	"driveType": $('#driveType').val(),
																	"kilometer": 120,
																	"extColor": null,
																	"warranty": null,
																	"regExpiryDate": null,
																	"vinNumber": $('#vinnumber').val(),
																	"vendorStockNo": $('#stockNo').val(),
																	"noOfDoors": 0,
																	"intColor": null,
																	"wheelSize": $('#labelOnVehicle').val(),
																	"seatMake": $('#detailDescription').val(),
																	"extFittingFlex1": $('#extraExternal').val(),
																	"extFittingFlex2": null,
																	"extFittingFlex3": null,
																	"extFittingFlex4": null,
																	"extFittingFlex5": null,
																	"extFittingFlex6": null,
																	"extFittingFlex7": null,
																	"extFittingFlex8": null,
																	"extFittingFlex9": null,
																	"extFittingFlex10": null,
																	"intFittingFlex1": $('#extraInternal').val(),
																	"intFittingFlex2": null,
																	"intFittingFlex3": null,
																	"intFittingFlex4": null,
																	"intFittingFlex5": null,
																	"intFittingFlex6": null,
																	"intFittingFlex7": null,
																	"intFittingFlex8": null,
																	"intFittingFlex9": null,
																	"intFittingFlex10": null,
																	"salePersonLooking": $('#accidentHistory').val(),
																	"contName": null,
																	"contPhone": 0,
																	"contEmail": null,
																	"logBookService": false,
																	"cameIntoInv": null,
																	"counterOfViewingCar": 0,
																	"counterOfEnquiryCar": 0,
																	"saleDate": null,
																	"features": [],
																	"photos": [],
																	"carColor": $('#color').val(),
																	"state": $('#RegState').val(),
																	"region": $('#vehicleType').val(),
																	"postCode": 0,
																	"yearOfMake": null,
																	"ausCapTer": null,
																	"insCompAmountMin": 0,
																	"insCompAmountMax": 0,
																	"dealAmountMin": $('#QRangeMin').val(),
																	"dealAmountMax": $('#QRangeMax').val(),
																	"insthirdInsuanceMin": 0,
																	"insthirdInsuanceMax": 0,
																	"finAmountMin": 0,
																	"newCar": false,
																	"isStockItem": autoBid
													}
													
													//alert("Before Call"+$('#accidentHistory').val());
													//var wsURL = 'http://localhost:8080/MyCarDomain/api/dealer/addInventory';
													//var wsURL = 'http://www.autoscoop.com.au/api/dealer/addInventory';
								
													var wsURL = 'api/dealer/addInventory';
														    $http({
																		method : 'POST',
																		url : wsURL,
																		data: jsonInputToAPI
																						
																	}).success(function(data) {
																		alert("Successfully Stored.. ");
																		alert("Thank You. Your Inventory is saved"+data.inventoryId);
																										
																					});
												};
				});

