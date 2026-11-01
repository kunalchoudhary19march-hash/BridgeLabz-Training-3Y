// Q2: Multi-Type Data Summary
// Variables of different data types, reported with ONE console.table().

const userName = "Aarav Sharma"; // string
const age = 24; // number
const isActive = true; // boolean
const skills = ["HTML", "CSS", "JavaScript"]; // array
const address = { city: "Mathura", state: "UP" }; // object
const middleName = null; // null
let phoneNumber; // undefined

// Helper: typeof says "object" for arrays and null, so check those first
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

// Each row = label + value + type
const entries = [
  ["userName", userName],
  ["age", age],
  ["isActive", isActive],
  ["skills", skills],
  ["address", address],
  ["middleName", middleName],
  ["phoneNumber", phoneNumber],
];

const report = entries.map(([label, value]) => ({
  Label: label,
  Value: JSON.stringify(value) ?? "undefined",
  Type: getType(value),
}));

console.table(report); // one console.table() statement
