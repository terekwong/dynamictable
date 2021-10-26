/*
    Tere Kwong
    10/26/2021

    javascript for the index.html

    Sources referenced: w3schools

*/

function createTable() {
    //gets the values from the form and sets them to variables
    var x = document.getElementById("frm1");
    var scol = x.elements[0].value;
    var lcol = x.elements[1].value;
    var srow = x.elements[2].value;
    var lrow = x.elements[3].value;
/*
    if ((scol < -50 || scol > 50) || (lcol < -50 || lcol > 50) || (srow < -50 || srow > 50) || (lrow < -50 || lrow > 50)){
        document.getElementById("error").innerHTML = "Invalid Inputs. -50 <= Value <= 50";
        return;
    }
    else if (scol == "" || lcol == "" || srow == "" || lrow == ""){
        document.getElementById("error").innerHTML = "Invalid Input. Can't be empty";
        return;
    }
*/
    //creates empty table to reset each time
    var table = document.createElement("table");
    var div1 = document.getElementById("div1");
    div1.innerHTML ="";

    //condition to generate a table
    if (((scol >= -50 && scol <= 50) && (lcol >= -50 && lcol <= 50) && (srow >= -50 && srow <= 50) && (lrow >= -50 && lrow <= 50)) && (scol != "" && lcol != "" && srow != "" && lrow != "") && ((scol <= lcol) && (srow <= lrow))) {
        document.getElementById("error").innerHTML = "";
        var table = document.createElement("table");
        /*table.border = 1;*/

        var columnCount = lcol - scol;
        
        var row = table.insertRow(-1);
        /*
        var emptyCell = document.createElement("th");
        row.appendChild(emptyCell);
        */
        var cell = row.insertCell(-1);
        cell.innerHTML = "";
        
        //creates the first row of headers
        for (var i = scol; i <= lcol; i++){
            var headerCell = document.createElement("th");
            headerCell.innerHTML = i;
            row.appendChild(headerCell);
        }

        //creates the first row cell and fills the row with values
        for (var j = srow; j <= lrow; j++){
            row = table.insertRow(-1);
            var headerCell = document.createElement("th");
            headerCell.innerHTML = j;
            row.appendChild(headerCell);
           /*
            var cell = row.insertCell(-1);
            cell.innerHTML = j;
            */
            for (var k = scol; k <= lcol; k++){
                var cell = row.insertCell(-1);
                cell.innerHTML = j * k;
            }
        }

        //appends the table to the HTML
        var div1 = document.getElementById("div1");
        div1.innerHTML ="";
        div1.appendChild(table);
    }else {

        //error code that is displayed if condition is not met
        document.getElementById("error").innerHTML = "Invalid Inputs";
        /*var table = document.createElement("table");
        var div1 = document.getElementById("div1");
        div1.innerHTML ="";
        */
    }
}