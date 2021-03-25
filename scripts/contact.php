<?php
if(!empty($_POST["submit"])) {
	$name = $_POST["Contact-Name"];
	$email = $_POST["Contact-Email"];
	$subject = $_POST["subject"];
	$message = $_POST["Contact-Message"];

	$toEmail = "vrbulcao@outlook.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $subject, $message, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
require_once "contact-view.php";
?>