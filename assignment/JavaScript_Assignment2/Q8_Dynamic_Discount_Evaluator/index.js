// Q8: Dynamic Discount Evaluator

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

function evaluateCart(cartItems) {
  // Original cart value before any discount
  const originalTotal = cartItems.reduce((sum, product) => sum + product.price, 0);

  // Loop over each item and apply its category discount
  const discountedPrices = [];
  for (const product of cartItems) {
    let discountPercent = 0;
    if (product.category === "electronics") {
      discountPercent = 10;
    } else if (product.category === "fashion") {
      discountPercent = 5;
    }
    const finalPrice = product.price - (product.price * discountPercent) / 100;
    discountedPrices.push(finalPrice);
    console.log(`${product.item}: ${product.price} - ${discountPercent}% = ${finalPrice}`);
  }

  // reduce() totals the discounted prices
  let finalTotal = discountedPrices.reduce((sum, price) => sum + price, 0);

  // Extra 5% overall discount when the cart value is above 50000
  if (originalTotal > 50000) {
    finalTotal -= finalTotal * 0.05;
    console.log("Extra 5% overall discount applied");
  }

  console.log(`Original total: ${originalTotal}`);
  console.log(`Final total   : ${finalTotal.toFixed(2)}\n`);
}

console.log("--- Given cart ---");
evaluateCart(cart);

console.log("--- Bigger cart (shows the extra 5%) ---");
evaluateCart([...cart, { item: "Phone", category: "electronics", price: 20000 }]);
