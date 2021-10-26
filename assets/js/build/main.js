
// po załadowaniu - podepnij eventy //
$(document).ready(function () { 

	// Menu (Mobile) //
	initMenu();

	// Top Slider //
	initTopSlider();

	// Zakładka O Nas //
	if( $("#onas").length ){

		initOnas();
	
	// Zakładka Oferta //
	}else if( $("#oferta").length ){

		var scrollTo = $("#oferta").offset().top;
		if( $("#top-menu").css("position") == "fixed" ){
			scrollTo -= $("#top-menu").outerHeight();
		}

		$('html, body').animate({
	        scrollTop: scrollTo
	    }, 1000, 'easeOutCubic');

	// Zakładka Galeria //
	}else if( $("#galeria").length ){

	    initGaleria();

	// Zakładka Kontakt //
	}else if( $("#kontakt").length ){

	    initKontakt();

	}

});

// Po pełnym załadowaniu strony //
$(window).on('load', function() {
	$(window).resize();
});
