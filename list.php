<?php
include "includes\\db_functions.php";

echo file_get_contents("templates\\head.html");
echo file_get_contents("templates\\nav.html");



$data=lekerKiado();
//print_r($data);
$testadat="";
for($i=0;$i<count($data);$i++){
        $test=file_get_contents("templates\\tableRow.html");
        $test=str_replace('{ az }',$data[$i]['id'],$test);
        $test = str_replace('{ kiadoNev }', $data[$i]['nev'], $test);
        $testadat.=$test;}


$page = file_get_contents("templates\\list.html");
$page=str_replace("{ test }", $testadat, $page);

echo $page;


echo file_get_contents("templates\\foot.html");
