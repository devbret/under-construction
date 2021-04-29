function makeGameFive(arg0, arg1) {
  // Local storage assurance.
  makeMaster();
  // Changing certain CSS and HTML properties to accomodate the creation of a new game.
  golden(arg0);
  arg1.style.backgroundColor = 'gold';
  display.innerHTML = '';
  // Variables for each game.
  let movesMade = 0;
  // Inner support functions.
  function guessesPerGame(z) {
    const temp = z.gameFive.totalGuesses / z.gameFive.totalWins;
    if (isNaN(temp)) {
      return 0;
    }
    return temp;
  }
  function calcDiff(s) {
    const temp = (movesMade / s) * 100;
    if (!Number.isFinite(temp)) {
      return 0;
    }
    return temp;
  }
  // Primary interface DIV.
  const primaryInterface = document.createElement('div');
  primaryInterface.classList.add('primaryInterface');
  display.appendChild(primaryInterface);
  // H3 title element for game.
  const g5H3Title = document.createElement('h3');
  g5H3Title.textContent = 'Code Re-Arrangement';
  g5H3Title.id = 'g5H3Title';
  primaryInterface.appendChild(g5H3Title);
  // Re-arranging DIV.
  const gameFiveReDIV = document.createElement('div');
  gameFiveReDIV.id = 'gameFiveReDIV';
  primaryInterface.appendChild(gameFiveReDIV);
  // Total moves paragraph element.
  const gameFiveMovesP = document.createElement('p');
  gameFiveMovesP.innerText = 'Total Moves: 0';
  gameFiveMovesP.id = 'gameFiveMovesP';
  primaryInterface.appendChild(gameFiveMovesP);
  // Difference from average moves per game.
  const gameFiveDiffP = document.createElement('p');
  gameFiveDiffP.innerText = 'Percentage Of Average: 0.00%';
  gameFiveDiffP.id = 'gameFiveDiffP';
  primaryInterface.appendChild(gameFiveDiffP);
  // Next game button.
  const gameFiveNextButton = document.createElement('button');
  gameFiveNextButton.id = 'gameFiveNextButton';
  gameFiveNextButton.innerText = 'Next';
  gameFiveNextButton.addEventListener('click', () => {
    makeGameFive(arg0, arg1);
  });
  primaryInterface.appendChild(gameFiveNextButton);
  // Library of code to re-arrange.
  const aLibrary = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const letter = aLibrary[Math.floor(Math.random() * aLibrary.length)];
  const library = [
    {
      code: `${Math.floor(Math.random() * 50) + 50} >= ${Math.floor(
        Math.random() * 25
      )} ;`,
    },
    {
      code: `${Math.floor(Math.random() * 25)} <= ${
        Math.floor(Math.random() * 50) + 50
      } ;`,
    },
    {
      code: `const myNum = ${Math.floor(Math.random() * 50)} ;`,
    },
    {
      code: `${Math.floor(Math.random() * 25)} < ${
        Math.floor(Math.random() * 100) + 100
      } ;`,
    },
    {
      code: `${Math.floor(Math.random() * 100) + 100} > ${Math.floor(
        Math.random() * 25
      )} ;`,
    },
    {
      code: `let myNum = ${Math.floor(Math.random() * 100) + 100} ;`,
    },
    {
      code: `var myNum = ${Math.floor(Math.random() * 100) + 100} ;`,
    },
    {
      code: `let ${letter} = () => '${Math.floor(Math.random() * 1000)}' ;`,
    },
    {
      code: `let ${letter} = () => ${letter}++ ;`,
    },
    {
      code: `let num = !${letter} || ${Math.floor(Math.random() * 100)} ;`,
    },
    {
      code: `if ( ${letter} ) { ${letter}++ ; }`,
    },
    {
      code: `else if ( ${letter} ) { ${letter}++; }`,
    },
    {
      code: `else { ${letter}-- ; }`,
    },
    {
      code: `while ( !${letter} ) { ${letter}++ ; }`,
    },
    {
      code: `myFunction ( ...${letter} ) ;`,
    },
    {
      code: `let my${letter.toUpperCase()} = ${letter} => ${letter}++ ;`,
    },
    {
      code: `isNaN ( ${letter} ) ;`,
    },
    {
      code: `isFinite ( ${letter} ) ;`,
    },
    {
      code: `let ${letter} = [ ${Math.floor(Math.random() * 25)} ] ;`,
    },
    {
      code: `let ${letter} = { } ;`,
    },
    {
      code: `const ${letter} = [ ${Math.floor(Math.random() * 25)} ] ;`,
    },
    {
      code: `const ${letter} = { } ;`,
    },
    {
      code: `var ${letter} = [ ${Math.floor(Math.random() * 25)} ] ;`,
    },
    {
      code: `var ${letter} = { } ;`,
    },
    {
      code: `typeof '${letter}' ;`,
    },
    {
      code: `typeof \`${letter}\` ;`,
    },
    {
      code: `typeof ${Math.floor(Math.random() * 25)} ;`,
    },
    {
      code: `typeof [ "${letter}" ] ;`,
    },
    {
      code: `typeof [ ${Math.floor(Math.random() * 25)} ] ;`,
    },
    {
      code: 'typeof { } ;',
    },
    {
      code: 'typeof myVar ;',
    },
    {
      code: 'typeof null ;',
    },
    {
      code: `typeof "${letter}" ;`,
    },
  ];
  // Choosing and formatting a random object from the Library array.
  const codeChoice = library[Math.floor(Math.random() * library.length)].code
    .split(' ')
    .reduce((total, p, ind) => {
      total.push({
        item: p,
        position: ind,
      });
      return total;
    }, []);
  // Scramble the code.
  let scrambledCode = codeChoice.sort(randomize);
  while (scrambledCode.some((s, ind) => s.position === ind)) {
    scrambledCode = scrambledCode.sort(randomize);
  }
  // Drag And Drop interface functions.
  function dragStart(e) {
    e.target.style.color = 'darkgray';
    e.target.style.border = '1px solid darkgray';
    e.dataTransfer.setData('id', e.target.id);
  }
  function dragFunc(e) {
    e.preventDefault();
  }
  function dragOver(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    if (e.target.id !== id) {
      const currentObj = e.target.getBoundingClientRect();
      const x = e.offsetX;
      const refNode = document.querySelector(`#${e.target.id}`);
      if (x <= currentObj.width / 2) {
        refNode.style.background =
          'linear-gradient(to right, rgba(255,215,0,0.67), white, white, white)';
      } else {
        refNode.style.background =
          'linear-gradient(to left, rgba(255,215,0,0.67), white, white, white)';
      }
    }
  }
  function dragLeave(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    if (e.target.id !== id) {
      e.target.style.border = '1px solid black';
      e.target.style.background = 'white';
    }
  }
  function onDrop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    if (e.target.id !== id) {
      movesMade += 1;
      const currentObj = e.target.getBoundingClientRect();
      const x = e.offsetX;
      const newNode = document.querySelector(`#${id}`);
      const refNode = document.querySelector(`#${e.target.id}`);
      if (x <= currentObj.width / 2) {
        gameFiveReDIV.insertBefore(newNode, refNode);
      } else {
        gameFiveReDIV.insertBefore(newNode, refNode.nextSibling);
      }
      refNode.style.background = 'white';
      gameFiveMovesP.innerText = `Total Moves: ${movesMade}`;
      const retrievedMaster = localStorage.getItem('master');
      const retrievedMasterParsed = JSON.parse(retrievedMaster);
      gameFiveDiffP.innerText = `Percentage Of Average: ${calcDiff(
        guessesPerGame(retrievedMasterParsed)
      ).toFixed(2)}%`;
      const chs = gameFiveReDIV.children;
      let complete = 1;
      for (let q = 0; q < codeChoice.length; q += 1) {
        if (chs[q].children[0].innerText !== String(q)) {
          complete = 0;
        }
      }
      if (complete === 1) {
        retrievedMasterParsed.gameFive.totalWins += 1;
        retrievedMasterParsed.gameFive.totalGuesses += movesMade;
        localStorage.setItem('master', JSON.stringify(retrievedMasterParsed));
        gameFiveReDIV.style.borderBottom = '1px solid lime';
        gameFiveNextButton.style.border = '1px solid lime';
        for (const c in chs) {
          chs[c].removeEventListener('dragstart', dragStart);
          chs[c].removeEventListener('drag', dragFunc);
          chs[c].removeEventListener('dragover', dragOver);
          chs[c].removeEventListener('dragleave', dragLeave);
          chs[c].removeEventListener('drop', onDrop);
          chs[c].removeEventListener('dragend', dragEnd);
          chs[c].style.color = 'black';
          chs[c].style.border = '1px solid black';
          chs[c].style.background = 'white';
          chs[c].draggable = false;
          chs[c].addEventListener('mouseover', function () {
            this.style.cursor = 'default';
          });
        }
      }
    }
  }
  function dragEnd(e) {
    e.target.style.color = 'black';
    e.target.style.border = '1px solid black';
  }
  // Populating the re-arranging DIV with the scrambled code as blocks.
  for (const sC in scrambledCode) {
    // The code div itself.
    const temp = document.createElement('div');
    temp.id = `sCodeBlock${sC}`;
    temp.draggable = true;
    temp.classList.add('scrambledCodeBlock');
    temp.innerText = scrambledCode[sC].item;
    // Tracking element.
    const invisiP = document.createElement('p');
    invisiP.innerText = scrambledCode[sC].position;
    invisiP.style.display = 'none';
    temp.appendChild(invisiP);
    gameFiveReDIV.appendChild(temp);
    // Adding event listeners to enable drag-and-drop features.
    temp.addEventListener('dragstart', dragStart);
    temp.addEventListener('drag', dragFunc);
    temp.addEventListener('dragover', dragOver);
    temp.addEventListener('dragleave', dragLeave);
    temp.addEventListener('drop', onDrop);
    temp.addEventListener('dragend', dragEnd);
  }
  // Details button.
  const detailsGameFive = document.createElement('button');
  detailsGameFive.textContent = 'Details';
  detailsGameFive.id = 'detailsGameFive';
  primaryInterface.appendChild(detailsGameFive);
  // Details pop-up.
  const gameFiveDetails = document.createElement('div');
  gameFiveDetails.id = 'gameFiveDetails';
  gameFiveDetails.textContent =
    'Rearrange the scrambled JavaScript code by dragging and dropping each box until a meaningful statement is produced.';
  // Paragraph element for the performance stats.
  const gameFiveStatsP = document.createElement('p');
  gameFiveStatsP.id = 'gameFiveStatsP';
  gameFiveDetails.appendChild(gameFiveStatsP);
  // Details pop-up close.
  const gameFiveDetailsClose = document.createElement('p');
  gameFiveDetailsClose.textContent = 'x';
  gameFiveDetailsClose.id = 'gameFiveDetailsClose';
  gameFiveDetails.appendChild(gameFiveDetailsClose);
  // Event listener for opening and populating the Details pop-up.
  detailsGameFive.addEventListener('click', () => {
    display.appendChild(gameFiveDetails);
    // Accessing stats.
    const retrievedMaster = localStorage.getItem('master');
    const retrievedMasterParsed = JSON.parse(retrievedMaster);
    // Displaying current stats.
    gameFiveStatsP.textContent = `Total Wins: ${
      retrievedMasterParsed.gameFive.totalWins
    } and Average Moves Per Game: ${guessesPerGame(
      retrievedMasterParsed
    ).toFixed(2)}`;
    // Event listener for closing the Details pop-up.
    gameFiveDetailsClose.addEventListener('click', () => {
      display.removeChild(gameFiveDetails);
    });
  });
}
