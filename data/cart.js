export const cart = [];

export function addToCart(productId) {
  let match;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      match = cartItem;
    }
  });
  if (match) {
    match.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}
