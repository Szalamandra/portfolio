<?php

include  __DIR__ . '/includes/functions/_functions.php';
echo file_get_contents(__DIR__ . '/templates/head/head.html');

$head = file_get_contents(__DIR__ . '/templates/head/header.html');
$logo = file_get_contents(__DIR__ . '/templates/head/logo.html');
$nav = file_get_contents(__DIR__ . '/templates/head/nav.html');
$head = str_replace("{ logo }", $logo, $head);
$head = str_replace("{ nav }", $nav, $head);
echo $head;



$index = file_get_contents(__DIR__ . '/templates/index.html');
$project = file_get_contents(__DIR__ . '/templates/projectBox.html');
$rolam = file_get_contents(__DIR__ . '/templates/about.html');
$form = file_get_contents(__DIR__ . '/templates/form.html');
$index = str_replace("{ rolam }", $rolam, $index);
$index = str_replace("{ form }", $form, $index);
$index = str_replace("{ projekt }", $project, $index);

$projektek = file_get_contents(__DIR__ . '/templates/project.html');
$projektWeb = file_get_contents(__DIR__ . '/templates/projectWeb.html');
$index = str_replace("{ projektWeb }", $projektWeb, $index);
$index = str_replace("{ projektek }", $projektek, $index);


//form validalas

$formResz = "";
if (isset($_GET["errorSend"])) {
    $formResz = "<div class='notLoading'></div>";
    $index = str_replace("{ formControl }", $formResz, $index);
    error_log("elkuldtem");
} else {
    $index = str_replace("{ formControl }", $formResz, $index);
}

if (isset($_GET["successSend"])) {
    echo 'Email elküldve';
}



echo $index;
echo file_get_contents(__DIR__ . '/templates/foot.html');
