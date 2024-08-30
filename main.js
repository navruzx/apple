let btn = document.querySelector(".btn");
let menu = document.querySelector(".menu");
let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");
function openKategory() {
  menu.classList.toggle("menu-block");
}
let login = document.querySelector(".login-contaier");
function showLogin() {
    login.classList.remove("close");
}
function closeLogin() {
    login.classList.add("close");
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });