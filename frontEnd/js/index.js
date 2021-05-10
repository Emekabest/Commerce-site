import product from "./data.js";

const closeBtn_el = document.querySelector(".nav-close-btn");
const openBtn_el = document.querySelector(".nav-open-btn");
const navBar_el = document.querySelector(".nav");

openBtn_el.addEventListener("click", () => {
  navBar_el.classList.add("open");
});

closeBtn_el.addEventListener("click", () => {
  navBar_el.classList.remove("open");
});

for (let i = 0; i < product.length; i++) {
  // console.log(product[i]);
}
