const readlineSync = require('readline-sync');

// Function to generate a random number between min and max 
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main Program
function guessGame() {
  const min = 1;
  const max = 30;
  const randomNumber = generateRandomNumber(min, max);
  let guess = null;
  let attempts = 0;

  console.log("Welcome to the Guess Game!");
  console.log(`I have chosen a number between ${min} and ${max}. Can you guess what it is?`);

  while (guess !== randomNumber) {
    guess = readlineSync.questionInt("Enter your guess: ");

    if (isNaN(guess) || guess < min || guess > max) {
      console.log(`Please enter a valid number between ${min} and ${max}.`);
      continue;
    }

    attempts += 1;

    if (guess < randomNumber) {
      console.log("Too low! Try again.");
    } else if (guess > randomNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
    }
  }
}

// Run the guess game
guessGame();

