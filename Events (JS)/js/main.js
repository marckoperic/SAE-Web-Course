setTimeout(function() {
	document.getElementById("box").style.display = "block";
},3000);

function klikniMe(){
	var visina = window.innerHeight/2;
	var sirina = window.innerWidth/2;

	document.getElementById("box").style.left = sirina - 100 + "px";
	document.getElementById("box").style.top = visina - 100 + "px";
}