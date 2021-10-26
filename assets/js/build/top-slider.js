
function initTopSlider(){

	// zainicjuj galerię slick //
	$("#top-slider .slides").slick({
		dots: false,
		prevArrow: $("#top-slider .arrows .prev-slide"),
		nextArrow: $("#top-slider .arrows .next-slide"),
		speed: 900,
		easing: "easeInOutSine",
		autoplay: true,
  		autoplaySpeed: 10000,
	});
	
}