// Q3: Monthly Expense Tracker

// Expenses for 5 categories: food, travel, rent, bills, leisure
const expenses = [4500, 1800, 12000, 2500, 1500];

// Total using a loop and the += assignment operator
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

const average = total / expenses.length;

// Add 10% tax: compound assignment operators
let finalAmount = total;
finalAmount += (total * 10) / 100; // same as total * 1.10

console.log(`Total expenses       : Rs. ${total.toFixed(2)}`);
console.log(`Average per category : Rs. ${average.toFixed(2)}`);
console.log(`Final amount (+10%): Rs. ${finalAmount.toFixed(2)}`);
