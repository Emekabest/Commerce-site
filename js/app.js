import { HomeScreen } from "./HomeScreen.js";
import ProductScreen from "./ProductScreen.js";

const route = {
  "/": HomeScreen,
  "Product /:id": ProductScreen,
};

HomeScreen.render();
