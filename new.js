function showPassword(id, button) {

    let password = document.getElementById(id);

    if (password.type === "password") {

        password.type = "text";
        button.innerHTML = "🙈";

    } else {

        password.type = "password";
        button.innerHTML = "👁";
    }
}

function changeTheme() {

    document.body.classList.toggle("dark");

    let isDark = document.body.classList.contains("dark");

    let button = document.getElementById("themeBtn");

    button.innerHTML = isDark ? "☀️" : "🌙";

    localStorage.setItem("gimaTheme", isDark ? "dark" : "light");
}

let isArabic = true;

function changeLanguage() {

    isArabic = !isArabic;

    document.documentElement.lang = isArabic ? "ar" : "en";

    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    document.getElementById("languageBtn").innerHTML =
        isArabic ? "English" : "العربية";

    document.getElementById("logo").innerHTML =
        "☁️ Gima Store";

    document.getElementById("title").innerHTML =
        isArabic ? "إنشاء حساب جديد" : "Create New Account";

    document.getElementById("welcome").innerHTML =
        isArabic ? "مرحباً بك في متجر غيمة 💜" : "Welcome to Gima Store 💜";

    document.getElementById("userLabel").innerHTML =
        isArabic ? "البريد الإلكتروني أو رقم الهاتف" : "Email or Phone Number";

    document.getElementById("passLabel").innerHTML =
        isArabic ? "كلمة المرور" : "Password";

    document.getElementById("confirmLabel").innerHTML =
        isArabic ? "تأكيد كلمة المرور" : "Confirm Password";

    document.getElementById("username").placeholder =
        isArabic ? "أدخل البريد الإلكتروني أو رقم الهاتف" : "Enter Email or Phone Number";

    document.getElementById("password").placeholder =
        isArabic ? "أدخل كلمة المرور" : "Enter Password";

    document.getElementById("confirmPassword").placeholder =
        isArabic ? "أعد إدخال كلمة المرور" : "Confirm Password";

    document.getElementById("registerBtn").innerHTML =
        isArabic ? "إنشاء حساب" : "Create Account";

    document.getElementById("loginLink").innerHTML =
        isArabic
        ? 'هل لديك حساب بالفعل؟ <a href="login.html">تسجيل الدخول</a>'
        : 'Already have an account? <a href="login.html">Login</a>';

    document.getElementById("footer").innerHTML =
        isArabic ? "أهلاً بك في عالم غيمة 💜" : "Welcome to Gima Store 💜";

    localStorage.setItem("gimaLanguage", isArabic ? "ar" : "en");
}

document.addEventListener("DOMContentLoaded", function () {

    let savedTheme = localStorage.getItem("gimaTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        document.getElementById("themeBtn").innerHTML = "☀️";
    }

    let savedLanguage = localStorage.getItem("gimaLanguage");

    if (savedLanguage === "en") {

        isArabic = false;
        changeLanguage();
    }

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (e) {

        let username = document.getElementById("username").value.trim();

        let password = document.getElementById("password").value;

        let confirmPassword = document.getElementById("confirmPassword").value;

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let phonePattern = /^\+?[0-9]{8,15}$/;

        if (!emailPattern.test(username) &&
            !phonePattern.test(username)) {

            e.preventDefault();

            alert(isArabic
                ? "أدخلي بريداً إلكترونياً أو رقم هاتف صحيحاً"
                : "Enter a valid email or phone number");

            return;
        }

        if (password.length < 6) {

            e.preventDefault();

            alert(isArabic
                ? "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
                : "Password must be at least 6 characters");

            return;
        }

        if (password !== confirmPassword) {

            e.preventDefault();

            alert(isArabic
                ? "كلمتا المرور غير متطابقتين ❌"
                : "Passwords do not match ❌");

            return;
        }

    });

});
