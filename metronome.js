var metronome = false;

var timeoutId = 0;

var delayArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

document.addEventListener("DOMContentLoaded", function(event) { 
setInterval(function() {
	for(let i = 0; i < 15; i++) {
		delayArray[i] = parseInt(document.getElementById((i+1).toString()).value);
	}
}, 1000);
});

function start() {
	metronome = true;
	document.getElementById("status").innerHTML = "ON";
	
	timeoutId = setTimeout(function() {
		var clickNumber = 0;
		var delay = 0;
		for(let i = 0; i < 10000; i++) {
			if(metronome) {
				
				if(delayArray[i % delayArray.length] == 0) {
					continue;
				}
				
				delay += delayArray[i % delayArray.length];
				click(delay);
			}
		}
	}, 1000);
	
}


const pause = time => new Promise(resolve => setTimeout(resolve, time))


function stop() {
	clearTimeout(timeoutId);
	window.location.reload(false);
	metronome = false;
	document.getElementById("status").innerHTML = "OFF";
}

function clickSound() {
	var click = new Audio("click.mp3");
	click.play()
}

async function click(delay) {
	await sleep(delay)
	clickSound();
}


function wait(ms) {
    var time = Date.now()
	
	while(Date.now() + ms > time) {
		
	}
	
	return;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
