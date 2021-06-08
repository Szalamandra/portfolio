<?php
include "includes\\functions\\_functions.php";
echo file_get_contents("templates\\head\\head.html");

$head = file_get_contents("templates\\head\\header2.html");
$logo = file_get_contents("templates\\head\\logo.html");
$nav = file_get_contents("templates\\head\\nav2.html");
$head = str_replace("{ logo }", $logo, $head);
$head = str_replace("{ nav }", $nav, $head);
echo $head;




$abD = file_get_contents("templates\\aboutDetail.html");



echo $abD;
echo file_get_contents("templates\\foot.html");
