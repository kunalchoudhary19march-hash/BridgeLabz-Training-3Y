// Q6: Event-Based Counter Simulation

let count = 0; // shared counter

function increment() {
  count++;
  console.log(`Incremented -> count = ${count}`);
}

function decrement() {
  count--;
  console.log(`Decremented -> count = ${count}`);
}

// Nested function: inner function can read and update outer variables
function createStepCounter(step) {
  let localCount = 0; // belongs to createStepCounter only
  function addStep() { // nested function
    localCount += step;
    console.log(`Nested counter (step ${step}) -> ${localCount}`);
  }
  return addStep; // closure keeps localCount alive
}

// Simulate click events by calling functions manually
console.log("--- Simulated clicks ---");
increment();
increment();
increment();
decrement();

console.log("--- Nested function scope ---");
const addFive = createStepCounter(5);
addFive();
addFive();
console.log(`Global count is still ${count}`);
