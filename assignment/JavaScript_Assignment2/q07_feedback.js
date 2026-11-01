// Q7: Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// split() on spaces gives the words; length counts them
const wordCount = feedback.split(" ").length;

// includes() is case-sensitive, so compare in lowercase
const lowerFeedback = feedback.toLowerCase();
const hasNegativeWord = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback   : "${feedback}"`);
console.log(`Word count : ${wordCount}`);

if (!hasNegativeWord) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
