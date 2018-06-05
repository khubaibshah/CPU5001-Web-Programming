


	
//the fill color function assigning the first rectangle to the preffered position
function fillColor(color) {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(50, 0, 40, 100);
	 }
	 //fill rectangle according to option selected
    function changeColor() {
      var eID = document.getElementById("colors");
      var colorVal = eID.value;
      var colortxt = eID.options[eID.selectedIndex].text;
      fillColor(colortxt);
	  
    }

     function fillColor2(color2) {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = color2;
      ctx.fillRect(120, 0, 40, 100);
}
     function changeColor2() {
      var eID2 = document.getElementById("second");
      var colorVal2 = eID2.value;
      var colortxt2 = eID2.options[eID2.selectedIndex].text;
      fillColor2(colortxt2);
	  
    }
	
	   function fillColor3(color3) {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = color3;
      ctx.fillRect(190, 0, 40, 100);
}
     function changeColor3() {
      var eID3 = document.getElementById("third");
      var colorVal3 = eID3.value;
      var colortxt3 = eID3.options[eID3.selectedIndex].text;
      fillColor3(colortxt3);
	  
    }
	
	   function fillColor4(color4) {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = color4;
      ctx.fillRect(300, 0, 40, 100);
}
     function changeColor4() {
      var eID4 = document.getElementById("fourth");
      var colorVal4 = eID4.value;
      var colortxt4 = eID4.options[eID4.selectedIndex].text;
      fillColor4(colortxt4);
	  
    }
	// a function to calculate the resistance using the drop down menus
	function calcResistance(input) {
    var menu1 = document.colorSelect.band1.value;
    var menu2 = document.colorSelect.band2.value;
    var mult = document.colorSelect.band3.value;
    var tol = document.colorSelect.band4.value;
	
	
    var bgColors = new Array("black", "#583030", "red", "orange", "yellow", "green", "blue", "purple", "gray", "white", "gold", "silver");
    var fgColors = new Array("white", "white", "white", "black", "black", "white", "white", "white", "black", "black", "black", "black");
    resistText = menu1 + menu2; // Appends two strings
    for (var i=0; i<mult; i++) {
        resistText += "0";  // Append some 0's
    }
    resistText = addCommas(resistText); // Insert commas
    resistText += " \u2126 \u00B1"; // Add ohm, space, plus/minus sign
    if (tol == "10")
        resistText += "5%";
    else if (tol == "11")
        resistText += "10%";
    
    // Set pull-down menu background and foreground colors:
	///parseInt(msv) parses a string and returns an integer
    document.colorSelect.band1.style.background = bgColors[parseInt(menu1)];
    document.colorSelect.band1.style.color = fgColors[parseInt(menu1)];
    document.colorSelect.band2.style.background = bgColors[parseInt(menu2)];
    document.colorSelect.band2.style.color = fgColors[parseInt(menu2)];
    document.colorSelect.band3.style.background = bgColors[parseInt(mult)];
    document.colorSelect.band3.style.color = fgColors[parseInt(mult)];
    document.colorSelect.band4.style.background = bgColors[parseInt(tol)];
    document.colorSelect.band4.style.color = fgColors[parseInt(tol)];
    
    // Update the text box
	//  returns the HTML content (inner HTML)
    document.getElementById("resistorValue").innerHTML=resistText;
	
	
}

function addCommas(x) {
// Thisis where i found the addcommas function:
// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
//print number with commas as thousands separators in javascript
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}