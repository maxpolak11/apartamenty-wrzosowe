
var galeriaClickable = false;
var activeGaleria = "";

function initGaleria(){

	// Ustal czy w linku jest zawarta konkretna galeria //
	var url = window.location.href;

	if( url.includes("apartament-purpurowy") ){
		showGaleria("ap-purpurowy");
	}else if ( url.includes("apartament-bordowy") ){
		showGaleria("ap-bordowy");
	}else if ( url.includes("nasza-okolica") ){
		showGaleria("nasza-okolica");
	}else{

		// Zjedz do Galeri //
		var scrollTo = $("#galeria").offset().top;
		if( $("#top-menu").css("position") == "fixed" ){
			scrollTo -= $("#top-menu").outerHeight();
		}

		$('html, body').animate({
	        scrollTop: scrollTo
	    }, 1000, 'easeOutCubic', function(){
	    	galeriaClickable = true;
	    });
	    
	}

	// Klik //
	$("#galeria a.block").click(function(){
		
		if(!galeriaClickable) return;
		galeriaClickable = false;

		// Sprawdz czy jest już otwarta galeria //
		if( $("#galeria-zdjecia").children().length > 0 ){

			// Jeśli użytkownik wybiera aktywną galerię, nic nie rób //
			if( activeGaleria == $(this).attr("data-name") ){
				galeriaClickable = true;
				return;
			}

			activeGaleria = $(this).attr("data-name");
			$("#galeria-container").animate({"opacity" : 0}, 1000, "easeOutCubic", function(){
				showGaleria(activeGaleria);
			});

		}else{
			showGaleria( $(this).attr("data-name") );
		}

	});

}


// Rozwiń galerię //
function showGaleria(galeria){

	var zdjecia = "";

	// Apartament Purpurowy
	if( galeria == "ap-purpurowy"){

		for(var i =1; i <= 10; i++){
			zdjecia += "<img src='assets/images/apartament-purpurowy/" + i.toString() + ".jpg' />";
		}

	// Apartament Bordowy //
	}else if( galeria == "ap-bordowy"){
		
		for(var i =1; i <= 8; i++){
			zdjecia += "<img src='assets/images/apartament-bordowy/" + i.toString() + ".jpg' />";
		}

	// Nasza Okolica //
	}else{
		
		for(var i =1; i <= 7; i++){
			zdjecia += "<img src='assets/images/nasza-okolica/" + i.toString() + ".jpg' />";
		}

	}

	$("#galeria-zdjecia").html(zdjecia);

	document.getElementById("galeria-container").className = galeria;

	$("#galeria-container").css({
		"display" : "block",
		"opacity" : 0
	});

	$("#galeria-container").animate({"opacity":1}, 1000, "easeInOutCubic");

	// Zjedz do Galeri //
	var scrollTo = $("#galeria-container").offset().top;

	if( $("#top-menu").css("position") == "fixed" ){
		scrollTo -= $("#top-menu").outerHeight();
	}

	$('html, body').animate({
        scrollTop: scrollTo
    }, 1000, 'easeInOutCubic', function(){
    	galeriaClickable = true;
    });

    activeGaleria = galeria;

}