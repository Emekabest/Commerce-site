import { products } from "./data.js";

const productDetails_div = document.querySelector(".product_details");

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
    productDetails_div.innerHTML = `
          <div>
            
          </div>
        `;
  }

  fetchProduct() {
    const product = products.find((product) => {
      console.log(product.section, this.slug);
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
