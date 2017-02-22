$(window).load(function(){
	
	/* alert("pageName 11  now "); */
	
	var dealerId = URL.getParameter('dealerId');
	
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
    /*var url = "http://www.autoscoop.com.au/api/dealer/"+userid;*/
var url = "api/dealer/"+userid;
//alert("user id"+url);

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
   	    	   /*alert(result.abnNumber);
        	   alert(result.userId);
        	   alert(result.search);
        	   alert(result.search[0].carSearchId);
        	   alert(result.search.length);*/
        	   out="";
        	   /*alert(Object.keys( result.search ).length);*/
        	   /*var json = JSON.parse(result1);*/
        	   /*var json = $.parseJSON(result1);*/
        	  
        	   out += '<tr><th colspan="2">'+"Inventory ID"+'       '+"Model Trim"+'     '+"Model Display"+'        '+"Model Year"+'</th></tr>';
        	   for(i=0;i<result.inventory.length;i++)
       		{
       		/*alert(result.search[i].carSearchId); //111 111-1111
       		alert(result.search[i].modelDisplay);
       		alert(result.search[i].modelTrim);
       		alert(result.search[i].modelYear);*/
       		out= out+'<tr>'+'<td>'+result.inventory[i].repoId+'</td>'+'<td>'+result.inventory[i].modelTrim+'</td>'+'<td>'+result.inventory[i].modelDisplay+'</td>'+'<td>'+result.inventory[i].modelYear+'</td>'+'</tr>';
       		
       		
       		}
        	   //alert(out);
        	   $("#"+model_data_id).append(out);
        	   //alert("came here 2");
        	   out2="";
        	   /*alert(Object.keys( result.search ).length);*/
        	   /*var json = JSON.parse(result1);*/
        	   /*var json = $.parseJSON(result1);*/
        	   out2 += '<tr><th colspan="2">'+"Quotation ID"+'       '+"Model Trim"+'     '+"Model Display"+'        '+"Model Year"+'</th></tr>';
        	   for(i=0;i<result.vehicleQuotation.length;i++)
       		{
       		/*alert(result.search[i].carSearchId); //111 111-1111
       		alert(result.search[i].modelDisplay);
       		alert(result.search[i].modelTrim);
       		alert(result.search[i].modelYear);*/
       		out2= out2+'<tr>'+'<td>'+result.vehicleQuotation[i].quotId+'</td>'+'<td>'+result.vehicleQuotation[i].modelTrim+'</td>'+'<td>'+result.vehicleQuotation[i].modelDisplay+'</td>'+'<td>'+result.vehicleQuotation[i].modelYear+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleQuotationModal-' + result.vehicleQuotation[i].quotId + '" data-details=\'' + JSON.stringify(result.vehicleQuotation[i]) + '\' class="anchor-editDealerVehicleQuotationModal" data-toggle="modal" data-target="#editDealerVehicleQuotationModal">Edit</a></td></tr>';
       		
       		
       		}
        	  forFinance("quotation1",out2);
        	   
        	  out1="";
       	   /*alert(Object.keys( result.search ).length);*/
       	   /*var json = JSON.parse(result1);*/
       	   /*var json = $.parseJSON(result1);*/
       	   out1 += '<tr><th colspan="2">'+"Car Finance ID"+'       '+"Model Year"+'     '+"Model Display"+'        '+"Model Name"+'</th></tr>';
       	   for(i=0;i<result.dealSearch.length;i++)
      		{
      		/*alert(result.search[i].carSearchId); //111 111-1111
      		alert(result.search[i].modelDisplay);
      		alert(result.search[i].modelTrim);
      		alert(result.search[i].modelYear);*/
      		out1= out1+'<tr>'+'<td>'+result.dealSearch[i].dealSearchId+'</td>'+'<td>'+result.dealSearch[i].modelYear+'</td>'+'<td>'+result.dealSearch[i].modelDisplay+'</td>'+'<td>'+result.dealSearch[i].modelName+'</td>'+'</tr>'+result.dealSearch[i].modelTrim+'</td>'+'</tr>';
      		
      		
      		}
       	  forFinance("data1",out1);
        
       	registerEditDealerVehicleQuotationModal();
             
           } 
   	  }); 
   
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
			<tr><td>Move To User</td><td>' + moveToUser + '</td></tr>\
			<tr><td>Auto Bid</td><td>' + data.autoBid + '</td></tr>\
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