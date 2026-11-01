// Q7: Smart Guessing Game (Number Range)

// Secret number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // test value

console.log(`(Secret number is ${secretNumber} - shown for testing)`);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  // Not equal: check whether the guess is within +-3 of the secret
  if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
