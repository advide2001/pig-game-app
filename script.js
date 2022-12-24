'use strict';

// Selecting elements

const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const btnHoldElement = document.querySelector('.btn--hold');
const btnNewElement = document.querySelector('.btn--new');
const btnRollElement = document.querySelector('.btn--roll');

document.addEventListener('DOMContentLoaded', () => {
  // Hide the dice on page load
  const diceElement = document.querySelector('.dice');
  diceElement.classList.add('hidden');
  // Reset scores to 0 on page load
  score0Element.textContent = 0;
  score1Element.textContent = 0;
});
