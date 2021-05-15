class ProductCards {
  static getHTMLString({ header, products }) {
    const getCardsHTMLString = () => {
      let cardsHTMLString = "";

      // Build cards into string => cardsHTMLString

      products.forEach((product) => {
        // product.getDiscount();
        product.getDiscount();
        cardsHTMLString += `
            <div class="container-sales">
                <a href="./product.html?slug=${product.slug}" style="display:block">
                    <div class="content-sales-img-wrapper">
                        <img
                            src="./image/${product.image}"
                            class="content-sales-img" 
                            alt="${product.name}"
                        />
                    </div>
 
                    <div class="content-salesOption">
                        <div class="content-name">
                            <p>${product.name}</p>
                        </div>
                        <div class="content-price">
                           <span class = "content-price-discount"> ${product.currency_symbol.naira}  ${product.recent_price}</p></span> 
                           <span class = "content-price-mainPrice">  ${product.currency_symbol.naira} ${product.main_price}</span>
                        </div>
                    </div>
                </a>
            </div>
        `;
      });

      return cardsHTMLString;
    };

    return `
            <div class="product-cards">
              <div class="container-sales-container">
                <div class="things">
                  <div class="sales-category">
                    <h5 class="sales-category-heading">${header.text}</h5>
                    <p class="sales-category-view-more">
                      <a href="${header.href}">
                        View more <i class="fa fa-angle-right" ></i
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
