// Q8: Employee Salary Projection (5 years)

let salary = 50000; // current salary
const incrementRate = 8; // annual increment in %

const projection = [];

for (let year = 1; year <= 5; year++) {
  salary += (salary * incrementRate) / 100; // assignment operator
  projection.push({
    Year: year,
    "Increment %": incrementRate,
    Salary: Math.round(salary), // rounded value
  });
}

console.table(projection);
