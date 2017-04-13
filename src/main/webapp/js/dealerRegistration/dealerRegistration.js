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
     // append row to the HTML table
        function appendRow17() {
            var tbl = document.getElementById('my-table17'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellCountry(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }// append row to the HTML table
        function appendRow16() {
            var tbl = document.getElementById('my-table16'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellExpertingRating(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }// append row to the HTML table
        function appendRow15() {
            var tbl = document.getElementById('my-table15'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellUserRating(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
            alert("ca"+$('#userRating10').val());
        }// append row to the HTML table
        function appendRow14() {
            var tbl = document.getElementById('my-table14'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellFittingInternal(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }// append row to the HTML table
        function appendRow13() {
            var tbl = document.getElementById('my-table13'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellFittingExternal(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }// append row to the HTML table
        function appendRow12() {
            var tbl = document.getElementById('my-table12'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellVideos(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }// append row to the HTML table
        function appendRow11() {
            var tbl = document.getElementById('my-table11'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellVehicleReviews(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow10() {
            var tbl = document.getElementById('my-table10'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellPhotos(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow9() {
        	alert("append invoke");
            var tbl = document.getElementById('my-table9'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellRelatedModels(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow8() {
            var tbl = document.getElementById('my-table8'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellOptionalEquipmentAddOns(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow7() {
            var tbl = document.getElementById('my-table7'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellFullSpecStandardEquip(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow6() {
            var tbl = document.getElementById('my-table6'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellWarranty(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow5() {
            var tbl = document.getElementById('my-table5'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellFullSpecWheels(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow4() {
            var tbl = document.getElementById('my-table4'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellFullSpecFuel(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow3() {
            var tbl = document.getElementById('my-table3'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellFullSpecDimension(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
     // append row to the HTML table
        function appendRow2() {
            var tbl = document.getElementById('my-table2'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellFullSpecEngine(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
        
     // append row to the HTML table
        function appendRow1() {
            var tbl = document.getElementById('my-table1'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellAvailableColour(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
        }
        function appendRow() {
            var tbl = document.getElementById('my-table'), // table reference
                row = tbl.insertRow(tbl.rows.length),      // append table row
                i;
            // insert table cells to the new row
            for (i = 0; i < tbl.rows[0].cells.length; i++) {
            	createCellOptionalFeaturesAddons(row.insertCell(i), tbl.rows.length-1, i, 'row');
            }
            alert("ca"+$('#createCellOptionalFeaturesAddons2').val());
        }
        // create DIV element and append to the table cell
        function createCellOptionalFeaturesAddons(cell, row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "createCellOptionalFeaturesAddons" +row + text;
            newInput.name = "createCellOptionalFeaturesAddons" +row+ text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            ////div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        
        // create DIV element and append to the table cell
        function createCellAvailableColour(cell, row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "availableColour" + +row + text;
            newInput.name = "availableColour" +row +  text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            ////div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellFullSpecEngine(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "fullSpecEngine" + row +text;
            newInput.name = "fullSpecEngine" + row +text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            ////div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellFullSpecDimension(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "fullSpecDimension" + row+text;
            newInput.name = "fullSpecDimension" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            ////div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellFullSpecFuel(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "fullSpecFuel" + row+text;
            newInput.name = "fullSpecFuel" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            ////div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellFullSpecWheels(cell,  row,text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "fullSpecWheels" + row+text;
            newInput.name = "fullSpecWheels" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            ////div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellWarranty(cell,  row,text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "warranty" + row+text;
            newInput.name = "warranty" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellFullSpecStandardEquip(cell,  row,text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "fullSpecStandardEquip" + row+text;
            newInput.name = "fullSpecStandardEquip" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellOptionalEquipmentAddOns(cell,  row,text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "optionalEquipmentAddOns" +row+ text;
            newInput.name = "optionalEquipmentAddOns" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellRelatedModels(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "relatedModels" +row+ text;
            newInput.name = "relatedModels" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellPhotos(cell,  row,text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "photo" + row+text;
            newInput.name = "photo" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellVehicleReviews(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "vehicleReviews" + row+text;
            newInput.name = "vehicleReviews" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellVideos(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "videos" + row+text;
            newInput.name = "videos" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellFittingExternal(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "fittingExternal" + row+text;
            newInput.name = "fittingExternal" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellFittingInternal(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "fittingInternal" + row+text;
            newInput.name = "fittingInternal" + row+text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellUserRating(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "userRating" + row+ text;
            newInput.name = "userRating" + row+ text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellExpertingRating(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "expertingRating" + row+ text;
            newInput.name = "expertingRating" + row+ text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        // create DIV element and append to the table cell
        function createCellCountry(cell,  row, text, style) {
            var div = document.createElement('div'); // create DIV element
                //txt = document.createTextNode(text); // create text node
            
            var newInput = document.createElement("INPUT");
            newInput.id = "country" + row+ text;
            newInput.name = "country" + row+ text;
            newInput.type = "text";
            
            div.appendChild(newInput);                    // append text node to the DIV
            div.setAttribute('class', style);        // set DIV class attribute
            //div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
            cell.appendChild(div);                   // append DIV to the table cell
        }
        
        
        
        
     // append column to the HTML table
        function appendColumn() {
            var tbl = document.getElementById('my-table'), // table reference
                i;
            // open loop for each row and append cell
            for (i = 0; i < tbl.rows.length; i++) {
                createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
            }
        }
        
        // delete table rows with index greater then 0
        function deleteRows1() {
            var tbl = document.getElementById('my-table1'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows2() {
            var tbl = document.getElementById('my-table2'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows3() {
            var tbl = document.getElementById('my-table3'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows4() {
            var tbl = document.getElementById('my-table4'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows5() {
            var tbl = document.getElementById('my-table5'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows6() {
            var tbl = document.getElementById('my-table6'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows7() {
            var tbl = document.getElementById('my-table7'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows8() {
            var tbl = document.getElementById('my-table8'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows9() {
            var tbl = document.getElementById('my-table9'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
        function deleteRows10() {
            var tbl = document.getElementById('my-table10'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
     // delete table rows with index greater then 0
        function deleteRows() {
            var tbl = document.getElementById('my-table'), // table reference
                lastRow = tbl.rows.length - 1,             // set the last row index
                i;
            // delete rows with index greater then 0
            for (i = lastRow; i > 0; i--) {
                tbl.deleteRow(i);
            }
        }
         
        // delete table columns with index greater then 0
        function deleteColumns() {
            var tbl = document.getElementById('my-table'), // table reference
                lastCol = tbl.rows[0].cells.length - 1,    // set the last column index
                i, j;
            // delete cells with index greater then 0 (for each row)
            for (i = 0; i < tbl.rows.length; i++) {
                for (j = lastCol; j > 0; j--) {
                    tbl.rows[i].deleteCell(j);
                }
            }
        }
        function working(){
        out2 += '<tr><th>'+"Quotation ID"+'</th><th>'+"Variant"+'</th><th>'+"Make"+'</th><th>'+"Year"+'</th><th>'+"Operation"+'</th></tr>';
 	   for(i=0;i<result.vehicleQuotation.length;i++)
		{
		/*alert(result.search[i].carSearchId); //111 111-1111
		alert(result.search[i].modelDisplay);
		alert(result.search[i].modelTrim);
		alert(result.search[i].modelYear);*/
		out2= out2+'<tr>'+'<td>'+result.vehicleQuotation[i].quotId+'</td>'+'<td>'+result.vehicleQuotation[i].modelTrim+'</td>'+'<td>'+result.vehicleQuotation[i].modelDisplay+'</td>'+'<td>'+result.vehicleQuotation[i].modelYear+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleQuotationModal-' + result.vehicleQuotation[i].quotId + '" data-details=\'' + JSON.stringify(result.vehicleQuotation[i]) + '\' class="anchor-editDealerVehicleQuotationModal" data-toggle="modal" data-target="#editDealerVehicleQuotationModal">Edit</a></td></tr>';
		
		
		}
 	  forFinance("data1",out2);
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


// Check if "key" exists in the storage
/*//var value = $.jStorage.get("key");
if(!value){
    // if not - load the data from the server
//alert("can inside");
    //value = load_data_from_server()
    // and save it
    $.jStorage.set("key",value);
}*/
//alert("can"+value.userId);

function signingout(){
	
	 $.jStorage.deleteKey("key");
	 $.jStorage.deleteKey("carKey");
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
        	   out += '<tr><th>'+"Car Search ID"+'</th><th>'+"Model Trim"+'</th><th>'+"Model Display"+'</th><th>'+"Model Year"+'</th><th>'+"Operation"+'</th></tr>';
        	   for(i=0;i<result.search.length;i++)
       		{
       		/*alert(result.search[i].carSearchId); //111 111-1111
       		alert(result.search[i].modelDisplay);
       		alert(result.search[i].modelTrim);
       		alert(result.search[i].modelYear);*/
       		out= out+'<tr>'+'<td>'+result.search[i].carSearchId+'</td>'+'<td>'+result.search[i].modelTrim+'</td>'+'<td>'+result.search[i].modelDisplay+'</td>'+'<td>'+result.search[i].modelYear+'</td>'+'<td><a href="#" id="anchor-editDealerVehicleSearchModal-' + result.search[i].carSearchId + '" data-details=\'' + JSON.stringify(result.search[i]) + '\' class="anchor-editDealerVehicleSearchModal" data-toggle="modal" data-target="#editDealerVehicleSearchModal">View</a></td></tr>';
       		
       		
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

function registerEditDealerVehicleSearchModal(){       


	//Add a Bootstrap Modal DIV to Edit Dealer Vehicle Quotation Details
	var editDealerVehicleSearchModal = '<div class="modal fade" id="editDealerVehicleSearchModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	    <div class="modal-dialog">\
	        <div class="modal-content">\
	            <div class="modal-header">\
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
	                <h4 class="modal-title" id="myModalLabel">View Vehicle Search Details</h4>\
	            </div>\
		        <form id="edit-dealer-vehicle-search-content-form">\
				<div class="modal-body edit-dealer-vehicle-search-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
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
	                <h4 class="modal-title" id="myModalLabel">View Vehicle Finance Details</h4>\
	            </div>\
		        <form id="edit-dealer-vehicle-finance-content-form">\
				<div class="modal-body edit-dealer-vehicle-finance-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
				</div>\
	            </form>\
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
	                <h4 class="modal-title" id="myModalLabel">View Vehicle Insurance Details</h4>\
	            </div>\
		        <form id="edit-dealer-vehicle-insurance-content-form">\
				<div class="modal-body edit-dealer-vehicle-insurance-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
				</div>\
	            </form>\
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
	                <h4 class="modal-title" id="myModalLabel">View My Vehicle Details</h4>\
	            </div>\
		        <form id="edit-dealer-vehicle-detail-content-form">\
				<div class="modal-body edit-dealer-vehicle-detail-content">\
	            </div>\
	            <div class="modal-footer">\
	                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
				</div>\
	            </form>\
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
var mainAppMrp = angular.module("mainAppMrp", []);
mainAppMrp.controller('mrpController1',function($scope, $http) {
						$scope.submitSearchForm = function() {
												//alert("came here");
												
								                var jsonInputToAPI = {"tempCarModelHeaderId": null,
														  "modelYear": $('#car-years').val(),
														  "modelDisplay": $('#Make').val(),
														  "modelName": $('#Model').val(),
														  "modelVariant":$('#Variant').val(),
														 "modelSeries":$('#Series').val(),
														  "modelBatch":$('#Batch').val(),
														  "engineSize" : $('#engineSizeHead').val(),
														  "cylinder" : $('#cylinderHead').val(),
														  "noOfGears" : $('#numberofGearsHead').val(),
														 "transimission" : $('#transmissionHead').val(),
														"driveType" :  $('#driveTypeHead').val(),
														"fuelType" :  $('#fuelTypeHead').val(),
														"modelDoors" :  $('#numberofDoorsHead').val(),
														"modelBody" :  $('#bodyTypeHead').val(),
														"modelSeats":  $('#seatingCapacityHead').val(),
														"manfYear" :  $('#manufactureYearHead').val(),
														"creationDate" : null,
														"modifiedDate" : null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null,
														  "modelTrim":$('#Trim').val(), 
														   "carModel": [
														    {
														      "tempCarModelOverviewId": null,
														      
															
														 "price": $('#priceOverview').val(),
														"priceGuideEGC":$('#priceGuideEGC').val(),
														 "drive":	$('#driveOverview').val(),
														 "Badge":$('#badgeOverview').val(),	
														 "fuelType":$('#fuelTypeOverview').val(),
														 "series":	$('#seriesOverview').val(),
														 "recommendedRonRating":$('#recommendedRONRating').val(),
														 "body":$('#bodyOverview').val(),
														 "releaseYear":$('#releaseYear').val(),
														 "noOfDoors":$('#noofDoors').val(),
														 "vin":$('#VIN').val(),
														 "seatCapacity":$('#seatCapacity').val(),
														 "countryOfOrigin":$('#countryofOrigin').val(),
														 "transmission":$('#TransmissionOver').val(),
														 "overallGreenStarRating":$('#OverallGreenStarRating').val(),
														 "ancapSafetyRating":$('#ANCAPSafetyRating').val(),
														 "NoOfGears":$('#NumberofGears').val(),
														 "steering":$('#Steering').val(),
														 "manfYear":$('#ManufactureYear').val(),
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null




														    }														  ],
														  "carModel1": [
														    {
														      "tempCarModelPricingId": null,
														      
														 "prices":$('#pricesPricing').val(),
														 "redbookPriceGuide":$('#redbookPriceGuide').val(),
														 "privatePriceGuideMin":$('#privatePriceGuideMin').val(),	
														 "privatePriceGuideMax":$('#privatePriceGuideMax').val(),	
														 "tradePriceGuideMin":$('#tradePriceGuideMin').val(),	
														 "tradePriceGuideMax":$('#tradePriceGuideMax').val(),
														 "averageKmMin":$('#averageKmMin').val(),
														 "averageKmMax":$('#averageKmMax').val(),
														 "priceWhenNew":$('#priceWhenNewState').val(),
														 "state":$('#statePricing').val(),
														 "rego":$('#regoPricing').val(),
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    }														  ],
														  "carModel2": [
														    {
														      "tempCarModelOptFeatId": null,
														      
															
															 "prices":null,
															"optionaFeature":null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    },

														{
														     "tempCarModelOptFeatId": null,
														      
															
															 "prices":null,
															"optionaFeature":null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    }
														  ],
														  "carModel3": [
														    {
														      "tempCarModelColourId": null,

														"price":null,
														 "availableColour":null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    },

														{
														     "tempCarModelColourId": null,

														"price":null,
														 "availableColour":null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    }
														  ],
														  "carModel4": [
														    {
														      "tempCarModelFullSpecId": null,

														"specDescription":null,
														"fullSpecValue":null,
															
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    },
														    
														        {
														                  "tempCarModelFullSpecId": null,

														"specDescription":null,
														"fullSpecValue":null,
															
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														          }
														  ], "carModel5": [
														    {
														      "tempCarModelFullSpecDimId": null,
														      
														       "specDescription":null,
														 "fullSpecValue":null,
															"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    },
														    
														        {
														            "tempCarModelFullSpecDimId": null,
														      
														       "specDescription":null,
														 "fullSpecValue":null,
															"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														          }
														  ], "carModel6": [
														    {
														      "tempCarModelFullSpecFuelId": null,

														"specDescription":null,
														"fullSpecValue":null,
															
															"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    },
														    
														        {
														                  "tempCarModelFullSpecFuelId": null,

														"specDescription":null,
														"fullSpecValue":null,
															
															"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														          }
														  ], "carModel7": [
														    {
														      "tempCarModelFullSpecWarrantyId": null,



															
														"specDescription":null,
														 "fullSpecValue":null,
																"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null


														    },
														    {
														      "tempCarModelFullSpecWarrantyId": null,



															
														"specDescription":null,
														 "fullSpecValue":null,
																"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel8": [
														    {
														      "tempCarModelFullSpecStandEqId": null,
														"specDescription":null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null	
														    },
														    {
														      "tempCarModelFullSpecStandEqId": null,
														"specDescription":null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null	
														      }
														  ], "carModel9": [
														    {
														      "tempCarModelOptEqpAddOnId": null,
														"specDescription":null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null	


														    },
														    {
														      "tempCarModelOptEqpAddOnId": null,
														"specDescription":null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null	
														 }
														  ], "carModel10": [
														    {
														      "tempCarModelRelatedModelId": null,
														"realatedModelTrim":null,
														"relatedModelDescription":null,
														"relatedModelPriceWhenNew":null,
															"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    },
														    {
														      "tempCarModelRelatedModelId": null,
														"realatedModelTrim":null,
														"relatedModelDescription":null,
														"relatedModelPriceWhenNew":null,
															"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel11": [
														    {
														      "tempCarModelPhotosId": null,
														 "specDescription":null,
															"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null


														    },
														    {
														       "tempCarModelPhotosId": null,
														 "specDescription":null,
															"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel12": [
														    {
														      "tempCarModelVehReviewId": null,
														      "review1": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    },
														    {
														        "tempCarModelVehReviewId": null,
														      "review1": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel13": [
														    {
														      "tempCarModelVideosId": null,
														      "ylink1": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    },
														    {
														        "tempCarModelVideosId": null,
														      "ylink1": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel14": [
														    {
														      "tempCarModelExtFittingId": null,
														      "extFittingDescription": null,
														      "price": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    },
														    {
														        "tempCarModelExtFittingId": null,
														      "extFittingDescription": null,
														      "price": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel15": [
														    {
														      "tempCarModelIntFittingId": null,
														      "intFittingDescription": null,
														      "price": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														    },
														    {
														        "tempCarModelIntFittingId": null,
														      "intFittingDescription": null,
														      "price": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel16": [
														    {
														      "tempCarModelUserRatingId": null,
														      "ratingCatagery2": null,
														      "ratingCatagery1": null,
														      "ratingCatagery3": null,
														      "ratingCatagery4": null,
														      "ratingCatagery5": null,
														"flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    }
														  ], "carModel17": [
														    {
														      "tempCarModelExpRatingId": null,
														      "expertRating": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    },
														    {
														       "tempCarModelExpRatingId": null,
														      "expertRating": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel18": [
														    {
														      "tempCarModelExpRatingId": null,
														      "expertRating": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    },
														    {
														        "tempCarModelExpRatingId": null,
														      "expertRating": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null
														      }
														  ], "carModel19": [
														    {
														      "tempCarModelFullSpecWheelId": null,
														      "specDescription": null,
														      "fullSpecValue": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    },{
														      "tempCarModelFullSpecWheelId": null,
														      "specDescription": null,
														      "fullSpecValue": null,
														      "flex1": null,
														"flex2" : null,
														 "flex3":null,	
														" flex4" : null,
														"flex5": null,
														"flex6" : null,
														 "flex7" : null,
														 "flex8" : null,
														 "flex9" : null,
														 "flex10" : null,
														 "flex11" : null,
														 "flex12" : null

														    }
														  ]}
								              /*  alert("Json print d c");
								               alert(JSON.stringify(jsonInputToAPI.carModel2[0].tempCarModelOptFeatId));*/
								               
								               
								              /* "carModel16": [
															    {
															      "tempCarModelUserRatingId": null,
															      "ratingCatagery2": null,
															      "ratingCatagery1": null,
															      "ratingCatagery3": null,
															      "ratingCatagery4": null,
															      "ratingCatagery5": null,
															"flex1": null,
															"flex2" : null,
															 "flex3":null,	
															" flex4" : null,
															"flex5": null,
															"flex6" : null,
															 "flex7" : null,
															 "flex8" : null,
															 "flex9" : null,
															 "flex10" : null,
															 "flex11" : null,
															 "flex12" : null*/
								            // insert table cells to the new row
								                
								                var tbl = document.getElementById('my-table'), // table reference
									               row = tbl.rows.length;      // append table row
									                var i;
									                alert("row length for Optional Addon Features"+tbl.rows.length);
									                alert("col lenght for Optional Addon Features"+tbl.rows[0].cells.length);
					                for (j = 1; j < tbl.rows.length; j++) {
					                		jsonInputToAPI.carModel2[j-1].tempCarModelOptFeatId=null;   	
								            for (i = 1; i < tbl.rows[j].cells.length; i++) {
									            	
									            	//alert("ca"+$('#createCellOptionalFeaturesAddons'+j+i).val());
									            	if(i%2==1)
									            		jsonInputToAPI.carModel2[j-1].optionaFeature=$('#createCellOptionalFeaturesAddons'+j+i).val();
									            	if(i%2==0)
									            		jsonInputToAPI.carModel2[j-1].prices=$('#createCellOptionalFeaturesAddons'+j+i).val();
									            	//alert(""+'createCellOptionalFeaturesAddons'+i);
									            	
								            }
								            jsonInputToAPI.carModel2[j-1]["flex1"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex2"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex3"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex4"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex5"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex6"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex7"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex8"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex9"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex10"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex11"]=null;
							            	jsonInputToAPI.carModel2[j-1]["flex12"]=null;
								    }  
								               /* alert("Json print");
								                alert(JSON.stringify(jsonInputToAPI.carModel2));*/
					               
					                // table 1
					                
					                var tbl1 = document.getElementById('my-table1'), // table reference
						               row = tbl1.rows.length;      // append table row
						                var i;
						                alert("row length for avaliable colours"+tbl1.rows.length);
						                alert("col lenght for available colours"+tbl1.rows[0].cells.length);         
								                alert("Json print d e tempCarModelColourId");
									               alert(JSON.stringify(jsonInputToAPI.carModel3[0].tempCarModelColourId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl1.rows.length; j++) {
						                	//alert("changes now");
						                	i=0;
						                		jsonInputToAPI.carModel3[j-1].tempCarModelColourId=null;
						                		
						                		jsonInputToAPI.carModel3[j-1].price=$('#availableColour'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel3[j-1].availableColour=$('#availableColour'+j+'1').val(); 
									         
						                		jsonInputToAPI.carModel3[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel3[j-1]["flex12"]=null;
									    }  
									                alert("Json print");
									                alert(JSON.stringify(jsonInputToAPI.carModel3));
					                
					                
					                // table 2
					                var tbl2 = document.getElementById('my-table2'), // table reference
						               row = tbl2.rows.length;      // append table row
						                var i;
						                alert("row length Full spec Engine"+tbl2.rows.length);
						                alert("col lenght Full spec Engine"+tbl2.rows[0].cells.length);         
								                alert("Json print d e Full spec Engine");
									               alert(JSON.stringify(jsonInputToAPI.carModel4[0].tempCarModelUserRatingId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl2.rows.length; j++) {
						                	
						                	i=0;
						                		jsonInputToAPI.carModel4[j-1].tempCarModelFullSpecId=null;
						                		
						                		jsonInputToAPI.carModel4[j-1].specDescription=$('#fullSpecEngine'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel4[j-1].fullSpecValue=$('#fullSpecEngine'+j+'1').val(); 
									         
						                		jsonInputToAPI.carModel4[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel4[j-1]["flex12"]=null;
									    }  
									                alert("Json print for Engine");
									                alert(JSON.stringify(jsonInputToAPI.carModel4));
					                
					                
					                // table 3
					                var tbl3 = document.getElementById('my-table3'), // table reference
						               row = tbl3.rows.length;      // append table row
						                var i;
						                alert("row length for Full Spec Dimensions"+tbl3.rows.length);
						                alert("col lenght for full Spec Dimensions"+tbl3.rows[0].cells.length);         
								                alert("Json print d e Full spec Dimensions");
									              // alert(JSON.stringify(jsonInputToAPI.carModel5[0].tempCarModelUserRatingId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl3.rows.length; j++) {

						                
						                	i=0;
						                		jsonInputToAPI.carModel5[j-1].tempCarModelFullSpecDimId=null;
						                		
						                		jsonInputToAPI.carModel5[j-1].specDescription=$('#fullSpecDimension'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel5[j-1].fullSpecValue=$('#fullSpecDimension'+j+'1').val(); 
									         
						                		jsonInputToAPI.carModel5[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel5[j-1]["flex12"]=null;
									    }  
									                alert("Json print for Full spec Dimension");
									                alert(JSON.stringify(jsonInputToAPI.carModel5));
					                
					                
					                // table 4
					                
					                var tbl4 = document.getElementById('my-table4'), // table reference
						               row = tbl4.rows.length;      // append table row
						                var i;
						                alert("row length for Full spec Fuel"+tbl4.rows.length);
						                alert("col lenght for Full spec Fuel"+tbl4.rows[0].cells.length);         
								                alert("Json print d e for Full spec Fuel");
									               //alert(JSON.stringify(jsonInputToAPI.carModel6[0].tempCarModelUserRatingId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl4.rows.length; j++) {
						                	
						                	i=0;
						                		jsonInputToAPI.carModel6[j-1].tempCarModelFullSpecFuelId=null;
						                		
						                		jsonInputToAPI.carModel6[j-1].specDescription=$('#fullSpecFuel'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel6[j-1].fullSpecValue=$('#fullSpecFuel'+j+'1').val(); 
						                		jsonInputToAPI.carModel6[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel6[j-1]["flex12"]=null;
									    }  
									                alert("Json print");
									                alert(JSON.stringify(jsonInputToAPI.carModel6));
					                
					                // table 5
					                
					                var tbl5 = document.getElementById('my-table5'), // table reference
						               row = tbl5.rows.length;      // append table row
						                var i;
						                alert("row length for full spec wheels"+tbl5.rows.length);
						                alert("col lenght for full spec wheels"+tbl5.rows[0].cells.length);         
								                alert("Json print d e for full spec wheels");
									               //alert(JSON.stringify(jsonInputToAPI.carModel19[0].tempCarModelFullSpecWheelId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl5.rows.length; j++) {
						                	
						                	i=0;
						                		jsonInputToAPI.carModel19[j-1].tempCarModelFullSpecWheelId=null;
						                		
						                		jsonInputToAPI.carModel19[j-1].specDescription=$('#fullSpecWheels'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel19[j-1].fullSpecValue=$('#fullSpecWheels'+j+'1').val(); 
									         
						                		jsonInputToAPI.carModel19[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel19[j-1]["flex12"]=null;
									    }  
									                alert("Json print for full spec wheels");
									                alert(JSON.stringify(jsonInputToAPI.carModel19));
					                
					                
					               
					                // table 6
					                
					                var tbl6 = document.getElementById('my-table6'), // table reference
						               row = tbl6.rows.length;      // append table row
						                var i;
						                alert("row length for Warranty "+tbl6.rows.length);
						                alert("col lenght for Warranty"+tbl6.rows[0].cells.length);         
								                alert("Json print d e Warranty");
									               alert(JSON.stringify(jsonInputToAPI.carModel7[0].tempCarModelFullSpecWarrantyId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl6.rows.length; j++) {
						                	
						                	i=0;
						                		jsonInputToAPI.carModel7[j-1].tempCarModelFullSpecWarrantyId=null;
						                		
						                		jsonInputToAPI.carModel7[j-1].specDescription=$('#warranty'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel7[j-1].fullSpecValue=$('#warranty'+j+'1').val(); 
									         
						                		jsonInputToAPI.carModel7[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel7[j-1]["flex12"]=null;
									    }  
									                alert("Json print for Warranty");
									                alert(JSON.stringify(jsonInputToAPI.carModel7));
					                
					                
				// table 7
					                var tbl7 = document.getElementById('my-table7'), // table reference
						               row = tbl7.rows.length;      // append table row
						                var i;
						                alert("row length Full spec Standard Equip"+tbl7.rows.length);
						                alert("col lenght Full spec Standard Equip"+tbl7.rows[0].cells.length);         
								                alert("Json print d e Full spec Standard Equip");
									               //alert(JSON.stringify(jsonInputToAPI.carModel9[0].tempCarModelUserRatingId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl7.rows.length; j++) {
						                
						                	i=0;
						                		jsonInputToAPI.carModel8[j-1].tempCarModelFullSpecStandEqId=null;
						                		
						                		jsonInputToAPI.carModel8[j-1].specDescription=$('#fullSpecStandardEquip'+j+'0').val();
						                		
						                		
									         
						                		jsonInputToAPI.carModel8[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel8[j-1]["flex12"]=null;
									    }  
									                alert("Json print Full spec Standard Equip");
									                alert(JSON.stringify(jsonInputToAPI.carModel8));
					                
					                
					                // tabl 8
					                var tbl8 = document.getElementById('my-table8'), // table reference
						               row = tbl8.rows.length;      // append table row
						                var i;
						                alert("row length optionalEquipmentAddOns"+tbl8.rows.length);
						                alert("col lenght optionalEquipmentAddOns"+tbl8.rows[0].cells.length);         
								                alert("Json print d e optionalEquipmentAddOns");
									               alert(JSON.stringify(jsonInputToAPI.carModel9[0].tempCarModelOptEqpAddOnId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl8.rows.length; j++) {
						              
						                	i=0;
						                		jsonInputToAPI.carModel9[j-1].tempCarModelOptEqpAddOnId=null;
						                		
						                		jsonInputToAPI.carModel9[j-1].specDescription=$('#optionalEquipmentAddOns'+j+'0').val();
									         
						                		jsonInputToAPI.carModel9[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel9[j-1]["flex12"]=null;
									    }  
									                alert("Json print optionalEquipmentAddOns");
									                alert(JSON.stringify(jsonInputToAPI.carModel9));
					                
					                
					                // table 9
					                var tbl9 = document.getElementById('my-table9'), // table reference
						               row = tbl9.rows.length;      // append table row
						                var i;
						                alert("row length relatedModels"+tbl9.rows.length);
						                alert("col lenght relatedModels"+tbl9.rows[0].cells.length);         
								                alert("Json print d e relatedModels");
									        
									            // insert table cells to the new row
						                for (j = 1; j < tbl9.rows.length; j++) {
						                	i=0;
						                		jsonInputToAPI.carModel10[j-1].tempCarModelRelatedModelId=null;
						                		
						                		jsonInputToAPI.carModel10[j-1].realatedModelTrim=$('#relatedModels'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel10[j-1].relatedModelDescription=$('#relatedModels'+j+'1').val(); 
						                		jsonInputToAPI.carModel10[j-1].relatedModelPriceWhenNew=$('#relatedModels'+j+'2').val(); 
									         
						                		jsonInputToAPI.carModel10[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel10[j-1]["flex12"]=null;
									    }  
									                alert("Json print relatedModels");
									                alert(JSON.stringify(jsonInputToAPI.carModel11));
					                
					                // table 10
					                
					                
					                var tbl10 = document.getElementById('my-table10'), // table reference
						               row = tbl10.rows.length;      // append table row
						                var i;
						                alert("row length photo"+tbl10.rows.length);
						                alert("col lenght photo"+tbl10.rows[0].cells.length);         
								                alert("Json print d e photo");
									               //alert(JSON.stringify(jsonInputToAPI.carModel11[0].tempCarModelPhotosId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl10.rows.length; j++) {
						                	
						                	i=0;
						                		jsonInputToAPI.carModel11[j-1].tempCarModelPhotosId=null;
						                		
						                		jsonInputToAPI.carModel11[j-1].specDescription=$('#photo'+j+'0').val();
									         
						                		jsonInputToAPI.carModel11[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel11[j-1]["flex12"]=null;
									    }  
									                alert("Json print photo");
									                alert(JSON.stringify(jsonInputToAPI.carModel11));
									                
									             var tbl11 = document.getElementById('my-table11'), // table reference
										               row = tbl11.rows.length;      // append table row
										                var i;
										                alert("row length vehicleReviews"+tbl11.rows.length);
										                alert("col lenght vehicleReviews"+tbl11.rows[0].cells.length);         
												                alert("Json print d e vehicleReviews");
													               //alert(JSON.stringify(jsonInputToAPI.carModel12[0].tempCarModelPhotosId));
													            // insert table cells to the new row
										                for (j = 1; j < tbl11.rows.length; j++) {
										                	
										                	i=0;
										                		jsonInputToAPI.carModel12[j-1].tempCarModelVehReviewId=null;
										                		
										                		jsonInputToAPI.carModel12[j-1].review1=$('#vehicleReviews'+j+'0').val();
													         
										                		jsonInputToAPI.carModel12[j-1]["flex1"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex2"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex3"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex4"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex5"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex6"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex7"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex8"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex9"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex10"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex11"]=null;
												            	jsonInputToAPI.carModel12[j-1]["flex12"]=null;
													    }  
													                alert("Json printvehicleReviews");
													                alert(JSON.stringify(jsonInputToAPI.carModel12));
					                // till now here
					                // table 11
					                var tbl12= document.getElementById('my-table12'), // table reference
						               row = tbl12.rows.length;      // append table row
						                var i;
						                alert("row length videos"+tbl12.rows.length);
						                alert("col lenght videos"+tbl12.rows[0].cells.length);         
								                alert("Json print d e videos");
									               alert(JSON.stringify(jsonInputToAPI.carModel13[0].tempCarModelVideosId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl12.rows.length; j++) {
						                	
						                	i=0;
						                		jsonInputToAPI.carModel13[j-1].tempCarModelVideosId=null;
						                		
						                		jsonInputToAPI.carModel13[j-1].ylink1=$('#videos'+j+'0').val(); 
									         
						                		jsonInputToAPI.carModel13[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel13[j-1]["flex12"]=null;
									    }  
									                alert("Json print videos");
									                alert(JSON.stringify(jsonInputToAPI.carModel13));
					                
					                
					                
					                // table 12
					                var tbl13 = document.getElementById('my-table13'), // table reference
						               row = tbl13.rows.length;      // append table row
						                var i;
						                alert("row length fittingExternal"+tbl13.rows.length);
						                alert("col lenght fittingExternal"+tbl13.rows[0].cells.length);         
								                alert("Json print d e fittingExternal");
									               alert(JSON.stringify(jsonInputToAPI.carModel14[0].tempCarModelExtFittingId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl13.rows.length; j++) {
						                	i=0;
						                		jsonInputToAPI.carModel14[j-1].tempCarModelExtFittingId=null;
						                		
						                		jsonInputToAPI.carModel14[j-1].extFittingDescription=$('#fittingExternal'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel14[j-1].price=$('#fittingExternal'+j+'1').val();  
									         
						                		jsonInputToAPI.carModel14[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel14[j-1]["flex12"]=null;
									    }  
									                alert("Json print  fittingExternal");
									                alert(JSON.stringify(jsonInputToAPI.carModel14));
					                
					                
					                // table 13
					                
					                var tbl14 = document.getElementById('my-table14'), // table reference
						               row = tbl14.rows.length;      // append table row
						                var i;
						                alert("row length fittingInternal"+tbl14.rows.length);
						                alert("col lenght fittingInternal"+tbl14.rows[0].cells.length);         
								                alert("Json print d e fittingInternal");
									               alert(JSON.stringify(jsonInputToAPI.carModel15[0].tempCarModelIntFittingId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl14.rows.length; j++) {
						                	i=0;
						                		jsonInputToAPI.carModel15[j-1].tempCarModelIntFittingId=null;
						                		
						                		jsonInputToAPI.carModel15[j-1].intFittingDescription=$('#fittingInternal'+j+'0').val();
						                		
						                		jsonInputToAPI.carModel15[j-1].price=$('#fittingInternal'+j+'1').val();  
									         
						                		jsonInputToAPI.carModel15[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel15[j-1]["flex12"]=null;
									    }  
									                alert("Json print fittingInternal");
									                alert(JSON.stringify(jsonInputToAPI.carModel15));
					                
					                
					                
					               
												
								                // user rating
					                var tbl15 = document.getElementById('my-table15'), // table reference
						               row = tbl15.rows.length;      // append table row
						                var i;
						                alert("row length"+tbl15.rows.length);
						                alert("col lenght"+tbl15.rows[0].cells.length);         
								                alert("Json print d e userRating");
									               alert(JSON.stringify(jsonInputToAPI.carModel16[0].tempCarModelUserRatingId));
									            // insert table cells to the new row
						                for (j = 1; j < tbl15.rows.length; j++) {
						                	alert("changes now");
						                	i=0;
						                		jsonInputToAPI.carModel16[j-1].tempCarModelUserRatingId=null;
						                		
						                		jsonInputToAPI.carModel16[j-1].ratingCatagery1=$('#userRating'+j+'0').val();
						                		alert("changes for"+$('#userRating'+j+'0').val());
						                		jsonInputToAPI.carModel16[j-1].ratingCatagery2=$('#userRating'+j+'1').val(); 
						                		jsonInputToAPI.carModel16[j-1].ratingCatagery3=$('#userRating'+j+'2').val(); 
						                		jsonInputToAPI.carModel16[j-1].ratingCatagery4=$('#userRating'+j+'3').val(); 
						                		jsonInputToAPI.carModel16[j-1].ratingCatagery5=$('#userRating'+j+'4').val(); 
									         
						                		jsonInputToAPI.carModel16[j-1]["flex1"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex2"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex3"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex4"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex5"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex6"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex7"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex8"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex9"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex10"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex11"]=null;
								            	jsonInputToAPI.carModel16[j-1]["flex12"]=null;
									    }  
									                alert("Json print");
									                alert(JSON.stringify(jsonInputToAPI.carModel16));
													
									             // table 14 
									                var tbl16 = document.getElementById('my-table16'), // table reference
										               row = tbl16.rows.length;      // append table row
										                var i;
										                alert("row length expertingRating"+tbl16.rows.length);
										                alert("col lenght expertingRating"+tbl16.rows[0].cells.length);         
												                alert("Json print d e expertingRating");
													               alert(JSON.stringify(jsonInputToAPI.carModel17[0].tempCarModelExpRatingId));
													            // insert table cells to the new row
										                for (j = 1; j < tbl16.rows.length; j++) {
										                	
										                	i=0;
										                		jsonInputToAPI.carModel17[j-1].tempCarModelExpRatingId=null;
										                		
										                		jsonInputToAPI.carModel17[j-1].expertRating=$('#expertingRating'+j+'0').val();
										                	 
										                		jsonInputToAPI.carModel17[j-1]["flex1"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex2"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex3"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex4"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex5"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex6"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex7"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex8"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex9"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex10"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex11"]=null;
												            	jsonInputToAPI.carModel17[j-1]["flex12"]=null;
													    }  
													                alert("Json print expertingRating");
													                alert(JSON.stringify(jsonInputToAPI.carModel17));
									                
													                 var tbl17 = document.getElementById('my-table17'), // table reference
														               row = tbl17.rows.length;      // append table row
														                var i;
														                alert("row length country"+tbl17.rows.length);
														                alert("col lenght country"+tbl17.rows[0].cells.length);         
																                alert("Json print d e country");
																	               alert(JSON.stringify(jsonInputToAPI.carModel18[0].tempCarModelCountryId));
																	            // insert table cells to the new row
														                for (j = 1; j < tbl17.rows.length; j++) {
														                	
														                	i=0;
														                		jsonInputToAPI.carModel18[j-1].tempCarModelCountryId=null;
														                		
														                		jsonInputToAPI.carModel18[j-1].country=$('#country'+j+'0').val();
														                	 
														                		jsonInputToAPI.carModel18[j-1]["flex1"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex2"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex3"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex4"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex5"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex6"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex7"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex8"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex9"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex10"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex11"]=null;
																            	jsonInputToAPI.carModel18[j-1]["flex12"]=null;
																	    }  
																	                alert("Json print country");
																	                alert(JSON.stringify(jsonInputToAPI.carModel18));
													            
								             /*   
								                "carModel2": [
								                
								                
															    {
															      "tempCarModelOptFeatId": null,
															      
																
																 "prices":null,
																"optionaFeature":null,
															"flex1": null,
															"flex2" : null,
															 "flex3":null,	
															" flex4" : null,
															"flex5": null,
															"flex6" : null,
															 "flex7" : null,
															 "flex8" : null,
															 "flex9" : null,
															 "flex10" : null,
															 "flex11" : null,
															 "flex12" : null
															    },
								                
								                */
								                
												

												//alert("Before Call");
												//var wsURL = 'http://localhost:8080/MyCarDomain/api/eBid/myVehicle/';
												//var wsURL = 'http://www.autoscoop.com.au/api/eBid/myVehicle/';
												var wsURL = 'api/tempCarModelTemplate';
												
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


/*mainApp1.controller('myController12', [                  
                                   '$scope', function($scope, $http) {
                   					$scope.firstForm = function() {
                						alert("in first form");
                						$('li>a').addClass('dropdown-toggle');
                				        $('li>a').attr('data-toggle','pill');
                					}                
                                   }                                                
                               ]); */

//angular JS end




