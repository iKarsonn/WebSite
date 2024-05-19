<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini al
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // E-posta ayarları
    $to = "sakarya5454@gmail.com"; // E-postanın gönderileceği adres
    $subject = "Yeni İletişim Formu Mesajı";
    $body = "Ad: $name\nE-Posta: $email\nMesaj: $message";
    $headers = "From: $email";

    // E-posta gönder
    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajınız başarıyla gönderildi.";
    } else {
        echo "Mesajınız gönderilirken bir hata oluştu.";
    }
} else {
    echo "Geçersiz istek.";
}
?>
