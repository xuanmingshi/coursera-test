<?php
	ini_set('display_errors', '1');

	// echo '<input type="hidden" value="' . htmlspecialchars($data) . '" />'."\n";
	// if (!empty($_POST)){
	// 	echo "hello world!";
	// }else{echo "no Post!";}


	if(isset($_POST['submit'])){
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$email=$_POST['email'];
		echo "your first name is: " . $fname . "<br>";
		// echo "your last name is: ".$lname. "<br>";
		// echo "your email is: ".$email. "<br>";
	}
	else{
		echo "<h2>PHP is Fun!</h2>";
		echo "Hello world!<br>";
		echo "I'm about to learn PHP!<br>";
		echo "This ", "string ", "was ", "made ", "with multiple parameters.";
	}
?>