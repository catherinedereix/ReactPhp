<?php 

//var_dump($_SERVER);
//var_dump($_REQUEST);

$data =["bonjour" => "Catherine"];
if( $_SERVER["REQUEST_METHOD"]== 'GET'){
    echo json_encode($data);

}

?>
