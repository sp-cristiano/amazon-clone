let productHTML = "";
if (!Array.isArray(products)) {
  console.error("products is not an array or is not defined properly");
  // return;
}

if (!products) {
  console.log("This product is not found");
  // return;
}

products.forEach((product, index) => {
  console.log(`Processing product at index ${index}:`, product);

  const html = `
	<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary " data-product-id ="${product.id}">
      Add to Cart
    </button>
  </div>
`;
  productHTML += html;
});

const productGrid = document.querySelector(".products-grid");
if (!productGrid) {
  console.error("Could not find element with class 'products-grid'");
  // return;
}
productGrid.innerHTML = productHTML;

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
if (addToCartButtons.length === 0) {
  console.error("No elements found with class 'added-to-cart'");
  // return;
}
addToCartButtons.forEach((addToCartBtn, index) => {
  // console.log(`Attaching event listener to button at index ${index}`);
  addToCartBtn.addEventListener("click", () => {
    const productID = addToCartBtn.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (productID === item.productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productID,
        quantity: 1
      });
    }
    console.log(cart);
  });
});
