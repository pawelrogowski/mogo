"use strict";

const bodyElement = document.querySelector("body");
const headerElement = document.querySelector(".header");
const menuButtonElement = document.querySelector(".header__menu-button");
const menuElement = document.querySelector(".nav");

menuButtonElement.addEventListener("click", () => {
  headerElement.classList.toggle("nav-open");
  bodyElement.classList.toggle("no-scroll");
});

menuElement.addEventListener("click", (event) => {
  if (event.target.matches(".nav__link")) {
    headerElement.classList.remove("nav-open");
    bodyElement.classList.remove("no-scroll");
  }
});
