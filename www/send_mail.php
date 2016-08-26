<?php

$name = $_POST["name"];
$text = $_POST["message"];
$email = $_POST["email"];

if($name && $text && $email) {
    $to = "zmn.wtr@gmail.com,sevostyanovg.d@gmail.com";
    $from = "Socialcall <info@socialcall.ru>";
    $boundary = md5(date('r', time()));
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative;boundary=" . $boundary . "\r\n";

    $subject = 'Feedback from socialcall.ru';

    $message = 'Заполнена форма "Обратная связь" на сайте socialcall.ru'."\n";
    $message .= 'Имя: '.$name."\n";
    $message .= 'Почта: '.$email."\n";
    $message .= 'Сообщение: '.$text."\n";

    if(!(mail($to, $subject, $message, $headers))){
        echo "<h1>Sorry, something bad happened...</h1>";
    } else {
        echo "<h1>Thank you!</h1>";
    }
}