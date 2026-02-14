let cartCount = 0;
let lastItem = "";

function addToCart(itemName) {
  cartCount++;
  lastItem = itemName;

  document.getElementById("cartCount").innerHTML = cartCount;
  document.getElementById("logText").innerHTML =
    "✅ Added to cart: " + itemName + " | Total Items: " + cartCount;
}

function clearCart() {
  cartCount = 0;
  lastItem = "";

  document.getElementById("cartCount").innerHTML = cartCount;
  document.getElementById("logText").innerHTML =
    "🗑️ Cart cleared. No items in cart.";
}

function loadOffer() {
  const offers = [
    "🎉 Flat 10% OFF on Smartphones",
    "🔥 Buy 1 Get 1 Free on Accessories",
    "💥 Weekend Sale: Extra 15% OFF",
    "⚡ Flash Deal: Free Delivery Today",
    "🎁 Special Offer: ₹200 Cashback on Orders"
  ];

  const randomOffer = offers[Math.floor(Math.random() * offers.length)];
  document.getElementById("offerText").innerHTML = "🎉 Today Offer: " + randomOffer;
}

loadOffer();

