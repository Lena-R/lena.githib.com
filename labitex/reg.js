var validateInput = function funcname() {
var regexp = /[a-z]\D/;


if (!regexp.test(nnn.value)){ 
	
document.querySelector('.infoerror').style.display = "block";
document.querySelector('.infoerror').innerHTML = "<p style = 'color: #6b6b6b'>&nbsp;&nbsp;Enter only Eng letters</p>";
document.querySelector('.submit').disabled = true; 
}	

else {	 
	    document.querySelector('.infoerror').style.display = "none"; 
		document.querySelector('.submit').disabled = false;		
}		
    };

var inputName = document.querySelector('#nnn');
inputName.addEventListener('focus', validateInput, false);



var validateOutput = function funcname() {
var regexp = /[a-z]\D/;
 
if (regexp.test(nnn.value)){ 

document.querySelector('.infoerror').style.display = "none";
document.querySelector('.submit').disabled = false;  
}

else {	 
	    document.querySelector('.infoerror').style.display = "block"; 
		document.querySelector('.submit').disabled = true;
		document.querySelector('.infoerror').innerHTML = "<p style = 'color: #6b6b6b'>&nbsp;&nbsp;Enter only Eng letters</p>";		
}	   		
    };

var inputName2= document.querySelector('#nnn');
inputName2.addEventListener('blur', validateOutput, false);









var validateInputemail = function funcemail() {
var regexp = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/;


if (!regexp.test(eee.value)){ 
	
document.querySelector('.infoerroremail').style.display = "block";
document.querySelector('.infoerroremail').innerHTML = "<p style = 'color: #6b6b6b'>&nbsp;&nbsp;Enter correct email</p>";
document.querySelector('.submit').disabled = true; 
}	

else {	 
	    document.querySelector('.infoerroremail').style.display = "none"; 
		document.querySelector('.submit').disabled = false;		
}		
    };

var inputEmail = document.querySelector('#eee');
inputEmail.addEventListener('focus', validateInputemail, false);



var validateOutputemail = function funcemail() {
var regexp = /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/;
 
if (regexp.test(eee.value)){ 

document.querySelector('.infoerroremail').style.display = "none";
document.querySelector('.submit').disabled = false;  
}

else {	 
	    document.querySelector('.infoerroremail').style.display = "block"; 
		document.querySelector('.submit').disabled = true;
		document.querySelector('.infoerroremail').innerHTML = "<p style = 'color: #6b6b6b'>&nbsp;&nbsp;Enter correct email</p>";		
}	   		
    };

var inputEmail2= document.querySelector('#eee');
inputEmail2.addEventListener('blur', validateOutputemail, false);








