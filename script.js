'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const btnHoldElement = document.querySelector('.btn--hold');
const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');
const diceElement = document.querySelector('.dice');

const scores = [0, 0]; // accumulator for scores
// Variable that holds the current score
let currentScore = 0;
// Variable that holds the active player
let activePlayer = 0;
let playing = true;

// functions to switch players
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Hide the dice on page load
  const diceElement = document.querySelector('.dice');
  diceElement.classList.add('hidden');
  // Reset scores to 0 on page load
  score0Element.textContent = 0;
  score1Element.textContent = 0;
});

// Rolling dice functionality
btnRollElement.addEventListener('click', () => {
  if (playing) {
    // 1. Generating a random dice roll
    const numberOnDiceOnRoll = Math.trunc(Math.random() * 6) + 1;
    // console.log(numberOnDiceOnRoll);
    // 2. Display dice
    const imageSrcString = `assets/dice-${numberOnDiceOnRoll}.png`;
    diceElement.src = imageSrcString;
    diceElement.classList.remove('hidden');
    // 3. Check for rolled 1: if true, switch to next player
    if (numberOnDiceOnRoll !== 1) {
      // Add dice roll to current score
      currentScore += numberOnDiceOnRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      // console.log('Switch to next player');
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      switchPlayer();
    }
  }
});

// Hold score functionality
btnHoldElement.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 25) {
      // Finish the game
      // console.log('Game over');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      // Switch to next player
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      switchPlayer();
    }
  }
});
