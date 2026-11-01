// Q9: Odd-Even Number Analyzer

// Fill an array with numbers 1 to 30 using a loop
const numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

const results = []; // new array for the labels
for (const num of numbers) {
  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz"); // divisible by both 3 and 5
  } else if (num % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

console.log("Results array:");
console.log(results);

// Show number with its label
numbers.forEach((n, i) => console.log(`${n} -> ${results[i]}`));
