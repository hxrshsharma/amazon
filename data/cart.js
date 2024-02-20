export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = []
}

function storage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

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
    storage();
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
    cart = newCart;
    storage();
}
