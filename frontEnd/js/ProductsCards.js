class ProductCards {
  static getHTMLString({ header, products }) {
    const getCardsHTMLString = () => {
      let cardsHTMLString = "";

      products.map((product) => {
        cardsHTMLString += `<div class="container-sales">
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

      return cardsHTMLString;
    };

    return `
            <div class="product-cards">
              <div class="container-sales-container">
                <div class="things">
                  <div class="sales-category">
                    <p class="sales-category-p">${header.text}</p>

                    <p class="sales-category-p">
                      <a href="${header.href}">
                        View more <i class="fa fa-angle-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="container-sales-boxes">${getCardsHTMLString()}</div>
                </div>
              </div>
            </div>
        `;
  }
}

export default ProductCards;
