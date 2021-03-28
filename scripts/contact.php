<?php
if(isset($_POST['submit'])){
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$mailTo = "vrbulcao@outlook.com";
	$headers = "From: ".$mailFrom;
	$txt = "PORTFOLIO:\nYou received an email from ".$name."\n\n".$message;

	mail($mailTo,$subject,$txt,$headers);
	ini_set('display_errors','Off');

	if($mail){
	  $mgm = "Email sended!";
	  echo " <meta http-equiv='refresh' content='10;URL=contact.php'>";
	  } else {
	  $mgm = "Error to send this email! (GITHUB.IO DOESN'T SUPPORT PHP, THATS WHY YOU CAN'T SEND ME THIS MESSAGE :) ) ";
	  echo "";
  }
}
?>