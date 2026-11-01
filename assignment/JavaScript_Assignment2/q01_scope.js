// Q1: Scope Conflict Resolver

// Global variable: visible everywhere in the file
let bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variable: exists only inside this function
  const salary = 40000;
  let total = salary;

  // Bonus is added only for permanent employees
  if (isPermanent) {
    total += bonus; // reads the global variable
  }

  console.log(`isPermanent = ${isPermanent} -> Total salary: ${total}`);
}

// Changing isPermanent changes only the local result,
// the global bonus is never modified by the function.
calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus after both calls: ${bonus}`);

// console.log(salary); // ReferenceError: salary is not defined (local scope)
