var iq = 0;
var grandma = 0;
var grandmaPrice = 10;
var iqps = 0;

function cookieclicked(element) {
    iq++
    element.style.width = "350px"
    
    setTimeout(function(){
        element.style.width = "400px"
    }, 50);
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        addToIQCount()
        ()
    }, 1000);
}

function buyGrandma()  {
    if(iq >= grandmaPrice) {
   		grandma++
    	document.getElementById("grandma-display").innerHTML = grandma
    	iq -= 10
        addIQ()
        grandmaPrice += 5
        iqps += 5
        document.getElementById("grandma-price").innerHTML = grandmaPrice
    }
}

function addToIQCount(num) {
    iq += num
}

function addIQ() {
    document.getElementById("iq").innerHTML = iq
}