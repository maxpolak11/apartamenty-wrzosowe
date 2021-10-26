<?php

	// Wyświetl 3 zakładki w zależności od tego gdzie jesteśmy //

	$footer_links = [
		["O Nas", "/"],
		["Oferta", "/oferta/"],
		["Galeria", "/galeria/"],
		["Kontakt", "/kontakt/"]
	];

	$url = $_SERVER['REQUEST_URI'];

	if( strpos($url, 'oferta') !== false ){
		unset($footer_links[1]);
	}else if( strpos($url, 'galeria') !== false ){
		unset($footer_links[2]);
	}else if( strpos($url, 'kontakt') !== false ){
		unset($footer_links[3]);
	}else{
		unset($footer_links[0]);
	}

?>

	<div id="footer">

		<div class="footer-top">
			<div class="container">

				<div class="footer-menu">
					
					<?php
						foreach ($footer_links as $link) {
							echo "<a href='$link[1]'>$link[0]</a>";
						}
					?>

				</div>

				<div class="mobile">
					<a>
						<?php echo file_get_contents(__DIR__ . "/assets/icons/phone.svg"); ?>
						+ 48 530 720 725
					</a>
				</div>

			</div>
		</div>

		<div class="footer-bottom">
			<div class="container">

				<p><b>Apartamenty Wrzosowe</b><span class="mobile-hide"> - Wynajem - Tanie Apartamenty blisko morza - Kołobrzeg</span></p>
				<a href="mailto:katarzynagalan@o2.pl">katarzynagalan@o2.pl</a>
				
			</div>
		</div>

	</div>

	<div id="body-overlay"></div>

	<script src="assets/js/include/jquery-3.6.0.min.js"></script>
	<script src="assets/js/include/jquery.easing.min.js"></script>
	<script src="assets/js/include/jquery.validate.min.js"></script>
	<script src="assets/js/include/slick.min.js"></script>
	<script src="assets/js/main-min.js?<?php echo filemtime( dirname(__FILE__) . "/assets/js/main-min.js" ); ?>"></script>
	