// document.addEventListener("DOMContentLoaded", () => {
// import { products } from '../data/products.js';
// import { cart } from '../data/cart.js';

import { products as initialProducts } from "../data/products.js";
import { cart as initialCart, addProductToCart } from "../data/cart.js";

let products = initialProducts;
let cart = initialCart;

let productHTML = "";
let productLength;
let cartQuantity = 0;

if (!Array.isArray(products)) {
  console.error("products is not an array or is not defined properly");
  // return;
}

if (!products) {
  console.log("This product is not found");
  // return;
}

const productGrid = document.querySelector(".products-grid");

const cartQuantityNumber = document.querySelector(".cart-quantity");

// if (cartQuantity <= 0) {
//   cartQuantityNumber.innerHTML = 0;
// } else {
// }
// cartQuantityNumber.innerHTML = cartQuantity;

// products.forEach((product) => {
//   // console.log(`Processing product at index ${index}:`, product);

//   const html = `
// 	<div class="product-container">
//     <div class="product-image-container">
//       <img class="product-image"
//         src="${product.image}">
//     </div>

//     <div class="product-name limit-text-to-2-lines">
//       ${product.name}
//     </div>

//     <div class="product-rating-container">
//       <img class="product-rating-stars"
//         src="images/ratings/rating-${product.rating.stars * 10}.png">
//       <div class="product-rating-count link-primary">
//         ${product.rating.count}
//       </div>
//     </div>

//     <div class="product-price">
//       $${(product.priceCents / 100).toFixed(2)}
//     </div>

//     <div class="product-quantity-container">
//       <select>
//         <option selected value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="10">10</option>
//       </select>
//     </div>

//     <div class="product-spacer"></div>

//     <div class="added-to-cart">
//       <img src="images/icons/checkmark.png">
//       Added
//     </div>

//     <button class="add-to-cart-button button-primary " data-product-id ="${
//       product.id
//     }">
//       Add to Cart
//     </button>
//   </div>
// `;
//   productHTML += html;
// });

// const productGrid = document.querySelector(".products-grid");

// if (!productGrid) {
//   console.error("Could not find element with class 'products-grid'");
//   // return;
// }

// productGrid.innerHTML = productHTML;

// const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
// if (addToCartButtons.length === 0) {
//   console.error("No elements found with class 'added-to-cart'");
//   // return;
// }
// addToCartButtons.forEach((addToCartBtn, index) => {
//   // console.log(`Attaching event listener to button at index ${index}`);
//   addToCartBtn.addEventListener("click", () => {
//     const productID = addToCartBtn.dataset.productId;

//     let matchingItem;

//     cart.forEach((item) => {
//       if (productID === item.productId) {
//         matchingItem = item;
//       }
//     });
//     if (matchingItem) {
//       matchingItem.quantity += 1;
//     } else {
//       cart.push({
//         productId: productID,
//         quantity: 1,
//       });
//     }
//     console.log(cart);
//   });
// });
// });

function saveData() {
  // Converting the arrays of objects to a JSON String for storage
  // products
  let productListJSON = JSON.stringify(products);
  // cart
  let cartListJSON = JSON.stringify(cart);

  // cart quantity
  let cartQuantityJSON = JSON.stringify(cartQuantity);

  //  Save the JSON string into local storage
  // products
  localStorage.setItem("products", productListJSON);
  // cart
  localStorage.setItem("cart", cartListJSON);
  // cart quantity
  localStorage.setItem("cartQuantity", cartQuantityJSON);
}

function loadData() {
  // Retrieve the [roduct JSON string from localStorage
  let storedProductListJSON = localStorage.getItem("products");

  // Convert the product JSON string back to an array
  if (storedProductListJSON) {
    // let myProducts = products;
    products = JSON.parse(storedProductListJSON) || [];
  }

  // Retrieve the cart JSON string from localStorage
  let storedCartListJSON = localStorage.getItem("cart");

  // Converting the cart JSON string back to an array
  if (storedCartListJSON) {
    // let carts = cart
    cart = JSON.parse(storedCartListJSON) || [];
  }

  // Retrieve the cartQuantity JSON String from local Storage
  let storedCartQuantityJSON = localStorage.getItem("cartQuantity");

  // Converting the cart quantity JSON string back to an array
  if (storedCartQuantityJSON) {
    cartQuantity = JSON.parse(storedCartQuantityJSON) || 0;
  }
  cartQuantityNumber.innerHTML = cartQuantity;
}

function showProducts() {
  if (!productGrid) {
    console.error("Could not find element with class 'products-grid'");
    return;
  }
  if (productLength <= 0) {
    productHTML.innerHTML = "No product available";
  } else {
    products.forEach((product) => {
      // console.log(`Processing product at index ${index}:`, product);

      const html = `
    <div class="product-container" title="${product.name}">
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

      <button class="add-to-cart-button button-primary " data-product-id ="${
        product.id
      }">
        Add to Cart
      </button>
    </div>
  `;
      productHTML += html;
    });

    productGrid.innerHTML = productHTML;

    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    if (addToCartButtons.length === 0) {
      console.error("No elements found with class 'added-to-cart'");
      // return;
    }
    addToCartButtons.forEach((addToCartBtn) => {
      // console.log(`Attaching event listener to button at index ${index}`);
      addToCartBtn.addEventListener("click", () => {
        const productID = addToCartBtn.dataset.productId;
        // Add product to cart
        addProductToCart(productID);
        getCartQuantity();
        saveData();
        // location.reload();
      });
    });
  }
}
function getCartQuantity() {
  cartQuantity = 0;
  // console.log(cartQuantity);
  cart.forEach((cartItem) => {
    cartQuantity = cartQuantity + cartItem.quantity;
    // = cartQuantity + cartItem.quantity;
    cartQuantityNumber.innerHTML = cartQuantity;
  });
  console.log(`The new cart Quantity is: ${cartQuantity}`);
  console.log(cart);
}

// Load data from localStorage and display it on page load
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  showProducts();
  console.log(cartQuantity);
  console.log(cart);
  console.log(localStorage);
});

document.querySelector("#clearStorageButton").addEventListener("click", () => {
  localStorage.clear();
  console.log((cartQuantityNumber.innerHTML = cartQuantity));
  // console.log(cart);
  // console.log(localStorage);

  console.log("Local storage cleared.");
  // Reload the page.
  location.reload();
});
// cartQuantityNumber.innerHTML = cartQuantity;
