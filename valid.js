function validateForm()
        {            
            var AREA1=document.forms["myForm"]["AREA1"].value;
            var AREA2=document.forms["myForm"]["AREA2"].value;    
            var AREA3=document.forms["myForm"]["AREA3"].value;
            var AREA4=document.forms["myForm"]["AREA4"].value;
            var AREA5=document.forms["myForm"]["AREA5"].value;
     

            
            if (AREA1==null || AREA1=="")
            {
                alert("You must fill in the 'Initial border' field");
                return false;
            }
        

            if ( AREA1== 0 )
            {
                 alert( "The value of the 'Initial border' field cannot be 0!" );
                 return false;
            }

            
            if (AREA1<0){
                alert( "The value of the 'Initial border' field cannot be negative!" );
                 return false;
            }

            if(/[^[0-9,.]/.test(AREA1)){
                alert('Enter a number, not a letter');
                return false;
            }
            
            if (AREA2==null || AREA2=="")
            {
                alert("You must fill in the 'End border' field");
                return false;
            }

            if ( AREA2== 0 )
            {
                 alert( "The value of the 'End bound' field cannot be 0!" );
                 return false;
            }

            if ( AREA2<AREA1 )
            {
                 alert( "The final border must be greater than the initial border!" );
                 return false;
            }

            if ( AREA2==AREA1 )
            {
                 alert( "The final border must be greater than the initial border!" );
                 return false;
            }

            if(/[^[0-9,.]/.test(AREA2)){
                alert('Enter a number, not a letter');
                return false;
            }

            if (AREA2<0){
                alert( "The value of the field 'the Final frontier' can't be negative!" );
                 return false;
            }

            if (AREA3==null || AREA3=="")
            {
                alert("You must fill in the 'Length' field");
                return false;
            }
            
            if ( AREA3== 0 )
            {
                 alert( "The value of the 'Length' field cannot be 0!" );
                 return false;
            }

            
            if (AREA3<0){
                alert( "The value of the 'Length' field cannot be negative!" );
                 return false;
            }

            if(/[^[0-9,.]/.test(AREA3)){
                alert('Enter a number, not a letter');
                return false;
            }

            if (AREA4==null || AREA4=="")
            {
                alert("You must fill in the 'Diameter' field");
                return false;
            }

            if ( AREA4== 0 )
            {
                 alert( "The value of the 'Diameter' field cannot be 0!" );
                 return false;
            }

            
            if (AREA4<0){
                alert( "The value of the 'Diameter' field cannot be negative!" );
                 return false;
            }

            if(/[^[0-9,.]/.test(AREA4)){
                alert('Enter a number, not a letter');
                return false;
            }

            if ( AREA5<AREA4 )
            {
                 alert( "The diameter of the workpiece must be greater than or equal to the diameter of the stage!" );
                 return false;
            }
            if (AREA5==null || AREA5=="")
            {
                alert("You must fill in the 'Diameter of the workpiece' field");
                return false;
            }
            
            if ( AREA5== 0 )
            {
                 alert( "The value of the 'Diameter of the workpiece' field cannot be 0!" );
                 return false;
            }
            if(/[^[0-9,.]/.test(AREA5)){
                alert('Enter a number, not a letter');
                return false;
            }

            if (AREA5<0){
                alert( "The value of the 'Diameter of the workpiece' field cannot be negative!" );
                 return false;
            }


 var entry = [0,AREA1, AREA2, AREA3, AREA4, AREA5, AREA5], 
 tableContent = "<tr>"; 
  GLOBAL_ARRAY[GLOBAL_LENGTH] = entry;
  GLOBAL_LENGTH = GLOBAL_LENGTH + 1;


 for(var i = 1; i < 6; i++){ 
 tableContent += "<td>" + entry[i] + "</td>"; 
 }; 
 
 tableContent += "</tr>"; 

 tableBodyExample.innerHTML += tableContent;   
  var FORMCLEAR=document.forms["myForm"].reset();
  PopUpHide();  
 };