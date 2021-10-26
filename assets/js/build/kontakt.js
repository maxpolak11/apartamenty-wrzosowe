
var submitable = false;

function initKontakt(){

	// Zatrzymaj formularz przed domyślną akcją //
	$("#kontakt-formularz").submit(function(e){
		e.preventDefault();
	});

	// Zweryfikuj dane podane w formularzu //
	$("#kontakt-formularz").validate({

		rules: {
		
			f_imie: "required",
			f_nazwisko: "required",
			f_email: {
				required: true,
				email: true
			},
			f_wiadomosc: "required"
			
		},
		messages: {
			f_imie: "Proszę podać swoję imię",
			f_nazwisko: "Proszę podać swoje nazwisko",
			f_email: "Proszę podać prawidłowy adres email",
			f_wiadomosc: "Proszę wypełnić polę wiadomości"
		},
		submitHandler: function(form) {

			if(!submitable) return;
			submitable = false;

			var $form = $("#kontakt-formularz");
			var $inputs = $form.find("input, textarea");

			var serializedData = $form.serialize();

			// $inputs.prop("disabled", true);

			// Wyślij dane do skryptu php //
			request = $.ajax({
			    url: "wyslij-wiadomosc.php",
			    type: "post",
			    data: serializedData
			});

			// Jeśli się powiodło: //
			request.done(function (response, textStatus, jqXHR){

				$("#kontakt-formularz").animate({"opacity" : 0}, 800, 'easeInSine', function(){

					$("#wiadomosc-wyslana")
						.css("display", "block")
						.delay(100)
						.animate({"opacity": 1}, 800, 'easeOutSine');
				});

			    console.log(response);
			});

			// Jeśli wystąpił błąd: //
			request.fail(function (jqXHR, textStatus, errorThrown){
			    alert("Wystąpił błąd podczas wysyłania wiadomości, proszę napisz wiadomość email bezpośrednio na adres: katarzynagalan@o2.pl, lub zadzwoń na numer +48 530 720 725");
			    console.error(
			        "Błąd: "+
			        textStatus, errorThrown
			    );
			    submitable = true;
			});

			request.always(function () {
			    $inputs.prop("disabled", false);
			});

		}
	});

	// Ustaw automatyczną regulacje wielkości okna wiadomości //
    $("#kontakt #f_wiadomosc").css("min-height", $("#kontakt #f_wiadomosc").outerHeight() );
    $("#kontakt #f_wiadomosc").css("max-height", $("#kontakt #f_wiadomosc").height()*2 );

    $("#kontakt #f_wiadomosc").on('input', function(){

    	document.getElementById("f_wiadomosc").style.height = "5px";
    	document.getElementById("f_wiadomosc").style.height = (document.getElementById("f_wiadomosc").scrollHeight) + "px";
    });

	// Po załadowaniu strony zjedź do kontaktu //
	var scrollTo = $("#kontakt").offset().top;

	if( $("#top-menu").css("position") == "fixed" ){
		scrollTo -= $("#top-menu").outerHeight();
	}

	$('html, body').animate({
        scrollTop: scrollTo
    }, 1000, 'easeInOutCubic', function(){
    	submitable = true;
    });

}