function makeGameFour(arg0, arg1) {
  // Local storage assurance.
  makeMaster();
  // Changing certain CSS and HTML properties to accomodate the creation of a new game.
  golden(arg0);
  const a1 = arg1;
  a1.style.backgroundColor = 'gold';
  display.innerHTML = '';
  // Primary interface DIV.
  const primaryInterface = document.createElement('div');
  primaryInterface.classList.add('primaryInterface');
  display.appendChild(primaryInterface);
  // H3 title element for game.
  const g4H3Title = document.createElement('h3');
  g4H3Title.textContent = 'Matching Squares';
  primaryInterface.appendChild(g4H3Title);
  // Next game button.
  const gameFourNextButton = document.createElement('button');
  gameFourNextButton.id = 'gameFourNextButton';
  gameFourNextButton.innerText = 'Next';
  gameFourNextButton.addEventListener('click', () => {
    makeGameFour(arg0, arg1);
  });
  primaryInterface.appendChild(gameFourNextButton);
  // Library.
  const preLibrary = [
    {
      display: '++',
    },
    {
      display: '<=',
    },
    {
      display: '--',
    },
    {
      display: '>=',
    },
    {
      display: '===',
    },
    {
      display: '!=',
    },
    {
      display: '!==',
    },
    {
      display: '==',
    },
    {
      display: '*=',
    },
    {
      display: '+=',
    },
    {
      display: '-=',
    },
    {
      display: '+',
    },
    {
      display: '-',
    },
    {
      display: '*',
    },
    {
      display: '/',
    },
    {
      display: '%',
    },
    {
      display: '||',
    },
    {
      display: '&&',
    },
    {
      display: '/=',
    },
    {
      display: 'null',
    },
    {
      display: 'var',
    },
    {
      display: 'let',
    },
    {
      display: 'const',
    },
    {
      display: '%=',
    },
    {
      display: 'NaN',
    },
    {
      display: 'isNaN()',
    },
    {
      display: 'false',
    },
    {
      display: 'true',
    },
    {
      display: 'typeof',
    },
    {
      display: 'new',
    },
    {
      display: 'Date()',
    },
    {
      display: ';',
    },
    {
      display: 'delete',
    },
    {
      display: 'if',
    },
    {
      display: 'else',
    },
    {
      display: 'else if',
    },
    {
      display: 'return',
    },
    {
      display: 'switch',
    },
    {
      display: 'break',
    },
    {
      display: 'continue',
    },
    {
      display: 'throw',
    },
    {
      display: '//',
    },
    {
      display: 'while',
    },
    {
      display: 'do',
    },
    {
      display: 'for',
    },
    {
      display: 'length',
    },
    {
      display: 'prototype',
    },
    {
      display: 'undefined',
    },
    {
      display: 'function',
    },
    {
      display: '=>',
    },
    {
      display: '=',
    },
    {
      display: '[ ]',
    },
    {
      display: '( )',
    },
    {
      display: '{ }',
    },
    {
      display: 'Map()',
    },
    {
      display: 'Set()',
    },
    {
      display: 'Promise()',
    },
    {
      display: '...',
    },
    {
      display: 'get',
    },
    {
      display: 'set',
    },
    {
      display: '" "',
    },
    {
      display: "' '",
    },
    {
      display: '?',
    },
    {
      display: ':',
    },
    {
      display: '` `',
    },
  ];
  // Selecting eight random objects from the Library array.
  const almostLibrary = [];
  for (let i = 0; i < 8; i += 1) {
    let rN = Math.floor(Math.random() * preLibrary.length);
    while (almostLibrary.some((l) => l === preLibrary[rN])) {
      rN = Math.floor(Math.random() * preLibrary.length);
    }
    almostLibrary.push(preLibrary[rN]);
  }
  const library = almostLibrary;
  // Generating squares, variables and support functions.
  const squareHolder = document.createElement('div');
  squareHolder.id = 'squareHolder';
  primaryInterface.appendChild(squareHolder);
  squareHolder.style.height = `${squareHolder.offsetWidth}px`;
  function hoveringOver() {
    this.style.cursor = 'pointer';
    this.style.backgroundColor = 'gold';
  }
  function hOActivated() {
    this.style.cursor = 'default';
    this.style.backgroundColor = 'lightgray';
  }
  function hoveringOut() {
    this.style.cursor = 'default';
    this.style.backgroundColor = 'white';
  }
  const spreadOne = [];
  const spreadTwo = [];
  const activated = [];
  let activeSquares = [];
  let gameFourGuesses = 0;
  const retrievedMaster = localStorage.getItem('master');
  const retrievedMasterParsed = JSON.parse(retrievedMaster);
  // Generating squares, the main for loop.
  for (let i = 0; i < 16; i += 1) {
    activated[i] = 0;
    const tempSquare = document.createElement('div');
    tempSquare.classList.add('tempSquares');
    squareHolder.appendChild(tempSquare);
    tempSquare.style.width = '25%';
    tempSquare.style.height = '25%';
    const tempSquareP = document.createElement('p');
    if (i % 2 === 0) {
      let rN = Math.floor(Math.random() * library.length);
      while (spreadOne.some((s) => s === library[rN].display)) {
        rN = Math.floor(Math.random() * library.length);
      }
      tempSquareP.innerText = library[rN].display;
      tempSquare.appendChild(tempSquareP);
      tempSquareP.style.display = 'none';
      spreadOne.push(library[rN].display);
    }
    if (i % 2 === 1) {
      let rN = Math.floor(Math.random() * library.length);
      while (spreadTwo.some((s) => s === library[rN].display)) {
        rN = Math.floor(Math.random() * library.length);
      }
      tempSquareP.innerText = library[rN].display;
      tempSquare.appendChild(tempSquareP);
      tempSquareP.style.display = 'none';
      spreadTwo.push(library[rN].display);
    }
    function matched() {
      if (activeSquares.length < 2) {
        gameFourGuesses += 1;
        if (activeSquares.length === 0 && !activated[i]) {
          activeSquares.push({
            display: tempSquareP.innerText,
            child: i,
            elem: tempSquareP,
          });
          tempSquareP.style.display = 'block';
          return;
        }
        if (
          activeSquares.length === 1 &&
          activeSquares[0].display !== tempSquare.children[0].innerText &&
          activeSquares[0].child !== i &&
          !activated[i] &&
          !activated[activeSquares[0].child]
        ) {
          tempSquareP.style.display = 'block';
          activeSquares.push({
            display: tempSquareP.innerText,
            child: i,
            elem: tempSquareP,
          });
          setTimeout(() => {
            tempSquareP.style.display = 'none';
            activeSquares[0].elem.style.display = 'none';
            activeSquares = [];
          }, 500);
          return;
        }
        if (
          activeSquares.length === 1 &&
          activeSquares[0].display === tempSquare.children[0].innerText &&
          activeSquares[0].child !== i &&
          !activated[i] &&
          !activated[activeSquares[0].child]
        ) {
          activeSquares.push({
            display: tempSquareP.innerText,
            child: i,
            elem: tempSquareP,
          });
          this.style.backgroundColor = 'lightgray';
          activeSquares[1].elem.style.display = 'block';
          squareHolder.children[activeSquares[0].child].style.backgroundColor =
            'lightgray';
          activeSquares[0].elem.parentNode.removeEventListener(
            'click',
            matched
          );
          activeSquares[1].elem.parentNode.removeEventListener(
            'click',
            matched
          );
          activeSquares[0].elem.parentNode.removeEventListener(
            'mouseover',
            hoveringOver
          );
          activeSquares[1].elem.parentNode.removeEventListener(
            'mouseover',
            hoveringOver
          );
          activeSquares[0].elem.parentNode.removeEventListener(
            'mouseout',
            hoveringOut
          );
          activeSquares[1].elem.parentNode.removeEventListener(
            'mouseout',
            hoveringOut
          );
          activeSquares[0].elem.parentNode.addEventListener(
            'mouseover',
            hOActivated
          );
          activeSquares[1].elem.parentNode.addEventListener(
            'mouseover',
            hOActivated
          );
          activeSquares[0].elem.parentNode.addEventListener(
            'mouseout',
            hOActivated
          );
          activeSquares[1].elem.parentNode.addEventListener(
            'mouseout',
            hOActivated
          );
          activated[i] = 1;
          activated[activeSquares[0].child] = 1;
          activeSquares = [];
          if (activated.every((a) => a === 1)) {
            retrievedMasterParsed.gameFour.totalWins += 1;
            retrievedMasterParsed.gameFour.totalGuesses += gameFourGuesses;
            localStorage.setItem(
              'master',
              JSON.stringify(retrievedMasterParsed)
            );
            squareHolder.style.border = '1px solid lime';
            gameFourNextButton.style.border = '1px solid lime';
            for (const ch in squareHolder.children) {
              squareHolder.children[ch].style.border = '1px solid darkgray';
            }
          }
        }
      }
    }
    tempSquare.addEventListener('click', matched);
    tempSquare.addEventListener('mouseover', hoveringOver);
    tempSquare.addEventListener('mouseout', hoveringOut);
  }
  // Details button.
  const detailsGameFour = document.createElement('button');
  detailsGameFour.textContent = 'Details';
  detailsGameFour.id = 'detailsGameFour';
  primaryInterface.appendChild(detailsGameFour);
  // Details pop-up.
  const gameFourDetails = document.createElement('div');
  gameFourDetails.id = 'gameFourDetails';
  gameFourDetails.textContent =
    'Click on different game squares, thereby revealing JavaScript code, until they are all matched as pairs of the initially hidden content.';
  // Paragraph element for the performance stats.
  const gameFourStatsP = document.createElement('p');
  gameFourStatsP.id = 'gameFourStatsP';
  gameFourDetails.appendChild(gameFourStatsP);
  // Details pop-up close.
  const gameFourDetailsClose = document.createElement('p');
  gameFourDetailsClose.textContent = 'x';
  gameFourDetailsClose.id = 'gameFourDetailsClose';
  gameFourDetails.appendChild(gameFourDetailsClose);
  // Event listener for opening and populating the Details pop-up.
  detailsGameFour.addEventListener('click', () => {
    display.appendChild(gameFourDetails);
    const retrievedMaster = localStorage.getItem('master');
    const retrievedMasterParsed = JSON.parse(retrievedMaster);
    // Function for calculating the Average Guesses Per Game.
    function guessesPerGame() {
      const temp =
        retrievedMasterParsed.gameFour.totalGuesses /
        retrievedMasterParsed.gameFour.totalWins;
      if (Number.isNaN(temp)) {
        return 0;
      }
      return temp;
    }
    gameFourStatsP.textContent = `Total Wins: ${
      retrievedMasterParsed.gameFour.totalWins
    } and Average Guesses Per Game: ${guessesPerGame().toFixed(2)}`;
    // Event listener for closing the Details pop-up.
    gameFourDetailsClose.addEventListener('click', () => {
      display.removeChild(gameFourDetails);
    });
  });
  window.addEventListener('resize', () => {
    squareHolder.style.height = `${squareHolder.offsetWidth}px`;
  });
}
