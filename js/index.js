const closeBtn_el = document.querySelector(".nav-close-btn");
const openBtn_el = document.querySelector(".nav-open-btn");
const navBar_el = document.querySelector(".nav");

document.body.style.overflow = "hidden";

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
let margin_space = 50;
productMainScreen_div.style.marginTop = header_height + "px";
productMainScreen_div.style.paddingTop = header_height - 26 + "px";

// let productscreen_height = productMainScreen_div.clientHeight - header_height;

// console.log(productscreen_height);

// productMainScreen_div.style.height = productscreen_height + "px";
