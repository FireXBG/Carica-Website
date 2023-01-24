document.addEventListener("DOMContentLoaded", function () {
  //dataLayer initialization and script for GTM for GTM
  /*window.dataLayer = window.dataLayer || [];
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-K69PP6N");*/

  //here we create the noscript and append it at the start of the body
  /*const NSiframe = document.createElement('iframe');
const NoScript = document.createElement('noscript');
NSiframe.setAttribute('src', 'https://www.googletagmanager.com/ns.html?id=GTM-K69PP6N');
NSiframe.setAttribute('height', '0');
NSiframe.setAttribute('width', '0');
NSiframe.style.display = 'none';
NSiframe.style.visibility = 'hidden';
NoScript.appendChild(NSiframe);
document.body.insertBefore(NoScript, document.body.firstChild);*/

  //Functions for data retrieving purposes
    /*function GetFormData()
    {
      var formData = 
      {
        department: document.querySelector(
          "body > div > section > div.contacts-right > form > div > select"
        ).value,
        first_name: document.querySelector(
          "body > div > section > div.contacts-right > form > input:nth-child(2)"
        ).value,
        last_name: document.querySelector(
          "body > div > section > div.contacts-right > form > input:nth-child(3)"
        ).value,
        mail: document.querySelector(
          "body > div > section > div.contacts-right > form > input:nth-child(4)"
        ).value,
        phone: document.querySelector(
          "body > div > section > div.contacts-right > form > input:nth-child(5)"
        ).value,
        message: document.querySelector(
          "body > div > section > div.contacts-right > form > textarea"
        ).value
      }
      return formData;
    }*/
  //Here we are adding the event listeners

  /*document
    .querySelector(".btn effect04")
    .addEventListener("click", formPush);

  document
    .querySelector(".btn effect04")
    .addEventListener("click", prevent);

  function prevent(event) {
    event.preventDefault();
  }*/
/*var formData;
  function formPush() {
    dataLayer.push({ form: null });
    formData = GetFormData();
    dataLayer.push({
      event: "form_submission",
      form: {
        department: formData.department,
        first_name: formData.first_name,
        last_name: formData.last_name,
        mail: formData.mail,
        phone: formData.phone,
        message: formData.message
      },
    });
  }*/
});
