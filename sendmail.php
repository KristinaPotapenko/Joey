<?php
    $to  = 'kristinapotapenko96@gmail.com' . ', '; 
    $to .= 'mail2@example.com';

    $subject = 'Message Joey';

    $message = 'User' . $_POST['name'] . ' send message. Email:' . $_POST['email'];

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

    $headers .= 'To: Kristina <kristinapotapenko96@gmail.com>' . "\r\n"; // Свое имя и email
    $headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";

    mail($to, $subject, $message, $headers);
?>
