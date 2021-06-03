// import { LocalStorage } from "./localStorage.js";

const closeBtn_el = document.querySelector(".nav-close-btn");
const openBtn_el = document.querySelector(".nav-open-btn");
const navBar_el = document.querySelector(".nav");

//ProductPage.....
const productMainScreen_div = document.querySelector(".productMain-content");
const contentHeaderBox_div = document.querySelector(".content-headerbox");

openBtn_el.addEventListener("click", () => {
  navBar_el.classList.add("open");
});

closeBtn_el.addEventListener("click", () => {
  navBar_el.classList.remove("open");
});

let header_height = contentHeaderBox_div.clientHeight;

productMainScreen_div.style.marginTop = header_height + "px";
productMainScreen_div.style.paddingTop = header_height - 26 + "px";
