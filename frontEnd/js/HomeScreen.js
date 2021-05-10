import { kidProducts, manStuffProducts, skirtProducts } from "./data.js";
import ProductCards from "./ProductsCards.js";

const mainArea_main = document.querySelector(".main-area");

const HomeScreen = {
  render() {
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

    sections.forEach((section) => {
      mainArea_main.innerHTML += ProductCards.getHTMLString(section);
    });
  },
};

HomeScreen.render();

// export { HomeScreen };
