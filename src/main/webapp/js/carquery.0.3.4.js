/*******************************************************************/
/* carquery.0.3.4.js          */
/* javascript object for interacting with the CarQuery JSON API    */
/* Copyright (C) 2015  CarQueryAPI (contact@carqueryapi.com)       */
/* http://www.carqueryapi.com        */
/*            */
/* This program is free software; you can redistribute it and/or   */
/* modify it under the terms of the GNU General Public License     */
/* as published by the Free Software Foundation; either version 2  */
/* of the License, or (at your option) any later version.          */
/*            */
/* This code is distributed in the hope that it will be useful,    */
/* but WITHOUT ANY WARRANTY; without even the implied warranty of  */
/* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the   */
/* GNU General Public License for more details.      */
/*******************************************************************/

//If jQuery is being used instead of $ temporarily re-assign the variable name
if(typeof jQuery == 'function')
{
 //If $ is already in use by something else, save it, and restore it when carquery is done.
 if (typeof $ != 'undefined')
  var $tmp = $;

 var $ = jQuery;
}

var CarQuery = function(){}

CarQuery.prototype = {

    base_url:   "http://localhost:8080/MyCarDomain",
    body:  "",
    body_id:  "cq-body",
    color_ext_select_id:null,
    color_int_select_id:null,
    cookie_name: "cq-settings",
    cur_make:   "",
    cur_model:   "",
    cur_trim:   "",
    cur_year:   "",
    default_trim_name: "None",
    doors:   "",
    doors_id:   "cq-doors",
    drive:   "",
    drive_id:   "cq-drive",
    empty_option_html:  "<option value=''>---</option>",
    engine_position_id: "cq-engine-position",
    engine_type_id:  "cq-engine-type",
    engine_type:  "",
    fuel_type_id:  "cq-fuel-type",
    fuel_type:   "",
    keyword:   "",
    make_list_id:  "",
    make_select_id:  "",
    max_cylinders:  "",
    max_cylinders_id:  "cq-max-cylinders",
    max_lkm_hwy:  "",
    max_mpg_hwy_id:  "cq-max-mpg-hwy",
    max_power:   "",
    max_power_id:  "cq-max-power",
    max_top_speed:  "",
    max_top_speed_id:  "cq-max-top-speed",
    max_torque:  "",
    max_torque_id:  "cq-max-torque",
    max_weight:  "",
    max_weight_id:  "cq-max-weight",
    max_year:   "",
    max_year_id:  "cq-max-year",
    min_cylinders: "",
    min_cylinders_id:  "cq-min-cylinders",
    min_lkm_hwy:  "",
    min_mpg_hwy_id:  "cq-min-mpg-hwy",
    min_power:   "",
    min_power_id:  "cq-min-power",
    min_top_speed:  "",
    min_top_speed_id:  "cq-min-top-speed",
    min_torque:  "",
    min_torque_id:  "cq-min-torque",
    min_weight:  "",
    min_weight_id:  "cq-min-weight",
    min_year:   "",
    min_year_id:  "cq-min-year",
    model_data_id:  "",
    model_list_id:  "",
    model_select_id:  "",
    search_controls_id: "cq-search-controls",
    search_input_id:  "cq-search-input",
    search_result_id:  "cq-search-result",
    search_results_id:  "cq-search-results",
    seats:   "",
    seats_id:   "cq-seats",
    settings:  null,
    sold_in_us:  "",
    sold_in_us_id:  "cq-sold-in-us",
    trim_data_list_id:  "",
    trim_list_id:  "",
    trim_select_id:  "",
    year_select_id:  "",
    price:  "",
    regNo:  "",
    driveType:  "",
    kilometer:  "",
    vinNumber:  "",
    vendorStockNo:  "",
    stockItem:  "",
    year_select_min: null,
    year_select_max: null,

    init : function(year, make_id, model, trim)
    {
 $.ajaxSetup({
   "error":function() {
     //alert('Bad Response from Autoscoop API.\nThe service may not be avilable at this time.');
 }});

 //Check if initial values were set
 this.settings = new Object();
 if(year != null)
  this.saveSetting('year', year);
 if(make_id != null)
  this.saveSetting('make', make_id);
 if(model != null)
  this.saveSetting('model', model);
 if(trim != null)
  this.saveSetting('trim', trim);

 //Load settings from cookie if it exists
 this.loadSettings(this.cookie_name);
    },

    initSearchInterface : function(args)
    {
     //allow for no argument
     if(args == null) args = ({});

     //Set ids for the search elements

     if(args.search_controls_id != null) this.search_controls_id = args.search_controls_id;
     if(args.search_results_id != null) this.search_results_id = args.search_results_id;
     if(args.search_result_id != null) this.search_result_id = args.search_result_id;

     var sender = this;

     //SEARCH KEYWORD INPUT
     if(args.search_input_id != null) this.search_input_id = args.search_input_id;
 $("#"+this.search_input_id).val(args.default_search_text);
 $("#"+this.search_input_id).focus(function() {
  $(this).css("color", "#333");
  if(this.value == args.default_search_text) this.value = "";
 });
 $("#"+this.search_input_id).keyup(function() {
  sender.setFilters( {keyword:this.value} );
 });


 //SOLD IN US
     if(args.sold_in_us_id != null) this.sold_in_us_id = args.sold_in_us_id;
     $("#"+this.sold_in_us_id).click(function() {
  sender.setFilters( {sold_in_us:this.checked} );
 });


     //YEAR FILTERS
     if(args.min_year_id != null) this.min_year_id = args.min_year_id;
     if(args.max_year_id != null) this.max_year_id = args.max_year_id;
     $("#"+this.min_year_id).change(function() {
  sender.setFilters( {min_year:this.value} );
 });
 $("#"+this.max_year_id).change(function() {
  sender.setFilters( {max_year:this.value} );
 });
     this.populateYearFilter(this.min_year_id);
     this.populateYearFilter(this.max_year_id);


     //ENGINE POSITION
     if(args.engine_position_id != null) this.engine_position_id = args.engine_position_id;
     $("#"+this.engine_position_id).change(function() {
  sender.setFilters( {engine_position:this.value} );
 });
 this.populateAttributeSelect(this.engine_position_id, 'model_engine_position');


 //BODY STYLE
     if(args.body_id != null) this.body_id = args.body_id;
     $("#"+this.body_id).change(function() {
  sender.setFilters( {body:this.value} );
 });
 this.populateAttributeSelect(this.body_id, 'model_body');


 //CYLINDERS
 if(args.min_cylinders_id != null) this.min_cylinders_id = args.min_cylinders_id;
 if(args.max_cylinders_id != null) this.max_cylinders_id = args.max_cylinders_id;
 $("#"+this.max_cylinders_id).change(function() {
  sender.setFilters( {max_cylinders:this.value} );
 });
 $("#"+this.min_cylinders_id).change(function() {
  sender.setFilters( {min_cylinders:this.value} );
 });
 this.populateAttributeSelect(this.max_cylinders_id, 'model_engine_cyl');
 this.populateAttributeSelect(this.min_cylinders_id, 'model_engine_cyl');


 //POWER
 if(args.min_power_id != null) this.min_power_id = args.min_power_id;
 if(args.max_power_id != null) this.max_power_id = args.max_power_id;
        //Convert to PS
 $("#"+this.max_power_id).keyup(function() {
  var val = "";
  if(this.value != "") val = Math.round(this.value  * 1.01387);
  sender.setFilters( {max_power:val } );
 });
 $("#"+this.min_power_id).keyup(function() {
  var val = "";
  if(this.value != "") val = Math.round(this.value  * 1.01387);
  sender.setFilters( {min_power:val }  );
 });


 //TORQUE
 if(args.min_torque_id != null) this.min_torque_id = args.min_torque_id;
 if(args.max_torque_id != null) this.max_torque_id = args.max_torque_id;
        //Convert to NM
 $("#"+this.max_torque_id).keyup(function() {

  var val = "";
  if(this.value != "") val = Math.round(this.value / 0.7384);
  sender.setFilters( {max_torque:val } );
 });
 $("#"+this.min_torque_id).keyup(function() {
  var val = "";
  if(this.value != "") val = Math.round(this.value / 0.7384);
  sender.setFilters( {min_torque:val }  );
 });


 //TOP SPEED
 if(args.min_top_speed_id != null) this.min_top_speed_id = args.min_top_speed_id;
 if(args.max_top_speed_id != null) this.max_top_speed_id = args.max_top_speed_id;
 //Convert to KMH
 $("#"+this.max_top_speed_id).keyup(function() {
  var val = "";
  if(this.value != "") val = Math.round(this.value  * 1.609);
  sender.setFilters( {max_top_speed:val } );
 });
 $("#"+this.min_top_speed_id).keyup(function() {
  var val = "";
  if(this.value != "") val = Math.round(this.value  * 1.609);
  sender.setFilters( {min_top_speed:val } );
 });


 //ENGINE TYPE
     if(args.engine_type_id != null) this.engine_type_id = args.engine_type_id;
     $("#"+this.engine_type_id).change(function() {
  sender.setFilters( {engine_type:this.value} );
 });
 this.populateAttributeSelect(this.engine_type_id, 'model_engine_type');


 //FUEL TYPE
     if(args.fuel_type_id != null) this.fuel_type_id = args.fuel_type_id;
     $("#"+this.fuel_type_id).change(function() {
  sender.setFilters( {fuel_type:this.value} );
 });
 this.populateAttributeSelect(this.fuel_type_id, 'model_engine_fuel');


 //DRIVETRAIN
 if(args.drive_id != null) this.drive_id = args.drive_id;
 $("#"+this.drive_id).change(function() {
  sender.setFilters( {drive:this.value} );
 });
 this.populateAttributeSelect(this.drive_id, 'model_drive');

 //SEATS
 if(args.seats_id != null) this.seats_id = args.seats_id;
 $("#"+this.seats_id).change(function() {
  sender.setFilters( {seats:this.value} );
 });
 this.populateAttributeSelect(this.seats_id, 'model_seats');


 //DOORS
 if(args.doors_id != null) this.doors_id = args.doors_id;
 $("#"+this.doors_id).change(function() {
  sender.setFilters( {doors:this.value} );
 });
 this.populateAttributeSelect(this.doors_id, 'model_doors');


 //WEIGHT
 if(args.min_weight_id != null) this.min_weight_id = args.min_weight_id;
 if(args.max_weight_id != null) this.max_weight_id = args.max_weight_id;
        //Convert to KG
 $("#"+this.max_weight_id).keyup(function() {

  var val = "";
  if(this.value != "") val = Math.round(this.value * 0.4536);
  sender.setFilters( {max_weight:val } );
 });
 $("#"+this.min_weight_id).keyup(function() {
  var val = "";
  if(this.value != "") val = Math.round(this.value * 0.4536);
  sender.setFilters( {min_weight:val }  );
 });


 //MPG
 if(args.min_mpg_hwy_id != null) this.min_mpg_hwy_id = args.min_mpg_hwy_id;
 if(args.max_mpg_hwy_id != null) this.max_mpg_hwy_id = args.max_mpg_hwy_id;
        //Convert to LKM (NOTE: lower lkm = higher mpg)
 $("#"+this.max_mpg_hwy_id).keyup(function() {

  var val = "";
  if(this.value != "") val = 235.2 / this.value;
  sender.setFilters( {min_lkm_hwy:val } );
 });
 $("#"+this.min_mpg_hwy_id).keyup(function() {
  var val = "";
  if(this.value != "") val = 235.2 / this.value;
  sender.setFilters( {max_lkm_hwy:val }  );
 });


 //Limit Input Lengths
 $( "#"+this.max_power_id +
   ',#'+this.min_power_id +
   ',#'+this.max_top_speed_id +
   ',#'+this.min_top_speed_id +
   ",#"+this.max_torque_id +
   ',#'+this.min_torque_id +
   ',#'+this.max_weight_id +
   ',#'+this.min_weight_id +
   ',#'+this.max_mpg_hwy_id +
   ',#'+this.min_mpg_hwy_id
   ).attr('maxLength','5');


 //Force numerical only inputs
 $( "#"+this.max_power_id +
   ',#'+this.min_power_id +
   ',#'+this.max_top_speed_id +
   ',#'+this.min_top_speed_id +
   ",#"+this.max_torque_id +
   ',#'+this.min_torque_id +
   ',#'+this.max_weight_id +
   ',#'+this.min_weight_id +
   ',#'+this.max_mpg_hwy_id +
   ',#'+this.min_mpg_hwy_id
 ).keydown(function() {
  if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 ) && event.keyCode != 46 && event.keyCode != 8 && event.keyCode != 9)
             event.preventDefault();
        });
    },

    search: function()
    {
     $('#'+this.search_results_id).html("Loading Results...");

     var sender = this;

     //Get Car Model JSON for the search criteria
     $.getJSON(this.base_url+"?callback=?", {

       cmd:"getTrims"
      ,body:this.body
      ,doors:this.doors
      ,drive:this.drive
      ,engine_position:this.engine_position
      ,engine_type:this.engine_type
      ,fuel_type:this.fuel_type
      ,keyword:this.keyword
      ,min_cylinders:this.min_cylinders
      ,min_lkm_hwy:this.min_lkm_hwy
      ,min_power:this.min_power
      ,min_top_speed:this.min_top_speed
      ,min_torque:this.min_torque
      ,min_weight:this.min_weight
      ,min_year:this.min_year
      ,max_cylinders:this.max_cylinders
      ,max_lkm_hwy:this.max_lkm_hwy
      ,max_power:this.max_power
      ,max_top_speed:this.max_top_speed
      ,max_torque:this.max_torque
      ,max_weight:this.max_weight
      ,max_year:this.max_year
      ,seats:this.seats
      ,sold_in_us:this.sold_in_us
      ,full_results:0

       }, function(data) {

       if(!sender.responseError(data))
       {
          var trims = data.Trims;
          var numResults = data.Trims.length;
          var ul = document.createElement('ul');
          var msg = '';

          if(numResults > 0)
       msg = 'Showing ' + numResults + ' results:';
      else
       msg = 'No Matching Vehicles Found';

      for (var i = 0; i < trims.length; i++)
      {
    var li = document.createElement('li');
   var a = document.createElement('a');

   var model_id = trims[i].model_id;

   $(a).bind('click', {model_id:model_id}, function(event) {
    sender.populateSearchResult(event.data.model_id);
   });

   $(a).html(trims[i].model_year + ' ' + trims[i].make_display + ' ' + trims[i].model_name + ' ' + trims[i].model_trim).attr("href", "javascript:void(0)");

   $(li).append(a);
   $(ul).append(li);
      }

  var p = document.createElement('p');
  var div = document.createElement('div');

  $(p).html(msg);
  $(div).addClass("scrollable");
  $(div).append(ul);

  $("#"+sender.search_results_id).html("");
  $("#"+sender.search_results_id).append(p);
  $("#"+sender.search_results_id).append(div);
   }
 });
    },

    initMakeModelTrimList: function(make_list_id, model_list_id, trim_list_id, trim_data_list_id)
    {
        //Set the ids for the list elements
     this.make_list_id   =  make_list_id;
     this.model_list_id  =  model_list_id;
     this.trim_list_id  =  trim_list_id;
     this.trim_data_list_id  =  trim_data_list_id;

     //Populate the make-list
     this.populateMakeList();
    },

    initYearMakeModel: function(year_select_id, make_select_id, model_select_id)
    {
     //Set the ids for the select elements
 this.year_select_id =  year_select_id;
 this.make_select_id =  make_select_id;
 this.model_select_id = model_select_id;

 //Populate the car-years select element
 this.populateYearSelect();

 var sender = this;

 //Set the change event for the years dropdown to populate the makes select
 $("select#"+year_select_id).bind('change', function(){sender.yearSelectChange();});

 //Set the change event for the makes dropdown to populate the models select
 $("select#"+make_select_id).bind('change', function(){sender.makeSelectChange();});

 //Set the change event for the models dropdown to save the selected model
     $("select#"+model_select_id).bind('change', function(){sender.modelSelectChange();});
    },

    initMakeTrim922: function(year_select_id, make_select_id)
    {
        //alert("came here");
    	
    	//Set the ids for the select elements
     this.year_select_id =  year_select_id;
     this.make_select_id =  make_select_id;
     //this.model_select_id = model_select_id;
     //this.trim_select_id = trim_select_id;
     //this.autotrim_select_id = autotrim_select_id;
     //Populate the car-years select element
     this.populateYearSelect();

     var sender = this;

     //Set the change event for the years dropdown to populate the makes select
     $("select#"+year_select_id).bind('change', function(){sender.yearSelectChange();});

     //Set the change event for the makes dropdown to populate the models select
     $("select#"+make_select_id).bind('change', function(){sender.makeSelectChange();});

     //Set the change event for the models dropdown to populate the trims select
     //$("select#"+model_select_id).bind('change', function(){sender.modelSelectChange();});

     //Set the change event for the trim dropdown to save the selected trim
     //$("select#"+trim_select_id).bind('change', function(){sender.trimSelectChange();});
     
     //$("select#"+autotrim_select_id).bind('change', function(){sender.autotrimSelectChange();});
    },
    
    
    //initYearMakeModelTrim: function(year_select_id, make_select_id, model_select_id, trim_select_id,autotrim_select_id)
     initYearMakeModelTrim: function(year_select_id, make_select_id, model_select_id, autotrim_select_id)
    {
        //alert("came here");
    	
    	//Set the ids for the select elements
    flagV = false;
     this.year_select_id =  year_select_id;
     this.make_select_id =  make_select_id;
     this.model_select_id = model_select_id;
     //this.trim_select_id = trim_select_id;
     this.autotrim_select_id = autotrim_select_id;
     $("select#"+this.year_select_id).html("<option value='' disabled selected>Which Year</option>");
     $("select#"+this.make_select_id).html("<option value='' disabled selected>Make</option>");
     $("select#"+this.model_select_id).html("<option value='' disabled selected>Model</option>");
     //$("select#"+this.trim_select_id).html("<option value='' disabled selected>Variant</option>");
     $("select#"+this.autotrim_select_id).html("<option value='' disabled selected>Autoscoop Trim</option>");
     
     
     if(this.year_select_id === "car-years"){
    	 //alert("bisc");
    	 flagV = true;
     }
     
     //Populate the car-years select element
     this.populateYearSelect();

     var sender = this;

     //Set the change event for the years dropdown to populate the makes select
     $("select#"+year_select_id).bind('change', function(){sender.yearSelectChange();});

     //Set the change event for the makes dropdown to populate the models select
     $("select#"+make_select_id).bind('change', function(){sender.makeSelectChange();});

     //Set the change event for the models dropdown to populate the trims select
     $("select#"+model_select_id).bind('change', function(){sender.trimSelectChange();});

     //Set the change event for the trim dropdown to save the selected trim
     //$("select#"+trim_select_id).bind('change', function(){sender.trimSelectChange();});
     
     $("select#"+autotrim_select_id).bind('change', function(){sender.autotrimSelectChange();});
    },

    initModelData: function(model_data_id)
    {
     this.model_data_id = model_data_id;
    },

    setColorSelect : function(elemId, colorType)
    {
 if(colorType == 'int'){
  this.color_int_select_id = elemId;
  $('#'+this.color_int_select_id).html(this.empty_option_html);
 }
 else if(colorType == 'ext'){
  this.color_ext_select_id = elemId;
  $('#'+this.color_ext_select_id).html(this.empty_option_html);
 }
    },

    setFilters: function(args)
    {
     if(args.keyword != undefined) this.keyword = args.keyword;
     if(args.min_year != undefined) this.min_year = args.min_year;
        if(args.max_year != undefined) this.max_year = args.max_year;
        if(args.body != undefined) this.body = args.body;
     if(args.engine_position != undefined) this.engine_position = args.engine_position;
     if(args.engine_type != undefined) this.engine_type = args.engine_type;
     if(args.min_cylinders != undefined) this.min_cylinders = args.min_cylinders;
     if(args.max_cylinders != undefined) this.max_cylinders = args.max_cylinders;
 if(args.min_power != undefined) this.min_power = args.min_power;
     if(args.max_power != undefined) this.max_power = args.max_power;
 if(args.min_torque != undefined) this.min_torque = args.min_torque;
     if(args.max_torque != undefined) this.max_torque = args.max_torque;
 if(args.min_top_speed != undefined) this.min_top_speed = args.min_top_speed;
     if(args.max_top_speed != undefined) this.max_top_speed = args.max_top_speed;
     if(args.fuel_type != undefined) this.fuel_type = args.fuel_type;
     if(args.drive != undefined) this.drive = args.drive;
     if(args.seats != undefined) this.seats = args.seats;
     if(args.doors != undefined) this.doors = args.doors;
     if(args.max_weight != undefined) this.max_weight = args.max_weight;
     if(args.min_weight != undefined) this.min_weight = args.min_weight;
     if(args.min_lkm_hwy != undefined) this.min_lkm_hwy = args.min_lkm_hwy;
     if(args.max_lkm_hwy != undefined) this.max_lkm_hwy = args.max_lkm_hwy;

    if(args.sold_in_us != undefined){
      if(args.sold_in_us) this.sold_in_us = 1;
      else this.sold_in_us = -1;

      //Refresh year select if applicable
      if(this.year_select_id != "") this.yearSelectChange();
     }

    },

    populateTrimList: function(make_id, model_name)
    {
     //Show the trim data
        $("#"+this.trim_list_id).show();

     //Set a loading message while we retrieve the data
        $("#"+this.trim_list_id).html("<fieldset><p>Model Years / Trims:</p><div class='scrollable'><p>Loading Model Data...</p></div></fieldset>");

        //Clear Active Model
        $("#"+this.model_list_id + " a").removeClass('active');

        var sender = this;

     //Get Car Model JSON for the selected make
 $.getJSON(this.base_url+"?callback=?", {cmd:"getTrims", make:make_id, year:-1, model:model_name, sold_in_us:this.sold_in_us, full_results:0}, function(data) {

  if(!sender.responseError(data))
  {
       var trims = data.Trims;
       var ul = document.createElement('ul');

   for (var i = 0; i < trims.length; i++)
   {
    var li = document.createElement('li');
    var a = document.createElement('a');

    var model_id = trims[i].model_id

    $(a).bind('click', {model_id:model_id}, function(event) {
     sender.populateCarDataList(event.data.model_id);
    });

    $(a).html(trims[i].model_year+' '+trims[i].model_name+' '+trims[i].model_trim).attr("href", "javascript:void(0)");

    $(li).append(a);
    $(ul).append(li);

   }

         var fieldset = document.createElement('fieldset');
   var p = document.createElement('p');
   var div = document.createElement('div');

   $(p).html("Model Years / Trims:");
   $(div).addClass("scrollable");

   $(fieldset).append(p);
   $(p).append(div);
   $(div).append(ul);

   $("#"+sender.trim_list_id).html("");
   $("#"+sender.trim_list_id).append(fieldset);
         }
     });
    },

    populateModelList: function(make_id)
    {
     //Make sure list is visible
     $("#"+this.model_list_id).show();
     $("#"+this.make_list_id).show();

     //Hide other lists
     $("#"+this.trim_data_list_id).hide();
     $("#"+this.trim_list_id).hide();


     //Set a loading message while we retrieve the data
        $("#"+this.model_list_id).html("<fieldset><p>Models:</p><div class='scrollable'><p>Loading Models...</p></div></fieldset>");

        //Clear Active Make
        $("#"+this.make_list_id + " a").removeClass('active');

        var sender = this;

     //Get Car Model JSON for the selected make
 $.getJSON(this.base_url+"?callback=?", {cmd:"getModels", make:make_id, sold_in_us:this.sold_in_us}, function(data) {

  if(!sender.responseError(data))
  {
       var models = data.Models;
       var ul = document.createElement('ul');

   for (var i = 0; i < models.length; i++)
   {
    var li = document.createElement('li');
    var a = document.createElement('a');

    var make_id = models[i].model_make_id;
    var model_name = models[i].model_name;

    $(a).bind('click', {make: make_id, model:model_name}, function(event) {
     sender.populateTrimList(event.data.make, event.data.model);
     $(this).addClass('active');
    });

    $(a).html(models[i].model_name).attr("href", "javascript:void(0)");

    $(li).append(a);
    $(ul).append(li);
   }

         var fieldset = document.createElement('fieldset');
   var p = document.createElement('p');
   var div = document.createElement('div');

   $(p).html("Models:");
   $(div).addClass("scrollable");

   $(fieldset).append(p);
   $(p).append(div);
   $(div).append(ul);

   $("#"+sender.model_list_id).html("");
   $("#"+sender.model_list_id).append(fieldset);
         }
     });
    },

    populateMakeList: function()
    {
     //Make sure list is visible
     $("#"+this.make_list_id).show();

     //Hide other lists
     $("#"+this.trim_data_list_id).hide();
     $("#"+this.trim_list_id).hide();
     $("#"+this.model_list_id).hide();

 //Set a loading message while we retrieve the data
        $("#"+this.make_list_id).html("<fieldset><p>Makes:</p><div class='scrollable'><p>Loading Makes...</p></div></fieldset>");

        var sender = this;

    //Retrieve All Makes
       $.getJSON(this.base_url+"?callback=?", {cmd:"getMakes", sold_in_us:this.sold_in_us}, function(data) {

        if(!sender.responseError(data))
        {
         var makes = data.Makes;
         var ul = document.createElement('ul');

   for (var key in makes)
   {
      if (makes.hasOwnProperty(key))
      {
    var li = document.createElement('li');
    var a = document.createElement('a');

    var make_id = makes[key].make_id;

    $(a).bind('click', {make: make_id}, function(event) {
     sender.populateModelList( event.data.make );
     $(this).addClass('active');
    });

    $(a).html(makes[key].make_display).attr("href", "javascript:void(0)");

    $(li).append(a);
    $(ul).append(li);
      }
   }

   var fieldset = document.createElement('fieldset');
   var p = document.createElement('p');
   var div = document.createElement('div');

   $(p).html("Makes:");
   $(div).addClass("scrollable");

   $(fieldset).append(p);
   $(p).append(div);
   $(div).append(ul);

   $("#"+sender.make_list_id).html("");
   $("#"+sender.make_list_id).append(fieldset);
         }
        });
    },

    populateYearSelect: function()
    {
     //Set a loading message while we retrieve the data
    	
        var sender = this;
        //this.base_url = 'http://localhost:8080/MyCarDomain/api/tempCarModelYears';
        this.base_url = 'api/tempCarModelYears';
        //alert("sdafa"+flagV);
        //alert(base_url);
        //alert(this.base_url);
        
        $(".newUsedCarEbid").on("click", function(){
        	//alert("biscuit");
        	this.base_url = 'api/tempCarModelYears';
        	//alert(this.base_url);
            $.getJSON(this.base_url, function(data) {

    				     if(!sender.responseError(data))
    				     {
    				    	 var options = '<option value="">Please choose a Year</option>';
    				         //console.log(data);
    				         
    				         //Set min and max year range
    				         /*var minYear = data.Years.min_year;
    				         var maxYear = data.Years.max_year;
    				         alert(data[0]);
    				         if(sender.year_select_min != null && minYear < sender.year_select_min )
    				          minYear = sender.year_select_min;
    				         if(sender.year_select_max != null && maxYear > sender.year_select_max )
    				          maxYear = sender.year_select_max;*/
    				         /*if(flagV){
    				        	 alert("raise");
        				    	 var usedCarEbid=true;
        				         var newCarEbid= document.getElementById("newUsedCarEbid").checked;
        				         if(!newCarEbid){
        				         	usedCarEbid = false;
        				         	//alert("used is checked");
        				         }
        				         else{
        				        	 data.length = 1;
        				         }
    				         }*/
    				         var usedCarEbid=true;
    				         var newCarEbid= document.getElementById("newUsedCarEbid").checked;
    				         if(!newCarEbid){
    				         	usedCarEbid = false;
    				         	//alert("used is checked");
    				         }
    				         else{
    				        	 data.length = 1;
    				         }
    				         /*alert(usedCarEbid);
    				         alert(newCarEbid);
    				         alert(data[0]);
    				         alert(data.length);
    				         alert(data);*/
    				         var len= JSON.stringify(data);
    				         //alert(len);
    				         for (var i = 0; i < data.length; i++)
    				         {
    				            options += '<option value="' + data[i] + '">' + data[i] + '</option>';
    				         }
    				         //alert(options);
    				      $("select#"+sender.year_select_id).html(options);
    				
    				      	$("select#"+sender.make_select_id).html("<option value='' disabled selected>Make</option>");
    				      	$("select#"+sender.model_select_id).html("<option value='' disabled selected>Model</option>");
    				
    				
    				  if(sender.settings.year != null)
    				  {
    				       $('select#'+sender.year_select_id).val(sender.settings.year);
    				       sender.yearSelectChange();
    				      }
    				     }

         });
    	});
        
        
        
        
        $.getJSON(this.base_url, function(data) {

				     if(!sender.responseError(data))
				     {
				    	 var options = '<option value="">Please choose a Year</option>';
				         //console.log(data);
				    	 if(flagV){
				        	 //alert("raise");
    				    	 var usedCarEbid=true;
    				         var newCarEbid= true;
    				         if(!newCarEbid){
    				         	usedCarEbid = false;
    				         	//alert("used is checked");
    				         }
    				         else{
    				        	 data.length = 1;
    				         }
				         }
				         //Set min and max year range
				         /*var minYear = data.Years.min_year;
				         var maxYear = data.Years.max_year;
				         alert(data[0]);
				         if(sender.year_select_min != null && minYear < sender.year_select_min )
				          minYear = sender.year_select_min;
				         if(sender.year_select_max != null && maxYear > sender.year_select_max )
				          maxYear = sender.year_select_max;*//*
				         
				    	 var usedCarEbid=true;
				         var newCarEbid= document.getElementById("newUsedCarEbid").checked;
				         if(!newCarEbid){
				         	usedCarEbid = false;
				         	//alert("used is checked");
				         }
				         else{
				        	 data.length = 1;
				         }*/
				         /*alert(data[0]);
				         alert(data.length);
				         alert(data);
				         var len= JSON.stringify(data);
				         alert(len);*/
				         for (var i = 0; i < data.length; i++)
				         {
				            options += '<option value="' + data[i] + '">' + data[i] + '</option>';
				         }
				         //alert(options);
				      $("select#"+sender.year_select_id).html(options);
				
				      	$("select#"+sender.make_select_id).html("<option value='' disabled selected>Make</option>");
				      	$("select#"+sender.model_select_id).html("<option value='' disabled selected>Model</option>");
				
				
				  if(sender.settings.year != null)
				  {
				       $('select#'+sender.year_select_id).val(sender.settings.year);
				       sender.yearSelectChange();
				      }
				     }

     });
    },

    populateAttributeSelect: function(elemId, fieldName)
    {
     //Set a loading message while we retrieve the data
     $('#'+elemId).html("<option value='-1'>Loading...</option>");

     var sender = this;

        $.getJSON(this.base_url+"?callback=?", {cmd:"GetFieldValues", field_name:fieldName}, function(data) {

     if(!sender.responseError(data))
     {
         var options = '<option value="">Any</option>';

         for (var i = 0; i < data.Values.length; i++)
      {
           if(data.Values[i].value != null)
                options += '<option>' + data.Values[i].value + '</option>';
         }

      $('#'+elemId).html(options);
     }

     });
    },

    populateYearFilter: function(elemId)
    {
     //Set a loading message while we retrieve the data
     $('#'+elemId).html("<option value='-1'>Loading Years...</option>");

        var sender = this;

        $.getJSON(this.base_url+"?callback=?", {cmd:"getYears"}, function(data) {

     if(!sender.responseError(data))
     {
         var options = '<option value="-1">Any</option>';

         for (var i = data.Years.max_year; i >= data.Years.min_year; i--)
         {
               options += '<option value="' + i + '">' + i + '</option>';
         }

      $('#'+elemId).html(options);
     }
     });

    },

    populateMakeSelect: function(data)
    {
 if(!this.responseError(data))
 {
         var options = '<option value="">Please choose a Make</option>';
         //alert(options);
         //console.log(data);
         //alert(data);
/*  var makes = data;
  for (var key in makes)
  {
        if (makes.hasOwnProperty(key))
        {
         var s = '';
         if(this.settings.make != null && this.settings.make == makes[key].make_id) s = 'selected="selected"';

   options += '<option value="' + makes[key].make_id + '" '+s+'>' + makes[key].make_display + '</option>';
     }
  }*/
  for (var i = 0; i < data.length; i++)
  {
     options += '<option value="' + data[i] + '">' + data[i] + '</option>';
  }
  //alert(options);

  $("select#"+this.make_select_id).html(options);
 }
    },
    
    
    
    //auto trim select populate
    populateAutoTrimSelect: function(data)
    {
 if(!this.responseError(data))
 {
         var options = '<option value="">Please choose a Auto Trim</option>';
         //alert(options);
         //console.log(data);
         //alert(data);
/*  var makes = data;
  for (var key in makes)
  {
        if (makes.hasOwnProperty(key))
        {
         var s = '';
         if(this.settings.make != null && this.settings.make == makes[key].make_id) s = 'selected="selected"';

   options += '<option value="' + makes[key].make_id + '" '+s+'>' + makes[key].make_display + '</option>';
     }
  }*/
  for (var i = 0; i < data.length; i++)
  {
     options += '<option value="' + data[i] + '">' + data[i] + '</option>';
  }
  //alert(options);

  $("select#"+this.autotrim_select_id).html(options);
 }
    },//end of auto trim

    populateModelSelect: function(data)
    {
    	var options = '<option value="">Please choose a Model</option>';
        //alert(options);
        //console.log(data);
        for (var i = 0; i < data.length; i++)
        {
           options += '<option value="' + data[i] + '">' + data[i] + '</option>';
        }
        //alert(options);
    	
    	//var models = data.Models;

        /*var options = '';
        for (var i = 0; i < models.length; i++)
        {
           var s = '';
    if(this.settings.model != null && this.settings.model == models[i].model_name) s = 'selected="selected"';

           options += '<option value="' + models[i].model_name + '" '+s+'>' + models[i].model_name + '</option>';
        }*/

       $("select#"+this.model_select_id).html(options);
    },
    populateColorSelect: function(data)
    {
    	//alert("insided color");
    	var options = '<option value="">Please choose a Color</option>';
        //alert(options);
        //console.log(data);
        for (var i = 0; i < data.length; i++)
        {
           options += '<option value="' + data[i] + '">' + data[i] + '</option>';
        }
        //alert(options);
    	
    	//var models = data.Models;

        /*var options = '';
        for (var i = 0; i < models.length; i++)
        {
           var s = '';
    if(this.settings.model != null && this.settings.model == models[i].model_name) s = 'selected="selected"';

           options += '<option value="' + models[i].model_name + '" '+s+'>' + models[i].model_name + '</option>';
        }*/
        this.model_select_id="carColor";	
       $("#carColor").html(options);
       $("#carColor2").html(options);
    },
    populateTrimSelect: function(data)
    {
        /*var trims = data.Trims;
        var display;

        var options = '';
        for (var i = 0; i < trims.length; i++)
        {
         var s = '';
     if(this.settings.trim != null && this.settings.trim == trims[i].model_id) s = 'selected="selected"';

         trim_display = trims[i].model_trim;
         if(trim_display == "") trim_display = this.default_trim_name;

          options += '<option value="' + trims[i].model_id + '" '+s+'>' +  trim_display + '</option>';
        }*/
    	
    	var options = '<option value="">Please choose a Variant</option>';
        //alert(options);
        //console.log(data);
        for (var i = 0; i < data.length; i++)
        {
           options += '<option value="' + data[i] + '">' + data[i] + '</option>';
        }
        //alert(options);

       $("select#"+this.trim_select_id).html(options);

       this.cur_trim = $("select#"+this.trim_select_id).val();

 //If we have set color option dropdowns, populate them
 if(this.color_int_select_id != null || this.color_ext_select_id != null)
 this.populateColorSelects(this.cur_trim);
    },

    carColorHTML : function(colorData)
    {
     var out = '';

        if(colorData.length == 0) return 'Not Available';

        for (var i = 0; i < colorData.length; i++)
        {
             out += colorData[i].color_name + '<br/>';
        }

     return out;
    },
    
    

    carDataHTMLStore : function(data)
    {
     var sold_in_us = "No";
     if(data.model_sold_in_us == "1") sold_in_us = "Yes";

 

  var out = 'data.model_year|'+data.model_year+'*'+'data.make_display|'+data.make_display+'*'+'data.model_name|'+data.model_name+'*'+'data.model_trim|'+data.model_trim+'*';

  
  out += 'data.make_country|'+data.make_country+'*'+'data.model_body|'+data.model_body+'*'+'data.model_engine_position|'+data.model_engine_position+'*';
  out += 'data.model_engine_type|'+data.model_engine_type+'*'+'data.model_engine_cyl|'+data.model_engine_cyl+'*';
  
  

  //Output Color Data
  
     return out;
    },

