let rand = parseInt(Math.random() * 100 + 1);
console.log(rand);
const submit = document.querySelector("button");
const userinput = document.querySelector("textarea");
const guessSlot = document.querySelectorAll('.guess');
const Remaining = document.querySelector(".chances");
const hint = document.querySelector(".hint");
const p = document.createElement('p')


let numguess = 0
let playGame = true
let prevguess = []

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let guess = parseInt(userinput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please, enter the valid number")
    } else if (guess > 100) {
        alert("please,Enter a Number less than 100")
    }
    else if (guess < 1) {
        alert("please,Enter a Number greater than 1")
    }else{
        if (numguess<10){
            displayGuesses(guess);
            checkGuess(guess)
        } else {
            displayGuesses(guess)
            displayMessage(`GAME WAS OVER ,RANDOM NUMBER WAS ${rand}`)
            endGame();
        }
    }
}

function checkGuess(guess) {
    if (guess === rand) {
        displayMessage("You guessed it right!")
        endGame()
    }
    else if (guess < rand) {
        displayMessage("Number is to low!!")
    }
    else if (guess > rand) {
        displayMessage("Number is to hight!!")
    }

}

function displayGuesses(guess) {
    userinput.value = ''
    prevguess.push(guess)
    guessSlot[numguess].innerHTML += `${prevguess[numguess]}`
    numguess++
    Remaining.innerHTML = `${10 - numguess}`
    console.log(numguess);
}

function displayMessage(message) {
    hint.innerHTML = `${message}`
}

function endGame() {
    userinput.value = ""
    userinput.setAttribute('disabled', "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    Remaining.append(p)
    playGame = false
    newGame()
}

function newGame() {
    const newgame = document.querySelector('#newGame')
    newgame.addEventListener('click', function (e) {
        rand = parseInt(Math.random() * 100 + 1);
        console.log("NEW",rand);
        prevguess = []
        for (let i = 0; i <= 9; i++) {
            guessSlot[i].innerHTML = ''
        }
        hint.innerHTML=""
        numguess = 0
        userinput.removeAttribute('disabled')
        Remaining.removeChild(p)
        Remaining.innerHTML = `${10 - numguess}`
        playGame = true
    })
}
