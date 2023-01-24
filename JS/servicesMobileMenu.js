window.addEventListener("DOMContentLoaded", changeNavStyle);
function changeNavStyle() {
    var menu = document.querySelector(".mobile-menu");
    if(window.location.href.indexOf("/services.html") > -1) {
        menu.style.backgroundColor = "#000814"
    }
}