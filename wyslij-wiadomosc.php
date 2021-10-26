<?php
	
	$f_imie = $_POST['f_imie'];
	$f_nazwisko = $_POST['f_nazwisko'];
	$f_email = $_POST['f_email'];
	$f_telefon = isset($_POST['f_telefon']) ? $_POST['f_telefon'] : "";

	$f_wiadomosc = $_POST['f_wiadomosc'];

	require 'assets/php/PHPMailer/PHPMailer.php';
	require 'assets/php/PHPMailer/SMTP.php';
	require 'assets/php/PHPMailer/Exception.php';

	use PHPMailer\PHPMailer\PHPMailer;

	$mail = new PHPMailer();

	$mail->CharSet = 'UTF-8';
	$mail->Encoding = 'base64';

	$mail->isSMTP();
	$mail->Mailer = "smtp";
	// $mail->SMTPDebug  = 1;
	$mail->SMTPDebug  = 0;
	$mail->SMTPAuth   = TRUE;
	$mail->SMTPSecure = "tls";
	$mail->Port       = 587;
	$mail->Host       = "smtp.gmail.com";
	$mail->Username   = "******";
	$mail->Password   = "******";

	$mail->setFrom($f_email);
	$mail->addReplyTo($f_email);

	$mail->addAddress('katarzynagalan@o2.pl', 'Katarzyna Galan');

	$mail->Subject = 'Apartamenty Wrzosowe';
	$mail->isHTML(true);

	$mailContent = "
		<h2>Nowa Wiadomość ze strony Apartamenty Wrzosowe.</h2>
		<br><br>
		<p>Imię: $f_imie</p>
		<p>Nazwisko: $f_nazwisko</p>
		<p>Email: $f_email</p>
		<p>Telefon: $f_telefon</p>
		<p>Wiadomość: <br><br>" . nl2br($f_wiadomosc) . "</p>
    ";

	$mail->Body = $mailContent;

	$mail->AltBody = "
		Nowa Wiadomość ze strony Apartamenty Wrzosowe.
		Imię: $f_imie
		Nazwisko: $f_nazwisko
		Email: $f_email
		Telefon: $f_telefon
		Wiadomość: $f_wiadomosc";

	// Na razie nic nie wysyłaj //
	echo "success";
	
	// if($mail->send()){
	//     echo 'success';
	// }else{
	//     echo 'Message could not be sent.';
	//     echo 'Mailer Error: ' . $mail->ErrorInfo;
	// }

?>