carDataHTMLMRP : function(data)
    {
/*alert("came in mrp1");*/     
var sold_in_us = "No";
     if(data.model_sold_in_us == "1") sold_in_us = "Yes";

 var out = '<table class="model-data">';

    out += '<tr><th>'+data.model_year+'</th><th>'+data.make_display+'</th><th>'+data.model_name+'</th><th>'+data.model_trim+'</th></tr>';

/*alert(""+data.templateSpecificationId);*/


     out += '<tr><td><hr/></td></tr>';
     out += '<tr><td>Specification Id:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.templateSpecificationId+'" placeholder="" id="data_templateSpecificationId" name="data_templateSpecificationId"/>'+'</td></tr>';

out += '<tr><td>Country of Origin:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.make_country+'" placeholder="" id="data_make_country" name="data_make_country"/>'+'</td></tr>';

     out += '<tr><td>Sold in US and Australia:</td><td>'+sold_in_us+'</td></tr>';
     
out += '<tr><td>Body Style:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_body+'" placeholder="" id="data_model_body" name="data_model_body"/>'+'</td></tr>';

     //Output Color Data
     out += '<tr><td><hr/></td></tr>';
     out += '<tr><td valign="top">Exterior Colors :</td><td>';
     out += this.carColorHTML(data.ExtColors) + '</td></tr>';
     out += '<tr><td valign="top">Interior Colors:</td><td>';
     out += this.carColorHTML(data.IntColors) + '</td></tr>';

     out += '<tr><td><hr/></td></tr>';
     
out += '<tr><td>Engine Location:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_position+'" placeholder="" id="data_model_engine_position" name="data_model_engine_position"/>'+'</td></tr>';
     
out += '<tr><td>Engine Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_type+'" placeholder="" id="data_model_engine_type" name="data_model_engine_type"/>'+'</td></tr>';
     
out += '<tr><td>Engine Cylinders:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_cyl+'" placeholder="" id="data_model_engine_cyl" name="data_model_engine_cyl"/>'+'</td></tr>';

     
out += '<tr><td>Engine Displacement (cc):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_cc+'" placeholder="" id="data_model_engine_cc" name="data_model_engine_cc"/>'+'</td></tr>';
     
out += '<tr><td>Engine Displacement (l):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_l+'" placeholder="" id="data_model_engine_l" name="data_model_engine_l"/>'+'</td></tr>';

     
out += '<tr><td>Engine Displacement (cubic inches):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_ci+'" placeholder="" id="data_model_engine_ci" name="data_model_engine_ci"/>'+'</td></tr>';

     
out += '<tr><td>Engine Bore (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_bore_mm+'" placeholder="" id="data_model_engine_bore_mm" name="data_model_engine_bore_mm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Bore (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_bore_in+'" placeholder="" id="data_model_engine_bore_in" name="data_model_engine_bore_in"/>'+'</td></tr>';

     

out += '<tr><td>Engine Stroke (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_stroke_mm+'" placeholder="" id="data_model_engine_stroke_mm" name="data_model_engine_stroke_mm"/>'+'</td></tr>';


    

out += '<tr><td>Engine Stroke (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_stroke_in+'" placeholder="" id="data_model_engine_stroke_in" name="data_model_engine_stroke_in"/>'+'</td></tr>';


     

out += '<tr><td>Engine Valves Per Cylinder:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_valves_per_cyl+'" placeholder="" id="data_model_engine_valves_per_cyl" name="data_model_engine_valves_per_cyl"/>'+'</td></tr>';

    

out += '<tr><td>Engine Valves:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_valves+'" placeholder="" id="data_model_engine_valves" name="data_model_engine_valves"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power (HP):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_power_hp+'" placeholder="" id="data_model_engine_power_hp" name="data_model_engine_power_hp"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power (PS):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_power_ps+'" placeholder="" id="data_model_engine_power_ps" name="data_model_engine_power_ps"/>'+'</td></tr>';

    

out += '<tr><td>Engine Max Power (kW):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_power_kw+'" placeholder="" id="data_model_engine_power_kw" name="data_model_engine_power_kw"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power RPM:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_power_rpm+'" placeholder="" id="data_model_engine_power_rpm" name="data_model_engine_power_rpm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Torque (Nm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_torque_nm+'" placeholder="" id="data_model_engine_torque_nm" name="data_model_engine_torque_nm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Torque (Lb-Ft):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_torque_lbft+'" placeholder="" id="data_model_engine_torque_lbft" name="data_model_engine_torque_lbft"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Torque (kgf-m):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_torque_kgm+'" placeholder="" id="data_model_engine_torque_kgm" name="data_model_engine_torque_kgm"/>'+'</td></tr>';

    

out += '<tr><td>Engine Max Torque RPM:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_torque_rpm+'" placeholder="" id="data_model_engine_torque_rpm" name="data_model_engine_torque_rpm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Compression Ratio:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_compression+'" placeholder="" id="data_model_engine_compression" name="data_model_engine_compression"/>'+'</td></tr>';

    

out += '<tr><td>Engine Fuel Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_fuel+'" placeholder="" id="data_model_engine_fuel" name="data_model_engine_fuel"/>'+'</td></tr>';

     out += '<tr><td><hr/></td></tr>';
     

out += '<tr><td>Drive:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_drive+'" placeholder="" id="data_model_drive" name="data_model_drive"/>'+'</td></tr>';


    

out += '<tr><td>Transmission Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_transmission_type+'" placeholder="" id="data_model_transmission_type" name="data_model_transmission_type"/>'+'</td></tr>';


     

out += '<tr><td>Top Speed (KPH):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_top_speed_kph+'" placeholder="" id="data_model_top_speed_kph" name="data_model_top_speed_kph"/>'+'</td></tr>';

     

out += '<tr><td>Top Speed (MPH):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_top_speed_mph+'" placeholder="" id="data_model_top_speed_mph" name="data_model_top_speed_mph"/>'+'</td></tr>';

     

out += '<tr><td>0-100 kph (0-62mph):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_0_to_100_kph+'" placeholder="" id="data_model_0_to_100_kph" name="data_model_0_to_100_kph"/>'+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
    
     out += '<tr><td>Doors:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_doors+'" placeholder="" id="data_model_doors" name="data_model_doors"/>'+'</td></tr>';

    

out += '<tr><td>Seats:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_seats+'" placeholder="" id="data_model_seats" name="data_model_seats"/>'+'</td></tr>';


     

out += '<tr><td>Weight (kg):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_weight_kg+'" placeholder="" id="data_model_weight_kg" name="data_model_weight_kg"/>'+'</td></tr>';

    

out += '<tr><td>Weight (lbs):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_weight_lbs+'" placeholder="" id="data_model_weight_lbs" name="data_model_weight_lbs"/>'+'</td></tr>';

   

out += '<tr><td>Length (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_length_mm+'" placeholder="" id="data_model_length_mm" name="data_model_length_mm"/>'+'</td></tr>';

     

out += '<tr><td>Length (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_length_in+'" placeholder="" id="data_model_length_in" name="data_model_length_in"/>'+'</td></tr>';

     

out += '<tr><td>Width (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_width_mm+'" placeholder="" id="data_model_length_in" name="data_model_length_in"/>'+'</td></tr>';

     

out += '<tr><td>Width (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_width_in+'" placeholder="" id="data_model_width_in" name="data_model_width_in"/>'+'</td></tr>';

     

out += '<tr><td>Height (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_height_mm+'" placeholder="" id="data_model_height_mm" name="data_model_height_mm"/>'+'</td></tr>';

     

out += '<tr><td>Height (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_height_in+'" placeholder="" id="data_model_height_in" name="data_model_height_in"/>'+'</td></tr>';

     

out += '<tr><td>Wheelbase (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_wheelbase_mm+'" placeholder="" id="data_model_wheelbase_mm" name="data_model_wheelbase_mm"/>'+'</td></tr>';


out += '<tr><td>Wheelbase (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_wheelbase_in+'" placeholder="" id="data_model_wheelbase_in" name="data_model_wheelbase_in"/>'+'</td></tr>';     

out += '<tr><td>Fuel Economy City(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_lkm_city+'" placeholder="" id="data_model_lkm_city" name="data_model_lkm_city"/>'+'</td></tr>';


     

out += '<tr><td>Fuel Economy City(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_mpg_city+'" placeholder="" id="data_model_mpg_city" name="data_model_mpg_city"/>'+'</td></tr>';


     

out += '<tr><td>Fuel Economy HWY(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_lkm_hwy+'" placeholder="" id="data_model_lkm_hwy" name="data_model_lkm_hwy"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy HWY(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_mpg_hwy+'" placeholder="" id="data_model_mpg_hwy" name="data_model_mpg_hwy"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy Mixed(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_lkm_mixed+'" placeholder="" id="data_model_lkm_mixed" name="data_model_lkm_mixed"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy Mixed(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_mpg_mixed+'" placeholder="" id="data_model_mpg_mixed" name="data_model_mpg_mixed"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Capacity(l):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_fuel_cap_l+'" placeholder="" id="data_model_fuel_cap_l" name="data_model_fuel_cap_l"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Capacity(g):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_fuel_cap_g+'" placeholder="" id="data_model_fuel_cap_g" name="data_model_fuel_cap_g"/>'+'</td></tr>';

     out += '</table>';

     out = out.replace(/>null</g, ">Not Available<");

     return out;
    },

carDataHTMLMRP123 : function(model_data_id)
    {
this.model_data_id = model_data_id;
//alert(""+this.model_data_id);
},
    carDataHTMLMRP12 : function(data, modelYear, modelDisplay, modelName, modelTrim, model_data_id)
    {
//alert("came in mrp112");     
this.model_data_id = model_data_id;
//alert(""+this.model_data_id);
var sold_in_us = "No";
     /*if(data.model_sold_in_us == "1") sold_in_us = "Yes";*/

 var out = '<table class="model-data">';

     out += '<tr><th>'+modelYear+'</th><th>'+modelDisplay+'</th><th>'+modelName+'</th><th>'+modelTrim+'</th></tr>';

/*alert(""+data.templateSpecificationId);*/


     out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td>Specification Id:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.templateSpecificationId+'" placeholder="" id="data_templateSpecificationId" name="data_templateSpecificationId"/>'+'</td></tr>';

out += '<tr><td>Country of Origin:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.makeCountry+'" placeholder="" id="data_make_country" name="data_make_country"/>'+'</td></tr>';

     /*out += '<tr><td>Sold in US and Australia:</td><td>'+sold_in_us+'</td></tr>';*/
     
out += '<tr><td>Body Style:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelBody+'" placeholder="" id="data_model_body" name="data_model_body"/>'+'</td></tr>';
/*alert(""+data.templateSpecificationId);*/
     //Output Color Data
    /* out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td valign="top">Exterior Colors :</td><td>';
     out += this.carColorHTML(data.ExtColors) + '</td></tr>';
     out += '<tr><td valign="top">Interior Colors:</td><td>';
     out += this.carColorHTML(data.IntColors) + '</td></tr>';*/

     out += '<tr><td colspan="2"><hr/></td></tr>';
     
out += '<tr><td>Engine Location:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEnginePosition+'" placeholder="" id="data_model_engine_position" name="data_model_engine_position"/>'+'</td></tr>';
   /*alert("24");*/  
out += '<tr><td>Engine Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineType+'" placeholder="" id="data_model_engine_type" name="data_model_engine_type"/>'+'</td></tr>';
     
out += '<tr><td>Engine Cylinders:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineCyl+'" placeholder="" id="data_model_engine_cyl" name="data_model_engine_cyl"/>'+'</td></tr>';

     
out += '<tr><td>Engine Displacement (cc):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEnginecc+'" placeholder="" id="data_model_engine_cc" name="data_model_engine_cc"/>'+'</td></tr>';
     
out += '<tr><td>Engine Displacement (l):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEnginel+'" placeholder="" id="data_model_engine_l" name="data_model_engine_l"/>'+'</td></tr>';

     
out += '<tr><td>Engine Displacement (cubic inches):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineci+'" placeholder="" id="data_model_engine_ci" name="data_model_engine_ci"/>'+'</td></tr>';

     
out += '<tr><td>Engine Bore (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineBoremm+'" placeholder="" id="data_model_engine_bore_mm" name="data_model_engine_bore_mm"/>'+'</td></tr>';
/*alert("34"+data.templateSpecificationId);*/
     

out += '<tr><td>Engine Bore (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineBorein+'" placeholder="" id="data_model_engine_bore_in" name="data_model_engine_bore_in"/>'+'</td></tr>';

     

out += '<tr><td>Engine Stroke (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineStrokemm+'" placeholder="" id="data_model_engine_stroke_mm" name="data_model_engine_stroke_mm"/>'+'</td></tr>';


    

out += '<tr><td>Engine Stroke (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineStrokein+'" placeholder="" id="data_model_engine_stroke_in" name="data_model_engine_stroke_in"/>'+'</td></tr>';


     

out += '<tr><td>Engine Valves Per Cylinder:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineValvespercyl+'" placeholder="" id="data_model_engine_valves_per_cyl" name="data_model_engine_valves_per_cyl"/>'+'</td></tr>';

    

out += '<tr><td>Engine Valves:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineValves+'" placeholder="" id="data_model_engine_valves" name="data_model_engine_valves"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power (HP):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEnginePowerps+'" placeholder="" id="data_model_engine_power_hp" name="data_model_engine_power_hp"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power (PS):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEnginePowerps+'" placeholder="" id="data_model_engine_power_ps" name="data_model_engine_power_ps"/>'+'</td></tr>';

    

out += '<tr><td>Engine Max Power (kW):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model_engine_power_kw+'" placeholder="" id="data_model_engine_power_kw" name="data_model_engine_power_kw"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power RPM:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEnginePowerrpm+'" placeholder="" id="data_model_engine_power_rpm" name="data_model_engine_power_rpm"/>'+'</td></tr>';
/*alert(""+data.templateSpecificationId);*/
     

out += '<tr><td>Engine Max Torque (Nm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineTorquenm+'" placeholder="" id="data_model_engine_torque_nm" name="data_model_engine_torque_nm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Torque (Lb-Ft):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineTorquelbft+'" placeholder="" id="data_model_engine_torque_lbft" name="data_model_engine_torque_lbft"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Torque (kgf-m):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineTorquekgm+'" placeholder="" id="data_model_engine_torque_kgm" name="data_model_engine_torque_kgm"/>'+'</td></tr>';

    

out += '<tr><td>Engine Max Torque RPM:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineTorquerpm+'" placeholder="" id="data_model_engine_torque_rpm" name="data_model_engine_torque_rpm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Compression Ratio:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineCompression+'" placeholder="" id="data_model_engine_compression" name="data_model_engine_compression"/>'+'</td></tr>';

    

out += '<tr><td>Engine Fuel Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelEngineFuel+'" placeholder="" id="data_model_engine_fuel" name="data_model_engine_fuel"/>'+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
     

out += '<tr><td>Drive:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelDrive+'" placeholder="" id="data_model_drive" name="data_model_drive"/>'+'</td></tr>';


    

out += '<tr><td>Transmission Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelTransmissionType+'" placeholder="" id="data_model_transmission_type" name="data_model_transmission_type"/>'+'</td></tr>';


     

out += '<tr><td>Top Speed (KPH):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelTopSpeedkph+'" placeholder="" id="data_model_top_speed_kph" name="data_model_top_speed_kph"/>'+'</td></tr>';

     

out += '<tr><td>Top Speed (MPH):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelTopSpeedmph+'" placeholder="" id="data_model_top_speed_mph" name="data_model_top_speed_mph"/>'+'</td></tr>';

     

out += '<tr><td>0-100 kph (0-62mph):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.model0to100kph+'" placeholder="" id="data_model_0_to_100_kph" name="data_model_0_to_100_kph"/>'+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
    
     out += '<tr><td>Doors:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelDoors+'" placeholder="" id="data_model_doors" name="data_model_doors"/>'+'</td></tr>';

    

out += '<tr><td>Seats:</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelSeats+'" placeholder="" id="data_model_seats" name="data_model_seats"/>'+'</td></tr>';


     

out += '<tr><td>Weight (kg):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelWeightkg+'" placeholder="" id="data_model_weight_kg" name="data_model_weight_kg"/>'+'</td></tr>';

    

out += '<tr><td>Weight (lbs):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelWeightlbs+'" placeholder="" id="data_model_weight_lbs" name="data_model_weight_lbs"/>'+'</td></tr>';

   

out += '<tr><td>Length (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelLengthmm+'" placeholder="" id="data_model_length_mm" name="data_model_length_mm"/>'+'</td></tr>';

     

out += '<tr><td>Length (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelLengthin+'" placeholder="" id="data_model_length_in" name="data_model_length_in"/>'+'</td></tr>';

     

out += '<tr><td>Width (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelWidthmm+'" placeholder="" id="data_model_length_in" name="data_model_length_in"/>'+'</td></tr>';

     

out += '<tr><td>Width (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelWidthin+'" placeholder="" id="data_model_width_in" name="data_model_width_in"/>'+'</td></tr>';

     

out += '<tr><td>Height (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelHeightmm+'" placeholder="" id="data_model_height_mm" name="data_model_height_mm"/>'+'</td></tr>';

     

out += '<tr><td>Height (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelHeightin+'" placeholder="" id="data_model_height_in" name="data_model_height_in"/>'+'</td></tr>';

     

out += '<tr><td>Wheelbase (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelWheelbasemm+'" placeholder="" id="data_model_wheelbase_mm" name="data_model_wheelbase_mm"/>'+'</td></tr>';


out += '<tr><td>Wheelbase (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelWheelbasein+'" placeholder="" id="data_model_wheelbase_in" name="data_model_wheelbase_in"/>'+'</td></tr>';     

out += '<tr><td>Fuel Economy City(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modellkmCity+'" placeholder="" id="data_model_lkm_city" name="data_model_lkm_city"/>'+'</td></tr>';


     

out += '<tr><td>Fuel Economy City(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelmpgCity+'" placeholder="" id="data_model_mpg_city" name="data_model_mpg_city"/>'+'</td></tr>';


     

out += '<tr><td>Fuel Economy HWY(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modellkmhwy+'" placeholder="" id="data_model_lkm_hwy" name="data_model_lkm_hwy"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy HWY(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelmpghwy+'" placeholder="" id="data_model_mpg_hwy" name="data_model_mpg_hwy"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy Mixed(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modellkmMixed+'" placeholder="" id="data_model_lkm_mixed" name="data_model_lkm_mixed"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy Mixed(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelmpgMixed+'" placeholder="" id="data_model_mpg_mixed" name="data_model_mpg_mixed"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Capacity(l):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelFuelcapl+'" placeholder="" id="data_model_fuel_cap_l" name="data_model_fuel_cap_l"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Capacity(g):</td><td>'+'<input type="text" class="input-text full-width" value="'+data.modelFuelcapg+'" placeholder="" id="data_model_fuel_cap_g" name="data_model_fuel_cap_g"/>'+'</td></tr>';

     out += '</table>';
     /*alert("12"+data.templateSpecificationId);*/
     out = out.replace(/>null</g, ">Not Available<");
     //alert("final"+data.templateSpecificationId);
var sender = this;
     /*return out; come here*/
//alert("final");
//alert("sender"+sender);
this.model_data_id = "car-model-data";

//alert(""+this.model_data_id);
$("#"+sender.model_data_id).html(out);

    },

    
    carDataHTMLMRPEmpty : function()
    {
/*alert("came in mrp1 EMPTY");*/     
var sold_in_us = "No";
     /*if(data.model_sold_in_us == "1") sold_in_us = "Yes";*/

 var out = '<table class="model-data">';

    /* out += '<tr><th colspan="2">'+data.model_year+' '+data.make_display+' '+data.model_name+' '+data.model_trim+'</th></tr>';*/

/*alert("Empty specification");*/


     out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td>Specification Id:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_templateSpecificationId" name="data_templateSpecificationId"/>'+'</td></tr>';

out += '<tr><td>Country of Origin:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_make_country" name="data_make_country"/>'+'</td></tr>';

     /*out += '<tr><td>Sold in US and Australia:</td><td>'+sold_in_us+'</td></tr>';*/
     
out += '<tr><td>Body Style:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_body" name="data_model_body"/>'+'</td></tr>';

     //Output Color Data
    /* out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td valign="top">Exterior Colors :</td><td>';
     out += this.carColorHTML(data.ExtColors) + '</td></tr>';
     out += '<tr><td valign="top">Interior Colors:</td><td>';
     out += this.carColorHTML(data.IntColors) + '</td></tr>';*/

     out += '<tr><td colspan="2"><hr/></td></tr>';
     
out += '<tr><td>Engine Location:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_position" name="data_model_engine_position"/>'+'</td></tr>';
   /*alert("24");*/  
out += '<tr><td>Engine Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_type" name="data_model_engine_type"/>'+'</td></tr>';
     
out += '<tr><td>Engine Cylinders:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_cyl" name="data_model_engine_cyl"/>'+'</td></tr>';

     
out += '<tr><td>Engine Displacement (cc):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_cc" name="data_model_engine_cc"/>'+'</td></tr>';
     
out += '<tr><td>Engine Displacement (l):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_l" name="data_model_engine_l"/>'+'</td></tr>';

     
out += '<tr><td>Engine Displacement (cubic inches):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_ci" name="data_model_engine_ci"/>'+'</td></tr>';

     
out += '<tr><td>Engine Bore (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_bore_mm" name="data_model_engine_bore_mm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Bore (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_bore_in" name="data_model_engine_bore_in"/>'+'</td></tr>';

     

out += '<tr><td>Engine Stroke (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_stroke_mm" name="data_model_engine_stroke_mm"/>'+'</td></tr>';


    

out += '<tr><td>Engine Stroke (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_stroke_in" name="data_model_engine_stroke_in"/>'+'</td></tr>';


     

out += '<tr><td>Engine Valves Per Cylinder:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_valves_per_cyl" name="data_model_engine_valves_per_cyl"/>'+'</td></tr>';

    

out += '<tr><td>Engine Valves:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_valves" name="data_model_engine_valves"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power (HP):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_power_hp" name="data_model_engine_power_hp"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power (PS):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_power_ps" name="data_model_engine_power_ps"/>'+'</td></tr>';

    

out += '<tr><td>Engine Max Power (kW):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_power_kw" name="data_model_engine_power_kw"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Power RPM:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_power_rpm" name="data_model_engine_power_rpm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Torque (Nm):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_torque_nm" name="data_model_engine_torque_nm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Torque (Lb-Ft):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_torque_lbft" name="data_model_engine_torque_lbft"/>'+'</td></tr>';

     

out += '<tr><td>Engine Max Torque (kgf-m):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_torque_kgm" name="data_model_engine_torque_kgm"/>'+'</td></tr>';

    

out += '<tr><td>Engine Max Torque RPM:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_torque_rpm" name="data_model_engine_torque_rpm"/>'+'</td></tr>';

     

out += '<tr><td>Engine Compression Ratio:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_compression" name="data_model_engine_compression"/>'+'</td></tr>';

    

out += '<tr><td>Engine Fuel Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_engine_fuel" name="data_model_engine_fuel"/>'+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
     

out += '<tr><td>Drive:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_drive" name="data_model_drive"/>'+'</td></tr>';


    

out += '<tr><td>Transmission Type:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_transmission_type" name="data_model_transmission_type"/>'+'</td></tr>';


     

out += '<tr><td>Top Speed (KPH):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_top_speed_kph" name="data_model_top_speed_kph"/>'+'</td></tr>';

     

out += '<tr><td>Top Speed (MPH):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_top_speed_mph" name="data_model_top_speed_mph"/>'+'</td></tr>';

     

out += '<tr><td>0-100 kph (0-62mph):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_0_to_100_kph" name="data_model_0_to_100_kph"/>'+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
    
     out += '<tr><td>Doors:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_doors" name="data_model_doors"/>'+'</td></tr>';

    

out += '<tr><td>Seats:</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_seats" name="data_model_seats"/>'+'</td></tr>';


     

out += '<tr><td>Weight (kg):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_weight_kg" name="data_model_weight_kg"/>'+'</td></tr>';

    

out += '<tr><td>Weight (lbs):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_weight_lbs" name="data_model_weight_lbs"/>'+'</td></tr>';

   

out += '<tr><td>Length (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_length_mm" name="data_model_length_mm"/>'+'</td></tr>';

     

out += '<tr><td>Length (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_length_in" name="data_model_length_in"/>'+'</td></tr>';

     

out += '<tr><td>Width (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_length_in" name="data_model_length_in"/>'+'</td></tr>';

     

out += '<tr><td>Width (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_width_in" name="data_model_width_in"/>'+'</td></tr>';

     

out += '<tr><td>Height (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_height_mm" name="data_model_height_mm"/>'+'</td></tr>';

     

out += '<tr><td>Height (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_height_in" name="data_model_height_in"/>'+'</td></tr>';

     

out += '<tr><td>Wheelbase (mm):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_wheelbase_mm" name="data_model_wheelbase_mm"/>'+'</td></tr>';


out += '<tr><td>Wheelbase (in):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_wheelbase_in" name="data_model_wheelbase_in"/>'+'</td></tr>';     

out += '<tr><td>Fuel Economy City(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_lkm_city" name="data_model_lkm_city"/>'+'</td></tr>';


     

out += '<tr><td>Fuel Economy City(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_mpg_city" name="data_model_mpg_city"/>'+'</td></tr>';


     

out += '<tr><td>Fuel Economy HWY(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_lkm_hwy" name="data_model_lkm_hwy"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy HWY(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_mpg_hwy" name="data_model_mpg_hwy"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy Mixed(l/100km):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_lkm_mixed" name="data_model_lkm_mixed"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Economy Mixed(mpg):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_mpg_mixed" name="data_model_mpg_mixed"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Capacity(l):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_fuel_cap_l" name="data_model_fuel_cap_l"/>'+'</td></tr>';

     

out += '<tr><td>Fuel Capacity(g):</td><td>'+'<input type="text" class="input-text full-width" value="'+'""'+'" placeholder="" id="data_model_fuel_cap_g" name="data_model_fuel_cap_g"/>'+'</td></tr>';

     out += '</table>';
     
     out = out.replace(/>null</g, ">Not Available<");
     /*alert("completed empty");*/

     return out;
    },
    
    carDataHTML : function(data)
    {
     var sold_in_us = "No";
     if(data.model_sold_in_us == "1") sold_in_us = "Yes";

 var out = '<table class="model-data">';

     out += '<tr><th>'+data.model_year+'</th><th>'+data.make_display+'</th><th>'+data.model_name+'</th><th>'+data.model_trim+'</th></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td>Country of Origin:</td><td>'+data.make_country+'</td></tr>';
     out += '<tr><td>Sold in US and Australia:</td><td>'+sold_in_us+'</td></tr>';
     out += '<tr><td>Body Style:</td><td>'+data.model_body+'</td></tr>';

     //Output Color Data
     out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td valign="top">Exterior Colors changes now:</td><td>';
     out += this.carColorHTML(data.ExtColors) + '</td></tr>';
     out += '<tr><td valign="top">Interior Colors:</td><td>';
     out += this.carColorHTML(data.IntColors) + '</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td>Engine Location:</td><td>'+data.model_engine_position+'</td></tr>';
     out += '<tr><td>Engine Type:</td><td>'+data.model_engine_type+'</td></tr>';
     out += '<tr><td>Engine Cylinders:</td><td>'+data.model_engine_cyl+'</td></tr>';
     out += '<tr><td>Engine Displacement (cc):</td><td>'+data.model_engine_cc+'</td></tr>';
     out += '<tr><td>Engine Displacement (l):</td><td>'+data.model_engine_l+'</td></tr>';
     out += '<tr><td>Engine Displacement (cubic inches):</td><td>'+data.model_engine_ci+'</td></tr>';
     out += '<tr><td>Engine Bore (mm):</td><td>'+data.model_engine_bore_mm+'</td></tr>';
     out += '<tr><td>Engine Bore (in):</td><td>'+data.model_engine_bore_in+'</td></tr>';
     out += '<tr><td>Engine Stroke (mm):</td><td>'+data.model_engine_stroke_mm+'</td></tr>';
     out += '<tr><td>Engine Stroke (in):</td><td>'+data.model_engine_stroke_in+'</td></tr>';
     out += '<tr><td>Engine Valves Per Cylinder:</td><td>'+data.model_engine_valves_per_cyl+'</td></tr>';
     out += '<tr><td>Engine Valves:</td><td>'+data.model_engine_valves+'</td></tr>';
     out += '<tr><td>Engine Max Power (HP):</td><td>'+data.model_engine_power_hp+'</td></tr>';
     out += '<tr><td>Engine Max Power (PS):</td><td>'+data.model_engine_power_ps+'</td></tr>';
     out += '<tr><td>Engine Max Power (kW):</td><td>'+data.model_engine_power_kw+'</td></tr>';
     out += '<tr><td>Engine Max Power RPM:</td><td>'+data.model_engine_power_rpm+'</td></tr>';
     out += '<tr><td>Engine Max Torque (Nm):</td><td>'+data.model_engine_torque_nm+'</td></tr>';
     out += '<tr><td>Engine Max Torque (Lb-Ft):</td><td>'+data.model_engine_torque_lbft+'</td></tr>';
     out += '<tr><td>Engine Max Torque (kgf-m):</td><td>'+data.model_engine_torque_kgm+'</td></tr>';
     out += '<tr><td>Engine Max Torque RPM:</td><td>'+data.model_engine_torque_rpm+'</td></tr>';
     out += '<tr><td>Engine Compression Ratio:</td><td>'+data.model_engine_compression+'</td></tr>';
     out += '<tr><td>Engine Fuel Type:</td><td>'+data.model_engine_fuel+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td>Drive:</td><td>'+data.model_drive+'</td></tr>';
     out += '<tr><td>Transmission Type:</td><td>'+data.model_transmission_type+'</td></tr>';
     out += '<tr><td>Top Speed (KPH):</td><td>'+data.model_top_speed_kph+'</td></tr>';
     out += '<tr><td>Top Speed (MPH):</td><td>'+data.model_top_speed_mph+'</td></tr>';
     out += '<tr><td>0-100 kph (0-62mph):</td><td>'+data.model_0_to_100_kph+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
     //out += '<tr><td>Doors:</td><td>'+data.model_doors+'</td></tr>';
     out += '<tr><td>Changed Doors:<html:text property="region" </td><td>'+data.model_doors+'</td></tr>';
     out += '<tr><td>Seats:</td><td>'+data.model_seats+'</td></tr>';
     out += '<tr><td>Weight (kg):</td><td>'+data.model_weight_kg+'</td></tr>';
     out += '<tr><td>Weight (lbs):</td><td>'+data.model_weight_lbs+'</td></tr>';
     out += '<tr><td>Length (mm):</td><td>'+data.model_length_mm+'</td></tr>';
     out += '<tr><td>Length (in):</td><td>'+data.model_length_in+'</td></tr>';
     out += '<tr><td>Width (mm):</td><td>'+data.model_width_mm+'</td></tr>';
     out += '<tr><td>Width (in):</td><td>'+data.model_width_in+'</td></tr>';
     out += '<tr><td>Height (mm):</td><td>'+data.model_height_mm+'</td></tr>';
     out += '<tr><td>Height (in):</td><td>'+data.model_height_in+'</td></tr>';
     out += '<tr><td>Wheelbase (mm):</td><td>'+data.model_wheelbase_mm+'</td></tr>';
     out += '<tr><td>Wheelbase (in):</td><td>'+data.model_wheelbase_in+'</td></tr>';
     out += '<tr><td>Fuel Economy City(l/100km):</td><td>'+data.model_lkm_city+'</td></tr>';
     out += '<tr><td>Fuel Economy City(mpg):</td><td>'+data.model_mpg_city+'</td></tr>';
     out += '<tr><td>Fuel Economy HWY(l/100km):</td><td>'+data.model_lkm_hwy+'</td></tr>';
     out += '<tr><td>Fuel Economy HWY(mpg):</td><td>'+data.model_mpg_hwy+'</td></tr>';
     out += '<tr><td>Fuel Economy Mixed(l/100km):</td><td>'+data.model_lkm_mixed+'</td></tr>';
     out += '<tr><td>Fuel Economy Mixed(mpg):</td><td>'+data.model_mpg_mixed+'</td></tr>';
     out += '<tr><td>Fuel Capacity(l):</td><td>'+data.model_fuel_cap_l+'</td></tr>';
     out += '<tr><td>Fuel Capacity(g):</td><td>'+data.model_fuel_cap_g+'</td></tr>';

     out += '</table>';

     out = out.replace(/>null</g, ">Not Available<");

     return out;
    },
    
    
    carDataHTMLSpec : function(data)
    {
     var sold_in_us = "No";
     //if(data.model_sold_in_us == "1") sold_in_us = "Yes";

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
     
     /*out += '<tr><td colspan="2">Car Model Overview<hr/></td></tr>';
     out += '<tr><td>price:</td><td>'+data.tempCarModelHeaderVO.carModel[0].price+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].priceGuideEGC!=null)
    	 out += '<tr><td>Price Guide EGC:</td><td>'+data.tempCarModelHeaderVO.carModel[0].priceGuideEGC+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].fuelType!=null)
    	 out += '<tr><td>Fuel Type:</td><td>'+data.tempCarModelHeaderVO.carModel[0].fuelType+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].series!=null)
    	 out += '<tr><td>Series:</td><td>'+data.tempCarModelHeaderVO.carModel[0].series+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].recommendedRonRating!=null)	
    	 out += '<tr><td>Recommended Ron Rating:</td><td>'+data.tempCarModelHeaderVO.carModel[0].recommendedRonRating+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].body!=null)
    	 out += '<tr><td>Body:</td><td>'+data.tempCarModelHeaderVO.carModel[0].body+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].releaseYear!=null)
    	 out += '<tr><td>Release Year:</td><td>'+data.tempCarModelHeaderVO.carModel[0].releaseYear+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].noOfDoors!=null)
    	 out += '<tr><td>No Of Doors:</td><td>'+data.tempCarModelHeaderVO.carModel[0].noOfDoors+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].fuelType!=null)
    	 out += '<tr><td>VIN:</td><td>'+data.tempCarModelHeaderVO.carModel[0].vin+'</td></tr>';
     out += '<tr><td>Seat Capacity:</td><td>'+data.tempCarModelHeaderVO.carModel[0].seatCapacity+'</td></tr>';
     out += '<tr><td>Transmission:</td><td>'+data.tempCarModelHeaderVO.carModel[0].transmission+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].overallGreenStarRating!=null)     
    	 out += '<tr><td>Overall GreenStar Rating:</td><td>'+data.tempCarModelHeaderVO.carModel[0].overallGreenStarRating+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].ancapSafetyRating!=null)
    	 out += '<tr><td>ancap Safety Rating:</td><td>'+data.tempCarModelHeaderVO.carModel[0].ancapSafetyRating+'</td></tr>';
     out += '<tr><td>Steering:</td><td>'+data.tempCarModelHeaderVO.carModel[0].steering+'</td></tr>';
     if(data.tempCarModelHeaderVO.carModel[0].manfYear!=null)  
    	 out += '<tr><td>Manufacture Year:</td><td>'+data.tempCarModelHeaderVO.carModel[0].manfYear+'</td></tr>';
     out += '<tr><td>No Of Gears:</td><td>'+data.tempCarModelHeaderVO.carModel[0].noOfGears+'</td></tr>';
     out += '<tr><td>Badge:</td><td>'+data.tempCarModelHeaderVO.carModel[0].badge+'</td></tr>';
     out += '<tr><td>Country of Origin:</td><td>'+data.tempCarModelHeaderVO.carModel[0].countryOfOrigin+'</td></tr>';
     
     
     out += '<tr><td>Car Model Pricing:</td><td>Yes</td></tr>';
     
     out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td valign="top">Available Color:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].availableColour+'</td></tr>';
     out += '<tr><td valign="top">prices:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].prices+'</td></tr>';
     out += '<tr><td valign="top">redbookPriceGuide:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].redbookPriceGuide+'</td></tr>';
     out += '<tr><td valign="top">privatePriceGuideMin:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].privatePriceGuideMin+'</td></tr>';
     out += '<tr><td valign="top">privatePriceGuideMax:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].privatePriceGuideMax+'</td></tr>';
     out += '<tr><td valign="top">tradePriceGuideMin:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].tradePriceGuideMin+'</td></tr>';
     out += '<tr><td valign="top">tradePriceGuideMax:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].tradePriceGuideMax+'</td></tr>';
     out += '<tr><td valign="top">averageKmMin:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].averageKmMin+'</td></tr>';
     out += '<tr><td valign="top">averageKmMax:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].averageKmMax+'</td></tr>';
     out += '<tr><td valign="top">priceWhenNew:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].priceWhenNew+'</td></tr>';
     out += '<tr><td valign="top">state:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].state+'</td></tr>';
     out += '<tr><td valign="top">rego:</td><td>'+data.tempCarModelHeaderVO.carModel1[0].rego+'</td></tr>';
     
     out += '<tr><td colspan="2">Car Model Colours<hr/></td></tr>';
     
      
	   
     out += '<tr><th>'+"Available Colour"+'</th><th>'+"Price"+'</th><th>'+'</th></tr>';*/
     var options = '<option value="">Please choose a Color</option>';  
     for(i=0;i<data.tempCarModelHeaderVO.carModel3.length;i++)
		{
		
		//out= out+'<tr>'+'<td>'+data.tempCarModelHeaderVO.carModel3[i].availableColour+'</td>'+'<td>'+data.tempCarModelHeaderVO.carModel3[i].price+'</td>' + '</tr>';
		options += '<option value="' +data.tempCarModelHeaderVO.carModel3[i].availableColour+ '">' +data.tempCarModelHeaderVO.carModel3[i].availableColour + '</option>';
		
		}
	   
       //alert(options);
       $("#carColor").html(options);
       $("#carColor2").html(options);
     /*out += '<tr><td>Engine Displacement (cc):</td><td>'+data.model_engine_cc+'</td></tr>';
     out += '<tr><td>Engine Displacement (l):</td><td>'+data.model_engine_l+'</td></tr>';
     out += '<tr><td>Engine Displacement (cubic inches):</td><td>'+data.model_engine_ci+'</td></tr>';
     out += '<tr><td>Engine Bore (mm):</td><td>'+data.model_engine_bore_mm+'</td></tr>';
     out += '<tr><td>Engine Bore (in):</td><td>'+data.model_engine_bore_in+'</td></tr>';
     out += '<tr><td>Engine Stroke (mm):</td><td>'+data.model_engine_stroke_mm+'</td></tr>';
     out += '<tr><td>Engine Stroke (in):</td><td>'+data.model_engine_stroke_in+'</td></tr>';
     out += '<tr><td>Engine Valves Per Cylinder:</td><td>'+data.model_engine_valves_per_cyl+'</td></tr>';
     out += '<tr><td>Engine Valves:</td><td>'+data.model_engine_valves+'</td></tr>';
     out += '<tr><td>Engine Max Power (HP):</td><td>'+data.model_engine_power_hp+'</td></tr>';
     out += '<tr><td>Engine Max Power (PS):</td><td>'+data.model_engine_power_ps+'</td></tr>';
     out += '<tr><td>Engine Max Power (kW):</td><td>'+data.model_engine_power_kw+'</td></tr>';
     out += '<tr><td>Engine Max Power RPM:</td><td>'+data.model_engine_power_rpm+'</td></tr>';
     out += '<tr><td>Engine Max Torque (Nm):</td><td>'+data.model_engine_torque_nm+'</td></tr>';
     out += '<tr><td>Engine Max Torque (Lb-Ft):</td><td>'+data.model_engine_torque_lbft+'</td></tr>';
     out += '<tr><td>Engine Max Torque (kgf-m):</td><td>'+data.model_engine_torque_kgm+'</td></tr>';
     out += '<tr><td>Engine Max Torque RPM:</td><td>'+data.model_engine_torque_rpm+'</td></tr>';
     out += '<tr><td>Engine Compression Ratio:</td><td>'+data.model_engine_compression+'</td></tr>';
*/       
     //out += '<tr><td>0-100 kph (0-62mph):</td><td>'+data.model_0_to_100_kph+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
     //out += '<tr><td>Doors:</td><td>'+data.model_doors'</td></tr>';averageKmMin averageKmMax
     /* out += '<tr><td>Weight (kg):</td><td>'+data.tempCarModelHeaderVO.carModel1[0].averageKmMin+'</td></tr>';
     out += '<tr><td>Weight (lbs):</td><td>'+data.model_weight_lbs+'</td></tr>';
     out += '<tr><td>Length (mm):</td><td>'+data.model_length_mm+'</td></tr>';
     out += '<tr><td>Length (in):</td><td>'+data.model_length_in+'</td></tr>';
     out += '<tr><td>Width (mm):</td><td>'+data.model_width_mm+'</td></tr>';
     out += '<tr><td>Width (in):</td><td>'+data.model_width_in+'</td></tr>';
     out += '<tr><td>Height (mm):</td><td>'+data.model_height_mm+'</td></tr>';
     out += '<tr><td>Height (in):</td><td>'+data.model_height_in+'</td></tr>';
     out += '<tr><td>Wheelbase (mm):</td><td>'+data.model_wheelbase_mm+'</td></tr>';
     out += '<tr><td>Wheelbase (in):</td><td>'+data.model_wheelbase_in+'</td></tr>';
     out += '<tr><td>Fuel Economy City(l/100km):</td><td>'+data.model_lkm_city+'</td></tr>';
     out += '<tr><td>Fuel Economy City(mpg):</td><td>'+data.model_mpg_city+'</td></tr>';
     out += '<tr><td>Fuel Economy HWY(l/100km):</td><td>'+data.model_lkm_hwy+'</td></tr>';
     out += '<tr><td>Fuel Economy HWY(mpg):</td><td>'+data.model_mpg_hwy+'</td></tr>';
     out += '<tr><td>Fuel Economy Mixed(l/100km):</td><td>'+data.model_lkm_mixed+'</td></tr>';
     out += '<tr><td>Fuel Economy Mixed(mpg):</td><td>'+data.model_mpg_mixed+'</td></tr>';
     out += '<tr><td>Fuel Capacity(l):</td><td>'+data.model_fuel_cap_l+'</td></tr>';
     out += '<tr><td>Fuel Capacity(g):</td><td>'+data.model_fuel_cap_g+'</td></tr>';
*/
     out += '</table>';

     out = out.replace(/>null</g, ">Not Available<");

     return out;
    },
    
    
    carDataHTMLSpecDealer : function(data)
    {
     var sold_in_us = "No";
     //if(data.model_sold_in_us == "1") sold_in_us = "Yes";

 var out = '<table class="model-data">';

/*     out += '<tr><th colspan="2">'+data.modelYear+' '+data.modelDisplay+' '+data.modelName+' '+data.modelVariant+'</th></tr>';

     out += '<tr><td colspan="2">Car Model Header<hr/></td></tr>';
     out += '<tr><td>Autoscoop Trim:</td><td>'+data.flex1+'</td></tr>';
     out += '<tr><td>Model Series:</td><td>'+data.modelSeries+'</td></tr>';
     out += '<tr><td>Model Batch:</td><td>'+data.modelBatch+'</td></tr>';
     out += '<tr><td>Model Trim:</td><td>'+data.modelTrim+'</td></tr>';
     out += '<tr><td>Manufactured Year:</td><td>'+data.manfYear+'</td></tr>';
     out += '<tr><td>Model Body:</td><td>'+data.modelBody+'</td></tr>';
     out += '<tr><td>Engine size:</td><td>'+data.engineSize+'</td></tr>';
     out += '<tr><td>Engine Cylinders:</td><td>'+data.cylinder+'</td></tr>';
     out += '<tr><td>No of Gears:</td><td>'+data.noOfGears+'</td></tr>';
     out += '<tr><td>Engine Fuel Type:</td><td>'+data.fuelType+'</td></tr>';
     out += '<tr><td>Drive:</td><td>'+data.driveType+'</td></tr>';
     out += '<tr><td>Transmission Type:</td><td>'+data.transimission+'</td></tr>';
     out += '<tr><td>Changed Doors:<html:text property="region" </td><td>'+data.modelDoors+'</td></tr>';
     out += '<tr><td>Seats:</td><td>'+data.modelSeats+'</td></tr>';
    
     out +='<br/>';
*/     
     out += '<tr><td colspan="2">Car Model Overview<hr/></td></tr>';
    /* out += '<tr><td>price:</td><td>'+data.carModel[0].price+'</td></tr>';
     if(data.carModel[0].priceGuideEGC!=null)
    	 out += '<tr><td>Price Guide EGC:</td><td>'+data.carModel[0].priceGuideEGC+'</td></tr>';
     if(data.carModel[0].fuelType!=null)
    	 out += '<tr><td>Fuel Type:</td><td>'+data.carModel[0].fuelType+'</td></tr>';
     if(data.carModel[0].series!=null)
    	 out += '<tr><td>Series:</td><td>'+data.carModel[0].series+'</td></tr>';
     if(data.carModel[0].recommendedRonRating!=null)	
    	 out += '<tr><td>Recommended Ron Rating:</td><td>'+data.carModel[0].recommendedRonRating+'</td></tr>';
     if(data.carModel[0].body!=null)
    	 out += '<tr><td>Body:</td><td>'+data.carModel[0].body+'</td></tr>';
     if(data.carModel[0].releaseYear!=null)
    	 out += '<tr><td>Release Year:</td><td>'+data.carModel[0].releaseYear+'</td></tr>';
     if(data.carModel[0].noOfDoors!=null)
    	 out += '<tr><td>No Of Doors:</td><td>'+data.carModel[0].noOfDoors+'</td></tr>';
     if(data.carModel[0].fuelType!=null)
    	 out += '<tr><td>VIN:</td><td>'+data.carModel[0].vin+'</td></tr>';
     out += '<tr><td>Seat Capacity:</td><td>'+data.carModel[0].seatCapacity+'</td></tr>';
     out += '<tr><td>Transmission:</td><td>'+data.carModel[0].transmission+'</td></tr>';
     if(data.carModel[0].overallGreenStarRating!=null)     
    	 out += '<tr><td>Overall GreenStar Rating:</td><td>'+data.carModel[0].overallGreenStarRating+'</td></tr>';
     if(data.carModel[0].ancapSafetyRating!=null)
    	 out += '<tr><td>ancap Safety Rating:</td><td>'+data.carModel[0].ancapSafetyRating+'</td></tr>';
     out += '<tr><td>Steering:</td><td>'+data.carModel[0].steering+'</td></tr>';
     if(data.carModel[0].manfYear!=null)  
    	 out += '<tr><td>Manufacture Year:</td><td>'+data.carModel[0].manfYear+'</td></tr>';
     out += '<tr><td>No Of Gears:</td><td>'+data.carModel[0].noOfGears+'</td></tr>';
     out += '<tr><td>Badge:</td><td>'+data.carModel[0].badge+'</td></tr>';
     out += '<tr><td>Country of Origin:</td><td>'+data.carModel[0].countryOfOrigin+'</td></tr>';
     
     
     out += '<tr><td>Car Model Pricing:</td><td>Yes</td></tr>';
     
     out += '<tr><td colspan="2"><hr/></td></tr>';
     out += '<tr><td valign="top">Available Color:</td><td>'+data.carModel1[0].availableColour+'</td></tr>';
     out += '<tr><td valign="top">prices:</td><td>'+data.carModel1[0].prices+'</td></tr>';
     out += '<tr><td valign="top">redbookPriceGuide:</td><td>'+data.carModel1[0].redbookPriceGuide+'</td></tr>';
     out += '<tr><td valign="top">privatePriceGuideMin:</td><td>'+data.carModel1[0].privatePriceGuideMin+'</td></tr>';
     out += '<tr><td valign="top">privatePriceGuideMax:</td><td>'+data.carModel1[0].privatePriceGuideMax+'</td></tr>';
     out += '<tr><td valign="top">tradePriceGuideMin:</td><td>'+data.carModel1[0].tradePriceGuideMin+'</td></tr>';
     out += '<tr><td valign="top">tradePriceGuideMax:</td><td>'+data.carModel1[0].tradePriceGuideMax+'</td></tr>';
     out += '<tr><td valign="top">averageKmMin:</td><td>'+data.carModel1[0].averageKmMin+'</td></tr>';
     out += '<tr><td valign="top">averageKmMax:</td><td>'+data.carModel1[0].averageKmMax+'</td></tr>';
     out += '<tr><td valign="top">priceWhenNew:</td><td>'+data.carModel1[0].priceWhenNew+'</td></tr>';
     out += '<tr><td valign="top">state:</td><td>'+data.carModel1[0].state+'</td></tr>';
     out += '<tr><td valign="top">rego:</td><td>'+data.carModel1[0].rego+'</td></tr>';
     
     out += '<tr><td colspan="2">Car Model Colours<hr/></td></tr>';
     
      
	   
     out += '<tr><th>'+"Available Colour"+'</th><th>'+"Price"+'</th><th>'+'</th></tr>';
     var options = '<option value="">Please choose a Color</option>';  
     for(i=0;i<data.carModel3.length;i++)
		{
		
		out= out+'<tr>'+'<td>'+data.carModel3[i].availableColour+'</td>'+'<td>'+data.carModel3[i].price+'</td>' + '</tr>';
		options += '<option value="' +data.carModel3[i].availableColour+ '">' +data.carModel3[i].availableColour + '</option>';
		
		}
	   
       //alert(options);
       $("#carColor").html(options);
       $("#carColor2").html(options);
*/	   
     /*out += '<tr><td>Engine Displacement (cc):</td><td>'+data.model_engine_cc+'</td></tr>';
     out += '<tr><td>Engine Displacement (l):</td><td>'+data.model_engine_l+'</td></tr>';
     out += '<tr><td>Engine Displacement (cubic inches):</td><td>'+data.model_engine_ci+'</td></tr>';
     out += '<tr><td>Engine Bore (mm):</td><td>'+data.model_engine_bore_mm+'</td></tr>';
     out += '<tr><td>Engine Bore (in):</td><td>'+data.model_engine_bore_in+'</td></tr>';
     out += '<tr><td>Engine Stroke (mm):</td><td>'+data.model_engine_stroke_mm+'</td></tr>';
     out += '<tr><td>Engine Stroke (in):</td><td>'+data.model_engine_stroke_in+'</td></tr>';
     out += '<tr><td>Engine Valves Per Cylinder:</td><td>'+data.model_engine_valves_per_cyl+'</td></tr>';
     out += '<tr><td>Engine Valves:</td><td>'+data.model_engine_valves+'</td></tr>';
     out += '<tr><td>Engine Max Power (HP):</td><td>'+data.model_engine_power_hp+'</td></tr>';
     out += '<tr><td>Engine Max Power (PS):</td><td>'+data.model_engine_power_ps+'</td></tr>';
     out += '<tr><td>Engine Max Power (kW):</td><td>'+data.model_engine_power_kw+'</td></tr>';
     out += '<tr><td>Engine Max Power RPM:</td><td>'+data.model_engine_power_rpm+'</td></tr>';
     out += '<tr><td>Engine Max Torque (Nm):</td><td>'+data.model_engine_torque_nm+'</td></tr>';
     out += '<tr><td>Engine Max Torque (Lb-Ft):</td><td>'+data.model_engine_torque_lbft+'</td></tr>';
     out += '<tr><td>Engine Max Torque (kgf-m):</td><td>'+data.model_engine_torque_kgm+'</td></tr>';
     out += '<tr><td>Engine Max Torque RPM:</td><td>'+data.model_engine_torque_rpm+'</td></tr>';
     out += '<tr><td>Engine Compression Ratio:</td><td>'+data.model_engine_compression+'</td></tr>';
*/       
     //out += '<tr><td>0-100 kph (0-62mph):</td><td>'+data.model_0_to_100_kph+'</td></tr>';

     out += '<tr><td colspan="2"><hr/></td></tr>';
     //out += '<tr><td>Doors:</td><td>'+data.model_doors'</td></tr>';averageKmMin averageKmMax
     /* out += '<tr><td>Weight (kg):</td><td>'+data.tempCarModelHeaderVO.carModel1[0].averageKmMin+'</td></tr>';
     out += '<tr><td>Weight (lbs):</td><td>'+data.model_weight_lbs+'</td></tr>';
     out += '<tr><td>Length (mm):</td><td>'+data.model_length_mm+'</td></tr>';
     out += '<tr><td>Length (in):</td><td>'+data.model_length_in+'</td></tr>';
     out += '<tr><td>Width (mm):</td><td>'+data.model_width_mm+'</td></tr>';
     out += '<tr><td>Width (in):</td><td>'+data.model_width_in+'</td></tr>';
     out += '<tr><td>Height (mm):</td><td>'+data.model_height_mm+'</td></tr>';
     out += '<tr><td>Height (in):</td><td>'+data.model_height_in+'</td></tr>';
     out += '<tr><td>Wheelbase (mm):</td><td>'+data.model_wheelbase_mm+'</td></tr>';
     out += '<tr><td>Wheelbase (in):</td><td>'+data.model_wheelbase_in+'</td></tr>';
     out += '<tr><td>Fuel Economy City(l/100km):</td><td>'+data.model_lkm_city+'</td></tr>';
     out += '<tr><td>Fuel Economy City(mpg):</td><td>'+data.model_mpg_city+'</td></tr>';
     out += '<tr><td>Fuel Economy HWY(l/100km):</td><td>'+data.model_lkm_hwy+'</td></tr>';
     out += '<tr><td>Fuel Economy HWY(mpg):</td><td>'+data.model_mpg_hwy+'</td></tr>';
     out += '<tr><td>Fuel Economy Mixed(l/100km):</td><td>'+data.model_lkm_mixed+'</td></tr>';
     out += '<tr><td>Fuel Economy Mixed(mpg):</td><td>'+data.model_mpg_mixed+'</td></tr>';
     out += '<tr><td>Fuel Capacity(l):</td><td>'+data.model_fuel_cap_l+'</td></tr>';
     out += '<tr><td>Fuel Capacity(g):</td><td>'+data.model_fuel_cap_g+'</td></tr>';
*/
     out += '</table>';

     out = out.replace(/>null</g, ">Not Available<");

     return out;
    },
    
    populateCarDataList : function(model_id)
    {
     //Show this list
     $("#"+this.trim_data_list_id).show();

     //Hide the lists
     $("#"+this.trim_list_id).hide();
     $("#"+this.model_list_id).hide();
     $("#"+this.make_list_id).hide();

     //Set loading message
     $("#"+this.trim_data_list_id).html('Loading Model Data...');

     var sender = this;

     //Get Car Model JSON for the selected make
 $.getJSON(this.base_url+"?callback=?", {cmd:"getModel", model:model_id}, function(data) {

     if(!sender.responseError(data))
     {
         var out = '<div class="car_data_breadcrumbs"><a href="javascript:void()" onclick="$(\'#'+sender.trim_data_list_id+'\').hide();$(\'#'+sender.make_list_id+'\').show();$(\'#'+sender.model_list_id+'\').show();">'+data[0].make_display+'</a> > ';
         out +=   '<a href="javascript:void()"  onclick="$(\'#'+sender.trim_data_list_id+'\').hide();$(\'#'+sender.make_list_id+'\').show();$(\'#'+sender.model_list_id+'\').show();$(\'#'+sender.trim_list_id+'\').show();">'+data[0].model_name+'</a></div><fieldset>';

     out += sender.carDataHTML(data[0]) + '</fieldset>';

         $("#"+sender.trim_data_list_id).html(out);
     }
        });
    },

    populateCarData : function(model_data_id)
    {
  var country;
var modelYear;
var modelDisplay;
var modelName;
var modelTrim;
     this.model_data_id = model_data_id;
 this.cur_trim = $("select#"+this.trim_select_id).val();

 //Make sure there is a trim selected
 if(this.cur_trim == null || this.cur_trim == "")
 {
  $("#"+this.model_data_id).html("");
  //alert('Please select a year, make, and model.');
  return;
 }

  //Set a loading message while we retrieve the data
        $("#"+this.model_data_id).html("Loading Model Data...");

        var sender = this;
/*alert("this.cur_trim"+this.cur_trim);
alert(this.cur_year);
alert(this.cur_model);
alert(this.cur_make);*/

        //Get Car Model JSON for the selected make
     $.getJSON(this.base_url+"?callback=?", {cmd:"getModel", model:this.cur_trim}, function(data) {

     if(!sender.responseError(data))
     {
      var out = sender.carDataHTML(data[0]);
		country = data[0].make_country;
		modelYear= data[0].model_year;
		modelDisplay=data[0].make_display;
		modelName=data[0].model_name;
		modelTrim=data[0].model_trim;
         $("#"+sender.model_data_id).html(out);
        }
        });
    },
    
    populateCarDataBeforeMRP : function(model_data_id)
    {
/*alert("inside before MRP");*/
var e = document.getElementById("car-model-trims"); 
var strUser = e.options[e.selectedIndex].text;

this.model_data_id = model_data_id;

//var url= "http://www.autoscoop.com.au/api/carModelTemplateFor?modelYear="+this.cur_year+"&modelDisplay="+this.cur_make+"&modelName="+this.cur_model+"&modelTrim="+strUser;
//var url= "http://localhost:8080/MyCarDomain/api/carModelTemplateFor?modelYear="+this.cur_year+"&modelDisplay="+this.cur_make+"&modelName="+this.cur_model+"&modelTrim="+strUser;
var url="api/carModelTemplateFor?modelYear="+this.cur_year+"&modelDisplay="+this.cur_make+"&modelName="+this.cur_model+"&modelTrim="+strUser;
/*alert("url"+url);*/

var sender = this;    
$.ajax({  
	/*headers: {"X-My-Custom-Header": "*"},*/
	    type: "GET",  
	    url: url,  
	       success: function(result){
	    	   //alert("successfully searched in Autoscoop DB");
	    	   /*alert("result value"+result.tempModelId);*/
	    	   if(result.tempModelId !== undefined){
	    		   //alert("Template Card Model found with CardModel ID : "+result.tempModelId);
	    		   //alert("Populating.. data with CardModel ID : "+result.tempModelId);
	    		   document.getElementById("tempCarModelId").value = result.tempModelId;
	    		   document.getElementById("mrpPrice").value = result.mrlp;
	    		   document.getElementById("extraCost").value = result.extraCost;
	    		   document.getElementById("onRoadCost").value = result.onRoadCost;
	    		   document.getElementById("driveAwayPrice").value = result.avgPrice;
	    		   for(i=0;i<result.photosTemplate.length;i++)
	           		{
	    			   document.getElementById("uploadphoto"+(i+1)+"Id").value= result.photosTemplate[i].templatePhotoId; //111 111-1111
	    			   /*alert("id"+"uploadphoto"+(i+1)+"Id");*/
	    			   document.getElementById("uploadphoto"+(i+1)).value= result.photosTemplate[i].photo1;
	    			   /*alert("value"+"uploadphoto"+(i+1));*/
	    			   
	    			}
	    		   for(i=0;i<result.countryTemplate.length;i++)
	           		{
	    			   document.getElementById("country"+(i+1)+"Id").value= result.countryTemplate[i].templateCountryId; //111 111-1111
	    			   document.getElementById("country"+(i+1)).value= result.countryTemplate[i].country;
	    			   
	    			}
	    		   for(i=0;i<result.youtubeTemplate.length;i++)
	           		{
	    			   document.getElementById("uploadLink"+(i+1)+"Id").value= result.youtubeTemplate[i].templateYoutubeId; //111 111-1111
	    			   document.getElementById("uploadLink"+(i+1)).value= result.youtubeTemplate[i].ylink1;
	    			   
	    			}
	    		   for(i=0;i<result.blogTemplate.length;i++)
	           		{
	    			   document.getElementById("writeBlog"+(i+1)+"Id").value= result.blogTemplate[i].templateBlogId; //111 111-1111
	    			   document.getElementById("writeBlog"+(i+1)).value= result.blogTemplate[i].blink1;
	    			   
	    			}
	    		   for(i=0;i<result.userReviewTemplate.length;i++)
	           		{
	    			   document.getElementById("writeReview"+(i+1)+"Id").value= result.userReviewTemplate[i].templateUserReviewId; //111 111-1111
	    			   document.getElementById("writeReview"+(i+1)).value= result.userReviewTemplate[i].review1;
	    			   
	    			}
	    		   /*alert(""+result.specificationTemplate.templateSpecificationId);*/
	    		   var out = sender.carDataHTMLMRP12(result.specificationTemplate,result.modelYear, result.modelDisplay, result.modelName, result.modelTrim);
	    		  
	    		            $("#"+sender.model_data_id).html(out);
	    	   }
	    	   else {
	    		   
	    		   alert("No record found in Autoscoop DB, Now you can create a new one");
	    		   document.getElementById("tempCarModelId").value = "";
	    		   document.getElementById("mrpPrice").value = "";
	    		   document.getElementById("extraCost").value = "";
	    		   document.getElementById("onRoadCost").value = "";
	    		   document.getElementById("driveAwayPrice").value = "";
	    		   
	    		   document.getElementById("uploadphoto1Id").value= "";
    			   document.getElementById("uploadphoto1").value= "";
    			   document.getElementById("uploadphoto2Id").value= "";
    			   document.getElementById("uploadphoto2").value= "";
    			   document.getElementById("uploadphoto3Id").value= "";
    			   document.getElementById("uploadphoto3").value= "";
    			   document.getElementById("uploadphoto4Id").value= "";
    			   document.getElementById("uploadphoto4").value= "";
    			   
    			   document.getElementById("country1Id").value= "";
    			   document.getElementById("country1").value= "";
    			   document.getElementById("country2Id").value= "";
    			   document.getElementById("country2").value= "";
    			   document.getElementById("country3Id").value= "";
    			   document.getElementById("country3").value= "";
    			   document.getElementById("country4Id").value= "";
    			   document.getElementById("country4").value= "";
    			   
    			   document.getElementById("uploadLink1Id").value= "";
    			   document.getElementById("uploadLink1").value= "";
    			   document.getElementById("uploadLink2Id").value= "";
    			   document.getElementById("uploadLink2").value= "";
    			   document.getElementById("uploadLink3Id").value= "";
    			   document.getElementById("uploadLink3").value= "";
    			   document.getElementById("uploadLink4Id").value= "";
    			   document.getElementById("uploadLink4").value= "";
    			   
    			   document.getElementById("writeBlog1Id").value= "";
    			   document.getElementById("writeBlog1").value= "";
    			   document.getElementById("writeBlog2Id").value= "";
    			   document.getElementById("writeBlog2").value= "";
    			   document.getElementById("writeBlog3Id").value= "";
    			   document.getElementById("writeBlog3").value= "";
    			   document.getElementById("writeBlog4Id").value= "";
    			   document.getElementById("writeBlog4").value= "";
    			   
    			   document.getElementById("writeReview1Id").value= "";
    			   document.getElementById("writeReview1").value= "";
    			   document.getElementById("writeReview2Id").value= "";
    			   document.getElementById("writeReview2").value= "";
    			   document.getElementById("writeReview3Id").value= "";
    			   document.getElementById("writeReview3").value= "";
    			   document.getElementById("writeReview4Id").value= "";
    			   document.getElementById("writeReview4").value= "";
    			   sender.carDataHTMLMRPEmpty();
    			   
    			   sender.populateCarDataMRP(model_data_id);
	    	   }
	    	   
       } 
	  }); 


    },

    populateCarDataSpecDealer : function(model_data_id, trim)
    {
			//alert("inside DataSpecDealer");
			this.model_data_id = model_data_id;

//var url= "http://www.autoscoop.com.au/api/carModelTemplateFor?modelYear="+this.cur_year+"&modelDisplay="+this.cur_make+"&modelName="+this.cur_model+"&modelTrim="+strUser;
//var url= "http://localhost:8080/MyCarDomain/api/carModelTemplateFor?modelYear="+this.cur_year+"&modelDisplay="+this.cur_make+"&modelName="+this.cur_model+"&modelTrim="+strUser;
var url="api/tempCarModelTemplateForAutoTrim?flex1="+trim;
/*alert("url"+url);*/

var sender = this;    
$.ajax({  
	/*headers: {"X-My-Custom-Header": "*"},*/
	    type: "GET",  
	    url: url,  
	       success: function(result){
	    	   //var sender = this;
	           //alert(JSON.stringify(result));
	    	   var out = sender.carDataHTMLSpecDealer(result);
	           //alert(out);
	           $("#"+sender.model_data_id).html(out);
	    	   
       } 
	  }); 


    },

populateCarDataMRP : function(model_data_id)
    {

/*alert("if no record found in DB");*/

  var country;
var modelYear;
var modelDisplay;
var modelName;
var modelTrim;
     this.model_data_id = model_data_id;
 this.cur_trim = $("select#"+this.trim_select_id).val();

 //Make sure there is a trim selected
 if(this.cur_trim == null || this.cur_trim == "")
 {
  $("#"+this.model_data_id).html("");
  //alert('Please select a year, make, and model.');
  return;
 }

  //Set a loading message while we retrieve the data
        $("#"+this.model_data_id).html("Loading Model Data...");

        var sender = this;
/*alert("this.cur_trim"+this.cur_trim);
alert(this.cur_year);
alert(this.cur_model);
alert(this.cur_make);*/

        //Get Car Model JSON for the selected make
     $.getJSON(this.base_url+"?callback=?", {cmd:"getModel", model:this.cur_trim}, function(data) {

     if(!sender.responseError(data))
     {
      var out = sender.carDataHTMLMRP(data[0]);
country = data[0].make_country;
modelYear= data[0].model_year;
modelDisplay=data[0].make_display;
modelName=data[0].model_name;
modelTrim=data[0].model_trim;
         $("#"+sender.model_data_id).html(out);
        }
        });
    },

    populateCarDataSpec : function(model_data_id, value1)
    {
    	//alert("inside js");
  var country;
/*var modelYear = year;
var modelDisplay= modelDisplay;
var modelName = modelName;*/
var modelTrim = modelTrim;

/*this.cur_make= modelDisplay;
this.cur_model= modelName;*/
this.cur_trim  = modelTrim;
/*this.cur_year= year;*/
     this.model_data_id = model_data_id;
 
//alert(this.cur_trim);
  //Set a loading message while we retrieve the data
        $("#"+this.model_data_id).html("Loading Model Data Specification...");

        var sender = this;
        var out = sender.carDataHTMLSpec(value1);
        //alert(out);
        country = value1.make_country;
        modelYear= value1.model_year;
        modelDisplay=value1.make_display;
        modelName=value1.model_name;
        modelTrim=value1.model_trim;
        
        $("#"+sender.model_data_id).html(out);
        //alert("in");
        //alert(value1.tempCarModelHeaderVO.carModel3);
        //populateColorSelect(value1.tempCarModelHeaderVO.carModel3);//data.tempCarModelHeaderVO.carModel3
/*alert(this.cur_trim);*/
        //Get Car Model JSON for the selected make
/*     $.getJSON(this.base_url+"?callback=?", {cmd:"getModel", model:this.cur_trim}, function(data) {

     if(!sender.responseError(data))
     {
      var out = sender.carDataHTMLSpec(data[0]);
country = data[0].make_country;
modelYear= data[0].model_year;
modelDisplay=data[0].make_display;
modelName=data[0].model_name;
modelTrim=data[0].model_trim;
         $("#"+sender.model_data_id).html(out);
        }
        });
     
     
*/ 
        
    },
    populateCarDataStore : function(model_data_id,price, regNo, driveType, kilometer, vinNumber, vendorStockNo, stockItem)
    {
    	//alert("NOW "+$('#price').val());
    	this.price= price;
    	this.regNo= regNo;
    	this.driveType= driveType;
    	this.kilometer= kilometer;
    	this.vinNumber= vinNumber;
    	this.vendorStockNo= vendorStockNo;
    	this.stockItem= stockItem; 
    	
this.price= $('#price').val();
//alert("price"+price);
this.regNo= $('#regNo').val();
this.driveType= $('#driveType').val();
this.kilometer= $('#kilometer').val();
this.vinNumber= $('#vinNumber').val();
this.vendorStockNo= $('#vendorStockNo').val();
this.stockItem= $("select#"+this.stockItem).val();

     this.model_data_id = model_data_id;
 this.cur_trim = $("select#"+this.trim_select_id).val();

 //Make sure there is a trim selected
 if(this.cur_trim == null || this.cur_trim == "")
 {
  $("#"+this.model_data_id).html("");
  //alert('Please select a year, make, and model.');
  return;
 }

  //Set a loading message while we retrieve the data
        $("#"+this.model_data_id).html("Loading Model Data...");

        var sender = this;

        //Get Car Model JSON for the selected make
     $.getJSON(this.base_url+"?callback=?", {cmd:"getModel", model:this.cur_trim}, function(data) {

     if(!sender.responseError(data))
     {
      var out = sender.carDataHTMLStore(data[0]);
      out += 'price|'+$('#price').val()+'*'+'regNo|'+$('#regNo').val()+'*'+'driveType|'+$('#driveType').val()+'*'+'kilometer|'+$('#kilometer').val()+'*'+'vinNumber|'+$('#vinNumber').val()+'*'+'vendorStockNo|'+$('#vendorStockNo').val()+'*'+'stockItem|'+this.stockItem+'*';
      if(!$('#idno').val()==""){
          out += 'idno|'+$('#idno').val()+'*';}   
      /*alert("came here now changed are 11 Oct1");*/
         $.ajax({  
        	    /*type: "GET",  
        	    url: "EmployeeServlet",*/  
        	    data: "email="+out,  
        	    /*type: 'post',*/
                success: function(result){
                	 /*alert(result);
                	 alert(result.url);*/
                 /* window.location = "/EmployeeAppWAR/pages/StepAfterInventory.jsp";*/
                  window.location = "inventory_final.do?ValueToSubmit=" + out;
                } 

        	   /* success: function(result){  
        	      alert(result);
        	    }*/                
        	  }); 
        }
        });
    },
    
    populateCarDataStore1 : function(model_data_id)
    {
  var country;
var modelYear;
var modelDisplay;
var modelName;
var modelTrim;
     this.model_data_id = model_data_id;
 this.cur_trim = $("select#"+this.trim_select_id).val();

 //Make sure there is a trim selected
 if(this.cur_trim == null || this.cur_trim == "")
 {
  $("#"+this.model_data_id).html("");
  //alert('Please select a year, make, and model.');
  return;
 }

  //Set a loading message while we retrieve the data
        $("#"+this.model_data_id).html("Loading Model Data...");

        var sender = this;

        //Get Car Model JSON for the selected make
     $.getJSON(this.base_url+"?callback=?", {cmd:"getModel", model:this.cur_trim}, function(data) {

     if(!sender.responseError(data))
     {
      var out = sender.carDataHTMLStore(data[0]);
      if(!$('#idno').val()==""){
      out += 'idno|'+$('#idno').val()+'*';}
         //alert("came here now changed are 3 Oct1");
         $.ajax({  
        	    /*type: "GET",  
        	    url: "EmployeeServlet",*/  
        	    data: "email="+out,  
        	    /*type: 'post',*/
                success: function(result){
                	 /*alert(result);
                	 alert(result.url);*/
                 /* window.location = "/EmployeeAppWAR/pages/StepAfterInventory.jsp";*/
                  window.location = "final.do?ValueToSubmit=" + out;
                } 

        	   /* success: function(result){  
        	      alert(result);
        	    }*/                
        	  }); 
        }
        });
    },
    dealerBoardCallSearch : function(model_data_id, userid)
    {
     this.model_data_id = model_data_id;
          //$("#"+this.model_data_id).html("Loading Model Data...");
        var sender = this;
        //var url = "http://www.autoscoop.com.au/api/dealer/"+userid;
        //var url = "http://localhost:8080/MyCarDomain/api/dealer/"+userid;
        var url = "api/dealer/"+userid;
//alert("user id"+url);

        //Get Car Model JSON for the selected make
        
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
            	  
            	   out += '<tr><th>'+"Inventory ID"+'</th><th>'+"Model Trim"+'</th><th>'+"Model Display"+'</th><th>'+"Model Year"+'</th></tr>';
            	   for(i=0;i<result.inventory.length;i++)
           		{
           		/*alert(result.search[i].carSearchId); //111 111-1111
           		alert(result.search[i].modelDisplay);
           		alert(result.search[i].modelTrim);
           		alert(result.search[i].modelYear);*/
           		out= out+'<tr>'+'<td>'+result.inventory[i].repoId+'</td>'+'<td>'+result.inventory[i].modelTrim+'</td>'+'<td>'+result.inventory[i].modelDisplay+'</td>'+'<td>'+result.inventory[i].modelYear+'</td>'+'</tr>';
           		
           		
           		}
            	   //alert(out);
            	   $("#"+sender.model_data_id).append(out);
            	   //alert("came here 2");
            	   out2="";
            	   /*alert(Object.keys( result.search ).length);*/
            	   /*var json = JSON.parse(result1);*/
            	   /*var json = $.parseJSON(result1);*/
            	   out2 += '<tr><th>'+"Quotation ID"+'</th><th>'+"Model Trim"+'</th><th>'+"Model Display"+'</th><th>'+"Model Year"+'</th></tr>';
            	   for(i=0;i<result.vehicleQuotation.length;i++)
           		{
           		/*alert(result.search[i].carSearchId); //111 111-1111
           		alert(result.search[i].modelDisplay);
           		alert(result.search[i].modelTrim);
           		alert(result.search[i].modelYear);*/
           		out2= out2+'<tr>'+'<td>'+result.vehicleQuotation[i].quotId+'</td>'+'<td>'+result.vehicleQuotation[i].modelTrim+'</td>'+'<td>'+result.vehicleQuotation[i].modelDisplay+'</td>'+'<td>'+result.vehicleQuotation[i].modelYear+'</td>'+'</tr>';
           		
           		
           		}
            	  sender.forFinance("quotation1",out2);
            	   
            	  out1="";
           	   /*alert(Object.keys( result.search ).length);*/
           	   /*var json = JSON.parse(result1);*/
           	   /*var json = $.parseJSON(result1);*/
           	   out1 += '<tr><th>'+"Car Finance ID"+'</th><th>'+"Model Year"+'</th><th>'+"Model Display"+'</th><th>'+"Model Name"+'</th></tr>';
           	   for(i=0;i<result.dealSearch.length;i++)
          		{
          		/*alert(result.search[i].carSearchId); //111 111-1111
          		alert(result.search[i].modelDisplay);
          		alert(result.search[i].modelTrim);
          		alert(result.search[i].modelYear);*/
          		out1= out1+'<tr>'+'<td>'+result.dealSearch[i].dealSearchId+'</td>'+'<td>'+result.dealSearch[i].modelYear+'</td>'+'<td>'+result.dealSearch[i].modelDisplay+'</td>'+'<td>'+result.dealSearch[i].modelName+'</td>'+'</tr>'+result.dealSearch[i].modelTrim+'</td>'+'</tr>';
          		
          		
          		}
           	  sender.forFinance("data1",out1);
            	  quotation1   
                 
               } 
       	  }); 
       
    },

    dashBoardCallSearch : function(model_data_id, userid)
    {
    	//alert("inside");
     this.model_data_id = model_data_id;
          //$("#"+this.model_data_id).html("Loading Model Data...");
        var sender = this;
        //var url = "http://www.autoscoop.com.au/api/user/"+userid;
//var url = "http://localhost:8080/MyCarDomain/api/user/"+userid;
var url = "api/user/"+userid;
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
            	   out += '<tr><th>'+"Car Search ID"+'</th><th>'+"Model Trim"+'</th><th>'+"Model Display"+'</th><th>'+"Model Year"+'</th></tr>';
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
            	   out1 += '<tr><th>'+"Car Finance ID"+'</th><th>'+"Vehicle Value"+'</th><th>'+"Balloon Pay"+'</th><th>'+"Loan Amount"+'</th></tr>';
            	   for(i=0;i<result.searchFinance.length;i++)
           		{
           		/*alert(result.search[i].carSearchId); //111 111-1111
           		alert(result.search[i].modelDisplay);
           		alert(result.search[i].modelTrim);
           		alert(result.search[i].modelYear);*/
           		out1= out1+'<tr>'+'<td>'+result.searchFinance[i].searchFinanceId+'</td>'+'<td>'+result.searchFinance[i].vehValue+'</td>'+'<td>'+result.searchFinance[i].balloonPay+'</td>'+'<td>'+result.searchFinance[i].loanAmount+'</td>'+'</tr>';
           		
           		
           		}
            	  sender.forFinance("data1",out1);
            	   
            	   /*this.model_data_id = "data1";
            	   alert("came here"+this.model_data_id);
            	   $("#"+sender.model_data_id).append(out1);*/
            	  /* alert("came here"+this.model_data_id);
            	   */
            	  out2="";
            	  var insRCt=result.searchInsurance.length;
            	   document.getElementById('insRCt').innerHTML=insRCt;
            	   out2 += '<tr><th>'+"Car Insurance ID"+'</th><th>'+"Insurance Type"+'</th><th>'+"Market Value"+'</th><th>'+"Agreed Value"+'</th></tr>';
            	   for(i=0;i<result.searchInsurance.length;i++)
           		{
           		
           		out2= out2+'<tr>'+'<td>'+result.searchInsurance[i].searchInsuranceId+'</td>'+'<td>'+result.searchInsurance[i].insuranceType+'</td>'+'<td>'+result.searchInsurance[i].marketValue+'</td>'+'<td>'+result.searchInsurance[i].agreedValue+'</td>'+'</tr>';
           		
           		
           		}
            	   
            	   sender.forFinance("car-model-data2",out2);
//alert("result.search.length"+result.vehicleQuotation.length);
            	   out3="";
            	   var qtRecd = result.vehicleQuotation.length;
            	   document.getElementById('qtRecd').innerHTML=qtRecd;
            	   out3 += '<tr><th>'+"Car Quotation ID"+'</th><th>'+"Dealer Name"+'</th><th>'+"Dealer Stock No"+'</th><th>'+"drive away Price"+'</th></tr>';
            	   for(i=0;i<result.vehicleQuotation.length;i++)
           		{
           		
           		out3= out3+'<tr>'+'<td>'+result.vehicleQuotation[i].quotId+'</td>'+'<td>'+result.vehicleQuotation[i].dealerName+'</td>'+'<td>'+result.vehicleQuotation[i].dealerStockNo+'</td>'+'<td>'+result.vehicleQuotation[i].driveAwayPrice+'</td>'+'</tr>';
           		
           		
           		}
            	   
            	   sender.forFinance("quo-model-data",out3);
//alert("result.search.length"+result.financeQuotation.length);
out4="";
var finQCt=result.financeQuotation.length;
document.getElementById('finQCt').innerHTML=finQCt;
            	   out4 += '<tr><th>'+"Car Quotation ID"+'</th><th>'+"Insurance Type"+'</th><th>'+"Market Value"+'</th><th>'+"Agreed Value"+'</th></tr>';
            	   for(i=0;i<result.financeQuotation.length;i++)
           		{
           		
           		out4= out4+'<tr>'+'<td>'+result.financeQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.vehicleQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.vehicleQuotation[i].vehicleQuotationId+'</td>'+'<td>'+result.vehicleQuotation[i].vehicleQuotationId+'</td>'+'</tr>';
           		
           		
           		}
            	   
            	   sender.forFinance("quo-data1",out4);
//alert("result.search.length"+result.insuranceQuotation.length);
out5="";
var insQCt=result.insuranceQuotation.length;
            	   document.getElementById('insQCt').innerHTML=insQCt;
            	   out5 += '<tr><th>'+"Car Quotation ID"+'</th><th>'+"Insurance Type"+'</th><th>'+"Market Value"+'</th><th>'+"Agreed Value"+'</th></tr>';
            	   for(i=0;i<result.insuranceQuotation.length;i++)
           		{
           		
           		out5= out5+'<tr>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'<td>'+result.insuranceQuotation[i].insuranceQuotationId+'</td>'+'</tr>';
           		
           		
           		}
            	   
            	   sender.forFinance("quo-model-data2",out5);
            	   
            	 //alert("result.search.length"+result.insuranceQuotation.length);
            	   out6="";
            	  
            	               	   out6 += '<tr><th>'+"My Vehicle ID"+'</th><th>'+"Year"+'</th><th>'+"Make"+'</th><th>'+"Model"+'</th></tr>';
            	               	   for(i=0;i<result.myVehicle.length;i++)
            	              		{
            	              		
            	              		out6= out6+'<tr>'+'<td>'+result.myVehicle[i].myVehicleId+'</td>'+'<td>'+result.myVehicle[i].year+'</td>'+'<td>'+result.myVehicle[i].make+'</td>'+'<td>'+result.myVehicle[i].model+'</td>'+'</tr>';
            	              		
            	              		
            	              		}
            	               	   
            	               	   sender.forFinance("quo-model-data4",out6);
            	   
                 
               } 
       	  }); 
       /* $.ajax({
            url: "http://localhost:8080/MyCarDomain/api/user/70",
            data: { signature: authHeader },
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
            success: function() { alert('Success!' + authHeader); }
         });*/
    },
    
    forFinance : function(model_data_id, out)
    {
     this.model_data_id = model_data_id;
          //$("#"+this.model_data_id).html("Loading Model Data...");
     //alert("came here 2 inside");
        var sender = this;
//alert("out"+out);
        
            	   //alert(out);
            	   $("#"+sender.model_data_id).append(out);
            	   //alert("came here 2");
            	  
       /* $.ajax({
            url: "http://localhost:8080/MyCarDomain/api/user/70",
            data: { signature: authHeader },
            type: "GET",
            beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
            success: function() { alert('Success!' + authHeader); }
         });*/
    },

    
    populateSearchResult : function(model_id)
    {
     this.cur_trim = model_id;

      //Set a loading message while we retrieve the data
      $("#"+this.search_controls_id).hide();
      $("#"+this.search_result_id).show();
        $("#"+this.search_result_id).html("Loading Model Data...");

        var sender = this;

        //Get Car Model JSON for the selected make
        $.getJSON(this.base_url+"?callback=?", {cmd:"getModel", model:this.cur_trim}, function(data) {

          if(!sender.responseError(data))
          {
         var out = '<b><a href="javascript:void()" onclick="$(\'#'+sender.search_result_id+'\').hide();$(\'#'+sender.search_controls_id+'\').show();">Back to Search Results</a></b>';
         out += '<fieldset>' + sender.carDataHTML(data[0]) + '</fieldset>';
             $("#"+sender.search_result_id).html(out);
          }
        });
    },

    loadSettings : function (c_name)
    {
 var i,x,y,ARRcookies=document.cookie.split(";");
 var cookie = '';

 for (i=0;i<ARRcookies.length;i++)
 {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name) {
   cookie = unescape(y);
   break;
  }
  }
  this.settings = new Object();
  if(cookie != '') this.settings = $.parseJSON(cookie);

    },

    saveSetting : function(setting, value)
    {
     //JSON library is required to manage settings
     if(typeof JSON == 'undefined') return;

     this.settings[setting] = value;
 document.cookie = this.cookie_name + "=" + JSON.stringify(this.settings);
    },

    yearSelectChange: function ()
    {
        this.cur_year = $("select#"+this.year_select_id).val();

        //Set Cookie to save year selection
        this.saveSetting('year', this.cur_year);

         //if no year supplied, clear makes, models, return;
		 if(this.cur_year == "")
		 {
		  $("select#"+this.make_select_id).html(this.empty_option_html);
		  $("select#"+this.model_select_id).html(this.empty_option_html);
		  $("select#"+this.trim_select_id).html(this.empty_option_html);
		      return;
		     }

      //Set a loading message while we retrieve the data
        $("select#"+this.make_select_id).html("<option value=''>Loading Makes...</option>");

        var sender = this;
        //this.base_url = 'http://localhost:8080/MyCarDomain/api/tempCarModelMakesForYear?modelYear='+this.cur_year;
        //this.base_url = 'http://localhost:8080/MyCarDomain/api/tempCarModelMakesForYear';
        this.base_url = 'api/tempCarModelMakesForYear';
        //alert(this.base_url);
        //Get Car Model JSON for the selected make
     $.getJSON(this.base_url, {modelYear:this.cur_year}, function(data) {

     if(!sender.responseError(data))
     {
         sender.populateMakeSelect(data);
         sender.makeSelectChange();
        }
        });
    },
    // Start of auto trim
    yearSelectChange: function ()
    {
        this.cur_year = $("select#"+this.year_select_id).val();

        //Set Cookie to save year selection
        this.saveSetting('year', this.cur_year);

         //if no year supplied, clear makes, models, return;
 if(this.cur_year == "")
 {
  $("select#"+this.make_select_id).html(this.empty_option_html);
  $("select#"+this.model_select_id).html(this.empty_option_html);
 // $("select#"+this.trim_select_id).html(this.empty_option_html);
      return;
     }

      //Set a loading message while we retrieve the data
        $("select#"+this.make_select_id).html("<option value=''>Loading Makes...</option>");

        var sender = this;
        //this.base_url = 'http://localhost:8080/MyCarDomain/api/tempCarModelMakesForYear?modelYear='+this.cur_year;
        //this.base_url = 'http://localhost:8080/MyCarDomain/api/tempCarModelMakesForYear';
        this.base_url = 'api/tempCarModelMakesForYear';
        //alert(this.base_url);
        //Get Car Model JSON for the selected make
     $.getJSON(this.base_url, {modelYear:this.cur_year}, function(data) {

     if(!sender.responseError(data))
     {
         sender.populateMakeSelect(data);
         sender.makeSelectChange();
        }
        });
    },// End of auto trim select 

    makeSelectChange: function ()
    {
     this.cur_make = $("select#"+this.make_select_id).val();

     //If value has been selected, save make selection
     if(this.cur_make != "" && this.cur_make != null)
         this.saveSetting('make', this.cur_make);

     //if no make supplied, clear models, return;
     if(this.cur_make == "")
     {
      $("select#"+this.model_select_id).html(this.empty_option_html);
//   $("select#"+this.trim_select_id).html(this.empty_option_html);
      return;
     }

     //Set a loading message while we retrieve the data
     $("select#"+this.model_select_id).html("<option value=''>Loading Models...</option>");

     var sender = this;
     

     //this.base_url = 'http://localhost:8080/MyCarDomain/api/tempCarModelNamesForMake';
     
     this.base_url = 'api/tempCarModelNamesForMake';

     //Get Car Model JSON for the selected make
 $.getJSON(this.base_url, {modelDisplay:this.cur_make, modelYear:this.cur_year}, function(data) {

  if(!sender.responseError(data))
  {
       sender.populateModelSelect(data);

          sender.cur_model = $('select#'+sender.model_select_id).val();

          //Re-populate the trim select
          sender.modelSelectChange();
         }
     });
    },

    modelSelectChange: function ()
    {
        this.cur_model = $("select#"+this.model_select_id).val();

        //If value has been selected, save model selection
        if(this.cur_model != "" && this.cur_model != null)
         this.saveSetting('model', this.cur_model);

        //If there is no trim select, we don't need to do anything else here
        if(this.trim_select_id == '' || this.trim_select_id == null) return;

        //if no model supplied, clear trim, return;
        if(this.cur_model == "")
        {
         $("select#"+this.trim_select_id).html(this.empty_option_html);
         return;
        }

        //Set a loading message while we retrieve the data
        $("select#"+this.trim_select_id).html("<option value=''>Loading Trims...</option>");

        var sender = this;
        //this.base_url =	'http://localhost:8080/MyCarDomain/api/tempCarModelVariantForModel';
        this.base_url =	'api/tempCarModelVariantForModel';
        //Get Car Model JSON for the selected make
     $.getJSON(this.base_url, {modelDisplay:this.cur_make, modelYear:this.cur_year, modelName:this.cur_model}, function(data) {

      if(!sender.responseError(data))
          sender.populateTrimSelect(data);
      		
             sender.cur_trim = $('select#'+sender.trim_select_id).val();
        });
    },

    trimSelectChange: function ()
    {
         
     this.cur_trim = $("select#"+this.model_select_id).val();
//alert(this.cur_trim);
//alert(this.cur_model);
//alert(this.cur_make);
 //If value has been selected, save trim selection
 if(this.cur_trim != "" && this.cur_trim != null)
  this.saveSetting('trim', this.cur_trim);

 $("select#"+this.autotrim_select_id).html("<option value=''>Loading Autoscoop Trims...</option>");
 
 var sender = this;
 //this.base_url = 'http://localhost:8080/MyCarDomain/api/tempCarModelMakesForYear?modelYear='+this.cur_year;
 //this.base_url = 'http://localhost:8080/MyCarDomain/api/tempCarModelTrimForAllSelect';
 this.base_url = 'api/tempCarModelTrimForAllSelect';
 //alert(this.base_url);
 //Get Car Model JSON for the selected make modelVariant, String modelName, String modelDisplay, String modelYear
$.getJSON(this.base_url, {modelDisplay:this.cur_make, modelYear:this.cur_year, modelName:this.cur_trim}, function(data) {

if(!sender.responseError(data))
{
	//alert("data retrieved.."+data);
  sender.populateAutoTrimSelect(data);
 }
 });
 
 //If we have set color option dropdowns, populate them
     if(this.color_int_select_id != null || this.color_ext_select_id != null)
      this.populateColorSelects(this.cur_trim);
    },

    populateColorSelects: function(model_id)
    {
     var sender = this;

     $.getJSON(this.base_url+"?callback=?", {cmd:"getModel", model:model_id}, function(data) {

     if(!sender.responseError(data))
     {
      var intColors = data[0].IntColors;
      var extColors = data[0].ExtColors;
  var outInt = sender.empty_option_html;
  var outExt = sender.empty_option_html;

  for (var i = 0; i < intColors.length; i++)
         {
      outInt += "<option value=\""+intColors[i].color_id+"\">"+intColors[i].color_name+"</option>";
  }

  for (var i = 0; i < extColors.length; i++)
  {
      outExt += "<option value=\""+extColors[i].color_id+"\">"+extColors[i].color_name+"</option>";
  }

  if(sender.color_int_select_id != null) $('#'+sender.color_int_select_id).html(outInt);
  if(sender.color_ext_select_id != null) $('#'+sender.color_ext_select_id).html(outExt);
     }
        });


    },

    responseError: function (data)
    {
     if(typeof data.error != 'undefined' && data.error != '')
 {
   //alert(data.error);
  return true;
 }
 else
  return false;
    }
}

if (typeof $tmp != 'undefined') var $ = $tmp;