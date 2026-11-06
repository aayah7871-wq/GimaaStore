
document.addEventListener("DOMContentLoaded", function () {

    const languageButton =
        document.getElementById("languageButton");

    const themeButton =
        document.getElementById("themeButton");

    const warningButton =
        document.getElementById("warningButton");

    const warningMessage =
        document.getElementById("warningMessage");

    let language = localStorage.getItem("gimaLanguage") || "ar";

    
    function setLanguage(lang) {

        language = lang;

        document.documentElement.lang = lang;
        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";

        document.querySelectorAll("[data-ar]").forEach(element => {
            element.textContent =
                element.getAttribute("data-" + lang);
        });

        document.getElementById("storeName").textContent =
            lang === "ar" ? "💜 متجر غيمة 🛍️" : "💜 Gima Store 🛍️";

        document.querySelector('input[name="email"]').placeholder =
            lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email";

        document.querySelector('input[name="password"]').placeholder =
            lang === "ar" ? "أدخل كلمة المرور" : "Enter your password";

        languageButton.textContent =
            lang === "ar" ? "🌐 English" : "🌐 العربية";

        warningButton.textContent =
            lang === "ar" ? "⚠️ تنبيه" : "⚠️ Warning";

        warningMessage.textContent =
            lang === "ar"
            ? "⚠️ لا تشارك كلمة المرور مع أي شخص حفاظاً على أمان حسابك."
            : "⚠️ Never share your password with anyone to protect your account.";

        localStorage.setItem("gimaLanguage", lang);
    }

    languageButton.addEventListener("click", function () {
        setLanguage(language === "ar" ? "en" : "ar");
    });

    // تغيير الإضاءة
    let dark = localStorage.getItem("gimaTheme") === "dark";

    function setTheme() {
        document.body.classList.toggle("dark-mode", dark);

        themeButton.textContent =
            dark
            ? (language === "ar" ? "☀️ الوضع الفاتح" : "☀️ Light Mode")
            : (language === "ar" ? "🌙 الوضع الداكن" : "🌙 Dark Mode");

        localStorage.setItem("gimaTheme", dark ? "dark" : "light");
    }

    themeButton.addEventListener("click", function () {
        dark = !dark;
        setTheme();
    });
  
  
    warningButton.addEventListener("click", function () {
        warningMessage.hidden = !warningMessage.hidden;
    });

    setLanguage(language);
    setTheme();

});
