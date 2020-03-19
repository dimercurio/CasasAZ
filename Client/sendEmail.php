<?php

$firstName = $_POST['firstName1'];
$lastName = $_POST['lastName1'];
$mailFrom = $_POST['emailAddress1'];
$phoneNumber = $_POST['phoneNumber1'];
$message = $_POST['userMessage1'];

$mailTo = "cbgprocessing@gmail.com";
$headers = "From: " . $mailFrom;



        /*$txt .= "You have received an e-mail from ".$name.".\n\n".$message;*/
$newSubject = "Inquiry from " . $firstName . " " . $lastName;
$success = mail($mailTo, $newSubject, $message, $headers);

if ($success) {
    echo "Thank you! We'll get back to you as soon as possible!";
}
else{
    echo "Whoops! We had a problem sending your message. Please give us a call!";
}


        /*if ($mailFrom == "ddimercurio126@gmail.com") {
            json_encode(array('thing' => "You succeeded!"));
        }
        /*if ($success) {
            echo json_encode(array('thing' => "You succeeded!"));
        }
        else{
            echo json_encode(array("thing2" => "You didn't succeed, you suck!"));
        }
         /* header("Location: index.php?mailsend"); */