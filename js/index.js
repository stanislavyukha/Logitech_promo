const btn = document.getElementById('navbar-toggler');
const togglerIcon = document.getElementById('navbar__toggler_icon');
const header = document.getElementsByTagName('header')[0];
const logoDark = document.getElementById('header__logo_dark');
const logoWhite = document.getElementById('header__logo_white');
btn.addEventListener("click", function () {
    header.classList.toggle("header__burger");
    logoWhite.classList.toggle("header__logo_white");
    logoDark.classList.toggle("header__logo_white");
    togglerIcon.classList.toggle("burger__toggler_close");

});
