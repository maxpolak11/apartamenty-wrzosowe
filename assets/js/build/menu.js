
var menuClickable = false;

function initMenu(){

	// schowaj menu poza oknem przeglądarki //
	$("#mobile-menu").css("top","-1000px");

	// pokaż/schowaj menu po kliknięciu hamburgera //
	$("#mobile-menu-button").click(function(){

		if(!menuClickable) return;
		menuClickable = false;

		// Otwórz Menu //
		if( !$("#mobile-menu").hasClass("open") ){

			$("#mobile-menu").css("top","");
			$("#mobile-menu").addClass("open");

			$(this).addClass("open");

			$("#body-overlay").css("display", "block").animate({"opacity": 1}, 600, 'easeOutCubic', function(){
				menuClickable = true;
			});
			

		// Zamknij Menu //
		}else{

			$(this).removeClass("open");

			$("#mobile-menu").removeClass("open");
			
			$("#body-overlay").animate({"opacity": 0}, 600, 'easeOutCubic', function(){
				$("#body-overlay").css("display", "none");
				$("#mobile-menu").css("top","-1000px");

				menuClickable = true;
			});

		}
		

	});

	// Zamknij Menu - po kliknięciu w czarny obszar //
	$("#body-overlay").click(function(){
		$("#mobile-menu-button").click();
	});

	menuClickable = true;
}
