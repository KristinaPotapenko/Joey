const mobileMenu = document.querySelector(".js-mobile-menu");
const menuBtnOpen = document.querySelector(".js-mobile-menu-button-open");
const menuBtnClose = document.querySelector(".js-mobile-menu-button-close");
const menuLink = document.querySelectorAll(".js-mobile-menu-link");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
};

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

menuLink.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
