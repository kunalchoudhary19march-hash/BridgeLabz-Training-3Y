// Q10: Citizen Eligibility Validator
// Note: the question lists "citizen and age >= 18" (all services) and
// "citizen and 18-20" (vote only), which overlap. To keep both outcomes
// reachable, "all services" is applied for citizens aged 21 and above
// (full rights such as passport/driving), and 18-20 gets "vote only".

const age = 19;
const isCitizen = true;

if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
