//game is a object


var game = {
    wins: 0,  //keep track of wins then displayed
    losses: 0, //keep track of losses then displayed
    userGuess: "", // this is what letter the user keys in
    remGuesses: 0, // this is how many guesses are left then dispayed
    guessWord: "", //this is the word randomly selected to be guessed by the user
    wordsArray: [  // these are the words to be used to for the user to guess
        "BROWNS",
        "DOLPHINS",
        "COWBOYS",
        "TEXANS",
        "CHARGERS",
        "PACKERS",
        "BEARS",
        "BILLS",
        "BRONCOS",
        "GIANTS",
        "INDIANS",
        "CAVS",
        "CUBS",
        "BULLS",
        "YANKEES",
        "METS",
        "REDSOX",
        "BRAVES",
        "DODGERS",
        "ASTROS",
        "BREWERS",
        "ROCKETS",
        "NETS",
        "HORNETS",
        "PISTONS",
        "HEAT",
        "NUGGETS"

    ],
    lettersGuessed: [""] // this will be the incorrect letters guessed then displayed

}

var person //= prompt("Please enter your name", "Players Name"); then starts the game from scratch

function namePrompt() {
    var person = prompt("Please enter your name", "Players Name");
    if (person != null) {
        document.getElementById("name").innerHTML =
            "Hello " + person + "! <br> Press any letter to guess the word? <br> Hint, know your sports teams!";
        winsID.textContent = "Wins: " + 0;
        lossesID.textContent = "losses: " + 0;
    }
}
document.getElementById("name").onclick = namePrompt;


var lossesID = document.getElementById("losses");
var winsID = document.getElementById("wins");
var remGuessesID = document.getElementById("remGuesses");
var lettersGuessedID = document.getElementById("lettersGuessed");
var wordGuessID = document.getElementById("wordGuess");
var word // see line 79 = game.guessWord.replace(/\w/g, "_"); // use a RegEx to replace all letters with "_"

console.log(word);


var userLetter // letter pressed by user
var wordArray  // array of letters from the word being guessed
var guessWordArray  // array of word as it appears to the user



function restartGame() {

    // ramdom selection of word from WordsArray
    game.guessWord = game.wordsArray[Math.floor(Math.random() * game.wordsArray.length)];
    game.remGuesses = Math.floor(game.guessWord.length * 1.5);  // number of guesses is dependant of string length
    word = game.guessWord.replace(/\w/g, "_"); // use a RegEx to replace all letters with "_"
    game.lettersGuessed = [];
    console.log(game.remGuesses);
    console.log(game.guessWord);
    userLetter = "";
    wordArray = game.guessWord.split(""); // array of letters from the word being guessed
    guessWordArray = word.split(""); // array of word as it appears to the user
    updateAll();

}

//starts a new word when new word button is clicked
restartGame();
document.getElementById("btnReset").onclick = restartGame;

function updateAll() {
    winsID.textContent = "Wins: " + game.wins;
    lossesID.textContent = "Losses: " + game.losses;
    remGuessesID.textContent = "Remaining Guesses: " + game.remGuesses;
    lettersGuessedID.textContent = game.lettersGuessed.join("");
    wordGuessID.textContent = word;

}




console.log(wordArray);
console.log(guessWordArray);







document.onkeyup = function (event) {
    userLetter = event.key; // save user input
    userLetter = userLetter.toUpperCase(); // make input upper case
    // game.lettersGuessed.push(userLetter); // add user input to array
    // make sure userLetter is a letter
    if (userLetter.match(/^[A-Za-z]$/)) {

        console.log(userLetter);
        console.log(game.guessWord.length);

        // check string for userLetter. if it exists, replace the "_" with the letter
        if (game.guessWord.search(userLetter) != -1) {  //search the array to see if the user letter exists in the guess word
            for (i = 0; i < wordArray.length; i++) {

                if (wordArray[i] === userLetter) {
                    guessWordArray[i] = userLetter;  //  change elements in an array 

                    word = guessWordArray.join("");  // concatenate all values of the array to put everything back into a single string
                    console.log(word);
                    if (word == game.guessWord) {

                        game.wins++;
                        wordGuessID.textContent = word;
                        alert("You Win");
                        restartGame();
                    }

                }
                else {
                    // do nothing here because the guessed letter doesn't belong at this index
                }
            }
        }
        else {
            game.lettersGuessed.push(userLetter); // if userLetter is not in word, then add it to game.lettersGuessed and decrement game.remguesses
            game.remGuesses--; // decrement remaining guesses if incorrect guess
            if (game.remGuesses == 0) {
                game.remGuesses = 0
                game.losses++;
                alert("You Loose");
                restartGame();


            }
            else {

            }
        }

        updateAll();
        console.log(game.remGuesses);


    }
    else {
        // not a letter, ignore input 
        alert("Pick a letter!")
    }

    // 
};



//   var pos = game.guessWord.indexOf(letterGuessedID.textContent);
// //   document.getElementById("letterGuessed").innerHTML = pos;


//     console.log(pos);

// var setup = function()
// {
//     for (var i=0; i< game.guessWord.length; i++)
//     {
//         word[i] = "_ ";
//         output = output + word[i];
//     }
//     getElementById("game").innerHTML = output;
//     console.log(output);

//     output = "";

// }



// var submit = function()
// {
// output = ""
// userGuess = $('letters').value = "";
// $("letters").value = "";

// for(var c=0; c < numberOfLetters; c ++)
// {
//     alert (letters[c]);

//     if(userGuess.toUpperCase());
// }


// }




// $(document).ready(function(){
//     $("input").keydown(function(){
//         $("input").css("background-color", "yellow");
//     });
//     $("input").keyup(function(){
//         $("input").css("background-color", "pink");
//     });
// });








// var s = game.guessWord;
// for (var i = 0; i < s.length; i++) 
// {
//     console.log(s.charAt(i));
// }
