var firstArr = [];
var secondArr = [];
	
var addclick = function(eventclick){
var textinp = document.getElementById("text-input").value;
var valueinp = document.getElementById("value-input").value;

var resinp = firstArr.push(textinp);
var resvalue = secondArr.push(valueinp);

var insert = document.getElementById('text-area');
insert.innerHTML += (textinp + '=' + valueinp + '<br>');

//console.log(textinp + '=' + valueinp);
}

var sortname  = function(sort){
	var textinp = document.getElementById("text-input").value;
	var sorttext = firstArr.sort();
	var endname = sorttext.join('<br>');
	//console.log(endname);
	document.getElementById('text-area').innerHTML += (endname + '<br>');
}

var sortvalue  = function(sort){
	var textinp = document.getElementById("value-input").value;
	var sortvalue = secondArr.sort();
	var endvalue = sortvalue.join('<br>');
	//console.log(endvalue);
	document.getElementById('text-area').innerHTML += (endvalue + '<br>');
}

var del = function(del) {
	var delall = document.getElementById('text-area');
	delall.innerHTML = '';
	firstArr.length = 0;
	secondArr.length = 0;
}


var clickbtn = document.getElementById('add');
clickbtn.addEventListener('click', addclick, false);

var clickname = document.getElementById('sortname');
clickname.addEventListener('click', sortname, false);

var clickvalue = document.getElementById('sortvalue');
clickvalue.addEventListener('click', sortvalue, false);

var clickdel = document.getElementById('delete');
clickdel.addEventListener('click', del, false);