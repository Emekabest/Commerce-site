import Error404Page from "./Error404Page.js";
import { HomeScreen } from "./HomeScreen.js";
import ProductScreen from "./ProductScreen.js";
import parseRequest_url from "./utlis.js";

const route = {
  "/": HomeScreen,
  "product/:id": ProductScreen,
};

const router = () => {
  const request = parseRequest_url();
  const parseUrl = request.resource
    ? `/${request.resource}`
    : "/" + request.id
    ? `/:id`
    : "" + request.verb
    ? `/${request.verb}`
    : "";
  console.log(parseUrl);
  const screen = route[parseUrl] ? route[parseUrl] : Error404Page;

  console.log(screen.render());
  screen.render();
};

addEventListener("load", router);
addEventListener("hashchange", router);
