// Q4: Academic Performance Evaluator

// Marks of 5 subjects (each out of 100)
const marks = [78, 85, 92, 66, 88];

let sum = 0;
for (const m of marks) sum += m;

const average = sum / marks.length;
const percentage = (sum / (marks.length * 100)) * 100;

// Validation: any subject below 35 means automatic detention
const failedSubject = marks.some((m) => m < 35);

console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average: ${average.toFixed(2)} | Percentage: ${percentage.toFixed(2)}%`);

if (failedSubject) {
  console.log("Detained (a subject is below 35)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
