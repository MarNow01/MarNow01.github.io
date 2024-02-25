var o1 = document.getElementById("ob1");
var o2 = document.getElementById("ob2");

var sciezka1 = "obrazek1.png";
var sciezka2 = "obrazek2.png";
var sciezka3 = "obrazek3.png";
var sciezka4 = "obrazek4.png";

o1.addEventListener("click", function () {
	if((o1.src).substring((o1.src).length - 12) == sciezka1){
		o1.src=sciezka3;
	}
	else {
		o1.src=sciezka1;
	}
});
o2.addEventListener("click", function () {
	if((o2.src).substring((o2.src).length - 12) == sciezka2){
		o2.src=sciezka4;
	}
	else {
		o2.src=sciezka2;
	}
});
