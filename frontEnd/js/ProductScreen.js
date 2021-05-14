import { allProducts } from "./data.js";

const mainArea_main = document.querySelector(".main-area");

const currency_sign = {
  naira: "&#8358",
  dollar: "&#36",
};

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
    this.product.getDiscount();
    mainArea_main.innerHTML = `<div class="main-areaContent">
                <section class="left-bar">
                  <div class="left-barTop">
                    <div class="left-barTopimg">
                      <img src="../image/${this.product.image}" alt="${this.product.name}" />
                    </div>
                    <div class="left-barTopimg">
                      <img src="../image/${this.product.image}" alt="${this.product.name}" />

                    </div>
                    <div class="left-barTopimg">
                       <img src="../image/${this.product.image}" alt="${this.product.name}" />

                    </div>
                  </div>
                  <div class="left-barButtom">
                       <img src="../image/${this.product.image}" alt="${this.product.name}" />
                    <div class="left-barButtomimg">   </div>
                  </div>
                </section>
                <section class="right-bar">
                  <div class="right-barContent">
                    <div class="right-barContent_name-tag">
                      <h1 style="color: #003d59">${this.product.name}</h1>
                    </div>

                    <div class="right-barContentPrice-tag">
                     <span>
                        <h1 style="  color: #003d59">Discount: ${this.product.discount_price}%</h1>
                      </span>
                      <span>
                        <h1 style="color:#540a0a; text-decoration:line-through">Price: ${this.product.currency_symbol.naira} ${this.product.recent_price}</h1>
                      </span>
                      <span>
                        <h1 style="  color: #003d59">Price: ${this.product.currency_symbol.naira} ${this.product.main_price}</h1>
                      </span>
                    </div>

                    <div class="right-barContentProduct-details">
                      <div class="right-barContentProduct-details_image-tag">
                        <div class="right-barContent_image-tag-inner">
                          <div class="right-barContent_image">
                       <img src="../image/${this.product.image}" alt="${this.product.name}" />

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="right-barContent_measureMent-box">
                      MeasureMent Box
                    </div>

                    <div class="right-barContent_description-box">
                      <article>Description-Tag</article>
                    </div>
                  
                    <div class="right-barContent_addButton">
                      <a href="#"> <button>ADD <i class="fas addbtn-cart  fa-cart-plus"></i></button>    </a>
                    </div>
                  </div>
                </section>
              </div> `;
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
