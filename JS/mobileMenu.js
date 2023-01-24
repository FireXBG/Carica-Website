window.addEventListener("DOMContentLoaded", checkToggleOnClick);
function checkToggleOnClick() {
    var button = document.querySelector(".mobile-toggle");
    var menu = document.querySelector(".mobile-menu");
    var closeButtonH1 = document.querySelector(".close-button h1");
    var closeButton = document.querySelector(".close-button");
    var links = document.querySelector(".mobile-links-flexer")
    button.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    function openMenu() {
        menu.style.display = "flex";
        setTimeout(() => {
            closeButton.style.display = "block";
            menu.style.width = "15rem";
            menu.style.opacity = "1";
            button.style.display = none;
        }, 100);
        setTimeout(() => {  
            closeButtonH1.style.fontSize = "5rem";
            setTimeout(() => {
                closeButtonH1.style.opacity = "1";
                closeButton.style.opacity = "1";
                links.style.opacity = "1";
            }, 300);
        }, 700);
    }

    function closeMenu() {
        links.style.opacity = "0";
        closeButton.style.opacity = "0";
        setTimeout(() => {
            menu.style.width = "0";
        }, 300);
        setTimeout(() => {
            menu.style.opacity = "0";
            menu.style.display = "none";
            closeButton.style.display = "none";
        }, 800);
    }
}