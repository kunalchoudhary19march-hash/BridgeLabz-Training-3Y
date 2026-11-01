// Q1: Personalized Login Greeting
// Greets the user based on the current hour of the day.

const userName = "Kunal"; // test user name
const currentHour = new Date().getHours(); // 0 - 23

let greeting;
if (currentHour < 12) {
  greeting = "Good Morning"; // before 12
} else if (currentHour <= 17) {
  greeting = "Good Afternoon"; // 12 to 17
} else {
  greeting = "Good Evening"; // otherwise
}

// Template literal builds the final message
console.log(`${greeting} ${userName}!`);
console.log(`(Current hour: ${currentHour})`);
