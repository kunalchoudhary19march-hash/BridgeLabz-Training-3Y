// Q5: Weather Activity Planner

const temperature = 12; // in degrees Celsius
const isRaining = false;
const windSpeed = 25; // in km/h

if (isRaining) {
  console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
  console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
  // && : both cold AND windy
  console.log("Too cold and windy - stay home.");
} else {
  console.log("Perfect day for a walk.");
}

// Extra check with || : warn if conditions are extreme in any way
if (temperature > 40 || temperature < 0 || windSpeed > 50) {
  console.log("Warning: extreme weather, be careful!");
}
