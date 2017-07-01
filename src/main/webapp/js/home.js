/**
 * 
 */
        var userId = null;
        email = null;
        flex1 = null;
        flex2 = null;
        flex3 = null;
        firstName = null;

        var mainApp1 = angular.module("mainApp1", []);
        mainApp1
            .controller(
            'myController1',
            function ($scope, $http) {
        		
                //Login start
        		//$scope.newCarSearch = false;
        		//$scope.usedCarSearch = true;
        		
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
                        url : 'api/tempCarModelVariantForModel?modelName='+model+'&modelDisplay='+make+'&modelYear='+year
                    }).then(function mySuccess(response) {
                    	 $body.removeClass("loading");
                    	 $scope.VarsCarYearMakeMod = response.data;
                    }, function myError(response) {
                    	$scope.VarsCarYearMakeMod = response.statusText;
                    });
            	}
            	
            	
            	$scope.modelForYear = function (){
            		$body.addClass("loading");
                	$http({
                        method : 'GET',
                        url : 'api/tempCarModelYears'
                    }).then(function mySuccess(response) {
                    	 $body.removeClass("loading");
                    	 $scope.ModelsCarYear = response.data;
                    }, function myError(response) {
                    	$scope.ModelsCarYear = response.statusText;
                    });
            	}
                $scope.submitForm12 = function () {
                    //alert("invoke login ");
                    /*alert($scope.email);
                    alert(email); */

                    var jsonInputToAPI = { "email": "", "password": "" };
                    jsonInputToAPI.email = document.getElementById("exampleEmail").value;
                    jsonInputToAPI.password = document.getElementById("examplePass").value;
											/* alert(jsonInputToAPI.email);
											alert(jsonInputToAPI.password) */;
                    var wsURL = 'api/user/login';
                    //var wsURL = 'http://localhost:8080/MyCarDomain/api/user/login';
                    //  var wsURL = 'http://www.autoscoop.com.au/api/user/login';
                    /* alert(jsonInputToAPI.comingSoonUserEmail);
                    alert(jsonInputToAPI.flex1);
                    alert(jsonInputToAPI.flex2);
                    alert(jsonInputToAPI.flex3); */
                    $http({
                        method: 'POST',
                        url: wsURL,
                        data: jsonInputToAPI

                    }).success(function (data) {
                        alert("successful Login will set session");
                        setting(data);
                        /* $.jStorage.set("key",data);
                        $.jStorage.setTTL("key", 3000); // expires in 3 seconds
                                  alert("successfully set to session key"+data.userId);*/
                        //alert("userid"+data.userId);
                        userId = data.userId;
                        firstName = data.firstName;
                        //alert(data.firstName);
                        document.getElementById('status').innerHTML = ' <div class="alert alert-success"> <strong>Success!</strong> You will be surely Notified! </div>';
                        if (userId != null) {
                            //alert(data.firstName);
                            document.getElementById('welcomeDiv').style.display = "block";
                            document.getElementById('welcomeDiv1').style.display = "none";
                            document.getElementById('userId').innerHTML = "<b>" + "Hi " + data.firstName + "</b>";
                        }
                        else {
                            alert("User Id or password not present");
                        }
                    });




                }

                //Login End

                // social login start

                $scope.submitForm1 = function () {
                    //alert("invoke");
                    /*alert($scope.email);
                    alert(email); */
                    var jsonInputToAPI = { "userId": 73, "password": " ", "abnNumber": " ", "firstName": "muf", "lastName": "ss", "email": "ss@gmail.com", "mobile": 98, "landLine": 98, "streetNumber": " ", "streetName": " ", "areaName": " ", "subOrb": " ", "state": " ", "postCode": 98, "drivingLicense": " ", "issueState": " ", "facebook": false, "payDeposit": true, "search": null, "searchInsurance": null, "searchFinance": null, "searchServMaint": null, "searchTransp": null, "vehicleQuotation": null, "insuranceQuotation": null, "financeQuotation": null };
                    jsonInputToAPI.email = email;
                    jsonInputToAPI.firstName = flex1;
                    jsonInputToAPI.lastName = flex1;

                    //alert(flex1);
                    var wsURL = 'api/user/login/social';
                    //var wsURL = 'http://localhost:8080/MyCarDomain/api/user/login/social';
                    //  var wsURL = 'http://www.autoscoop.com.au/api/user/login/social';
                    /* alert(jsonInputToAPI.comingSoonUserEmail);
                    alert(jsonInputToAPI.flex1);
                    alert(jsonInputToAPI.flex2);
                    alert(jsonInputToAPI.flex3); */

                    $body = $("body");
                    //$body.addClass("moSign");
                    $body.addClass("loading");

                    if (flex3 == 1 || flex3 == 2 || flex3 == 3 || flex3 == 4 || flex3 == 5) {

                        $http({
                            method: 'POST',
                            url: wsURL,
                            data: jsonInputToAPI

                        }).success(function (data) {
                            $body.removeClass("loading");
                            alert("successful login set to session");
                            setting(data);
                            /* $.jStorage.set("key",data);
                            $.jStorage.setTTL("key", 3000); // expires in 3 seconds
                                      alert("successfully set to session key"+data.userId); */
                            //alert("userid"+data.userId);
                            //alert("userid"+userId);
                            userId = data.userId;
                            firstName = data.firstName;
                            document.getElementById('status').innerHTML = '<div class="row"><div class="col-sm-1 col-md-1"></div> <div class="alert alert-success col-sm-11 col-md-11"> <strong>Login Success!</strong> Discover the Auto World... </div></div>';
                            $(".social").hide();
                            if (userId != null) {
                                //alert(data.firstName);
                                document.getElementById('welcomeDiv').style.display = "block";
                                document.getElementById('welcomeDiv1').style.display = "none";
                                document.getElementById('userId').innerHTML = "<b>" + "Hi " + data.firstName + "</b>";
                            }
                        });
                    }
                    //$body.removeClass("moSign");




                }

                //social login end


                // trans Lead post start
                // Insurance lead post
                $scope.posttransLead = function (isValid) {
                    //alert("invoke in ins lead");
                    /*alert($scope.email);
                    alert(email); */
                    //alert("came here");

                    //table.remove(0);
                    //console.log(table);
                    //alert(JSON.stringify(table));
                    if (alreadyLogged()) {
                        if (isValid) {

                            userId = $.jStorage.get('key').userId;
                            fbUserId = $.jStorage.get("fbKey");
                            var fileChoosertranp1 = document.getElementById('uploadPhotoTrans1');
                            var filetranp1 = fileChoosertranp1.files[0];
                            var objKeyMyVeh1 = 'noImage';
                            if (filetranp1) {
                                objKeyMyVeh1 = 'facebook-' + fbUserId + '/' + filetranp1.name;
                                $scope.uploadPhotoTrans1 = objKeyMyVeh1;
                            }
                            var fileChoosertranp2 = document.getElementById('uploadPhotoTrans2');
                            var filetranp2 = fileChoosertranp2.files[0];
                            var objKeyMyVeh2 = 'noImage';
                            if (filetranp2) {
                                objKeyMyVeh2 = 'facebook-' + fbUserId + '/' + filetranp2.name;
                                $scope.photo = objKeyMyVeh2;
                            }
							/* alert("images saved in 1"+$scope.uploadPhotoTrans1);
							alert("images saved in 2"+$scope.photo); */
                            //alert("inside insurance user id"+userId);
                            //var dateInFormatpickupDOB= stringToDate($('#pickup_date_of_birth').val(),"dd/MM/yyyy","/");
							/* var InsuReq=false;
							if($('#transInsuReq').val() == "Yes")  InsuReq=true; */
                            //{"transpSearchMakeListId":null,"make":"Make","model":"modal","variant":"variant","autoscoopTrim":"autoscoopTrim","flex1":"  flex1","flex2":"  flex2","flex3":"  flex3","flex4":"  flex4","flex5":0,"flex6":0,"flex7":0,"flex8":0,"flex9":0,"flex10":0,"flex11":null,"flex12":null,"flex13":false,"flex14":false}
							//fromPostCodeAddr
							var jsonInputToAPI = {
                                "userId": userId,
                                "searchTranspLead": {
                                    "searchTranspId": null,
                                    "carModel":{},
                                    "fromPostCodeAddr": $scope.transFpostCode,
                                    "toPostCodeAddr": $scope.transTpostCode,
                                    /* "transTypeReq": $scope.transVehicle, */
                                    "year": $scope.caryearstrans,
                                    "make": $scope.carmakestrans,
                                    "model": $scope.carmodelstrans,
                                    "variant": $scope.carmodeltrimstrans,
                                    "pickUpDateTime": $scope.transPickup,
                                    "noOfCars": 0,
                                    "freeText": $scope.transAddNotes,
                                    "transpInsReq": true,
                                    "fromStreetNo": $scope.transFStreetNo,
                                    /* "toStreetName": $scope.transTStreetName, */
                                    "toStreetNo": $scope.transTStreetNo,
                                    /* "fromStreetName": $scope.transFStreetName, */
                                    "flexWithDateDefault": $scope.transPickConfirm,
                                    /* "howMay": $scope.transHow, */
                                    "kindOfTransport": $scope.transKind,
                                    "photo": $scope.uploadPhotoTrans2,
                                    "regoNo": $scope.transregono12,
                                    "regoState": $scope.transregost,
                                    "photo": $scope.photo,
                                    "uploadPhotos": $scope.uploadPhotoTrans1
                                }
                            };
                            var table1 = $("#my-table922");
							//Year as Variant
                            var table = table1.tableToJSON({
                                ignoreColumns:[0],
                                headings: ['flex1', 'flex2', 'flex3','flex4','variant','make','model','transpSearchMakeListId']
                              });
                            //delete table[0];
                            table.splice(0,1);
                            jsonInputToAPI.searchTranspLead.carModel = table;

                            /* alert(JSON.stringify(jsonInputToAPI.searchTranspLead.carModel));
                            alert(JSON.stringify(jsonInputToAPI)); */


                            // table 91
                            /* var tbl922 = document.getElementById('my-table922'), // table reference
                                row = tbl922.rows.length;      // append table row
                            var i; */
                            /*  alert("row length relatedModels91"+tbl922.rows.length);
                             alert("col lenght relatedModels91"+tbl922.rows[0].cells.length);
                                     alert("Json print d e relatedModels"); */
                            //alert($('#relatedModels922'+j+'0').val());
                            // insert table cells to the new row
                            /* for (j = 1; j < tbl922.rows.length; j++) {
                                i = 0;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1].transpSearchMakeListId = null;
                                //alert($('#relatedModels922'+j+'0').val());
                                jsonInputToAPI.searchTranspLead.carModel[j - 1].year = $('#relatedModels922' + j + '0').val();
                                jsonInputToAPI.searchTranspLead.carModel[j - 1].make = $('#relatedModels922' + j + '1').val();
                                jsonInputToAPI.searchTranspLead.carModel[j - 1].model = $('#relatedModels922' + j + '2').val();
                                jsonInputToAPI.searchTranspLead.carModel[j - 1].variant = $('#relatedModels922' + j + '3').val();
                                jsonInputToAPI.searchTranspLead.carModel[j - 1].autoscoopTrim = $('#relatedModels922' + j + '4').val();


                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex1"] = "flex1";
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex2"] = "flex1";
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex3"] = "flex1";
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex4"] = "flex1";
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex5"] = 0;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex6"] = 0;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex7"] = 0;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex8"] = 0;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex9"] = 0;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex10"] = 0;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex11"] = null;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex12"] = null;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex13"] = false;
                                jsonInputToAPI.searchTranspLead.carModel[j - 1]["flex14"] = false;
                            } */
                            //alert("Json print relatedModels");
                            //alert(JSON.stringify(jsonInputToAPI.searchTranspLead.carModel));
                            //alert(JSON.stringify(jsonInputToAPI.searchTranspLead));



							/* jsonInputToAPI.searchTranspLead.fromPostCodeAddr =$('#trans-address').val();
							jsonInputToAPI.searchTranspLead.toPostCodeAddr=$('#trans-toaddress').val();
							jsonInputToAPI.searchTranspLead.transTypeReq =$('#trans-transtype').val();
							//jsonInputToAPI.searchTranspLead.noOfCars=$('#trans-noOfCars').val();

							jsonInputToAPI.searchTranspLead.year =$('#car-years-trans').val();
							jsonInputToAPI.searchTranspLead.make=$('#car-makes-trans').val();
							jsonInputToAPI.searchTranspLead.model =$('#car-models-trans').val();
							jsonInputToAPI.searchTranspLead.variant=$('#car-model-trims-trans').val();
							//jsonInputToAPI.servMaintLead.autoscoopTrim=$('#car-model-auto-trims-serv').val();

							jsonInputToAPI.searchTranspLead.freeText =$('#trans-freetext').val(); */
                            //jsonInputToAPI.searchTranspLead.uploadPhotos=$('#ServL2').val();




                            var wsURL = 'api/eBid/transserv';

                            // change here

                            $body.addClass("loading");
                            $http({
                                method: 'POST',
                                url: wsURL,
                                data: jsonInputToAPI

                            }).success(function (data) {
                                $body.removeClass("loading");
                                alert("Successfully Stored transport Request However, Plz wait for the images to upload.. don't refresh or switch from homepage..  the upload of images will start soon..");
                                if (filetranp1 || filetranp2) {
                                	alert("Plz wait for the images to upload.. don't refresh or switch from homepage.. the upload of images will start soon..");
                                fbtranspServ();}
                                else {
                                	alert("No upload of images found. Redirecting to your dashboard..");
                                	 var url = "Db_BetaV1.html#travel-stories4";

                                     window.location = url;
                                }

                            });


                        }
                        else {
                            alert("Please fill all the require fields");
                        }

                    }
                    else {
                        alert("Please Login and Build");
                    }



                }

                // trans lead end

                // Rego State Lead Start
                $scope.postRegoStateUrlLead = function (isValid) {
                    //alert("invoke in postRegoState lead");


                    /*alert($scope.email);
                    alert(email); */
                    if (alreadyLogged()) {
                        if (isValid) {
                            userId = $.jStorage.get('key').userId;
                            fbUserId = $.jStorage.get("fbKey");

                            var wsURL = 'api/regostateurl/getRegoStateUrlFor?vehState=' + $('#car-reg-state').val() + '&vehType=' + $('#car-reg-vehType').val();
                            // change here

                            $body.addClass("loading");
                            $http({
                                method: 'GET',
                                url: wsURL

                            }).success(function (data) {
                                $body.removeClass("loading");
                                alert("successfully retreived" + data.flex2);
                                if (data.flex2 != "nourl") {
                                    window.open(data.flex2);
                                }

                            });
                        }
                        else {
                            alert("Please fill all the require fields");
                        }

                    }
                    else { alert("Please Login and Build") }



                }

                // Rego State lead end


                // servmaint Lead post start
                // Insurance lead post
                $scope.postServMaintLead = function (isValid) {
                    //alert("invoke in ins lead");
                    /*alert($scope.email);
                    alert(email); */
                    if (alreadyLogged()) {
                        if (isValid) {

                            userId = $.jStorage.get('key').userId;
                            fbUserId = $.jStorage.get("fbKey");
                            //alert("inside insurance user id"+fbUserId);
                            var fileChooserserv1 = document.getElementById('uploadPhotoServ1');
                            var fileServ1 = fileChooserserv1.files[0];
                            var objKeyMyVeh = 'noImage';
                            if (fileServ1) {
                                objKeyMyVeh = 'facebook-' + fbUserId + '/' + fileServ1.name;
                                $scope.uploadPhotoServ1 = objKeyMyVeh;
                            }
                            var fileChooserserv2 = document.getElementById('uploadPhotoServ2');
                            var fileServ2 = fileChooserserv2.files[0];
                            var objKeyMyVeh2 = 'noImage';
                            if (fileServ2) {
                                objKeyMyVeh2 = 'facebook-' + fbUserId + '/' + fileServ2.name;
                                $scope.uploadPhotoServ2 = objKeyMyVeh2;
                            }
                            var fileChooserserv3 = document.getElementById('uploadPhotoServ3');
                            var fileServ3 = fileChooserserv3.files[0];
                            var objKeyMyVeh3 = 'noImage';
                            if (fileServ3) {
                                objKeyMyVeh3 = 'facebook-' + fbUserId + '/' + fileServ3.name;
                                $scope.uploadPhotoServ3 = objKeyMyVeh3;
                            }
                            var fileChooserserv4 = document.getElementById('uploadPhotoServ4');
                            var objKeyMyVeh4 = 'noImage';
                            if (fileServ4) {
                                var fileServ4 = fileChooserserv4.files[0];
                                objKeyMyVeh4 = 'facebook-' + fbUserId + '/' + fileServ4.name;
                                $scope.uploadPhotoServ4 = objKeyMyVeh4;
                            }

                            //alert("Image of MyVehicle"+objKeyMyVeh);
                            var jsonInputToAPI = {
                                "userId": userId,
                                "servMaintLead": {
                                    "searchServMaintId": null,
                                    "postCode": $scope.servpostCode,
                                    "regNo": $scope.servregono,
                                    "regoState": $scope.regoStateServ,
                                    "year": $scope.caryearsserv,
                                    "make": $scope.carmakesserv,
                                    "model": $scope.carmodelsserv,
                                    "variant": $scope.carmodeltrimsserv,
                                    "feulType": $scope.fuelTypeServ,
                                    "servMaintL1": $scope.ServL1,
                                    "servMaintL2": $scope.ServL2,
                                    "uploadPhotos": $scope.uploadPhotoServ1,
                                    "coveredUnderIns": $scope.coverInsServ,
                                    "curInsProv": $scope.InsprovServ,
                                    "photo1": $scope.uploadPhotoServ2,
                                    "photo2": $scope.uploadPhotoServ3,
                                    "photo3": $scope.uploadPhotoServ4,
                                    "coveredUnderFin": $scope.servFinPro,
                                    "curFinProv": $scope.servFinProlist,
                                    "lookService": $scope.lookService,
                                    "autoscoopTrim": $scope.carmodelAutotrimsserv,
                                    "freeText": $scope.servAddNotes
                                }
                            };


                            /* jsonInputToAPI.servMaintLead.regNo =$('#serv-regono').val();
                            jsonInputToAPI.servMaintLead.postCode=$('#serv-postCode').val();
                            jsonInputToAPI.servMaintLead.servMaintL1 =$('#ServL1').val();
                            jsonInputToAPI.servMaintLead.regoState=$('#regoStateServ').val();

                            jsonInputToAPI.servMaintLead.year =$('#car-years-serv').val();
                            jsonInputToAPI.servMaintLead.make=$('#car-makes-serv').val();
                            jsonInputToAPI.servMaintLead.model =$('#car-models-serv').val();
                            jsonInputToAPI.servMaintLead.variant=$('#car-model-trims-serv').val();
                            jsonInputToAPI.servMaintLead.autoscoopTrim=$('#car-model-auto-trims-serv').val();

                            jsonInputToAPI.servMaintLead.feulType =$('#fuelTypeServ').val();
                            jsonInputToAPI.servMaintLead.servMaintL2=$('#ServL2').val();
                            jsonInputToAPI.servMaintLead.uploadPhotos =$('#uploadPhotoServ').val();
                            jsonInputToAPI.servMaintLead.curInsProv=$('#coverInsServ').val();

                            jsonInputToAPI.servMaintLead.curInsProv =$('#InsprovServ').val();
                            jsonInputToAPI.servMaintLead.freeText=$('#freeTextServ').val(); */


                            var wsURL = 'api/eBid/servmaint';

                            // change here

                            $body.addClass("loading");
                            $http({
                                method: 'POST',
                                url: wsURL,
                                data: jsonInputToAPI

                            }).success(function (data) {
                                $body.removeClass("loading");
                                alert("Successfully Stored Service && Maintenance Request However, Plz wait for the images to upload.. don't refresh or switch from homepage.. the upload of images will start soon..");
                                if (fileServ1 || fileServ2 || fileServ3 || fileServ4) {
                                	alert("Plz wait for the images to upload.. don't refresh or switch from homepage.. the upload of images will start soon..");
                                fbloadphoto();}
                                else {
                                	alert("No upload of images found. Redirecting to your dashboard..");
                                	 var url = "Db_BetaV1.html#travel-stories3";

                                     window.location = url;
                                }
                                //alert("successfully stored");
                                //alert("Plz wait for the images to upload.. Don't Refresh");


                                //window.location = url;

                            });
                        }
                        else {
                            alert("Please fill all the require fields");
                        }

                    }
                    else { alert("Please Login and Build") }



                }

                // servmaint lead end

                // Insurance lead post
                $scope.postInsuranceLead = function (isValid) {
                    //alert("invoke in ins lead");
                    /*alert($scope.email);
                    alert(email); */
                    //alert("postCode"+$scope.postcode1111);
                    //alert("postCode"+$scope.insDriverDOB);
                    //alert("postCode"+$scope.insLicIssueDt);
                    //alert("postCode"+$scope.insLastfaultDt);


                    //jsonInputToAPI.searchTranspLead.carModel = table;

                    //alert(JSON.stringify(table));
                    if (alreadyLogged()) {

                        if (isValid) {
                            userId = $.jStorage.get('key').userId;
                            //alert("inside insurance user id"+userId);
                            /* 			var newCarInsuran=false;
                                        newCarInsuran = document.getElementById("newCarInsuran").value;
                                        if(newCarInsuran=="on")newCarInsuran=false;
                                        var usedCarInsuran=false;
                                        usedCarInsuran = document.getElementById("usedCarInsuran").value;
                                        if(usedCarInsuran=="on")newCarInsuran=false; */


                            $scope.usedCarInsuran = false;
                            $scope.newCarInsuran = false;
                            if ($scope.newCarInsuran) {
                                $scope.newCarInsuran = true;
                            } else {
                                $scope.usedCarInsuran = true;
                            }
							//{ "flex5": 0, "flex6": 0, "flex7": 0, "flex8": 0, "flex9": 0, "flex10": 0, "lastName": "ss", "firstName": "ss", "drivingLicenseType": "ss", "dateOfBirth": null, "isflex13": 0, "isflex14": 0, "flex11": null, "flex12": null, "flex1": "ss", "flex2": "ss", "flex3": "ss", "flex4": "ss" }
                            var jsonInputToAPI = {
                                "userId": userId,
                                "insuranceLead": {
                                    "newer": $scope.newCarInsuran,
                                    "used": $scope.usedCarInsuran,
                                    "searchInsAdditionalDriv": [],
                                    "searchInsuranceId": null,
                                    "postCode": $scope.postcode1111,
                                    "insuranceType": $scope.insuranceType,
                                    "regNo": $scope.regono12,
                                    "regoState": $scope.insregost,
                                    "year": $scope.caryearsins,
                                    "make": $scope.carmakesins,
                                    "model": $scope.carmodelsins,
                                    "variant": $scope.carmodeltrimsins,
                                    "autoscoopTrim": $scope.carmodelAutotrimsins,
                                    "marketValue": $scope.market,
                                    "agreedValue": $scope.agree,
                                    "finance": $scope.insfinance,
                                    "financeProvider": $scope.insfinprov,
                                    "drivingLicenseType": $scope.inslictype,
                                    "drivingLicenseNo": $scope.licno,
                                    "drivingLicenseIssueState": $scope.inslicissstate,
                                    "noOfAtFaults": $scope.insfaults,
                                    "otherIssues": "lssa",
                                    "curInsProv": $scope.currinsprov,
                                    "prefExcessAmount": $scope.excessAmount,
                                    "dateOfBirth": $scope.insDriverDOB,
                                    "ageOfAdditionalDriver": null,
                                    "carParkedAt": $scope.inscarParked,
                                    "streetNO": $scope.insStreetNo,
                                    "streetName": $scope.insStreetName,
                                    "carUsedfor": $scope.insCarUsage,
                                    "typeOfBusiness": $scope.insifBusiness,
                                    "driverFirstName": $scope.Insfirstname,
                                    "driverLastName": $scope.Inslastname,
                                    "driverMobileNo": $scope.InsMobile,
                                    "driverEmailId": $scope.InsEmail,
                                    "licenseIssueDate": $scope.insLicIssueDt,
                                    "lastAtFaultClaimDate": $scope.insLastfaultDt,
                                    "reasonForSuspension": $scope.insReasonSusp,
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
                                    "avgNoOfKmYr": $scope.insAvgNoOfKms,
                                    "noOfDrivers": $scope.insDriversCt,
                                    "licenseGotSuspened": $scope.insLICSusp
                                }
                            };




                            var table1 = $("#my-table944");
                            var table = table1.tableToJSON({
                                ignoreColumns:[0],
                                headings: ['firstName', 'lastName', 'drivingLicenseType','dateOfBirth']
                              });
                            //delete table[0];

                            table.splice(0,1);

                            jsonInputToAPI.insuranceLead.searchInsAdditionalDriv = table ;


                            // table 91
                            /* var tbl944 = document.getElementById('my-table944'), // table reference
                                row = tbl944.rows.length;      // append table row
                            var i; */
                            /*  alert("row length relatedModels91"+tbl922.rows.length);
                             alert("col lenght relatedModels91"+tbl922.rows[0].cells.length);
                                     alert("Json print d e relatedModels"); */
                            //alert($('#relatedModels922'+j+'0').val());
                            // insert table cells to the new row
                            /* for (j = 1; j < tbl944.rows.length; j++) {
                                i = 0;

                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1].firstName = $('#relatedModels944' + j + '0').val();
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1].lastName = $('#relatedModels944' + j + '1').val();
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1].drivingLicenseType = $('#relatedModels944' + j + '2').val();
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1].dateOfBirth = $('#relatedModels944' + j + '3').val();


                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex1"] = "flex1";
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex2"] = "flex1";
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex3"] = "flex1";
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex4"] = "flex1";
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex5"] = 0;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex6"] = 0;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex7"] = 0;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex8"] = 0;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex9"] = 0;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex10"] = 0;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex11"] = null;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex12"] = null;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex13"] = false;
                                jsonInputToAPI.insuranceLead.searchInsAdditionalDriv[j - 1]["flex14"] = false;
                            } */
                            //alert("Json print relatedModels");
                            //alert(JSON.stringify(jsonInputToAPI.insuranceLead.searchInsAdditionalDriv));
                            //alert(JSON.stringify(jsonInputToAPI.insuranceLead));



                            /* jsonInputToAPI.searchTranspLead.fromPostCodeAddr =$('#trans-address').val();
                            jsonInputToAPI.searchTranspLead.toPostCodeAddr=$('#trans-toaddress').val();
                            jsonInputToAPI.searchTranspLead.transTypeReq =$('#trans-transtype').val();
                            //jsonInputToAPI.searchTranspLead.noOfCars=$('#trans-noOfCars').val();

                            jsonInputToAPI.searchTranspLead.year =$('#car-years-trans').val();
                            jsonInputToAPI.searchTranspLead.make=$('#car-makes-trans').val();
                            jsonInputToAPI.searchTranspLead.model =$('#car-models-trans').val();
                            jsonInputToAPI.searchTranspLead.variant=$('#car-model-trims-trans').val();
                            //jsonInputToAPI.servMaintLead.autoscoopTrim=$('#car-model-auto-trims-serv').val();

                            jsonInputToAPI.searchTranspLead.freeText =$('#trans-freetext').val(); */
                            //jsonInputToAPI.searchTranspLead.uploadPhotos=$('#ServL2').val();












                            /* var insLeadTrim = document.getElementById("car-model-trims-ins");
                            var strUserIns = insLeadTrim.options[insLeadTrim.selectedIndex].text;


                            jsonInputToAPI.insuranceLead.regNo =$('#regono12').val();
                            jsonInputToAPI.insuranceLead.postCode=$('#postcode11').val();
                            jsonInputToAPI.insuranceLead.insuranceType =$('#insuranceType').val();
                            jsonInputToAPI.insuranceLead.regoState=$('#ins-regost').val();

                            jsonInputToAPI.insuranceLead.year =$('#car-years-ins').val();
                            jsonInputToAPI.insuranceLead.make=$('#car-makes-ins').val();
                            jsonInputToAPI.insuranceLead.model =$('#car-models-ins').val();
                            jsonInputToAPI.insuranceLead.variant=$('#car-model-trims-ins').val();
                            jsonInputToAPI.insuranceLead.autoscoopTrim=$('#car-model-auto-trims-ins').val();

                            jsonInputToAPI.insuranceLead.marketValue =$('#market').val();
                            jsonInputToAPI.insuranceLead.agreedValue=$('#agree').val();
                            jsonInputToAPI.insuranceLead.finance =$('#ins-finance').val();
                            jsonInputToAPI.insuranceLead.financeProvider=$('#ins-fin-prov').val();

                            jsonInputToAPI.insuranceLead.drivingLicenseType =$('#ins-lic-type').val();
                            jsonInputToAPI.insuranceLead.drivingLicenseNo=$('#licno').val();
                            jsonInputToAPI.insuranceLead.drivingLicenseIssueState =$('#ins-lic-iss-state').val();
                            jsonInputToAPI.insuranceLead.noOfAtFaults=$('#ins-faults').val();

                            jsonInputToAPI.insuranceLead.otherIssues =$('#otherissues').val();
                            jsonInputToAPI.insuranceLead.curInsProv=$('#curr-ins-prov').val();
                            jsonInputToAPI.insuranceLead.prefExcessAmount =$('#ins-excessAmount').val(); */
                            //jsonInputToAPI.insuranceLead.dateOfBirth=$('#ins-regost').val();
                            //jsonInputToAPI.insuranceLead.ageOfAdditionalDriver=$('#ins-regost').val();
                            //alert(jsonInputToAPI.insuranceLead.isNew);
                            //alert(jsonInputToAPI.insuranceLead.regNo);
                            /* jsonInputToAPI.email=$('#car-years').val();
                            jsonInputToAPI.firstName=$('#car-years').val();
                            jsonInputToAPI.lastName=$('#car-years').val(); */


                            var wsURL = 'api/eBid/insurance';
                            //var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/insurance';
                            //var wsURL = 'http://www.autoscoop.com.au/api/eBid/insurance';
                            /* alert(jsonInputToAPI.comingSoonUserEmail);
                            alert(jsonInputToAPI.flex1);
                            alert(jsonInputToAPI.flex2);
                            alert(jsonInputToAPI.flex3); */
                            // change here

                            $body.addClass("loading");
                            $http({
                                method: 'POST',
                                url: wsURL,
                                data: jsonInputToAPI

                            }).success(function (data) {
                                $body.removeClass("loading");
                                alert("successfully stored");
                                alert("Redirecting to Dashboard..");
                                var url = "Db_BetaV1.html#travel-stories2";

                                window.location = url;

                            });

                        }
                        else {
                            alert("Please fill all the require fields");
                        }

                    }
                    else {
                        alert("Please Login and Build");
                    }



                }

                // Insurance lead post end

                // Finance lead post
                $scope.postFinanceLead = function (isValid) {
                    //alert("invoke in ins finance lead");
                    /*alert($scope.email);
                    alert(email); */
                    if (alreadyLogged()) {
                        if (isValid) {
                            userId = $.jStorage.get('key').userId;
                            //alert("user"+userId);
                            var newCarFinance = false;
                            //newCarFinance = document.getElementById("newCarFinance").value;
                            if (newCarFinance == "on") newCarFinance = false;
                            var usedCarFinance = false;
                            //usedCarFinance = document.getElementById("usedCarFinance").value;
                            if (usedCarFinance == "on") usedCarFinance = false;
                            //var dateInFormatFinDOB = stringToDate($('#date_of_birth').val(), "dd/MM/yyyy", "/");
                            $scope.usedCarFinance = false;
                            $scope.newCarFinance = false;
                            if ($scope.newCarFinance) {
                                $scope.newCarFinance = true;
                            } else {
                                $scope.usedCarFinance = true;
                            }
                            /* alert("bis sdsacuitssaf");
                            alert($scope.finCreditRating); */
                            //alert(dateInFormatFinDOB);
                            var jsonInputToAPI = {
                                "userId": userId,
                                "financeLead": {
                                    "newer": newCarFinance,
                                    "used": usedCarFinance,
                                    "year": $scope.caryearsfin,
                                    "make": $scope.carmakesfin,
                                    "model": $scope.carmodelsfin,
                                    "variant": $scope.carmodeltrimsfin,
                                    "autoscoopTrim": $scope.carmodelAutotrimsfin,
                                    "postCode": $scope.finVehicleValue1,
                                    "incomeType": $scope.finIncomeType,
                                    "yearEmploymentBusiness": $scope.finNoofYears,
                                    "incomeBeforeSuperTax": "",
                                    "incomeAfterSuperTax": "",
                                    "ifBusinessProvideABN": "",
                                    "creditRating": $scope.finCreditRating,
                                    "vehValue": 0.0,
                                    "balloonPay": "",
                                    "annualIncome": $scope.finAnnualIncome,
                                    "loanAmount": $scope.finLoanAmount,
                                    "loanPeriod": $scope.finLoanPeriod,
                                    "dateOfBirth": $scope.finDOB,
                                    "rego": $scope.finRego,
                                    "regoState": $scope.finRegoState,
                                    "streetNo": $scope.finStreetNo,
                                    /* "streetName": $scope.finStreetName, */
                                    "mr": $scope.finTitlePerson,
                                    "firstName": $scope.finFnameperson,
                                    "lastName": $scope.finLnameperson
                                }
                            };

                            /* var insLeadTrim1 = document.getElementById("car-model-trims-fin");
                            var strUserfin = insLeadTrim1.options[insLeadTrim1.selectedIndex].text; */

                            /* 	jsonInputToAPI.financeLead.vehValue =$('#finVehicleValue').val();
                                jsonInputToAPI.financeLead.postCode=$('#finVehicleValue1').val();
                                jsonInputToAPI.financeLead.balloonPay =$('#finBalloonPayment').val();
                                jsonInputToAPI.financeLead.loanAmount=$('#finLoanAmount').val();

                                jsonInputToAPI.financeLead.year =$('#car-years-fin').val();
                                jsonInputToAPI.financeLead.make=$('#car-makes-fin').val();
                                jsonInputToAPI.financeLead.model =$('#car-models-fin').val();
                                jsonInputToAPI.financeLead.variant=$('#car-model-trims-fin').val();
                                jsonInputToAPI.financeLead.autoscoopTrim=$('#car-model-auto-trims-fin').val();
                                jsonInputToAPI.financeLead.loanPeriod =$('#finLoanPeriod').val();


                                jsonInputToAPI.financeLead.annualIncome=$('#finAnnualIncome').val();
                                jsonInputToAPI.financeLead.creditRating =$('#finCreditRating').val();

                                jsonInputToAPI.financeLead.incomeType=$('#finIncomeType').val(); */


                            //alert("Before ajax call");
                            var wsURL = 'api/eBid/finance';
                            //var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/finance';
                            //var wsURL = 'http://www.autoscoop.com.au/api/eBid/insurance';
                            /* alert(jsonInputToAPI.comingSoonUserEmail);
                            alert(jsonInputToAPI.flex1);
                            alert(jsonInputToAPI.flex2);
                            alert(jsonInputToAPI.flex3); */


                            //alert(JSON.stringify(jsonInputToAPI));
                            $body.addClass("loading");
                            $http({
                                method: 'POST',
                                url: wsURL,
                                data: jsonInputToAPI

                            }).success(function (data) {
                                $body.removeClass("loading");
                                alert("successfully stored");
                                alert("Redirecting to Dashboard..");
                                var url = "Db_BetaV1.html#travel-stories1";

                                window.location = url;

                            });
                        }
                        else {
                            alert("Please fill all the required fields");
                        }
                    }
                    else {
                        alert("Please Login and Build");
                    }




                }

                // Insurance lead post end

                $scope.predicate = 'name';
                $scope.reverse = true;
                $scope.currentPage = 1;
                $scope.order = function (predicate) {
                    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse
                        : false;
                    $scope.predicate = predicate;
                };

                $scope.updatePagination = function () {
                    $scope.totalItems = $scope.biil.details.length;
                    $scope.numPerPage = 5;
                    $scope.paginate = function (value) {
                        var begin, end, index;
                        begin = ($scope.currentPage - 1)
                            * $scope.numPerPage;
                        end = begin + $scope.numPerPage;
                        index = $scope.biil.details.indexOf(value);
                        return (begin <= index && index < end);
                    };
                };



                $scope.submitForm = function (isValid) {
                   /*  var newCarEbid = false;
                    //alert(document.getElementById("newCarEbid").value);
                    newCarEbid = document.getElementById("newCarEbid").value;
                    if (newCarEbid == "on") newCarEbid = false;
                    var usedCarEbid = false;
                    usedCarEbid = document.getElementById("usedCarEbid").value;
                    if (usedCarEbid == "on") usedCarEbid = false; */
                    var usedCarEbid;
                    var newCarEbid= document.getElementById("newUsedCarEbid").checked;
                    if(!newCarEbid){
                    	usedCarEbid = false;
                    	//alert("used is checked");
                    }
                    var carEbidFinan = false;
                    //alert(document.getElementById("carEbidFinan").value);
                    carEbidFinan = document.getElementById("carEbidFinan").value;
                    if (carEbidFinan == "on") carEbidFinan = true;
                    var carEbidInsur = false;
                    carEbidInsur = document.getElementById("carEbidInsur").value;
                    if (carEbidInsur == "on") carEbidInsur = true;
                    //alert(usedCarEbid);
                    //alert(newCarEbid);
                    /* var e = document.getElementById("car-model-trims");
                    var strUser = e.options[e.selectedIndex].text; */

                    var wsURL = 'api/inventory/getStatisticsFor?modelYear=' + $('#car-years').val() + '&modelDisplay=' + $('#car-makes').val() + '&modelName=' + $('#car-models').val() + '&autoscoopTrim=' + $('#car-model-auto-trims').val();

                    var modelYear = $('#car-years').val();
                    var modelDisplay = $('#car-makes').val();
                    var modelName = $('#car-models').val();
                    //var trimValue=$('#car-model-trims').val();
                    //var modelTrim=strUser;
                    var autoTrim = $('#car-model-auto-trims').val();
                    //alert ("model"+modelYear);
                    if (alreadyLogged()) {
                        if (isValid) {
                            $body.addClass("loading");
                            $.ajax({
                                url: wsURL,
                                type: 'GET',
                                success: function (data) {

                                    data.modelYear = modelYear;
                                    data.modelDisplay = modelDisplay;
                                    data.modelName = modelName;
                                    /* data.modelTrim=modelTrim;
                                    data.trimValue=trimValue; */
                                    data.autoTrim = autoTrim;
                                    data.newCarEbid = newCarEbid;
                                    data.usedCarEbid = usedCarEbid;
                                    data.carEbidFinan = carEbidFinan;
                                    data.carEbidInsur = carEbidInsur;
                                    carDetailHtml(data);

                                    /* var url="Cd_BetaV1.html?price="+data.priceMin+"&priceMax="+data.priceMax+"&finMin="+data.finMin+"&finMax="+data.finMax+"&insMin="+data.insMin+"&insMax="+data.insMax+"&avgSavMin="+data.avgSavMin+"&avgSavMax="+data.avgSavMax+"&noDealers="+data.noDealers+"&noStock="+data.noStock+
                                            "&modelYear="+modelYear+"&modelDisplay="+modelDisplay+"&modelName="+modelName+"&modeltrim="+strUser+"&trimValue="+trimValue+"&userId="+userId+"&firstName="+firstName; */
                                    /* alert(url); */
                                    $body.removeClass("loading");
                                    var url = "Cd_BetaV1.html";
                                    window.location = url;
                                }


                            });
                        }
                        else {
                            alert("Please fill all the required fields");
                        }

                    }
                    else { alert("Please Login and Build") }

                    // start

                };

                $scope.init = function () {
                    $scope.biil = {
                        details: []
                    };
                    $scope.submitForm();
                };

            });
