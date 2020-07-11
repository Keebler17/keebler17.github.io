var w = 0;
var space = 0;

var timing = 0;

var forward = "";
var jump = "";


var wTick = 0;
var spaceTick = 0;

setInterval(function() {
	
	forward = document.getElementById("forward").value.toUpperCase();
	jump = document.getElementById("jump").value.toUpperCase();

	document.onkeydown = function(e) {
		if(forward == String.fromCharCode(e.keyCode)) {
			w = new Date().getTime();
		}
		
		if(jump == String.fromCharCode(e.keyCode)) {
			space = new Date().getTime();
		}
		
		document.getElementById("headhitter!").innerHTML = space-w + "ms!!!!!!!!!!!!!!!!!!!, ";
	}
}, 1);
