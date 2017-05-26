// Check if "key" exists in the storage
var value = $.jStorage.get("key");
var fbUserId = $.jStorage.get("fbKey");
var fbToken = $.jStorage.get("fbAToken");

var myVehicleIDuse=null;
function setting(data){
	//alert("cameheretoset");
	//$.jStorage.deleteKey(key);
	$.jStorage.set('key',data);
	$.jStorage.setTTL('mykey', 30000); // expires in 3 seconds
         // alert("came here");

}
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
	
	var userDetails ='<h2 class="box-title fullname">' + value.firstName + '</h2>\
		<dl class="term-description">\
	    <dt>user name:</dt><dd>' +value.email+ '</dd>\
	    <dt>first name:</dt><dd>' +value.firstName+ '</dd>\
	    <dt>last name:</dt><dd>' +value.lastName+ '</dd>\
	    <dt>phone number:</dt><dd>' +value.abnNumber+ '</dd>\
	    <dt>Personal Description:</dt><dd>' +value.subOrb+'</dd>\
	   <dt>Street number:</dt><dd>' +value.streetNumber+ '</dd>\
	    <dt>Street Name:</dt><dd>' +value.streetName+ '</dd>\
	    <dt>Post Code:</dt><dd>' +value.postCode+ '</dd>\
	    <dt>Region:</dt><dd>' +value.drivingLicense+ '</dd>\
	    <dt>State:</dt><dd>' +value.state+ '</dd>\
	    <dt>ZIP code:</dt><dd>' +value.postCode+ '</dd>\
	    <dt>Country:</dt><dd>Australia</dd>\
		</dl>';
	/*alert("onload");
		alert(userDetails);
		console.log(userDetails); <dt>Date of birth:</dt><dd>15 August 1985</dd>\
	    */
	
	$(".userdetails").append(userDetails);
	var default1='https://elasticbeanstalk-us-east-1-675778862308.s3.amazonaws.com/dashboard.png';
	 url="";
	fbdown(value.issueState);
	 // start of image download
	 
	 function fbdown(imageName)
	 {
    // <!-- Facebook Login logic prod 249863545451459 test 238604546585672 -->
     //alert("before call12");
     //window.fbAsyncInit();
     //alert("before call12");
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
     /*alert(imageName);
     alert("bis fdscuifsdf t");*/
     accessToken = $.jStorage.get("fbAToken");
     //alert(accessToken);

			
			bucket.config.credentials = new AWS.WebIdentityCredentials({
	
	
	                  ProviderId: 'graph.facebook.com',
	
	
	                  RoleArn: roleArn,
	
	
	                  WebIdentityToken: accessToken
	
	
	              });
      
     
			fbUserId = $.jStorage.get("fbKey");
			//alert("Trying to retrieve thfh  d 	tge photo..");
          fbUserId = $.jStorage.get("fbKey");
          var profilePic;
          var params = {Bucket: 'elasticbeanstalk-us-east-1-675778862308', Key: imageName, Expires: 60};
          url = bucket.getSignedUrl('getObject', params, function (err, url) {
            if (url) { //alert("successfully retrieved.."+url); 
            	profilePic = '<img width="270" height="263" alt="" src="'+url+'"'+'>';
            	$("#profilePic").append(profilePic);
            }
            else{alert("not able to retrieve"); alert("error"+err);profilePic = '<img width="270" height="263" alt="" src="'+default1+'"'+'>';$("#profilePic").append(profilePic);}
          });

       
       }	/*
	alert("inside userDashboard"+url);
	var profilePic;
if(url!="" ){
	profilePic = '<img width="270" height="263" alt="" src="'+url+'"'+'>';
}
else{profilePic = '<img width="270" height="263" alt="" src="'+default1+'"'+'>';}
	//alert(profilePic);
	$("#profilePic").append(profilePic);*/
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
			
			alert("Successfully updated ....");
			
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
   
   $('#datatranspserv').html('<img src="images/LoadImg.gif"></img>');
   $('#dataservmaint').html('<img src="images/LoadImg.gif"></img>');
   //$('#servMaint4').html('<img src="images/LoadImg.gif"></img>');
   
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
        		   //out= out+'<tr>'+'<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+result.search[i].photo1+' alt'+'='+'"'+'" /></li></ul>'+'<td>'+result.search[i].carSearchId+'</td>'+'<td>'+result.search[i].modelYear+'<td>'+result.search[i].modelDisplay+'</td>'+'</td>'+'<td>'+result.search[i].modelName+'</td>'+'<td>'+result.search[i].sModel+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleSearchModal-' + result.search[i].carSearchId + '" data-details=\'' + JSON.stringify(result.search[i]) + '\' class="anchor-editDealerVehicleSearchModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleSearchModal">View</a></td></tr>';

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
          		
          		//<tr><td>'+'<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+result.myVehicle[i].photo1+'"/></li></ul>'+'</td></tr>'+
           		
           		 //out6= out6+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleDetailModal-' + result.myVehicle[i].myVehicleId + '" data-details=\'' + JSON.stringify(result.myVehicle[i]) + '\' class="anchor-editDealerVehicleDetailModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleDetailModal">View</a></td></tr>';
           		out6= out6+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleDetailModal-' + result.myVehicle[i].myVehicleId + '" data-details=\'' + JSON.stringify(result.myVehicle[i]) + '\' class="anchor-editDealerVehicleDetailModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleDetailModal">View</a></td></tr>';
          		//alert(out6);
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
        	        		
        	        		out10= out10+'<tr>'+'<td>'+result.searchServMaint[i].searchServMaintId+'</td>'+'<td>'+result.searchServMaint[i].servMaintL1+'</td>'+'<td>'+result.searchServMaint[i].servMaintL2+'</td>'+'<td>'+result.searchServMaint[i].regoState+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleservmaintModal-' + result.searchServMaint[i].searchServMaintId + '" data-details=\'' + JSON.stringify(result.searchServMaint[i]) + '\' class="anchor-editDealerVehicleservmaintModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleservmaintModal">View</a></td></tr>';
        	        		
        	        		
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
        	               	//registerEditDealerVehicleexpnseModal();
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
		  var shortList = '<input type="checkbox" name="shortList" />';
		  var makeOffer = '<input type="checkbox" name="makeOffer" />';
		  var makeDeposit = '<input type="checkbox" name="makeDeposit" />';
		  var chat = '<input type="checkbox" name="chat" />';
		  var rejectIt = '<input type="checkbox" name="rejectIt" />';
		  var postCode = '<input type="text" name="postCode" />';
		  var title = '<input type="text" name="title" />';
		  var lname = '<input type="text" name="lname" />';
		  var fname = '<input type="text" name="fname" />';
		  var address = '<input type="text" name="address" />';
		  var mobileNum = '<input type="text" name="mobileNum" />';
		  var prefDate = '<input type="date" name="prefDate" />';
		  
		  // logic to retrieve
		  out5DD = "";
		    var dealDt = data.userQuotationHistory;
		    if(dealDt)
		    {
		    	dealDt = data.userQuotationHistory.length;
	  	   //document.getElementById('finMax').innerHTML=finMax;
	  	 out5DD += '<tr><th>'+"Car History ID"+'</th><th>'+"Comment"+'</th><th>'+"Creation Date"+'</th></tr>';
	 	   for(i=0;i<data.userQuotationHistory.length;i++)
				{
	 		  out5DD= out5DD+'<tr>'+'<td>'+data.userQuotationHistory[i].userQuotationHistoryId+'</td><td>'+data.userQuotationHistory[i].comment+'</td><td>'+data.userQuotationHistory[i].creationDate+'</td><td></tr>';
				}
		    	
		    }
		    else
		    {
		    	out5DD='<h2>No records for Dealer Search Finance</h2>';
		    }
		    
		    //forFinance("deal-operation",out5DD);
		    alert("userHistory"+out5DD);
		    
		    out5DD1 = "";
		    var dealDt1 = data.dealerQuotationHistory;
		    if(dealDt1)
		    {
		    	dealDt1 = data.dealerQuotationHistory.length;
	  	   //document.getElementById('finMax').innerHTML=finMax;
	  	 out5DD1 += '<tr><th>'+"Car History ID"+'</th><th>'+"Comment"+'</th><th>'+"Creation Date"+'</th></tr>';
	 	   for(i=0;i<data.dealerQuotationHistory.length;i++)
				{
	 		  out5DD1= out5DD1+'<tr>'+'<td>'+data.dealerQuotationHistory[i].dealQuotationHistoryId+'</td><td>'+data.dealerQuotationHistory[i].comment+'</td><td>'+data.dealerQuotationHistory[i].creationDate+'</td><td></tr>';
				}
		    	
		    }
		    else
		    {
		    	out5DD1='<h2>No records for Dealer Search Finance</h2>';
		    }
		    
		    //forFinance("deal-operation",out5DD);
		    alert("userHistory"+out5DD1);
		  // logic to retrieve
		  
		  //alert("data.oi"+data.postCode);
		  if(data.postCode != null)
		   postCode =data.postCode;
		  if(data.title != null)
		   title=data.title;
		  if(data.lname != null)
		   lname=data.lname;
		  if(data.fname != null)
		   fname=data.fname;
		  if(data.address != null)
		   address= data.address;
		  if(data.mobileNum != null)
		   mobileNum=data.mobileNum ;
		  if(data.prefDate != null)
		   prefDate=data.prefDate;
		  if(data.shortList)
		   shortList = '<input type="checkbox" name="shortList" checked="checked" />';
		  if(data.makeOffer)
		    makeOffer = '<input type="checkbox" name="makeOffer" checked="checked"/>';
		  if(data.makeDeposit)
		   makeDeposit='<input type="checkbox" name="makeDeposit" checked="checked"/>';
		  if(data.chat)
		   chat='<input type="checkbox" name="chat" checked="checked"/>';
		  if(data.rejectIt)
		   rejectIt= '<input type="checkbox" name="rejectIt" checked="checked" />';
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
		   </table><table>\
		   <div class="row"><div class="col-sm-12 col-md-12 product-search-title">Request Test Drive</div></div>\
		   <tr><td>Post Code</td><td>' +postCode + '</td></tr>\
		   <tr><td>Mr </td><td>' + title + '</td><td>First Name </td><td>' +fname  + '</td><td>Last Name </td><td>' +lname + '</td></tr>\
		   <tr><td>Address </td><td>' +address  + '</td><td>Mobile No:</td><td>' +mobileNum  + '</td></tr>\
		   <tr><td>Preferred Date </td><td>' +prefDate + '</td></tr></table>\
		   <table>\
		   <div class="row"><div class="col-sm-12 col-md-12 product-search-title">What can be done to Quotation?</div></div>\
		   <tr><td>Short List </td><td>' + shortList + '</td><td>Make an Offer </td><td>' +makeOffer  + '</td><td>Make a deposit </td><td>' +makeDeposit + '</td></tr>\
		   <tr><td>Chat </td><td>' +chat  + '</td><td>Reject it </td><td>' +rejectIt  + '</td></tr>\
		   </table></form>';
		  editDealerVehicleQuotationForm = editDealerVehicleQuotationForm.replace(/>null</g, ">--NA--<");
		  editDealerVehicleQuotationForm = editDealerVehicleQuotationForm.replace(/>undefined</g, ">--NA--<");
		  $(".edit-dealer-vehicle-quotation-content").html(editDealerVehicleQuotationForm);
		 });
	
	$('button.submit-editDealerVehicleQuotationModal').on('click', function(e) {
		
		var jsonInput = $("#edit-dealer-vehicle-quotation-content-form").convertFormDataToJSON();
		
		
		$.ajax({  
			type: "POST",  
			url: "api/vehicleSearchQuotation?_method=PUT",
			data: jsonInput,
			contentType:'application/json',
			success: function(result){
				$("#anchor-editDealerVehicleQuotationModal-" + result.quotId).data('details', result);
				alert("Successfully upated the Quotations");
				
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
		<button type="button" class="btn btn-primary submit-editDealerVehicleSearchModal" data-dismiss="modal">Save changes</button>\
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
		var shortList = '<input type="checkbox" name="shortList" />';
		var makeOffer = '<input type="checkbox" name="makeOffer" />';
		var makeDeposit = '<input type="checkbox" name="makeDeposit" />';
		var chat = '<input type="checkbox" name="chat" />';
		var rejectIt = '<input type="checkbox" name="rejectIt" />';
		var postCode = '<input type="text" name="postCode" />'; 
		var mr = '<input type="text" name="mr" />'; 
		var lastName = '<input type="text" name="lastName" />'; 
		var firstName = '<input type="text" name="firstName" />'; 
		var address = '<input type="text" name="address" />'; 
		var mobileNo = '<input type="text" name="mobileNo" />'; 
		var preferredDate = '<input type="date" name="preferredDate" />';
		
		
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
	$('button.submit-editDealerVehicleSearchModal').on('click', function(e) {
		
		var jsonInput = $("#edit-dealer-vehicle-Search-content-form").convertFormDataToJSON();
		
		
		$.ajax({  
			type: "POST",  
			url: "api/vehicleSearchQuotation?_method=PUT",
			data: jsonInput,
			contentType:'application/json',
			success: function(result){
				$("#anchor-editDealerVehicleSearchModal-" + result.quotId).data('details', result);
				alert("Successfully upated the Quotations");
				
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

		// start
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
	     //alert("bis fdscuifsdf t");
	     accessToken = $.jStorage.get("fbAToken");
	     //alert(accessToken);
				bucket.config.credentials = new AWS.WebIdentityCredentials({
		                  ProviderId: 'graph.facebook.com',
		                  RoleArn: roleArn,
		                  WebIdentityToken: accessToken
		              });
				fbUserId = $.jStorage.get("fbKey");
				//alert("Trying to retrieve photo for Serv and Maint..");
	          fbUserId = $.jStorage.get("fbKey");
		//alert("new changes now");
		url1=" ";
		var params = {Bucket: 'elasticbeanstalk-us-east-1-675778862308', Key: data.uploadPhotos, Expires: 60};
        bucket.getSignedUrl('getObject', params, function (err, url) {
          if (url) { //alert("successfully retrieved 12.."+url); 
          url1=url;
          var editDealerVehicletranspForm = '<form id="edit-dealer-vehicle-transp-content-form">\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
			<table>\
			<tr><td>Search ID</td><td>' + data.searchTranspId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Looking To Move</div></div>\
			<tr><td>Type Of Vehicle</td><td>' + data.transTypeReq + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">From</div></div>\
			<tr><td>Post Code</td><td>' + data.fromPostCodeAddr + '</td></tr>\
			<tr><td>Street No</td><td>' + data.fromStreetNo + '</td></tr>\
			<tr><td>Street Name</td><td>' + data.fromStreetName + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">To</div></div>\
			<tr><td>Post Code</td><td>' + data.toPostCodeAddr + '</td></tr>\
			<tr><td>Street No</td><td>' + data.toStreetNo + '</td></tr>\
			<tr><td>Street Name</td><td>' + data.toStreetName + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Transport Stuff</div></div>\
			<tr><td>When do You want THIS to be picked up & delivered?</td><td>' + data.pickUpDateTime + '</td></tr>\
			<tr><td>What kin of transport You need?</td><td>' + data.toStreetName + '</td></tr>\
			<tr><td>I am Flexible</td><td>' + data.flexWithDateDefault + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Vehicle Stuff</div></div>\
			<table>\
			<h6 style="color:#bd191e;"><b>Car Registration</b></h6>\
			<tr><td>Rego No</td><td>' + data.regoNo + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoState + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Vehicle Details</b></h6>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>Free Text</td><td>' + data.freeText + '</td></tr>\
			</table>\
			</form>';
		editDealerVehicletranspForm = editDealerVehicletranspForm.replace(/>null</g, ">--NA--<");
		editDealerVehicletranspForm = editDealerVehicletranspForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-transp-content").html(editDealerVehicletranspForm);
          }
          else{
        	  alert("not able to retrieve photo for Transport Service with error However you can view the other details"+err); 
          
          //alert("successfully retrieved 12.."+url); 
         
          var editDealerVehicletranspForm = '<form id="edit-dealer-vehicle-transp-content-form">\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
			<table>\
			<tr><td>Search ID</td><td>' + data.searchTranspId + '</td></tr>\
			<tr><td>' + quotIdHiddenField + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Looking To Move</div></div>\
			<tr><td>Type Of Vehicle</td><td>' + data.transTypeReq + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">From</div></div>\
			<tr><td>Post Code</td><td>' + data.fromPostCodeAddr + '</td></tr>\
			<tr><td>Street No</td><td>' + data.fromStreetNo + '</td></tr>\
			<tr><td>Street Name</td><td>' + data.fromStreetName + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">To</div></div>\
			<tr><td>Post Code</td><td>' + data.toPostCodeAddr + '</td></tr>\
			<tr><td>Street No</td><td>' + data.toStreetNo + '</td></tr>\
			<tr><td>Street Name</td><td>' + data.toStreetName + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Transport Stuff</div></div>\
			<tr><td>When do You want THIS to be picked up & delivered?</td><td>' + data.pickUpDateTime + '</td></tr>\
			<tr><td>What kin of transport You need?</td><td>' + data.toStreetName + '</td></tr>\
			<tr><td>I am Flexible</td><td>' + data.flexWithDateDefault + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Vehicle Stuff</div></div>\
			<table>\
			<h6 style="color:#bd191e;"><b>Car Registration</b></h6>\
			<tr><td>Rego No</td><td>' + data.regoNo + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoState + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Vehicle Details</b></h6>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>Free Text</td><td>' + data.freeText + '</td></tr>\
			</table>\
			</form>';
		editDealerVehicletranspForm = editDealerVehicletranspForm.replace(/>null</g, ">--NA--<");
		editDealerVehicletranspForm = editDealerVehicletranspForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-transp-content").html(editDealerVehicletranspForm);
          }
        });
		//alert("url1 new changes"+url1);

		//end
		
		
		
		
		
		
		/*var editDealerVehicletranspForm = '<form id="edit-dealer-vehicle-transp-content-form"><table>\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+data.uploadPhotos+'"'+' height="200" width="250"/></li></ul>\
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
		$(".edit-dealer-vehicle-transp-content").html(editDealerVehicletranspForm);*/
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
		  moveToUser1 = '<input type="checkbox" name="moveToUser1" checked="checked" />';  // come here*/
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
	     //alert("bis fdscuifsdf t");
	     accessToken = $.jStorage.get("fbAToken");
	     //alert(accessToken);
				bucket.config.credentials = new AWS.WebIdentityCredentials({
		                  ProviderId: 'graph.facebook.com',
		                  RoleArn: roleArn,
		                  WebIdentityToken: accessToken
		              });
				fbUserId = $.jStorage.get("fbKey");
				//alert("Trying to retrieve photo for Serv and Maint..");
	          fbUserId = $.jStorage.get("fbKey");
		//alert("new changes now");
		url1=" ";
		var params = {Bucket: 'elasticbeanstalk-us-east-1-675778862308', Key: data.uploadPhotos, Expires: 60};
        bucket.getSignedUrl('getObject', params, function (err, url) {
          if (url) { //alert("successfully retrieved 12.."+url); 
          url1=url;
          var editDealerVehicleservmaintForm = '<form id="edit-dealer-vehicle-servmaint-content-form">\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
			<table>\
			<tr><td>Search ID</td><td>' + data.searchServMaintId + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">I am Looking For</div></div>\
			<tr><td>Service</td><td>' + data.lookService + '</td></tr>\
			<tr><td>Service & Maintenance Level 1</td><td>' + data.servMaintL1 + '</td></tr>\
			<tr><td>Service & Maintenance Level 2</td><td>' + data.servMaintL2 + '</td></tr>\
			<tr><td>Add Notes</td><td>' + data.freeText + '</td></tr>\
			</table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Car Details</div></div>\
			<table>\
			<br/>\
			<tr><td>Rego No</td><td>' + data.regNo + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoState + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>Fuel Type</td><td>' + data.feulType + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">is the Car covered under Insurance</div></div>\
			<table>\
			<tr><td>Covered Under Insurance</td><td>' + data.coveredUnderIns + '</td></tr>\
			<tr><td>Current Insurance Provider</td><td>' + data.curInsProv + '</td></tr>\
			</table></form>';
		editDealerVehicleservmaintForm = editDealerVehicleservmaintForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleservmaintForm = editDealerVehicleservmaintForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-servmaint-content").html(editDealerVehicleservmaintForm);
          }
          else{
        	  alert("not able to retrieve photo for serv and Maint however you an view other details"+err); 
          //alert("successfully retrieved 12.."+url); 
         
          var editDealerVehicleservmaintForm = '<form id="edit-dealer-vehicle-servmaint-content-form">\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
			<table>\
			<tr><td>Search ID</td><td>' + data.searchServMaintId + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">I am Looking For</div></div>\
			<tr><td>Service</td><td>' + data.lookService + '</td></tr>\
			<tr><td>Service & Maintenance Level 1</td><td>' + data.servMaintL1 + '</td></tr>\
			<tr><td>Service & Maintenance Level 2</td><td>' + data.servMaintL2 + '</td></tr>\
			<tr><td>Add Notes</td><td>' + data.freeText + '</td></tr>\
			</table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Car Details</div></div>\
			<table>\
			<br/>\
			<tr><td>Rego No</td><td>' + data.regNo + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoState + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			<tr><td>Fuel Type</td><td>' + data.feulType + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">is the Car covered under Insurance</div></div>\
			<table>\
			<tr><td>Covered Under Insurance</td><td>' + data.coveredUnderIns + '</td></tr>\
			<tr><td>Current Insurance Provider</td><td>' + data.curInsProv + '</td></tr>\
			</table></form>';
		editDealerVehicleservmaintForm = editDealerVehicleservmaintForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleservmaintForm = editDealerVehicleservmaintForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-servmaint-content").html(editDealerVehicleservmaintForm);
          
          }
        });
		//alert("url1 new changes"+url1);
		
		/*var editDealerVehicleservmaintForm = '<form id="edit-dealer-vehicle-servmaint-content-form"><table>\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url1+'"'+' height="200" width="250"/></li></ul>\
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
		$(".edit-dealer-vehicle-servmaint-content").html(editDealerVehicleservmaintForm);*/
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
			<tr><td>Search Reference ID</td><td>' + data.searchFinanceId + '</td></tr>\
			</table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Car Registration</div></div>\
			<table>\
			<tr><td>Rego No</td><td>' + data.rego + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoState + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Vehicle Details</div></div>\
			<table>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model Name</td><td>' + data.model + '</td></tr>\
			<tr><td>Autoscoop Trim</td><td>' + data.autoscoopTrim + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Where Do You Live ?	</div></div>\
			<table>\
			<tr><td>Post Code</td><td>' + data.postCode + '</td></tr>\
			<tr><td>Street No</td><td>' + data.streetNo + '</td></tr>\
			<tr><td>Street Name</td><td>' + data.streetName + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">How much Loan your Looking?</div></div>\
			<table>\
			<tr><td>Loan Amount</td><td>' + data.loanAmount + '</td></tr>\
			<tr><td>Loan Period</td><td>' + data.loanPeriod + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Tell Us About Yourself</div></div>\
			<table>\
			<tr><td>Title</td><td>' + data.mr + '</td></tr>\
			<tr><td>First Name</td><td>' + data.firstName + '</td></tr>\
			<tr><td>Last Name</td><td>' + data.lastName + '</td></tr>\
			<tr><td>Date of Birth</td><td>' + data.dateOfBirth + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Your Income Details</div></div>\
			<table>\
			<tr><td>Income Type</td><td>' + data.incomeType + '</td></tr>\
			<tr><td>Annual Income</td><td>' + data.annualIncome + '</td></tr>\
			<tr><td>Years of Employment Business</td><td>' + data.yearEmploymentBusiness + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">My Credit Rating</div></div>\
			<table>\
			<tr><td>Credit Rating</td><td>' + data.creditRating + '</td></tr>\
			</table>\
			<br/>\
			</form>';
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
			</table>\
			<h4>Car Details</h4>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Car Registration</div></div>\
			<tr><td>Rego No</td><td>' + data.regNo + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regoState + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Vehicle Details</b></h6>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model</td><td>' + data.model + '</td></tr>\
			<tr><td>Autoscoop Trim</td><td>' + data.autoscoopTrim + '</td></tr>\
			<tr><td>Average No of Kms</td><td>' + data.avgNoOfKmYr + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Is the Car is Under Finance ?</b></h6>\
			<tr><td>Finance</td><td>' + data.finance + '</td></tr>\
			<tr><td>Finance Provider</td><td>' + data.financeProvider + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Car Parked At Address</b></h6>\
			<tr><td>Post Code</td><td>' + data.postCode + '</td></tr>\
			<tr><td>Where car Parked?</td><td>' + data.carParkedAt + '</td></tr>\
			<tr><td>Unit/StreetNo </td><td>' + data.streetNO + '</td></tr>\
			<tr><td>Street Name</td><td>' + data.streetName + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Car is Used for</b></h6>\
			<tr><td>Purpose</td><td>' + data.carUsedfor + '</td></tr>\
			<tr><td>Type of Business</td><td>' + data.typeOfBusiness + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Coverage Details</div></div>\
			<table>\
			<tr><td>Type of Coverage</td><td>' + data.insuranceType + '</td></tr>\
			</table>\
			<br/>\
			<h6 style="color:#bd191e;"><b>Agreed Value of Car</b></h6>\
			<table>\
			<tr><td>Agreed Value</td><td>' + data.agreedValue + '</td></tr>\
			<tr><td>Market Value</td><td>' + data.marketValue + '</td></tr>\
			</table>\
			<table>\
			<tr><td>Preferred Excess Amount</td><td>' + data.prefExcessAmount + '</td></tr>\
			<tr><td>Current Insurer</td><td>' + data.curInsProv + '</td></tr>\
			</table>\
			<br/>\
			<h5 style="color:#bd191e;"><b>Add Extra Requirements</b></h5>\
			<table>\
			<h6 style="color:#bd191e;"><b>External Requirements</b></h6>\
			<tr><td>External 1</td><td>' + data.FreeWindScreen + '</td></tr>\
			<tr><td>External 2</td><td>' + data.AnyDriver + '</td></tr>\
			<tr><td>External 3</td><td>' + data.Snokel + '</td></tr>\
			<tr><td>External 4</td><td>' + data.RentalCar + '</td></tr>\
			<tr><td>External 5</td><td>' + data.NewCarRepl + '</td></tr>\
			</table>\
			<table>\
			<h6 style="color:#bd191e;"><b>Internal Requirements</b></h6>\
			<tr><td>Internal 1</td><td>' + data.HireCar + '</td></tr>\
			<tr><td>Internal 2</td><td>' + data.intBullBar + '</td></tr>\
			<tr><td>Internal 3</td><td>' + data.intsnokel + '</td></tr>\
			<tr><td>Internal 4</td><td>' + data.intNudgeBar + '</td></tr>\
			<tr><td>Internal 5</td><td>' + data.BullBar + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Driver Details</div></div>\
			<table>\
			<tr><td>First Name</td><td>' + data.driverFirstName + '</td></tr>\
			<tr><td>Last Name</td><td>' + data.driverLastName + '</td></tr>\
			<tr><td>Mobile</td><td>' + data.driverMobileNo + '</td></tr>\
			<tr><td>Email</td><td>' + data.driverEmailId + '</td></tr>\
			<tr><td>Date Of Birth</td><td>' + data.dateOfBirth + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Driving Licence Details</b></h6>\
			<tr><td>Driving License Type</td><td>' + data.drivingLicenseType + '</td></tr>\
			<tr><td>Driving License No</td><td>' + data.drivingLicenseNo + '</td></tr>\
			<tr><td>Driving License Issue Date</td><td>' + data.licenseIssueDate + '</td></tr>\
			<tr><td>Driving License Issue State</td><td>' + data.drivingLicenseIssueState + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Drivers Claim History</b></h6>\
			<tr><td>No Of AtFaults</td><td>' + data.noOfAtFaults + '</td></tr>\
			<tr><td>Last AtFault Claim Date</td><td>' + data.lastAtFaultClaimDate + '</td></tr>\
			</table>\
			<br/>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Additional Driver Details</div></div>\
			<table>\
			<tr><td>No Of Drivers more than 1 ?</td><td>' + data.noOfDrivers + '</td></tr>\
			</table>\
			</form>';
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
		
		// start
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
	     //alert("bis fdscuifsdf t");
	     accessToken = $.jStorage.get("fbAToken");
	     //alert(accessToken);
				bucket.config.credentials = new AWS.WebIdentityCredentials({
		                  ProviderId: 'graph.facebook.com',
		                  RoleArn: roleArn,
		                  WebIdentityToken: accessToken
		              });
				fbUserId = $.jStorage.get("fbKey");
				//alert("Trying to retrieve photo for Serv and Maint..");
	          fbUserId = $.jStorage.get("fbKey");
		//alert("new changes now");
		url1=" ";
		var params = {Bucket: 'elasticbeanstalk-us-east-1-675778862308', Key: data.photo1, Expires: 60};
        bucket.getSignedUrl('getObject', params, function (err, url) {
          if (url) { //alert("successfully retrieved 12.."+url); 
          url1=url;
          var editDealerVehicleDetailForm = '<form id="edit-dealer-vehicle-detail-content-form"><table>\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
			<tr><td>My Vehicle ID</td><td>' + data.myVehicleId + '</td></tr>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Basic info</div></div>\
			<tr><td>Vehicle Type</td><td>' + data.fuelType + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Vehicle Identity</b></h6>\
			<tr><td>VIN/HIN Number</td><td>' + data.vin + '</td></tr>\
			<tr><td>Rego No</td><td>' + data.regNum + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regState + '</td></tr>\
			<tr><td>Rego End Date</td><td>' + data.regExpDate + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Insurance Details</div></div>\
			<tr><td>Insurance Provider</td><td>' + data.insProv + '</td></tr>\
			<tr><td>Insurance End Date</td><td>' + data.insExpiry + '</td></tr>\
			<tr><td>Insurance Premium Paid</td><td>'+ data.insPremPaid + '</td></tr>\
			<tr><td>Insurance Reminder</td><td>'+ data.insRemind + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Maintenance Details</div></div>\
			<tr><td>Last Service @Kms</td><td>' + data.odoMeter + '</td></tr>\
			<tr><td>Last Service Dt</td><td>' + data.lastServiceDt + '</td></tr>\
			<tr><td>Next Service Dt</td><td>' + data.nextServiceDt + '</td></tr>\
			<tr><td>Next Service @Kms</td><td>' + data.nextServKms + '</td></tr>\
			<tr><td>Insurance Reminder</td><td>'+ data.maiRemind + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Finance Info</div></div>\
			<tr><td>Finance Provider</td><td>' + data.finProvider + '</td></tr>\
			<tr><td>Loan Taken Date</td><td>' + data.loanTakenDt + '</td></tr>\
			<tr><td>Loan Amount</td><td>' + data.loanAmt1 + '</td></tr>\
			<tr><td>Loan Period</td><td>' + data.loanPeriod + '</td></tr>\
			<tr><td>Insurance Reminder</td><td>'+ data.finRemind + '</td></tr>\
			</table>\
			<br/>\
			</table></form>';
		editDealerVehicleDetailForm = editDealerVehicleDetailForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleDetailForm = editDealerVehicleDetailForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-detail-content").html(editDealerVehicleDetailForm);
          }
          else{
          alert("not able to retrieve photo for My Vehicle however you an view other details"+err); 
          //alert("successfully retrieved 12.."+url); 
          
          var editDealerVehicleDetailForm = '<form id="edit-dealer-vehicle-detail-content-form"><table>\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
			<tr><td>My Vehicle ID</td><td>' + data.myVehicleId + '</td></tr>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Basic info</div></div>\
			<tr><td>Vehicle Type</td><td>' + data.fuelType + '</td></tr>\
			<tr><td>Year</td><td>' + data.year + '</td></tr>\
			<tr><td>Make</td><td>' + data.make + '</td></tr>\
			<tr><td>Model</td><td>' + data.model + '</td></tr>\
			<tr><td>Variant</td><td>' + data.variant + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<h6 style="color:#bd191e;"><b>Vehicle Identity</b></h6>\
			<tr><td>VIN/HIN Number</td><td>' + data.vin + '</td></tr>\
			<tr><td>Rego No</td><td>' + data.regNum + '</td></tr>\
			<tr><td>Rego State</td><td>' + data.regState + '</td></tr>\
			<tr><td>Rego End Date</td><td>' + data.regExpDate + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Insurance Details</div></div>\
			<tr><td>Insurance Provider</td><td>' + data.insProv + '</td></tr>\
			<tr><td>Insurance End Date</td><td>' + data.insExpiry + '</td></tr>\
			<tr><td>Insurance Premium Paid</td><td>'+ data.insPremPaid + '</td></tr>\
			<tr><td>Insurance Reminder</td><td>'+ data.insRemind + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Maintenance Details</div></div>\
			<tr><td>Last Service @Kms</td><td>' + data.odoMeter + '</td></tr>\
			<tr><td>Last Service Dt</td><td>' + data.lastServiceDt + '</td></tr>\
			<tr><td>Next Service Dt</td><td>' + data.nextServiceDt + '</td></tr>\
			<tr><td>Next Service @Kms</td><td>' + data.nextServKms + '</td></tr>\
			<tr><td>Insurance Reminder</td><td>'+ data.maiRemind + '</td></tr>\
			</table>\
			<br/>\
			<table>\
			<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Finance Info</div></div>\
			<tr><td>Finance Provider</td><td>' + data.finProvider + '</td></tr>\
			<tr><td>Loan Taken Date</td><td>' + data.loanTakenDt + '</td></tr>\
			<tr><td>Loan Amount</td><td>' + data.loanAmt1 + '</td></tr>\
			<tr><td>Loan Period</td><td>' + data.loanPeriod + '</td></tr>\
			<tr><td>Insurance Reminder</td><td>'+ data.finRemind + '</td></tr>\
			</table>\
			<br/>\
			</table></form>';
		editDealerVehicleDetailForm = editDealerVehicleDetailForm.replace(/>null</g, ">--NA--<");
		editDealerVehicleDetailForm = editDealerVehicleDetailForm.replace(/>undefined</g, ">--NA--<");
		$(".edit-dealer-vehicle-detail-content").html(editDealerVehicleDetailForm);
          
          }
        });
		//alert("url1 new changes"+url1);

		//end
		
		
		
		/*var editDealerVehicleDetailForm = '<form id="edit-dealer-vehicle-detail-content-form"><table>\
			<ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+data.photo1+'"'+' height="200" width="250"/></li></ul>\
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
		$(".edit-dealer-vehicle-detail-content").html(editDealerVehicleDetailForm);*/
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
	           	    	outLogS= outLogS+'<tr>'+'<td>'+result.myVehicleServMaint[i].typeOfServMaint+'</td>'+'<td>'+result.myVehicleServMaint[i].date+'</td>'+'<td>'+result.myVehicleServMaint[i].odoMeterKm+'</td>'+'<td>'+result.myVehicleServMaint[i].flex1+'</td>'+'<td>'+result.myVehicleServMaint[i].flex2+'</td>'+'<td>'+result.myVehicleServMaint[i].flex3+'</td><td>'+result.myVehicleServMaint[i].mechanicName+'</td>'+'<td>'+result.myVehicleServMaint[i].companyName+'</td><td>'+result.myVehicleServMaint[i].uploadPhoto+'</td></tr>';
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
	$body = $("body");
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
									outLogT += '<tr><th>'+"Trip Type"+'</th><th>'+"TripStart Addr"+'</th><th>'+"TripEnd Addr"+'</th><th>'+"Trip Date"+'</th><th>'+"OdoMeter Start"+'</th><th>'+"OdoMeter End"+'</th><th>'+"No of Kms"+'</th><th>'+"Purpose of Trip"+'</th><th>'+"Driver Name"+'</th><th>'+"Trip Log Date"+'</th><th>'+'View/Update'+'</th></tr>';
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
					           	    	outLogE= outLogE+'<tr>'+'<td>'+result.myVehicleFuelExpenses[i].recordType+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].business+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].date+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].others+'</td>'+'<td>'+result.myVehicleFuelExpenses[i].amount+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleexpnsModal-' + result.myVehicleFuelExpenses[i].myVehicleFuelExpensesId + '" data-details=\'' + JSON.stringify(result.myVehicleFuelExpenses[i]) + '\' class="anchor-editDealerVehicleexpnsModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleexpnsModal">View</a></td></tr>';
					          		 }
					           	 outLogE = outLogE.replace(/>null</g, ">--NA--<");
					           	outLogE = outLogE.replace(/>undefined</g, ">--NA--<");
				
								}
							else
								{
								outLogE='<h2>No records for log Expenses</h2>';
								}
								$('#logExpTable').html(outLogE);
								registerEditDealerVehicleexpnsModal();
								// start of logexpenses
								function registerEditDealerVehicleexpnsModal(){       

alert("came inside log expenses");
									//Add a Bootstrap Modal DIV to vehicle expns Details
									var editDealerVehicleexpnsModal = '<div class="modal fade" id="editDealerVehicleexpnsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
									    <div class="modal-dialog">\
									        <div class="modal-content">\
									            <div class="modal-header">\
									                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
									                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
									            </div>\
												<h4 class="modal-title" id="myModalLabel"><center>View Log Expenses Details</center></h4>\
										        <form id="edit-dealer-vehicle-expns-content-form">\
												<div class="modal-body edit-dealer-vehicle-expns-content">\
									            </div>\
									            <div class="modal-footer">\
									                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
												</div>\
									            </form>\
									        	<p><center>&copy; 2017 Autoscoop</center></p>\
									        </div>\
									    </div>\
									</div>';

									$(document.body).append(editDealerVehicleexpnsModal);
									
										
									$('a.anchor-editDealerVehicleexpnsModal').on('click', function(event) {
										
										
										var data = $(event.target).data('details');
										//var json = JSON.stringify(data);
										
										var quotIdHiddenField = '<input type="hidden" name="myVehicleFuelExpensesId" value="' + data.myVehicleFuelExpensesId + '" />';
										/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; */
										/*if(data.newer)
										  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
										var moveToUser1 = '<input type="checkbox" name="moveToUser1" />'; 
										if(data.used)
										  moveToUser1 = '<input type="checkbox" name="moveToUser1" checked="checked" />';*/

										// start
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
									     //alert("bis fdscuifsdf t");
									     accessToken = $.jStorage.get("fbAToken");
									     //alert(accessToken);
												bucket.config.credentials = new AWS.WebIdentityCredentials({
										                  ProviderId: 'graph.facebook.com',
										                  RoleArn: roleArn,
										                  WebIdentityToken: accessToken
										              });
												fbUserId = $.jStorage.get("fbKey");
												//alert("Trying to retrieve photo for Serv and Maint..");
									          fbUserId = $.jStorage.get("fbKey");
										//alert("new changes now");
										url1=" ";
										var params = {Bucket: 'elasticbeanstalk-us-east-1-675778862308', Key: data.photoOfInvoice, Expires: 60};
								        bucket.getSignedUrl('getObject', params, function (err, url) {
								          if (url) { //alert("successfully retrieved 12.."+url); 
								          url1=url;
								          var editDealerVehicleexpnsForm = '<form id="edit-dealer-vehicle-expns-content-form"><table>\
								        	  <ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
												<tr><td>Log Expense ID</td><td>' + data.myVehicleFuelExpensesId + '</td></tr>\
												</table>\
												<table>\
												<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Log Expense Details</div></div>\
												<tr><td>Expensive Type</td><td>' + data.recordType + '</td></tr>\
												<tr><td>Expensive Category</td><td>' + data.business + '</td></tr>\
												<tr><td>Expensive Date</td><td>' + data.date + '</td></tr>\
												<tr><td>Expensive Description</td><td>' + data.others + '</td></tr>\
												<tr><td>Amount</td><td>' + data.amount + '</td></tr>\
												</table>\
												</form>';
											editDealerVehicleexpnsForm = editDealerVehicleexpnsForm.replace(/>null</g, ">--NA--<");
											editDealerVehicleexpnsForm = editDealerVehicleexpnsForm.replace(/>undefined</g, ">--NA--<");
											$(".edit-dealer-vehicle-expns-content").html(editDealerVehicleexpnsForm);
									
								          }
								          else{
								        	  alert("not able to retrieve photo for Log expenses, However you can view other details"+err); 
								          //alert("successfully retrieved 12.."+url); 
								          
								          var editDealerVehicleexpnsForm = '<form id="edit-dealer-vehicle-expns-content-form"><table>\
								        	  <ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
												<tr><td>Log Expense ID</td><td>' + data.myVehicleFuelExpensesId + '</td></tr>\
												</table>\
												<table>\
												<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Log Expense Details</div></div>\
												<tr><td>Expensive Type</td><td>' + data.recordType + '</td></tr>\
												<tr><td>Expensive Category</td><td>' + data.business + '</td></tr>\
												<tr><td>Expensive Date</td><td>' + data.date + '</td></tr>\
												<tr><td>Expensive Description</td><td>' + data.others + '</td></tr>\
												<tr><td>Amount</td><td>' + data.amount + '</td></tr>\
												</table>\
												</form>';
											editDealerVehicleexpnsForm = editDealerVehicleexpnsForm.replace(/>null</g, ">--NA--<");
											editDealerVehicleexpnsForm = editDealerVehicleexpnsForm.replace(/>undefined</g, ">--NA--<");
											$(".edit-dealer-vehicle-expns-content").html(editDealerVehicleexpnsForm);
									
								          
								          }});
										
										/*var editDealerVehicleexpnsForm = '<form id="edit-dealer-vehicle-expns-content-form"><table>\
											<tr><td>Log Expense ID</td><td>' + data.myVehicleFuelExpensesId + '</td></tr>\
											</table>\
											<table>\
											<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Log Expense Details</div></div>\
											<tr><td>Expensive Type</td><td>' + data.recordType + '</td></tr>\
											<tr><td>Expensive Category</td><td>' + data.business + '</td></tr>\
											<tr><td>Expensive Date</td><td>' + data.date + '</td></tr>\
											<tr><td>Expensive Description</td><td>' + data.others + '</td></tr>\
											<tr><td>Amount</td><td>' + data.amount + '</td></tr>\
											</table>\
											</form>';
										editDealerVehicleexpnsForm = editDealerVehicleexpnsForm.replace(/>null</g, ">--NA--<");
										editDealerVehicleexpnsForm = editDealerVehicleexpnsForm.replace(/>undefined</g, ">--NA--<");
										$(".edit-dealer-vehicle-expns-content").html(editDealerVehicleexpnsForm);*/
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
								//end of logexpenses
								
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
					           	    	outLogS= outLogS+'<tr>'+'<td>'+result.myVehicleServMaint[i].typeOfServMaint+'</td>'+'<td>'+result.myVehicleServMaint[i].date+'</td>'+'<td>'+result.myVehicleServMaint[i].odoMeterKm+'</td>'+'<td>'+result.myVehicleServMaint[i].flex1+'</td>'+'<td>'+result.myVehicleServMaint[i].flex2+'</td>'+'<td>'+result.myVehicleServMaint[i].flex3+'</td><td>'+result.myVehicleServMaint[i].mechanicName+'</td>'+'<td>'+result.myVehicleServMaint[i].companyName+'</td><td><a href="#" id="anchor-editDealerVehicleservmtModal-' + result.myVehicleServMaint[i].myVehicleServMaintId + '" data-details=\'' + JSON.stringify(result.myVehicleServMaint[i]) + '\' class="anchor-editDealerVehicleservmtModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleservmtModal">View</a></td></tr>';
					          		 }
					           	 outLogS = outLogS.replace(/>null</g, ">--NA--<");
					           	outLogS = outLogS.replace(/>undefined</g, ">--NA--<");
								}
							else
								{
								outLogS='<h2>No records for Service maintenance</h2>';
								}
								$('#logServMainTable').html(outLogS);
								registerEditDealerVehicleservmtModal();
								// start of logsermaint
								function registerEditDealerVehicleservmtModal(){       

alert("came inside log servmaint");
									//Add a Bootstrap Modal DIV to vehicle expns Details
									var editDealerVehicleservmtModal = '<div class="modal fade" id="editDealerVehicleservmtModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
									    <div class="modal-dialog">\
									        <div class="modal-content">\
									            <div class="modal-header">\
									                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
									                <h3 class="modal-title" id="myModalLabel"><center>Autoscoop.com.au</center></h3>\
									            </div>\
												<h4 class="modal-title" id="myModalLabel"><center>View Log Service Maintenance Details</center></h4>\
										        <form id="edit-dealer-vehicle-servmt-content-form">\
												<div class="modal-body edit-dealer-vehicle-servmt-content">\
									            </div>\
									            <div class="modal-footer">\
									                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
												</div>\
									            </form>\
									        	<p><center>&copy; 2017 Autoscoop</center></p>\
									        </div>\
									    </div>\
									</div>';

									$(document.body).append(editDealerVehicleservmtModal);
									
										
									$('a.anchor-editDealerVehicleservmtModal').on('click', function(event) {
										
										
										var data = $(event.target).data('details');
										//var json = JSON.stringify(data);
										
										var quotIdHiddenField = '<input type="hidden" name="myVehicleServMaintId" value="' + data.myVehicleServMaintId + '" />';
										/*var moveToUser = '<input type="checkbox" name="moveToUser" />'; */
										/*if(data.newer)
										  moveToUser = '<input type="checkbox" name="moveToUser" checked="checked" />';
										var moveToUser1 = '<input type="checkbox" name="moveToUser1" />'; 
										if(data.used)
										  moveToUser1 = '<input type="checkbox" name="moveToUser1" checked="checked" />';*/
										// start
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
									     //alert("bis fdscuifsdf t");
									     accessToken = $.jStorage.get("fbAToken");
									     //alert(accessToken);
												bucket.config.credentials = new AWS.WebIdentityCredentials({
										                  ProviderId: 'graph.facebook.com',
										                  RoleArn: roleArn,
										                  WebIdentityToken: accessToken
										              });
												fbUserId = $.jStorage.get("fbKey");
												//alert("Trying to retrieve photo for Serv and Maint..");
									          fbUserId = $.jStorage.get("fbKey");
										//alert("new changes now");
										url1=" ";
										var params = {Bucket: 'elasticbeanstalk-us-east-1-675778862308', Key: data.uploadPhoto, Expires: 60};
								        bucket.getSignedUrl('getObject', params, function (err, url) {
								          if (url) { //alert("successfully retrieved 12.."+url); 
								          url1=url;
								          var editDealerVehicleservmtForm = '<form id="edit-dealer-vehicle-servmt-content-form"><table>\
								        	  <ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
												<tr><td>Log Expense ID</td><td>' + data.myVehicleServMaintId + '</td></tr>\
												</table>\
												<table>\
												<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Log Service Maintenance Details</div></div>\
												<tr><td>Type of Service</td><td>' + data.typeOfServMaint + '</td></tr>\
												<tr><td>Date of Service</td><td>' + data.date + '</td></tr>\
												<tr><td>Mileage / ODO Meter @Service</td><td>' + data.odoMeterKm + '</td></tr>\
												<tr><td>Detail Work Performed</td><td>' + data.flex1 + '</td></tr>\
												<tr><td>List of Service</td><td>' + data.flex2 + '</td></tr>\
												<tr><td>Notes</td><td>' + data.flex3 + '</td></tr>\
												<tr><td>Technician</td><td>' + data.mechanicName + '</td></tr>\
												<tr><td>Service and Maintenance Company</td><td>' + data.companyName + '</td></tr>\
												</table>\
												</form>';
											editDealerVehicleservmtForm = editDealerVehicleservmtForm.replace(/>null</g, ">--NA--<");
											editDealerVehicleservmtForm = editDealerVehicleservmtForm.replace(/>undefined</g, ">--NA--<");
											$(".edit-dealer-vehicle-servmt-content").html(editDealerVehicleservmtForm);
									
								          }
								          else{alert("not able to retrieve photo for serv and maintenance, However you can view other details "+err)
								          //alert("successfully retrieved 12.."+url); 
								          url1=url;
								          var editDealerVehicleservmtForm = '<form id="edit-dealer-vehicle-servmt-content-form"><table>\
								        	  <ul class'+'='+'"'+'slides'+'"'+'><li><img src'+'='+'"'+url+'"'+' height="200" width="250"/></li></ul>\
												<tr><td>Log Expense ID</td><td>' + data.myVehicleServMaintId + '</td></tr>\
												</table>\
												<table>\
												<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Log Service Maintenance Details</div></div>\
												<tr><td>Type of Service</td><td>' + data.typeOfServMaint + '</td></tr>\
												<tr><td>Date of Service</td><td>' + data.date + '</td></tr>\
												<tr><td>Mileage / ODO Meter @Service</td><td>' + data.odoMeterKm + '</td></tr>\
												<tr><td>Detail Work Performed</td><td>' + data.flex1 + '</td></tr>\
												<tr><td>List of Service</td><td>' + data.flex2 + '</td></tr>\
												<tr><td>Notes</td><td>' + data.flex3 + '</td></tr>\
												<tr><td>Technician</td><td>' + data.mechanicName + '</td></tr>\
												<tr><td>Service and Maintenance Company</td><td>' + data.companyName + '</td></tr>\
												</table>\
												</form>';
											editDealerVehicleservmtForm = editDealerVehicleservmtForm.replace(/>null</g, ">--NA--<");
											editDealerVehicleservmtForm = editDealerVehicleservmtForm.replace(/>undefined</g, ">--NA--<");
											$(".edit-dealer-vehicle-servmt-content").html(editDealerVehicleservmtForm);
									
								          
								          }});
										
										
										/*var editDealerVehicleservmtForm = '<form id="edit-dealer-vehicle-servmt-content-form"><table>\
											<tr><td>Log Expense ID</td><td>' + data.myVehicleServMaintId + '</td></tr>\
											</table>\
											<table>\
											<div class="row"><div class="col-sm-12 col-md-12 product-search-title">Log Service Maintenance Details</div></div>\
											<tr><td>Type of Service</td><td>' + data.typeOfServMaint + '</td></tr>\
											<tr><td>Date of Service</td><td>' + data.date + '</td></tr>\
											<tr><td>Mileage / ODO Meter @Service</td><td>' + data.odoMeterKm + '</td></tr>\
											<tr><td>Detail Work Performed</td><td>' + data.flex1 + '</td></tr>\
											<tr><td>List of Service</td><td>' + data.flex2 + '</td></tr>\
											<tr><td>Notes</td><td>' + data.flex3 + '</td></tr>\
											<tr><td>Technician</td><td>' + data.mechanicName + '</td></tr>\
											<tr><td>Service and Maintenance Company</td><td>' + data.companyName + '</td></tr>\
											</table>\
											</form>';
										editDealerVehicleservmtForm = editDealerVehicleservmtForm.replace(/>null</g, ">--NA--<");
										editDealerVehicleservmtForm = editDealerVehicleservmtForm.replace(/>undefined</g, ">--NA--<");
										$(".edit-dealer-vehicle-servmt-content").html(editDealerVehicleservmtForm);*/
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
								//end of logservmaint
							}
						});
					}
	// Rego State Lead Start
	$scope.postRegoStateUrlLead = function(isValid) {
	//alert("invoke in postRegoState lead");
	
	
		/*alert($scope.email);
		alert(email); */
		if(alreadyLogged()){
			if(isValid){
					userId=$.jStorage.get('key').userId;
					fbUserId=$.jStorage.get("fbKey");
							
					var wsURL = 'api/regostateurl/getRegoStateUrlFor?vehState='+$('#car-reg-state').val()+'&vehType='+$('#car-reg-vehType').val();
					// change here
					
				   $body.addClass("loading");   
				    	$http({
							method : 'GET',
							url : wsURL
											
						}).success(function(data) {
							$body.removeClass("loading");
							alert("successfully retreived"+data.flex2);
							if(data.flex2!="nourl"){
								window.open(data.flex2);
							}
							
										});
			}
			else
			{
				alert("Please fill all the require fields");
			}
	    
		}
		else{alert("Please Login and Build")}
		
	    	
	    
	}
	
	// Rego State lead end

					$scope.submitSearchForm = function(isValid) {
							
						
							if(isValid){
								myvehicleloadImage();
								var fileChooserMyVeh = document.getElementById('file-chooser');
								var fileMyVeh = fileChooserMyVeh.files[0];
								var objKeyMyVeh='noImage';
								if(fileMyVeh){
								objKeyMyVeh = 'facebook-' + fbUserId + '/' + fileMyVeh.name;}
								
								var fileChooserMyVeh2 = document.getElementById('file-chooser2');
								var fileMyVeh2 = fileChooserMyVeh2.files[0];
								var objKeyMyVeh2='noImage';
								if(fileMyVeh2){
								objKeyMyVeh2 = 'facebook-' + fbUserId + '/' + fileMyVeh2.name;}
								
								var fileChooserMyVeh3 = document.getElementById('file-chooser3');
								var fileMyVeh3 = fileChooserMyVeh3.files[0];
								var objKeyMyVeh3='noImage';
								if(fileMyVeh3){
								objKeyMyVeh3 = 'facebook-' + fbUserId + '/' + fileMyVeh3.name;}
									//alert("Image of MyVehicle"+objKeyMyVeh);
								/*var RegExpDate= stringToDate($('#RegExpDate').val(),"dd/MM/yyyy","/");
								var InsExpDate= stringToDate($('#InsExpDate').val(),"dd/MM/yyyy","/");
								var LastServDate= stringToDate($('#LastServDate').val(),"dd/MM/yyyy","/");
								var NextServDate= stringToDate($('#NextServDate').val(),"dd/MM/yyyy","/");
								var LoanTakenDate = stringToDate($('#LoanTakenDate').val(),"dd/MM/yyyy","/");
*/
								var jsonInputToAPI = {"userId":userId,
										"myVehicleVO":{
											"myVehicleId":null,
											"year": $scope.caryears,															      
											"make":$scope.carmakes,
													"model" :$scope.carmodels,
													 "variant":$scope.carmodeltrims,
													"vin":$scope.vin,
													"regNum":$scope.regNo,
													"regState":$scope.regState,
													"regExpDate":$scope.RegExpDate,
													"insProv":$scope.insProv,
													"insProvMan":"",
													"insPremPaid":$scope.insPrePaid,
													"insPremPaidFreq":"",
													"insExpiry":$scope.InsExpDate,	
													"odoMeter":$scope.odoMeter,	//Last serv kms
													"lastServiceDt":$scope.LastServDate,	
													"nextServiceDt":$scope.NextServDate,	
													"nextServKms":$scope.nextServMaiKms,	
													"finProvider":$scope.finProv,	
													"loanAmt1":$scope.loanAmount,//Loan Amt	
													"loanTakenDt":$scope.LoanTakenDate,
														"loanPaidFreq":"",	
													"loanAmt2":0,	
													"loanPeriod":$scope.laonPeriod,	
													"loanInterest":1,
														"fuelCardProvider":"",	
													"valFuelCard":"",	
													"fuelType":$scope.vehicleType,//Vehicle type mapped to fuel type
													"photo1":objKeyMyVeh,	
													"photo2":objKeyMyVeh2,	
													"photo3":objKeyMyVeh3,
														"flex1":"flex1",	
													"flex2":"flex1",	
													"flex3":"flex1",
														"flex4":"flex1",
													"insRemind":$scope.insRemind,
													"maiRemind":$scope.maiRemind,
													"finRemind":$scope.finRemind,
													"flex5":12,	
													"flex6":12,
													"flex7":12,
														"flex8":null,	
													"flex9":null
										}
										}

								//alert(JSON.stringify(jsonInputToAPI));
								$body.addClass("loading");
														//alert("Before Call");
														//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/myVehicle/';
														//var wsURL = 'http://www.autoscoop.com.au/api/eBid/myVehicle/';
														var wsURL = 'api/eBid/myVehicle';
														
															    $http({
																			method : 'POST',
																			url : wsURL,
																			data: jsonInputToAPI
																							
																		}).success(function(data) {
																			$body.removeClass("loading");	
																			alert("Successfully Stored..");
																							alert("Thank You. Your MyVehicle ID is " + data.myVehicleId +"and it is updating to dashboard");
																							vehicleDetailsLoad();												
																						});	
							}
							else
								{
									alert("Please fill the Required fields");
								}
							
						
																		
							};//end of submitsearch
							
						function vehicleDetailsLoad(){
							//alert("In ch lfsfoad");
							var wsURL = 'api/userVehicle/'+userId;//"api/user/"+userid;
							//alert(wsURL);
							$body.addClass("loading");
						    $http({
										method : 'GET',
										url : wsURL														
									}).success(function(data) {
										/*alert(data);
										alert(JSON.stringify(data));*/
										outVehicle="";
							        	/*alert(data.length);  
							        	alert(data[0].myVehicleId);*/  
										outVehicle += '<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th><th>'+"Operation"+'</th></tr>';
							           	  for(i=data.length-1;i>=0;i--)
							          		{
							          		
							           		outVehicle= outVehicle+'<tr>'+'<td>'+data[i].myVehicleId+'</td>'+'<td>'+data[i].year+'</td>'+'<td>'+data[i].make+'</td>'+'<td>'+data[i].model+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleDetailModal-' + data[i].myVehicleId + '" data-details=\'' + JSON.stringify(data[i]) + '\' class="anchor-editDealerVehicleDetailModal btn btn-success btn-sm" data-toggle="modal" data-target="#editDealerVehicleDetailModal">View</a></td></tr>';
							          		}
							           	outVehicle = outVehicle.replace(/>null</g, ">--NA--<");
							           	outVehicle = outVehicle.replace(/>undefined</g, ">--NA--<");
							           	var LogMyVehic = data;

							           	if(LogMyVehic && data.length==0){
									           	outLT='<h2>No records found</h2>';
									            //forFinance("quo-model-data4",outLT);
									            $("#"+"quo-model-data4").html(outLT);
							           	}
							           	else{
							           	   //forFinance("quo-model-data4",outVehicle);
							           	   $("#"+"quo-model-data4").html(outVehicle);
							           	   }
										$body.removeClass("loading");	
													});	
							
							
						}	
							
							
							
							

																			
											
												$scope.submitSearchFormLogBook = function() {
													/*alert("inside Log Book");
													alert(myVehicleIDuse);	*/											
													
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
													
													$scope.submitSearchFormupdateset = function() {
														updateSettingloadImage();
														//alert("inside updatset");
														/*alert("inside Sesdarv Maint");
														alert(myVehicleIDuse);*/
														/*var vehicleTypeServMaint= stringToDate($('#vehicleTypeServMaint').val(),"dd/MM/yyyy","/");
														var nextServiceMaintenanceDate= stringToDate($('#nextServiceMaintenanceDate').val(),"dd/MM/yyyy","/");*/
														
														var fileChooserlogupdateset = document.getElementById('file-chooser-updateset');
														var filefileChooserupdateset = fileChooserlogupdateset.files[0];
														var objKeyupdateset = 'facebook-' + fbUserId + '/' + filefileChooserupdateset.name;
														alert(objKeyupdateset);
														var jsonInputToAPI = {"userId":value.userId,"photo":objKeyupdateset, "phoneNumber":$('#UserPhoneNo').val(), "firstName":$('#UserFirstName').val(),"lastName":$('#UserLastName').val(),"streetNumber":$('#UserStreetNo').val(),"streetName":$('#UserStreetName').val(),"postCode":$('#UserpostCode').val(),"region":$('#UserRegion').val(),"state":$('#UserState').val(),"desc":$('#UserDesc').val()}
														
														/*var jsonInputToAPI = {"myVehicleId":myVehicleIDuse,
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
																	"uploadPhoto":objKeyupdateset,
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
																}*/


														//alert("Before Call");
														//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/myVehicle/';
														//var wsURL = 'http://www.autoscoop.com.au/api/eBid/myVehicle/';
														
														
															   /* $http({
																			method : 'POST',
																			url : wsURL,
																			data: jsonInputToAPI
																							
																		}).success(function(data) {
																			$scope.vehicleRetrievalforLogBook();
																			alert("Service & Maintenance Successfully Stored..");
																															
																						});*/	
														$body.addClass("loading");
														$.ajax({  
									                		type: "POST",  
									                		url: "api/updatePhoto?_method=PUT",
									                		data: JSON.stringify(jsonInputToAPI),
									                		contentType:'application/json',
									                		success: function(result){
									                			$body.removeClass("loading");
									                			setting(result);
									                			alert("Successfully upated photo to user12");
									                			var url="dashboard1.html";
																
																window.location=url;
									                			
									                			
									                		}
									                	});
														};
													
													
													
													$scope.submitSearchFormServMaint = function() {
														/*alert("inside Sesdarv Maint");
														alert(myVehicleIDuse);*/
														/*var vehicleTypeServMaint= stringToDate($('#vehicleTypeServMaint').val(),"dd/MM/yyyy","/");
														var nextServiceMaintenanceDate= stringToDate($('#nextServiceMaintenanceDate').val(),"dd/MM/yyyy","/");*/
														logServMaintloadImage();
														var fileChooserlogservmaint = document.getElementById('file-chooser-logservmaint');
														var filefileChooserlogservmaint = fileChooserlogservmaint.files[0];
														var objKeyfilefileChooserlogservmaint = 'facebook-' + fbUserId + '/' + filefileChooserlogservmaint.name;
														//alert(objKeyfilefileChooserlogservmaint);
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
																	"uploadPhoto":objKeyfilefileChooserlogservmaint,
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
															//alert("inside Fuel Expe")
															logExpensesloadImage();
															var fileChooserLogExp = document.getElementById('file-chooser-lognewexp');
						var filelogexp = fileChooserLogExp.files[0];
						var objKeylogexp = 'facebook-' + fbUserId + '/' + filelogexp.name;
				//alert("Image of MyVehicle"+objKeylogexp);;
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
																		"photoOfInvoice":objKeylogexp,
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




