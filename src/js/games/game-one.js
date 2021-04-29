function makeGameOne(arg0, arg1) {
  // Local storage assurance.
  makeMaster();
  // Changing certain CSS and HTML properties to accomodate the creation of a new game.
  golden(arg0);
  const a1 = arg1;
  a1.style.backgroundColor = 'gold';
  display.innerHTML = '';
  // Library of words to be randomly chosen from.
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
  // Randomly selecting one of the words from the library.
  function generateWord() {
    return Math.floor(Math.random() * library.length);
  }
  const word = library[generateWord()];
  // Primary interface DIV.
  const primaryInterface = document.createElement('div');
  primaryInterface.classList.add('primaryInterface');
  display.appendChild(primaryInterface);
  // H3 title element for game.
  const g1H3Title = document.createElement('h3');
  g1H3Title.textContent = 'Word Completion';
  primaryInterface.appendChild(g1H3Title);
  // Paragraph element for displaying answer, as it is revealed.
  const answerRevealedP = document.createElement('p');
  answerRevealedP.id = 'answerRevealedP';
  for (let i = 0; i < word.length; i += 1) {
    const temp = document.createElement('span');
    temp.textContent = '_';
    answerRevealedP.appendChild(temp);
  }
  primaryInterface.appendChild(answerRevealedP);
  // User input field.
  const userInput = document.createElement('input');
  userInput.classList.add('userInput');
  userInput.placeholder = 'Enter letter guess here';
  primaryInterface.appendChild(userInput);
  // Incorrect guesses.
  const incorrectGuessesP = document.createElement('p');
  incorrectGuessesP.id = 'incorrectGuessesP';
  incorrectGuessesP.textContent = 'Incorrect Guesses:';
  // Total guesses.
  const totalGuessesP = document.createElement('p');
  totalGuessesP.id = 'totalGuessesP';
  totalGuessesP.textContent = 'Total Guesses: 0';
  // Retry button.
  const retry = document.createElement('button');
  retry.textContent = 'Next';
  retry.id = 'gameOneRetry';
  retry.addEventListener('click', () => {
    makeGameOne(arg0, arg1);
  });
  // Submit button.
  const submit = document.createElement('button');
  submit.id = 'gameOneSubmitButton';
  submit.textContent = 'Submit';
  // Submit button variables.
  const guesses = [];
  const incorrectGuesses = [];
  let correctCharacters = 0;
  let totalGuesses = 0;
  const wordSplit = word.split('');
  // Submit button event listener.
  submit.addEventListener('click', () => {
    const inputValue = userInput.value.toLowerCase();
    if (
      inputValue.length === 1 &&
      correctCharacters < wordSplit.length &&
      inputValue.charCodeAt(0) >= 97 &&
      inputValue.charCodeAt(0) <= 122
    ) {
      if (guesses.every((g) => g !== inputValue)) {
        totalGuesses += 1;
        guesses.push(inputValue);
        let present = false;
        for (let i = 0; i < wordSplit.length; i += 1) {
          if (inputValue === wordSplit[i]) {
            answerRevealedP.children[i].textContent = inputValue;
            correctCharacters += 1;
            present = true;
            if (correctCharacters === wordSplit.length) {
              answerRevealedP.style.borderBottom = '1px solid lime';
              const retrievedMaster = localStorage.getItem('master');
              const retrievedMasterParsed = JSON.parse(retrievedMaster);
              retrievedMasterParsed.gameOne.wins += 1;
              retrievedMasterParsed.gameOne.totalGuesses += totalGuesses;
              retrievedMasterParsed.gameOne.totalIncorrectGuesses +=
                incorrectGuesses.length;
              localStorage.setItem(
                'master',
                JSON.stringify(retrievedMasterParsed)
              );
              retry.classList.add('greenButton');
            }
          }
        }
        if (!present) {
          incorrectGuesses.push(inputValue);
          incorrectGuessesP.textContent = `Incorrect Guesses: ${incorrectGuesses.join(
            ', '
          )}`;
        }
        totalGuessesP.textContent = `Total Guesses: ${totalGuesses}`;
        userInput.value = '';
      }
    }
  });
  primaryInterface.appendChild(submit);
  primaryInterface.appendChild(incorrectGuessesP);
  primaryInterface.appendChild(totalGuessesP);
  primaryInterface.appendChild(retry);
  // Details button.
  const detailsGameOne = document.createElement('button');
  detailsGameOne.textContent = 'Details';
  detailsGameOne.id = 'detailsGameOne';
  primaryInterface.appendChild(detailsGameOne);
  // Details pop-up.
  const gameOneDetails = document.createElement('div');
  gameOneDetails.id = 'gameOneDetails';
  gameOneDetails.textContent =
    'Complete the word by entering a letter into the text field, and then pressing Submit to see if your guess is correct.';
  // Paragraph element for the performance stats.
  const gameOneStatsP = document.createElement('p');
  gameOneStatsP.id = 'gameOneStatsP';
  gameOneDetails.appendChild(gameOneStatsP);
  // Details pop-up close.
  const gameOneDetailsClose = document.createElement('p');
  gameOneDetailsClose.textContent = 'x';
  gameOneDetailsClose.id = 'gameOneDetailsClose';
  gameOneDetails.appendChild(gameOneDetailsClose);
  // Event listener for opening and populating the Details pop-up.
  detailsGameOne.addEventListener('click', () => {
    display.appendChild(gameOneDetails);
    const retrievedMaster = localStorage.getItem('master');
    const retrievedMasterParsed = JSON.parse(retrievedMaster);
    function correctGuessRate() {
      const temp =
        ((retrievedMasterParsed.gameOne.totalGuesses -
          retrievedMasterParsed.gameOne.totalIncorrectGuesses) /
          retrievedMasterParsed.gameOne.totalGuesses) *
        100;
      if (Number.isNaN(temp)) {
        return 0;
      }
      return temp;
    }
    gameOneStatsP.textContent = `Wins: ${
      retrievedMasterParsed.gameOne.wins
    }, Total Guesses: ${
      retrievedMasterParsed.gameOne.totalGuesses
    } and Correct Guess Rate: ${correctGuessRate().toFixed(2)}%`;
    gameOneDetailsClose.addEventListener('click', () => {
      display.removeChild(gameOneDetails);
    });
  });
}
