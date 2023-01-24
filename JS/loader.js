window.addEventListener("DOMContentLoaded", load);
(function () {
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};
})();

function load() {
    let object = document.querySelector(".dank-ass-loader");
    let loader = document.querySelector(".loading");
    if(window.location.href.indexOf("/WebSupp" || "/WebDev" || "/googleServices") > -1) {
        setTimeout(() => {
            object.style.display = "flex";
            setTimeout(() => {
                object.style.opacity = "1";
            }, 100);
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => {
                    loader.style.display = "none";
                }, 1000);
            }, 5000);
        }, 200);
    } else {

        setTimeout(() => {
            object.style.display = "flex";
            setTimeout(() => {
                object.style.opacity = "1";
            }, 100);
        }, 200);
    }
    window.addEventListener("load", close);
    function close() {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);
        }, 2000);
    }
}