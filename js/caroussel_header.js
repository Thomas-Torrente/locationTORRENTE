let timer = window.setInterval("monHeader()", 15000); // initialisation de la variable timer avec appel de la fonction monHeader() et temps en millisecondes ici (15s)
let bg_img = document.querySelector(".bg-img-header");
bg_img.classList.add("bg-img-header_un");

function monHeader() {
  // on attend 15s et on change d'image
  clearInterval(timer);
  bg_img.classList.add("bg-img-header_deux");
  // on attend 15s et on change d'image
  clearInterval(timer);
  bg_img.classList.add("bg-img-header_trois");
}
