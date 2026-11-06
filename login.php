
<?php

$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";

// التأكد من البريد الإلكتروني
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("البريد الإلكتروني غير صحيح");
}

// التأكد من أن كلمة المرور 6 أرقام
if (!preg_match('/^[0-9]{6}$/', $password)) {
    die("كلمة المرور يجب أن تتكون من 6 أرقام");
}

?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شكراً لاختيارك متجر غيمة</title>

    <style>
        body {
            background: linear-gradient(135deg, #eadcf8, #c8a5e8);
            font-family: Arial;
            text-align: center;
            padding: 30px;
            color: #542575;
        }

        .welcome {
            background: white;
            padding: 30px;
            border-radius: 20px;
            max-width: 500px;
            margin: 50px auto;
        }

        video {
            width: 100%;
            border-radius: 15px;
            margin-top: 20px;
        }
    </style>
</head>

<body>

    <div class="welcome">

        <h1>💜 شكراً لاختيارك متجر غيمة</h1>

        <p>سعداء بوجودك معنا، نتمنى لك تجربة تسوق ممتعة 🛍️</p>

        <video id="welcomeVideo" autoplay muted playsinline controls>
            <source src="welcome.mp4" type="video/mp4">
        </video>

        <p>سيتم نقلك إلى الصفحة الرئيسية...</p>

    </div>

    <script>
        const video = document.getElementById("welcomeVideo");

        // الانتقال عند انتهاء الفيديو
        video.addEventListener("ended", function () {
            window.location.href = "home.html";
        });

        // الانتقال بعد 8 ثوانٍ حتى لو لم ينته الفيديو
        setTimeout(function () {
            window.location.href = "home.html";
        }, 8000);
    </script>

</body>
</html>
