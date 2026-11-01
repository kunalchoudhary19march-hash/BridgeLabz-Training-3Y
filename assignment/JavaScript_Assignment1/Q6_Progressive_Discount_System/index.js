// Q6: Progressive Discount System

const totalAmount = 6500; // total purchase amount

let discountPercent;
if (totalAmount >= 10000) {
  discountPercent = 25;
} else if (totalAmount >= 5000) {
  discountPercent = 15;
} else if (totalAmount >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

// Math.round() rounds the final price to the nearest whole number
const finalPrice = Math.round(totalAmount - (totalAmount * discountPercent) / 100);

console.log(`Original total : Rs. ${totalAmount}`);
console.log(`Discount       : ${discountPercent}%`);
console.log(`Final price    : Rs. ${finalPrice}`);
