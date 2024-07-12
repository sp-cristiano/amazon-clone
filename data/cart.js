//  Array to store  selected product items in cart
export let cart = [];

// Function to add product to cart
export function addProductToCart(productID) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productID === cartItem.productId) {
      matchingItem = cartItem;
      return;
      // saveData();
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
}