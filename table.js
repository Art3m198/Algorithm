function addToTableBodyExample(a, aa, c, d, e, f){ 
 var entry = [a, aa, c, d, e, f], 
 tableContent = "<tr>"; 


 for(var i = 0; i < 6; i++){ 
 tableContent += "<td>" + entry[i] + "</td>"; 
 }; 
 
 tableContent += "</tr>"; 
 
 tableBodyExample.innerHTML += tableContent; 
 };


