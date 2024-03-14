<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('en', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setForm('user@gmail.com', 'user');

    $mail->addAddress('kristinapotapenko96@gmail.com');

    $mail->Subject = 'Hello!';

    $body = '<h1>JOEY!</h1>'

    if(trim(!empty($_POST['name']))){
        $body = '<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }

    if(trim(!empty($_POST['email']))){
        $body = '<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail-> send()){
        $message = 'Error!';
    } else{
        $message = 'Data send!'
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encods($response);
?>