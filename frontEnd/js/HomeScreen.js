import product from "./data.js";

const Sales_block = document.querySelectorAll(".sales-bk");

const HomeScreen = {
  render() {
    return Sales_block.forEach((eachBlock) => {
      product.map((product) => {
        if (eachBlock.id.trim() == product.id) {
          product.section.map((eachsalesTag) => {
            eachBlock.innerHTML += `<div class="container-sales">
            <a href = "" style = "display:block">
            <div class="content-sales-img-wrapper">
                      <img
                          src="../image/${eachsalesTag.image}"
                          class="content-sales-img" 
                          alt=""
                      />
      
                  </div>
                  <div class="content-salesOption">
                      <div class="content-name">
                          <p>${eachsalesTag.name}</p>
                      </div>
                      <div class="content-price">
                          <p><span>$${eachsalesTag.discount_price}</span> $${eachsalesTag.main_price}</p>
                      </div>
                  </div>
                   </a>
              </div>`;
          });
        }
      });
    });
  },
};

HomeScreen.render();

// export { HomeScreen };
