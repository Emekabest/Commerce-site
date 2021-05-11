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
    mainArea_main.innerHTML = `
           <div class="main-areaContent">
                <section class="left-bar">
                  <div class="left-barTop">
                    <div class="left-barTopimg"></div>
                    <div class="left-barTopimg"></div>
                    <div class="left-barTopimg"></div>
                  </div>
                  <div class="left-barButtom">
                    <div class="left-barButtomimg"></div>
                  </div>
                </section>
                <section class="right-bar">
                  <div class="right-barContent">
                    <div class="right-barContent_name-tag">
                      <h1><!--Product name --></h1>
                    </div>
                    <div class="right-barContentProduct-details">
                      <div class="right-barContent_image-tag">
                        <div class="right-barContent_image-tag-inner">
                          <div class="right-barContent_image">
                            <!-- Image -->
                          </div>
                        </div>
                      </div>

                      <div class="right-barContentPrice-tag">
                        <span>
                          <h1><!-- Discount price  --></h1>
                        </span>
                        <span>
                          <h1><!-- Main-Price  --></h1>
                        </span>
                        <span>
                          <h1><!-- Fabric made of  --></h1>
                        </span>
                      </div>
                    </div>

                    <div>
                      <article>
                       
                          <!-- Description-Tag  -->
                    
                      </article>
                    </div>
                  </div>
                </section>
              </div>
        `;
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
