import { allProducts } from "./data.js";
import { LocalStorage } from "./localStorage.js";
import ProductCards from "./ProductsCards.js";

const mainArea_main = document.querySelector(".main-area");
const mainAreaRelatedcontent_div = document.querySelector(
  ".main-area_related-content"
);

const currency_sign = {
  naira: "&#8358",
  dollar: "&#36",
};

const cartsContents = [];

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
                      <img src="./image/${this.product.image}" alt="${this.product.name}" />
                    </div>
                    <div class="left-barTopimg">
                      <img src="./image/${this.product.image}" alt="${this.product.name}" />

                    </div>
                    <div class="left-barTopimg">
                       <img src="./image/${this.product.image}" alt="${this.product.name}" />

                    </div>
                    <div class="left-barTopimg">
                       <img src="./image/${this.product.image}" alt="${this.product.name}" />

                    </div>
                  </div>
                  <div class="left-barButtom">

                    <div class="left-barButtomimage">
                     <img src="./image/${this.product.image}" alt="${this.product.name}" />
                      </div>
                  </div>
                </section>





 <section class="left-bar2">
                  <div class="left-bar2Top">
                    <div class="left-bar2Topimg">
                      <img src="./image/${this.product.image}" alt="${this.product.name}" />
                    </div>
                    <div class="left-bar2Topimg">
                      <img src="./image/${this.product.image}" alt="${this.product.name}" />

                    </div>
                    <div class="left-bar2Topimg">
                       <img src="./image/${this.product.image}" alt="${this.product.name}" />                                               

                    </div>
                    <div class="left-bar2Topimg">
                       <img src="./image/${this.product.image}" alt="${this.product.name}" />

                    </div>
                 
                      <div class="left-bar2Topimg left-bar2-buttomimg">

                     <img src="./image/${this.product.image}" alt="${this.product.name}" />
                      </div>

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
                       <img src="./image/${this.product.image}" alt="${this.product.name}" />

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
                      <a href="#" class = addtocart-btn > <button>ADD <i class="fas fa-cart-plus"></i></button> </a>
                    </div>
                  </div>
                </section>


    <div class="right-bar2">
                  <div class="right-bar2Content">
                <div class = "right-bar2Content-left">
                    <div class="right-bar2Content-left_name-tag">
                      <h1 style="color: #003d59">${this.product.name}</h1>
                    </div>

                    <div class="right-bar2Content-left_Price-tag">
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

                    <div class="right-bar2Content-left_Product-details">
                      <div class="right-bar2Content-left_Product-details_image-tag">
                        <div class="right-bar2Content-left_image-tag-inner">
                          <div class="right-bar2Content-left_image">
                            <img src="./image/${this.product.image}" alt="${this.product.name}" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class = right-bar2Content-right>
                    <div class="right-bar2Content-right_measureMent-box">
                      MeasureMent Box
                    </div>

                    <div class="right-bar2Content-right_description-box">
                      <article>Description-Tag</article>
                    </div>
              </div>
              
              </div>
              <div class="right-bar2Content-right_addButton">
                <a href="#"> <button>ADD <i class="fas fa-cart-plus"></i></button> </a>
              </div>

                </div>

                </div>





                 `;

    this.product.related_items.forEach((related_itemsCard) => {
      console.log(related_itemsCard);

      mainAreaRelatedcontent_div.innerHTML = ProductCards.getHTMLString(
        related_itemsCard
      );
    });
  }

  fetchProduct() {
    const product = allProducts.find((product) => {
      return product.slug === this.slug;
    });
    this.product = product;
  }

  addtoCart() {
    const addtocartBtn_a = document.querySelector(".addtocart-btn");

    addtocartBtn_a.addEventListener("click", () => {
      if (cartsContents.length > 0) {
        console.log("m here");
        const getnewProducts = cartsContents.find((cartitem) => {
          return this.product.slug != cartitem.slug;
        });
        console.log(getnewProducts);
      } else {
        console.log("b here");
        console.log(this.product);
        cartsContents.push(this.product);
      }

      console.log(cartsContents);
    });
  }

  render() {
    this.getSlug();
    this.fetchProduct();
    this.display();
    this.addtoCart();
  }
}

const productScreen = new ProductScreen();

productScreen.render();
