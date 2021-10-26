<?php
	
	// Ustal aktualną zakładkę //

	$url = $_SERVER['REQUEST_URI'];
	$page = "o-nas";

	if( strpos($url, 'oferta') !== false ){
		$page = "oferta";
	}else if( strpos($url, 'galeria') !== false ){
		$page = "galeria";
	}else if( strpos($url, 'kontakt') !== false ){
		$page = "kontakt";
	}

?>

	<div id="top-menu">
		<div class="container">

			<a href="/" class="logo">
				<img src="assets/images/webp/logo.webp" alt="Apartamenty Wrzosowe - Logo" />
			</a>
			
			<div id="mobile-menu-button">
				<div></div>
				<div></div>
				<div></div>
			</div>

			<a href="/" class="<?php if($page == "o-nas"){ echo "active"; } ?>">O Nas <span>zobacz szczegóły</span></a>
			<a href="/oferta/" class="<?php if($page == "oferta"){ echo "active"; } ?>">Oferta <span>poznaj ceny</span></a>
			<a href="/galeria/" class="<?php if($page == "galeria"){ echo "active"; } ?>">Galeria <span>apartamenty</span></a>
			<a href="/kontakt/" class="<?php if($page == "kontakt"){ echo "active"; } ?>">Kontakt <span>złóż rezerwację</span></a>

		</div>
		
		<div id="mobile-menu">
			<div id="mobile-menu-wrapper">

				<a href="/" class="<?php if($page == "o-nas"){ echo "active"; } ?>">O Nas <span>zobacz szczegóły</span></a>
				<div class="kropka"></div>
				<a href="/oferta/" class="<?php if($page == "oferta"){ echo "active"; } ?>">Oferta <span>poznaj ceny</span></a>
				<div class="kropka"></div>
				<a href="/galeria/" class="<?php if($page == "galeria"){ echo "active"; } ?>">Galeria <span>apartamenty</span></a>
				<div class="kropka"></div>
				<a href="/kontakt/" class="<?php if($page == "kontakt"){ echo "active"; } ?>">Kontakt <span>złóż rezerwację</span></a>

			</div>
		</div>

	</div>

	<div id="top-slider">

		<div class="slider">
			
			<div class="slides">
				<div class="slide">
					<img src="assets/images/webp/o-nas/slider/slider-1.webp" alt="Nowoczesne i przestronne. Komfort na który zasługujesz." />
				</div>
				<div class="slide">
					<img src="assets/images/webp/o-nas/slider/slider-2.webp" alt="Czas przyjemności. U nas go znajdziesz." />
				</div>
				<div class="slide">
					<img src="assets/images/webp/o-nas/slider/slider-3.webp" alt="Klimatyczna przestrzeń. Sprzyjająca Twojemu wypoczynkowi." />
				</div>
				<div class="slide">
					<img src="assets/images/webp/o-nas/slider/slider-4.webp" alt="Satysfakcja i zadowolenie. Apartamenty Wrzosowe." />
				</div>
			</div>

			<div class="container arrows">
				<div class="wrapper">

					<div class="prev-slide">
						<img src="assets/images/webp/icons/arrow-left.webp" alt="Poprzedni slajd." />
					</div>
					
					<div class="next-slide">
						<img src="assets/images/webp/icons/arrow-right.webp" alt="Następny slajd." />
					</div>
					
				</div>
			</div>

		</div>

		<div class="slider-bottom">
			<div class="container">
				<div class="white-box"></div>
			</div>
		</div>

	</div>
