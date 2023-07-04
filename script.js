"use strict";

const headerElement = document.querySelector(".header");
const menuButtonElement = document.querySelector(".header__menu-button");
const menuElements = document.querySelectorAll(".nav__link");

menuButtonElement.addEventListener("click", () => {
  headerElement.classList.toggle("nav-open");
});

menuElements.forEach((element) => {
  element.addEventListener("click", () =>
    headerElement.classList.remove("nav-open")
  );
});
