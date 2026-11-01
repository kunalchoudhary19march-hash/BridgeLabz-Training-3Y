// Q4: Array Performance Analyzer

// 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// reduce() adds all scores together
const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;

// filter() keeps only passing scores (>= 50)
const passed = scores.filter((score) => score >= 50);

// map() builds a readable list with Pass/Fail
const details = scores.map((s, i) => `Student ${i + 1}: ${s} (${s >= 50 ? "Pass" : "Fail"})`);

console.log("----- Performance Summary -----");
console.log(details.join("\n"));
console.log(`Highest score : ${highest}`);
console.log(`Lowest score  : ${lowest}`);
console.log(`Average score : ${average.toFixed(2)}`);
console.log(`Passed        : ${passed.length} of ${scores.length}`);
