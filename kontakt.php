<!DOCTYPE html>
<html lang="pl">
<head>
	<title>Apartamenty Wrzosowe Kołobrzeg - Oferta</title>

	<?php include("head.php"); ?>
	
</head>
<body>
	
	<?php include("header.php"); ?>

	<div id="kontakt">
		<div class="container">

			<h2 class="white">Kontakt<span class="kropka"></span></h2>
			<h5 class="white">Wyślij Zapytanie / Zarezerwuj</h5>

			<div class="kontakt-container">

				<div class="formularz">

					<form id="kontakt-formularz">
						
						<label for="f_imie">Imię *</label>
						<input type="text" name="f_imie" id="f_imie" />

						<label for="f_nazwisko">Nazwisko *</label>
						<input type="text" name="f_nazwisko" id="f_nazwisko" />

						<label for="f_email">Email *</label>
						<input type="email" name="f_email" id="f_email" />

						<label for="f_telefon">Telefon</label>
						<input type="tel" name="f_telefon" id="f_telefon" />

						<label for="f_wiadomosc">Wiadomość *</label>
						<textarea rows="6" name="f_wiadomosc" id="f_wiadomosc"></textarea>

						<button type="submit" id="kontakt-wyslij">Wyślij wiadomość</button>
					</form>

					<div id="wiadomosc-wyslana">
						<div class="wrapper">
							<h4>Dziękujemy!</h4>
							<p>Twoja wiadomość została wysłana!</p>
						</div>
					</div>

				</div>

				<div class="informacje">

					<h3 class="white">Rezerwacja</h3>

					<p>
						Rezerwacji można dokonać telefonicznie: <br>
						<b>+48 530 720 725</b> 
						<br>lub poprzez e-mail: <a href="mailto:katarzynagalan@o2.pl"><b>katarzynagalan@o2.pl</b></a>
					</p>

					<h3 class="white">Lokalizacja</h3>

					<p>
						ul. Chopina 16A <br>
						78-100 Kołobrzeg <br>
						<a target="_blank" href="https://maps.google.pl/maps?q=Ko%C5%82obrzeg,+chopina+16a&amp;hl=pl&amp;ie=UTF8&amp;ll=54.184499,15.580078&amp;spn=0.001862,0.003449&amp;sll=51.953751,19.134379&amp;sspn=8.032413,14.128418&amp;hnear=Fryderyka+Chopina+16A,+Ko%C5%82obrzeg,+ko%C5%82obrzeski,+Wojew%C3%B3dztwo+zachodniopomorskie&amp;t=m&amp;z=18&amp;iwloc=A"><b>Mapa</b> &gt;</a>
					</p>

					<p class="zadatek">
						• Potwierdzeniem rezerwacji jest wpłata zadatku w kwocie <br>
						&nbsp;&nbsp;&nbsp;30% wartości pobytu. <br>
						• Zadatek w myśl prawa handlowego nie podlega zwrotowi.
					</p>

					<h3 class="white">Dane do przelewu</h3>

					<p>
						Katarzyna Gałan <br>
						Konto: Bank mBank, 59 1140 2017 0000 4502 1054 0237 <br>
						Tytuł przelewu: <b>Rezerwacja. W terminie od ............ do ........... Imię i nazwisko, ilość osób ........... nr tel. ...........</b>
					</p>

				</div>

			</div>

		</div>
	</div>

	<?php include("shared/apartamenty-i-okolica.php"); ?>

	<?php include("footer.php"); ?>

</body>
</html>
