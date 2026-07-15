# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution


```javascript
// My code: (few modifications)

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessLog = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value); // o/p is either- A no or NaN
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // to chk whether a guess is valid or not

  if (isNaN(guess)) {
    alert('Please enter a valid no!');
  } else if (guess < 1) {
    alert('Please enter a valid no greater than 1!');
  } else if (guess > 100) {
    alert('Please enter a valid no less than 100!');
  } else {
    prevGuess.push(guess);

    if (numGuess === 10) {
      cleanUpGuess(guess);
      displayMessge(`Game Over. Random no was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuessMessge(guess);
    }
  }
}

function checkGuessMessge(guess) {
  //generate message wrt the guess- equal/low/high

  if (guess === randomNumber) {
    displayMessge(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessge(`Number is TOO low!`);
  } else if (guess > randomNumber) {
    displayMessge(`Number is TOO high!`);
  }
}

function cleanUpGuess(guess) {
  //clean values

  userInput.value = '';

  // EASY TO UNDERSTAND WAY-1:
  /*if (prevGuess.length === 10) {
    guessLog.innerHTML += `${guess}`;
  } else {
    guessLog.innerHTML += `${guess}, `;
  }*/

  //WAY-2: Cleaner approach
  guessLog.innerHTML = prevGuess.join(', ');

  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessge(message) {
  //DOM & ITS MANIPULATIONS- display the above messge: interacts/ binds with the DOM
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    // event object isn't of much use, we jst have to reset the game's variables
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessLog.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id= "newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}



```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

// My code: (few comments)

const randomColor= function() {
  const hex= "0123456789ABCDEF"
  let color= '#'
  for(let i=0; i<6; i++){
    color+= hex[Math.floor(Math.random()*16)];  //these are actually positions.
    // NOTE: parseInt() is meant to parse strings into integers, not to round numbers.It  works on numbers because JavaScript first converts the number to a string internally 
  }
  return color;
}

let intervalId;

const startChangingColor= function() {
  if(!intervalId){        // cleaner code
    intervalId= setInterval((ChangeBgColor), 1000);
  }
  //since yhin setInterval define hora h toh yhi likdia func bhi- no rule used as such, ig bahar bhi likha ja skta h
  function ChangeBgColor(){
    document.body.style.backgroundColor= randomColor()
  }

}

const stopChangingColor= function() {
  clearInterval(intervalId);
  intervalId= null;    // cleaner code
  // it used to reset the variable after the interval has been stopped.
  /* understand with an eg: 
    Suppose intervalId is 5. 
    clearInterval(5); => This tells JavaScript to stop the interval whose ID is 5.
    However, clearInterval() does NOT change the value stored in intervalId.
    Thus when we do: intervalId = null;   => This means: "There is currently no active interval.
  */
}


document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)

```