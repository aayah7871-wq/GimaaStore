

<?php

session_start();

require_once "db.php";


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: new.html");
    exit;
}

$username = trim($_POST["username"] ?? "");
$password = $_POST["password"] ?? "";
$confirmPassword = $_POST["confirmPassword"] ?? "";

// التحقق من الحقول
if (empty($username) || empty($password) || empty($confirmPassword)) {
    die("يرجى ملء جميع الحقول.");
}
if (
    !filter_var($username, FILTER_VALIDATE_EMAIL) &&
    !preg_match('/^[0-9+]{7,20}$/', $username)
) {
    die("أدخلي بريداً إلكترونياً أو رقم هاتف صحيحاً.");
}


if ($password !== $confirmPassword) {
    die("كلمات المرور غير متطابقة.");
}

if (strlen($password) < 6) {
    die("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
}

try {
    $check = $conn->prepare(
        "SELECT id FROM users WHERE username = ?"
    );

    $check->execute([$username]);

    if ($check->fetch()) {
        die("هذا الحساب مسجل بالفعل. <a href='login.html'>تسجيل الدخول</a>");
    }

    $hashedPassword = password_hash(
        $password,
        PASSWORD_DEFAULT
    );

    $insert = $conn->prepare(
        "INSERT INTO users (name, username, password)
         VALUES (?, ?, ?)"
    );

    $insert->execute([
        $username,
        $username,
        $hashedPassword
    ]);

    header("Location: login.html?registered=1");
    exit;

} catch (PDOException $e) {

    die("حدث خطأ أثناء إنشاء الحساب. حاولي مرة أخرى.");

}

?>
