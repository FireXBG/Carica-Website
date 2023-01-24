window.addEventListener("DOMContentLoaded", animate);

function animate() {

var logo = document.querySelector(".logo_name");
var carica = document.querySelector(".carica");
var web = document.querySelector("#landing-website");
var aboutUs = document.querySelector(".aboutUsName");
var contacts = document.querySelector(".contactUsName")
var webDev = document.querySelector(".webDevName");
var webSupp = document.querySelector(".webSuppName");
var services = document.querySelector(".servicesName");
var google = document.querySelector(".googleName");


    setTimeout(() => {
        logo.style.opacity = "1";
    }, 500);

    if(window.location.href.indexOf("/aboutUs") > -1) {
        setTimeout(() => {
            carica.style.opacity = "0";
            web.style.opacity = "0";
            setTimeout(() => {       
                web.style.display = "none";
                carica.style.display = "none";
            }, 500);
        }, 2500);
        setTimeout(() => {
            aboutUs.style.position = "absolute";
            aboutUs.style.display = "block";
            setTimeout(() => {
                aboutUs.style.opacity = "1";
            }, 200);
        }, 3000);
    } else if (window.location.href.indexOf("/contacts") > -1) {
        setTimeout(() => {
            carica.style.opacity = "0";
            web.style.opacity = "0";
            setTimeout(() => {            
                web.style.display = "none";
                carica.style.display = "none";
            }, 500);
        }, 2500);
        setTimeout(() => {
            contacts.style.display = "block";
            setTimeout(() => {
                contacts.style.opacity = "1";
            }, 200);
        }, 3000);
    } else if (window.location.href.indexOf("/webDev") > -1) {
        setTimeout(() => {
            carica.style.opacity = "0";
            web.style.opacity = "0";
            setTimeout(() => {            
                web.style.display = "none";
                carica.style.display = "none";
            }, 500);
        }, 2500);
        setTimeout(() => {
            webDev.style.display = "block";
            setTimeout(() => {
                webDev.style.opacity = "1";
            }, 200);
        }, 3000);
    } else if (window.location.href.indexOf("/WebSupp") > -1) {
        setTimeout(() => {
            carica.style.opacity = "0";
            web.style.opacity = "0";
            setTimeout(() => {
                web.style.display = "none";
                carica.style.display = "none";
            }, 500);
        }, 2500);
        setTimeout(() => {
            webSupp.style.display = "block";
            setTimeout(() => {
                webSupp.style.opacity = "1";
            }, 200);
        }, 3000);
    }  else if (window.location.href.indexOf("/services") > -1) {
        setTimeout(() => {
            carica.style.opacity = "0";
            web.style.opacity = "0";
            setTimeout(() => {
                web.style.display = "none";
                carica.style.display = "none";
            }, 500);
        }, 2500);
        setTimeout(() => {
            services.style.display = "block";
            setTimeout(() => {
                services.style.opacity = "1";
            }, 200);
        }, 3000);
    } else if (window.location.href.indexOf("/WebSupp") > -1) {
        setTimeout(() => {
            carica.style.opacity = "0";
            web.style.opacity = "0";
            setTimeout(() => {
                web.style.display = "none";
                carica.style.display = "none";
            }, 500);
        }, 2500);
        setTimeout(() => {
            webSupp.style.display = "block";
            setTimeout(() => {
                webSupp.style.opacity = "1";
            }, 200);
        }, 3000);
    } else if (window.location.href.indexOf("/googleServices") > -1) {
        setTimeout(() => {
            carica.style.opacity = "0";
            web.style.opacity = "0";
            setTimeout(() => {
                web.style.display = "none";
                carica.style.display = "none";
            }, 500);
        }, 2500);
        setTimeout(() => {
            google.style.display = "block";
            setTimeout(() => {
                google.style.opacity = "1";
            }, 200);
        }, 3000);
    }
}