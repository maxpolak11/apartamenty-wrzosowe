
var onasGaleriaTime = 7000;

function initOnas(){

	// zainicjuj galerię slick //
	$("#onas .onas-galeria .slider").slick({
		dots: true,
		arrows: false,
		appendDots: $("#onas .onas-galeria .nawigacja"),
		speed: 800,
		easing: "easeInOutQuad",
		autoplay: true,
  		autoplaySpeed: 7000,
	});

	// Rozwiń więcej informacji po kliknięciu przycisku więcej //
	$("a#onas-wiecej").click(function(){

		if( !$("#onas-wiecej-text").hasClass("open") ){

			$("#onas-wiecej-text").addClass("open");

			$("#onas-wiecej-text").css("height", "auto");
			var wiecejHeight = $("#onas-wiecej-text").height();
			$("#onas-wiecej-text").css("height", "0");

			$("#onas-wiecej-text").animate({"height": wiecejHeight}, 800, 'easeInOutCubic', function(){
				$("#onas-wiecej-text").css("height", "auto");
			});

			$("a#onas-wiecej").animate({"opacity" : 0}, 800, 'easeInOutCubic', function(){
				$("a#onas-wiecej").css("display", "none");
			});
		}

	});

}