<?php

$host = "sql106.infinityfree.com";
$dbname = "اسم قاعدة البيانات";
$user = "اسم مستخدم قاعدة البيانات";
$pass = "كلمة مرور قاعدة البيانات";

try {

    $conn = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $user,
        $pass
    );

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {

    die("Database connection failed");

}
?>