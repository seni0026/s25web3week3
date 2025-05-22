//Shh!! It's a secret
document.querySelector("html").addEventListener("click", function(){
	if(document.querySelector("#adder").offsetHeight > 3800){
		document.querySelector("#bottomdweller").style.display = "block";
	}else{
		document.querySelector("#bottomdweller").style.display = "none";
	}
});