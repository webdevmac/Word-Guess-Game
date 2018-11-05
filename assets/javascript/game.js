
var game = {
    wins: 0,
    losses: 0,
    userGuess: "",
    remGuesses: 0,
    guessWord: "",
    wordsArray: [
        "BROWNS",
        "DOLPHINS",
        "COWBOYS",
        "TEXANS",
        "CHARGERS",
        "PACKERS",
        "BEARS",
        "BILLS",
        "BRONCOS",
        "GIANTS"
    ],
    lettersGuessed: [""]
}

game.guessWord = game.wordsArray[Math.floor(Math.random() * game.wordsArray.length)];

console.log(game.guessWord);

var lossesID = document.getElementById("losses");
var winsID = document.getElementById("wins");
var remGuessesID = document.getElementById("remGuesses");
var lettersGuessedID = document.getElementById("lettersGuessed");
var wordGuessID = document.getElementById("wordGuess");
var word = game.guessWord.replace(/\w/g, "_"); // use a RegEx to replace all letters with "_"

console.log(word);

winsID.textContent = "Wins: " + game.wins;
lossesID.textContent = "Losses: " + game.losses;
remGuessesID.textContent = "Remaining Guesses: " + game.remGuesses;
lettersGuessedID.textContent = game.lettersGuessed;
wordGuessID.textContent = word;
