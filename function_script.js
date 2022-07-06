const words = [
    'батарея',
    'кролик',
    'оладушек',
    'прекрасно',
    'забор',
    'апрель',
    'фартук',
    'грабли'
];

let pickRandomWord = function () {
    const rand = Math.random();
    const index = Math.floor(rand * words.length);

    return words[index];
}
// random word from [words]
let word = pickRandomWord();

let setupAnswerArray = function () { 
    let generatedArray = [];
    
    for (i = 0; i < word.length; i++) {
        generatedArray[i] = "_";
    }
    
    return generatedArray;
}
// answerArray (num) [ "_" "_" ... "_" ]
let answerArray = setupAnswerArray(word);

// счет букв, которые необходимо отгадать
let remainingLetters = word.length;

let showPlayerProgress = function (answerArray) {
    alert("Угадайте слово " + " " + answerArray.join(" "));
}

// записали предполагаемый вариант ответа
let getGuess = function () {
    let possibleGuess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры");

    if (possibleGuess) {
        return possibleGuess.toLowerCase();
    } 

    return possibleGuess;
    // короткая запись if 
    // return possibleGuess?.toLocaleLowerCase();   
}

let updateGameState = function (guess, word, answerArray) { 
    let guessedLetters = 0;

    if (guess) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                answerArray[i] = guess;
                guessedLetters++;
            }
        }
    }

    return guessedLetters;
}


while (remainingLetters > 0) {
    showPlayerProgress(answerArray);

let guess = getGuess();

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

let showAnswerAndCongratulatePlayer = function (answerArray) {
    alert(answerArray.join(" "));
    alert("Отлично! Было загадано слово " + word);
}

showAnswerAndCongratulatePlayer(answerArray);