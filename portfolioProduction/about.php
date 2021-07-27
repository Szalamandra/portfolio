<?php


include  __DIR__ . '/includes/functions/_functions.php';
echo file_get_contents(__DIR__ . '/templates/head/head.html');

$head = file_get_contents(__DIR__ . '/templates/head/header.html');
$logo = file_get_contents(__DIR__ . '/templates/head/logo.html');
$nav = file_get_contents(__DIR__ . '/templates/head/nav.html');
$head = str_replace("{ logo }", $logo, $head);
$head = str_replace("{ nav }", $nav, $head);
echo $head;



echo file_get_contents(__DIR__ . '/templates/about.html');
echo file_get_contents(__DIR__ . '/templates/foot.html');
