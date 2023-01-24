window.addEventListener("DOMContentLoaded", trackHref);
function trackHref() {
    const anchors = document.querySelectorAll(".landing_page a");
    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          let leaver = document.querySelector(".page-leave");
          let targer = e.target.href;
          let menu = document.querySelector(".mobile-menu");
          let closeButton = document.querySelector(".close-button");
          menu.style.width = "0";
          closeButton.style.opacity = "0";
          setTimeout(() => {
            menu.style.opacity = "0";
          }, 200);
            setTimeout(() => {
                leaver.style.display = "block";
                setTimeout(() => {
                    leaver.style.opacity = "1";
                }, 200);
            }, 100);
            
            setTimeout(() => {
              window.location.href = targer;
            }, 700);
          });
        }
}