<?php 
$destinatario = "antonio.saurith@gmail.com";
$nombre_apellido = $_POST["nombre_apellido"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];

$contenido = "Nombre y apellido: " . $nombre_apellido . "\nCorreo: " .  $email . "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;

mail($destinatario, "Mensaje enviado desde la página de Mangonails.cl", $contenido);
header("location:gracias.html");
?>