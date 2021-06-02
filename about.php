<?php
include "includes\\functions\\_functions.php";
echo file_get_contents("templates\\head\\head.html");

$head = file_get_contents("templates\\head\\header.html");
$logo = file_get_contents("templates\\head\\logo.html");
$nav = file_get_contents("templates\\head\\nav.html");
$head = str_replace("{ logo }", $logo, $head);
$head = str_replace("{ nav }", $nav, $head);
echo $head;



echo file_get_contents("templates\\about.html");
echo file_get_contents("templates\\foot.html");
