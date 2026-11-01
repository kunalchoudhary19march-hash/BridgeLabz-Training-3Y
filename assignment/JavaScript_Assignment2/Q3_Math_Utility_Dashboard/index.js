// Q3: Math Utility Dashboard

const x = 16.75;

const rounded = Math.round(x); // nearest integer
const squareRoot = Math.sqrt(x); // square root
const power = Math.pow(x, 3); // x cubed
const randomNumber = Math.floor(Math.random() * 41) + 10; // 10 to 50

// Template literal for a formatted summary
console.log(`
===== Math Dashboard =====
Number       : ${x}
Rounded      : ${rounded}
Square root  : ${squareRoot.toFixed(3)}
Power (x^3)  : ${power.toFixed(2)}
Random (10-50): ${randomNumber}
==========================`);
