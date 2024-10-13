// DEMANDER LE NOM DU CLIENT
  let nom = prompt("Veuillez entrez votre nom pour acceder au site!");
  let age = prompt("Veuillez entrez votre age");
  age = Number;
  alert ("Nous vous souhaitons la bienvenue sur notre site de coiffure et soins " + nom);

/*------------ AFFICHER LE MENU-------------*/
const showMneu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  /*valable s'il existe en tant que variaveis*/
  if (toggle && nav) {
    /*ici, j'ajoute un menu d'affichage de classe la div avec un menu de classe nav__*/
    toggle.addEventListener("click", () => {
      /*ajouter le menu d'affichage de classe au div qui a un menu de navigation d'élément ou d'identifiant */
      nav.classList.toggle("show-menu");
    });
  }
};
showMneu("nav-toggle", "nav");

/*------------ REMOVER MENU MOBILE -------------*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav");
  /*Lorsqu'un lien ou le bouton de fermeture est cliqué dans le menu d'affichage d'une classe, il sera supprimé*/
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== LAISSER LE LIEN CLIQUÉ AVEC LA CLASSE ACTIVE-LINK ====================*/

const linkColor = document.querySelectorAll(".nav__link");

function colorLink() {
  if (linkColor) {
    linkColor.forEach((L) => L.classList.remove("active-link"));
    this.classList.add("active-link");
  }
}

linkColor.forEach((L) => L.addEventListener("click", colorLink));

// SCROLL HEADER
function scrollHeader() {
  const scrollHeader = document.getElementById("header");
  if (this.scrollY >= 100) scrollHeader.classList.add("scroll-header");
  else scrollHeader.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
