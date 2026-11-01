// Q2: String Manipulation Report

const productName = "  wireless headphones PRO  ";

// 1. trim() removes extra spaces, toLowerCase() makes everything lowercase
const cleaned = productName.trim().toLowerCase();

// 2. split() into words, map() capitalises each word, join() puts them back
const capitalised = cleaned
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// 3. replace() the word "pro" (any case) with "Pro Edition"
const finalTitle = capitalised.replace(/\bpro\b/i, "Pro Edition");

console.log(`Original   : "${productName}"`);
console.log(`Clean title: "${finalTitle}"`);
console.log(`Length     : ${finalTitle.length} characters`);
