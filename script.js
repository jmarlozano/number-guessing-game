function StartGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        let userGuess = prompt("Attempt " + attempt + " of " + maxAttempts + ": Guess a number between 1 and 10");
        if (userGuess === null) {
            alert("Game Cancelled.");
            return;
        }
        
        userGuess = Number(userGuess);
        if (userGuess === randomNumber) {
            alert('Congratulations! You guessed the number!');
            return;
        } else if (userGuess > randomNumber) {
            alert('Too high! Try again.');
        } else {
            alert('Too low! Try again.');
        }
    }
    alert('Game over! The correct number was ' + randomNumber);
}
