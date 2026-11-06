document.addEventListener("DOMContentLoaded", function () {

// =========================
// 1. تغيير اللغة
// =========================

const languageButton = document.getElementById("languageButton");

function setLanguage(language) {
    const isArabic = language === "ar";

    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    // تغيير النصوص
    document.querySelectorAll("[data-ar][data-en]").forEach(function (element) {
        element.textContent = isArabic
            ? element.getAttribute("data-ar")
            : element.getAttribute("data-en");
    });

    // تغيير النصوص داخل خانات الإدخال
    document.querySelectorAll(
        "[data-ar-placeholder][data-en-placeholder]"
    ).forEach(function (element) {
        element.placeholder = isArabic
            ? element.getAttribute("data-ar-placeholder")
            : element.getAttribute("data-en-placeholder");
    });

    // تغيير اسم زر اللغة
    if (languageButton) {
        languageButton.textContent = isArabic
            ? "🌐 English"
            : "🌐 العربية";
    }

    localStorage.setItem("gimaLanguage", language);
}

if (languageButton) {
    languageButton.addEventListener("click", function () {
        const currentLanguage = document.documentElement.lang || "ar";

        setLanguage(currentLanguage === "ar" ? "en" : "ar");
    });
}


// =========================
// 2. تغيير الإضاءة
// =========================

const themeButton = document.getElementById("themeButton");

function setTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-mode", isDark);

    if (themeButton) {
        themeButton.textContent = isDark
            ? "☀️ الوضع الفاتح"
            : "🌙 الوضع الداكن";
    }

    localStorage.setItem("gimaTheme", theme);
}

if (themeButton) {
    themeButton.addEventListener("click", function () {
        const isDark = document.body.classList.contains("dark-mode");

        setTheme(isDark ? "light" : "dark");
    });
}


// =========================
// 3. استرجاع الإعدادات المحفوظة
// =========================

setLanguage(localStorage.getItem("gimaLanguage") || "ar");
setTheme(localStorage.getItem("gimaTheme") || "light");

});