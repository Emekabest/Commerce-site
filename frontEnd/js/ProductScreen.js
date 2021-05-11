import { allProducts } from "./data.js";

const mainArea_main = document.querySelector(".main-area");

class ProductScreen {
  constructor() {
    this.slug = "";
    this.product = {};
  }

  getSlug() {
    const { search } = location;

    const dividedSearchArr = search.replace("?", "").split("&");

    const slug = dividedSearchArr
      .find((queryString) => {
        return queryString.includes("slug");
      })
      .replace("slug=", "");

    this.slug = slug;
  }

  display() {
    console.log(this.product);
    // mainArea_main.innerHTML = ``;
  }

  fetchProduct() {
    const product = allProducts.find((product) => {
      return product.slug === this.slug;
    });

    this.product = product;
  }

  render() {
    this.getSlug();
    this.fetchProduct();
    this.display();
  }
}

const productScreen = new ProductScreen();

productScreen.render();
