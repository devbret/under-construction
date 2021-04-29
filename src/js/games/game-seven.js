function makeGameSeven(arg0, arg1) {
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
  const g7H3Title = document.createElement('h3');
  g7H3Title.textContent = 'Timed Typing';
  primaryInterface.appendChild(g7H3Title);
  // Next game button.
  const gameSevenNextButton = document.createElement('button');
  gameSevenNextButton.id = 'gameSevenNextButton';
  gameSevenNextButton.innerText = 'Next';
  gameSevenNextButton.addEventListener('click', () => {
    makeGameSeven(arg0, arg1);
  });
  primaryInterface.appendChild(gameSevenNextButton);
  // Library.
  const library = [
    'prototype',
    'class',
    'invoked',
    'function',
    'scope',
    'closure',
    'module',
    'hoisting',
    'currying',
    'memoization',
    'method',
    'polymorphism',
    'asynchronous',
    'callback',
    'promise',
    'javascript',
    'developer',
    'console',
    'code',
    'variable',
    'type',
    'data',
    'conversion',
    'comparison',
    'conditional',
    'operator',
    'loop',
    'expression',
    'function',
    'browser',
    'debugging',
    'comment',
    'polyfill',
    'object',
    'constructor',
    'chaining',
    'primitive',
    'array',
    'number',
    'iterable',
    'destructuring',
    'json',
    'recursion',
    'stack',
    'parameter',
    'syntax',
    'global',
    'binding',
    'getter',
    'setter',
    'inheritance',
    'property',
    'static',
    'mixin',
    'error',
    'handling',
    'api',
    'generator',
    'export',
    'import',
    'dynamic',
    'proxy',
    'reference',
    'dom',
    'node',
    'attribute',
    'event',
    'bubbling',
    'input',
    'value',
    'assignment',
    'spread',
    'rest',
    'equality',
    'functional',
    'programming',
    'development',
    'javascript',
    'html',
    'css',
    'hosting',
    'internet',
  ];
  // Selecting a random library item.
  function rN() {
    return Math.floor(Math.random() * library.length);
  }
  const word = library[rN()];
  // Displaying the word as selected.
  const selectionText = document.createElement('p');
  selectionText.innerText = `The selected word is "${word}".`;
  primaryInterface.appendChild(selectionText);
  // Timer text.
  const timerText = document.createElement('p');
  timerText.id = 'timerText';
  timerText.textContent = 'Seconds Timer: 0.0';
  // Total characters input.
  const totalCharInput = document.createElement('p');
  totalCharInput.id = 'totalCharInput';
  totalCharInput.innerText = 'Total Inputs: 0';
  // User input element and related variables.
  const gameSevenUI = document.createElement('input');
  gameSevenUI.classList.add('userInput');
  gameSevenUI.id = 'gameSevenUI';
  gameSevenUI.placeholder = 'Begin typing selected word here';
  // Primary game variables.
  let inputTotal = 0;
  let timerTotal = 0;
  let mainInterval;
  let engaged = false;
  const wordSplit = word.split('');
  // Determining if the input is valid.
  gameSevenUI.addEventListener('keydown', (e) => {
    const k = e.key;
    if (
      k === 'a' ||
      k === 'b' ||
      k === 'c' ||
      k === 'd' ||
      k === 'e' ||
      k === 'f' ||
      k === 'g' ||
      k === 'h' ||
      k === 'i' ||
      k === 'j' ||
      k === 'k' ||
      k === 'l' ||
      k === 'm' ||
      k === 'n' ||
      k === 'o' ||
      k === 'p' ||
      k === 'q' ||
      k === 'r' ||
      k === 's' ||
      k === 't' ||
      k === 'u' ||
      k === 'v' ||
      k === 'w' ||
      k === 'x' ||
      k === 'y' ||
      k === 'z'
    ) {
      inputTotal += 1;
    }
  });
  // Main event listener.
  gameSevenUI.addEventListener('input', () => {
    if (inputTotal === 1 && !engaged) {
      engaged = true;
      // Initiating the timer.
      mainInterval = setInterval(() => {
        timerTotal += 0.1;
        timerText.innerText = `Seconds Timer: ${timerTotal.toFixed(1)}`;
      }, 100);
    }
    totalCharInput.innerText = `Total Inputs: ${inputTotal}`;
    const userInputText = gameSevenUI.value.split('');
    // Checking to see if the currrent input value is correct.
    if (wordSplit.every((u, ind) => u === userInputText[ind])) {
      // Cancelling the timer.
      clearInterval(mainInterval);
      // Changing relevant CSS values to indicate a win.
      gameSevenUI.disabled = 'disabled';
      gameSevenUI.style.border = '1px solid lime';
      gameSevenNextButton.style.border = '1px solid lime';
      // Accessing and updating stats.
      const retrievedMaster = localStorage.getItem('master');
      const retrievedMasterParsed = JSON.parse(retrievedMaster);
      retrievedMasterParsed.gameSeven.totalWins += 1;
      retrievedMasterParsed.gameSeven.totalTime += timerTotal;
      retrievedMasterParsed.gameSeven.totalInputs += inputTotal;
      localStorage.setItem('master', JSON.stringify(retrievedMasterParsed));
    }
  });
  primaryInterface.appendChild(gameSevenUI);
  primaryInterface.appendChild(timerText);
  primaryInterface.appendChild(totalCharInput);
  // Details button.
  const detailsGameSeven = document.createElement('button');
  detailsGameSeven.textContent = 'Details';
  detailsGameSeven.id = 'detailsGameSeven';
  primaryInterface.appendChild(detailsGameSeven);
  // Details pop-up.
  const gameSevenDetails = document.createElement('div');
  gameSevenDetails.id = 'gameSevenDetails';
  gameSevenDetails.textContent =
    'Type the randomly selected word into the text field using lowercase English letters, and see how long it takes you by referencing the automatic timer.';
  // Paragraph element for the performance stats.
  const gameSevenStatsP = document.createElement('p');
  gameSevenStatsP.id = 'gameSevenStatsP';
  gameSevenDetails.appendChild(gameSevenStatsP);
  // Details pop-up close.
  const gameSevenDetailsClose = document.createElement('p');
  gameSevenDetailsClose.textContent = 'x';
  gameSevenDetailsClose.id = 'gameSevenDetailsClose';
  gameSevenDetails.appendChild(gameSevenDetailsClose);
  // Event listener for opening and populating the Details pop-up.
  detailsGameSeven.addEventListener('click', () => {
    display.appendChild(gameSevenDetails);
    // Accessing stats.
    const retrievedMaster = localStorage.getItem('master');
    const retrievedMasterParsed = JSON.parse(retrievedMaster);
    // Support functions.
    function averageTime() {
      const answer =
        retrievedMasterParsed.gameSeven.totalTime /
        retrievedMasterParsed.gameSeven.totalWins;
      if (Number.isNaN(answer)) {
        return 0;
      }
      return answer;
    }
    function averageInputs() {
      const answer =
        retrievedMasterParsed.gameSeven.totalInputs /
        retrievedMasterParsed.gameSeven.totalWins;
      if (Number.isNaN(answer)) {
        return 0;
      }
      return answer;
    }
    // Displaying current stats.
    gameSevenStatsP.textContent = `Total Wins: ${
      retrievedMasterParsed.gameSeven.totalWins
    }, Average Seconds Per Word: ${averageTime().toFixed(
      2
    )} and Average Inputs Per Word: ${averageInputs().toFixed(2)}`;
    // Event listener for closing the Details pop-up.
    gameSevenDetailsClose.addEventListener('click', () => {
      display.removeChild(gameSevenDetails);
    });
  });
}
