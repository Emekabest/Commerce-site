class ProductCards {
  static getHTMLString({ header, products }) {
    const getCardsHTMLString = () => {
      let cardsHTMLString = "";

      const font = "fas fa-star";

      // Build cards into string => cardsHTMLString

      products.forEach((product) => {
        // product.getDiscount();
        product.getDiscount();
        cardsHTMLString += `
            <div class="container-sales">
                <a href="./product.html?slug=${
                  product.slug
                }" style="display:block">
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
                           <span class = "content-price-discount"> ${
                             product.currency_symbol.naira
                           }  ${product.recent_price}</p></span> 
                           <span class = "content-price-mainPrice">  ${
                             product.currency_symbol.naira
                           } ${product.main_price}</span>
                        </div>

                        <div class= "container-sales-ratings">

                        <i class = "${
                          product.ratings >= 1
                            ? "fas fa-star"
                            : product.ratings >= 0.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }" > </i>

                        <i class = "${
                          product.ratings >= 2
                            ? "fas fa-star"
                            : product.ratings >= 1.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }" > </i>

                        <i class = "${
                          product.ratings >= 3
                            ? "fas fa-star"
                            : product.ratings >= 2.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }" > </i>
                        
                        <i class = "${
                          product.ratings >= 4
                            ? "fas fa-star"
                            : product.ratings >= 3.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }" > </i>

                        <i class = "${
                          product.ratings >= 5
                            ? "fas fa-star"
                            : product.ratings >= 4.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }" > </i>

                        </div>
                    </div>
                </a>
            </div>
        `;
      });

      {
        /* <i class="fas fa-star-half-alt"></i>; */
        // <i class="fas fa-star"></i>;
        // <i class="far fa-star"></i>;
      }

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
