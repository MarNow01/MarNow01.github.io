document.getElementById("but1").addEventListener("click", function() {
	pobieranie();
});

function wypisz(t){
	alert(t);
}

function filtruj(tekst){
	pobieranie(tekst);
}

async function pobieranie(filtr = "") {
	var f = document.getElementById("filmy");
	f.innerHTML = "";
	var xd = document.getElementById("przyciski");
	xd.innerHTML = "";
	const response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json");
	var movies = await response.json();
	if(filtr != ""){
	  movies = movies.filter(item => item.type == filtr);
	}
	for (var i = 0; i < movies.length; i++) {
      var element = document.createElement("div");
      element.classList.add("col-sm-12");
      element.classList.add("col-md-6");
      element.classList.add("col-lg-3");
      element.classList.add("elemencik");
      element.innerHTML = movies[i].title;
	  element.addEventListener("click", function () {
		this.classList.toggle("zaznaczona");
	  });
	  (function (index) {
		  element.addEventListener("click", function () {
			wypisz(movies[index].description);
		  });
		})(i);

      f.appendChild(element);
	}
	//dodawanie przycisku
	var bb1 = document.createElement("input");
	bb1.type = "button";
	bb1.value="Wszystko";
	bb1.classList.add("btn");
	bb1.classList.add("col-lg-3");
	bb1.classList.add("col-md-6");
	bb1.classList.add("col-sm-12");
	bb1.classList.add("btn-primary");
	xd.appendChild(bb1);
	bb1.addEventListener("click", function () {
		filtruj("");
	});
	//dodawanie przycisku
	var bb2 = document.createElement("input");
	bb2.type = "button";
	bb2.value="Tylko mleczne";
	bb2.classList.add("btn");
	bb2.classList.add("col-lg-3");
	bb2.classList.add("col-md-6");
	bb2.classList.add("col-sm-12");
	bb2.classList.add("btn-primary");
	xd.appendChild(bb2);
	bb2.addEventListener("click", function () {
		filtruj("dairy");
	});
	//dodawanie przycisku
	var bb3 = document.createElement("input");
	bb3.type = "button";
	bb3.value="Tylko warzywa";
	bb3.classList.add("btn");
	bb3.classList.add("col-lg-3");
	bb3.classList.add("col-md-6");
	bb3.classList.add("col-sm-12");
	bb3.classList.add("btn-primary");
	xd.appendChild(bb3);
	bb3.addEventListener("click", function () {
		filtruj("vegetable");
	});
	//dodawanie przycisku
	var bb4 = document.createElement("input");
	bb4.type = "button";
	bb4.value="Tylko owoce";
	bb4.classList.add("btn");
	bb4.classList.add("col-lg-3");
	bb4.classList.add("col-md-6");
	bb4.classList.add("col-sm-12");
	bb4.classList.add("btn-primary");
	xd.appendChild(bb4);
	bb4.addEventListener("click", function () {
		filtruj("fruit");
	});
}

function ciasteczko(){
	localStorage.setItem("firstname", document.getElementById("inputName").value);
	localStorage.setItem("lastname", document.getElementById("inputSurname").value);
	window.open("pomoc.html");
}