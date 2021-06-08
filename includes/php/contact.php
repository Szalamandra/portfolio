<?php

if (isset($_POST['formBtn'])){
    $user=$_POST['nev'];
    $email=$_POST['email'];
    $msg=$_POST['message'];
    $subject="portfolio uzenet";
    $to="drzsigmondre@gmail.com";
    if(empty($user) || empty($email) || empty($msg)){
        header('location:index.php?errorSend');
    }
    else{
        if(mail($to,$subject,$msg,$email)){
            header('location:index.php?successSend');
        }
    
    }

}
else
    header("location:index.php");