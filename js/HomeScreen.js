import { kidProducts, manStuffProducts, skirtProducts } from "./data.js";
import ProductCards from "./ProductsCards.js";

const mainArea_main = document.querySelector(".main-area");

const HomeScreen = {
  //Method.....

  render: () => {
    const sections = [
      {
        header: { text: "Man Stuff", href: "#" },
        products: manStuffProducts,
      },
      {
        header: { text: "Skirts", href: "#" },
        products: skirtProducts,
      },
      {
        header: { text: "kids", href: "#" },
        products: kidProducts,
      },
    ];

    for (let i = 0; i < sections.length; i++) {
      mainArea_main.innerHTML += ProductCards.getHTMLString(sections[i]);
    }
  },
};

HomeScreen.render();
