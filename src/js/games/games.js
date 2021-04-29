function gamesGo() {
  /// ///////Main program variables.
  const display = document.querySelector('#display');
  const gameArray = document.querySelectorAll('.game');
  const g1 = document.querySelector('#g1');
  const g2 = document.querySelector('#g2');
  const g3 = document.querySelector('#g3');
  const g4 = document.querySelector('#g4');
  const g5 = document.querySelector('#g5');
  const g6 = document.querySelector('#g6');
  const g7 = document.querySelector('#g7');
  /// ///////Support functions.
  function changeToGold() {
    this.style.backgroundColor = 'gold';
  }
  function changeToWhite() {
    this.style.backgroundColor = 'white';
  }
  function makeMaster() {
    if (localStorage.getItem('master') === null) {
      const masterTemplate = {
        gameOne: {
          wins: 0,
          totalGuesses: 0,
          totalIncorrectGuesses: 0,
        },
        gameTwo: {
          totalGuesses: 0,
          totalCorrectGuesses: 0,
        },
        gameThree: {
          totalGuesses: 0,
          totalCorrectGuesses: 0,
          clueClicks: 0,
        },
        gameFour: {
          totalWins: 0,
          totalGuesses: 0,
        },
        gameFive: {
          totalWins: 0,
          totalGuesses: 0,
        },
        gameSix: {
          totalWins: 0,
          totalMoves: 0,
        },
        gameSeven: {
          totalWins: 0,
          totalTime: 0,
          totalInputs: 0,
        },
      };
      localStorage.setItem('master', JSON.stringify(masterTemplate));
    }
  }
  function golden(e) {
    for (let i = 0; i < gameArray.length; i += 1) {
      gameArray[i].style.backgroundColor = 'white';
      gameArray[i].removeEventListener('mouseover', changeToGold);
      gameArray[i].removeEventListener('mouseout', changeToWhite);
      if (i !== e) {
        gameArray[i].addEventListener('mouseover', changeToGold);
        gameArray[i].addEventListener('mouseout', changeToWhite);
      }
    }
  }
  function randomize() {
    const rN = Math.random();
    if (rN <= 0.33) {
      return 1;
    }
    if (rN >= 0.67) {
      return -1;
    }
    return 0;
  }
  /// ///////Randomized navigation event listeners.
  const navArray = [g1, g2, g3, g4, g5, g6, g7];
  const gameFunctionArray = [
    makeGameOne,
    makeGameTwo,
    makeGameThree,
    makeGameFour,
    makeGameFive,
    makeGameSix,
    makeGameSeven,
  ];
  let gameFunctionArraySorted = gameFunctionArray.sort(randomize);
  for (let z = 0; z < 10; z += 1) {
    gameFunctionArraySorted = gameFunctionArraySorted.sort(randomize);
  }
  navArray.forEach((n, index) => {
    n.addEventListener('click', () => {
      gameFunctionArraySorted[index](index, n);
    });
  });
  gameFunctionArraySorted[0](0, g1);
}
gamesGo();

import './game-one';
import './game-two';
import './game-three';
import './game-four.js';
import './game-five';
import './game-six';
import './game-seven';
