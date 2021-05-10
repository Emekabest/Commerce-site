import { manStuffProducts } from "./data.js";

const Sales_block = document.querySelectorAll(".sales-bk");

const HomeScreen = {
  render() {
    return Sales_block.forEach((eachBlock) => {
      manStuffProducts.map((product) => {
        eachBlock.innerHTML += `<div class="container-sales">
            <a href="./product.html?slug=${product.slug}" style="display:block">
            <div class="content-sales-img-wrapper">
                      <img
                          src="../image/${product.image}"
                          class="content-sales-img" 
                          alt="${product.name}"
                      />
      
                  </div>
                  <div class="content-salesOption">
                      <div class="content-name">
                          <p>${product.name}</p>
                      </div>
                      <div class="content-price">
                          <p><span>$${product.discount_price}</span> $${product.main_price}</p>
                      </div>
                  </div>
                   </a>
              </div>`;
      });
    });
  },
};

HomeScreen.render();

// export { HomeScreen };
