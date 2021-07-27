<?php
header("Content-type: text/html; charset=utf-8");

if (isset($_POST['message'])) {
    $user = htmlspecialchars($_POST['nev']);
    $email = htmlspecialchars($_POST['email']);
    $msg = htmlspecialchars($_POST['message']);
    $subject = "portfolio uzenet";
    $to = "contact@doctoreureka.com";


    echo "bejutott a contact.php-ba";

    if (mail($to, $subject, $msg, $email)) {
        //header('location:../../index.php?successSend');
        echo "elküldve az email-contact.php";
        $emailSent = 2;
    } else {
        echo "serverhiba, próbálja meg később";
        $emailSent = 1;
    }
}


header('location:../../index.php');
