<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];

// Формирование письма с рассылкой
$title = "Рассылка EHYA - Fashion";
$body = "
<h2>Новостная рассылка EHYA - Fashion</h2>
<b>Сообщение:</b><br> Мы рады видеть Вас в числе наших подписчиков!<br>
К рассылке подключен <b>Ваш почтовый ящик:</b>$email";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
    
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'iskadronovas@gmail.com'; // Логин на почте
    $mail->Password   = '!QAZxsw2'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('iskadronovas@gmail.com', 'Светлана Искадронова'); // Адрес самой почты и имя отправителя
    
    //Получатель письма
    $mail->addAddress('Candy__88@mail.ru');
    $mail->addAddress($email);
    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: newsletter.html');