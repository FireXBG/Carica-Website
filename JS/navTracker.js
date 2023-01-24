window.addEventListener("DOMContentLoaded", track);
function track() {
    var home = document.querySelector(".nav_links a:nth-child(1)");
    var aboutUs = document.querySelector(".nav_links a:nth-child(2)");
    var services = document.querySelector(".nav_links a:nth-child(3)");
    var contacts = document.querySelector(".nav_links a:nth-child(4)");

    if(window.location.href.indexOf("/aboutUs") > -1) {
        aboutUs.style.color = "#FFC300";
        aboutUs.addEventListener("mouseover", hover);
        aboutUs.addEventListener("mouseout", unhover);
        function hover() {
            aboutUs.style.color = "#000814";
        }
        function unhover() {
            aboutUs.style.color = "#FFC300"
        }
    } else if (window.location.href.indexOf("/services") > -1) {
        services.style.color = "#FFC300";
        services.addEventListener("mouseover", hover);
        services.addEventListener("mouseout", unhover);
        function hover() {
            services.style.color = "#000814";
        }
        function unhover() {
            services.style.color = "#FFC300"
        }
    }

    else if (window.location.href.indexOf("/contacts") > -1) {
        contacts.style.color = "#FFC300";
        contacts.addEventListener("mouseover", hover);
        contacts.addEventListener("mouseout", unhover);
        function hover() {
            contacts.style.color = "#000814";
        }
        function unhover() {
            contacts.style.color = "#FFC300"
        }
    } else {
        home.style.color = "#FFC300";
        home.addEventListener("mouseover", hover);
        home.addEventListener("mouseout", unhover);
        function hover() {
            home.style.color = "#000814";
        }
        function unhover() {
            home.style.color = "#FFC300"
        }
    }
}