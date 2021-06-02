<?php
include "includes\\functions\\_functions.php";
echo file_get_contents("templates\\head\\head.html");

$head = file_get_contents("templates\\head\\header.html");
$logo = file_get_contents("templates\\head\\logo.html");
$nav = file_get_contents("templates\\head\\nav.html");
$head = str_replace("{ logo }", $logo, $head);
$head = str_replace("{ nav }", $nav, $head);
echo $head;



$index= file_get_contents("templates\\index.html");
$project = file_get_contents("templates\\project.html");
$rolam = file_get_contents("templates\\about.html");
$form = file_get_contents("templates\\form.html");
$index = str_replace("{ rolam }", $rolam, $index);
$index = str_replace("{ form }", $form, $index);
$index = str_replace("{ projekt }", $project, $index);


echo $index;
echo file_get_contents("templates\\foot.html");
