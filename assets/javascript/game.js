
var game= {
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

var lossesID = getElementByid("losses");
var winsID = getElementByid("wins");
var wordGuess = getElementByid("wordGuess");
var guessesRemaining = getElementByid("guessesRemaining");
var lettersGuessed = getElementByid("lettersGuessed");
var word = game.guessWord.replace(/\w/g,"_");


console.log(output);


function updateAll() {


wordGuessID.textcontent = word;
winsID.textcontent = "Wins: " + game.wins;
lossesID.textcontent = "Losses " + game.losses;
lettersGuessedID.textcontent = "Letters guessed " + game.userGuess;
guessesRemainingID.textcontent = "Guesses Remaining " + game.remGuesses;
}


