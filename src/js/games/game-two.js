function makeGameTwo(arg0, arg1) {
  // Local storage assurance.
  makeMaster();
  // Changing certain CSS and HTML properties to accomodate the creation of a new game.
  golden(arg0);
  const a1 = arg1;
  a1.style.backgroundColor = 'gold';
  display.innerHTML = '';
  // Library of questions, and their respective answers, to be randonly selected from.
  const library = [
    {
      question: 'What year was JavaScript first released?',
      answers: [
        { answer: '1996', correct: false },
        { answer: '1992', correct: false },
        { answer: '2000', correct: false },
        { answer: '1995', correct: true },
      ],
    },
    {
      question: 'Who invented the JavaScript language?',
      answers: [
        { answer: 'Susan Winters', correct: false },
        { answer: 'Steve Jobs', correct: false },
        { answer: 'Lewis Alder', correct: false },
        { answer: 'Brendan Eich', correct: true },
      ],
    },
    {
      question: 'Which particular Standard is JavaScript based on?',
      answers: [
        { answer: 'CSS', correct: false },
        { answer: 'Vanilla', correct: false },
        { answer: 'Modern Text', correct: false },
        { answer: 'ECMAScript', correct: true },
      ],
    },
    {
      question: 'How many processing threads does JavaScript use?',
      answers: [
        { answer: 'Four', correct: false },
        { answer: 'Three', correct: false },
        { answer: 'Two', correct: false },
        { answer: 'One', correct: true },
      ],
    },
    {
      question:
        'What internal project name was given to JavaScript during its initial development?',
      answers: [
        { answer: 'Zeta', correct: false },
        { answer: 'Whisper', correct: false },
        { answer: 'Waterfall', correct: false },
        { answer: 'Mocha', correct: true },
      ],
    },
    {
      question:
        'How long was the initial release of JavaScript in development?',
      answers: [
        { answer: '78 Days', correct: false },
        { answer: '152 Days', correct: false },
        { answer: '8 Days', correct: false },
        { answer: '10 Days', correct: true },
      ],
    },
    {
      question: 'Which data type does not exist in the JavaScript language?',
      answers: [
        { answer: 'String', correct: false },
        { answer: 'Number', correct: false },
        { answer: 'Boolean', correct: false },
        { answer: 'Integer', correct: true },
      ],
    },
    {
      question:
        'Which programming language did not originally inspire the creation of JavaScript?',
      answers: [
        { answer: 'Java', correct: false },
        { answer: 'Scheme', correct: false },
        { answer: 'Self', correct: false },
        { answer: 'C++', correct: true },
      ],
    },
    {
      question: 'What kind of inheritance does JavaScript use?',
      answers: [
        { answer: 'Single', correct: false },
        { answer: 'Hybrid', correct: false },
        { answer: 'Hierarchical', correct: false },
        { answer: 'Prototypical', correct: true },
      ],
    },
    {
      question: 'Which company is responsible for the creation of JavaScript?',
      answers: [
        { answer: 'Apple', correct: false },
        { answer: 'IBM', correct: false },
        { answer: 'HP', correct: false },
        { answer: 'Netscape', correct: true },
      ],
    },
    {
      question: 'Which company owns the trademark for JavaScript?',
      answers: [
        { answer: 'Microsoft', correct: false },
        { answer: 'Google', correct: false },
        { answer: 'GE', correct: false },
        { answer: 'Oracle', correct: true },
      ],
    },
    {
      question: 'How is JavaScript typed?',
      answers: [
        { answer: 'Strongly', correct: false },
        { answer: 'Positively', correct: false },
        { answer: 'Objectively', correct: false },
        { answer: 'Weakly', correct: true },
      ],
    },
    {
      question:
        'What is the outermost scope in JavaScript commonly referred to as?',
      answers: [
        { answer: 'Universal', correct: false },
        { answer: 'Local', correct: false },
        { answer: 'Base', correct: false },
        { answer: 'Global', correct: true },
      ],
    },
    {
      question: 'What year was ECMAScript 6 released in?',
      answers: [
        { answer: '1999', correct: false },
        { answer: '2020', correct: false },
        { answer: '2019', correct: false },
        { answer: '2015', correct: true },
      ],
    },
    {
      question:
        'What is another name for a value that is considered to be true in JavaScript?',
      answers: [
        { answer: 'Strongly', correct: false },
        { answer: 'Falsy', correct: false },
        { answer: 'Rigidly', correct: false },
        { answer: 'Truthy', correct: true },
      ],
    },
    {
      question:
        'Which of the following do modern browsers not provide as a means for interacting with users?',
      answers: [
        { answer: 'Alerts', correct: false },
        { answer: 'Prompts', correct: false },
        { answer: 'Confirmations', correct: false },
        { answer: 'Shutdowns', correct: true },
      ],
    },
    {
      question: 'What type of operator does JavaScript not include?',
      answers: [
        { answer: 'Unary', correct: false },
        { answer: 'Binary', correct: false },
        { answer: 'Ternary', correct: false },
        { answer: 'Quaternary', correct: true },
      ],
    },
    {
      question: 'What type of logical operator is not found in JavaScript?',
      answers: [
        { answer: 'AND', correct: false },
        { answer: 'OR', correct: false },
        { answer: 'NOT', correct: false },
        { answer: 'EQV', correct: true },
      ],
    },
    {
      question:
        'What is a Developer doing when finding and fixing errors in their code?',
      answers: [
        { answer: 'Buffering', correct: false },
        { answer: 'Classifying', correct: false },
        { answer: 'Instantiating', correct: false },
        { answer: 'Debugging', correct: true },
      ],
    },
    {
      question:
        'Was JavaScript originally intended to be used by the Client and/or Server?',
      answers: [
        { answer: 'Yes, Server Only', correct: false },
        { answer: 'Yes, Client Only', correct: false },
        { answer: 'No, Neither', correct: false },
        { answer: 'Yes, Both', correct: true },
      ],
    },
    {
      question: "What is the name of Mozilla's JavaScript engine?",
      answers: [
        { answer: 'Category9', correct: false },
        { answer: 'Hot Rod', correct: false },
        { answer: 'Greenhouse', correct: false },
        { answer: 'SpiderMonkey', correct: true },
      ],
    },
    {
      question: "What is the name of Google's JavaScript engine?",
      answers: [
        { answer: 'Critical', correct: false },
        { answer: 'Develope', correct: false },
        { answer: 'Spirit Wagon', correct: false },
        { answer: 'V8', correct: true },
      ],
    },
    {
      question: 'What label is given to a function that calls itself?',
      answers: [
        { answer: 'Restrictive', correct: false },
        { answer: 'Regenerative', correct: false },
        { answer: 'Responsive', correct: false },
        { answer: 'Recursive', correct: true },
      ],
    },
    {
      question: 'What explicitly manages variable accessibility in JavaScript?',
      answers: [
        { answer: 'Inheritance', correct: false },
        { answer: 'Binding', correct: false },
        { answer: 'Conversion', correct: false },
        { answer: 'Scope', correct: true },
      ],
    },
    {
      question:
        'What name is commonly given to functions that are object properties in JavaScript?',
      answers: [
        { answer: 'Head', correct: false },
        { answer: 'Action', correct: false },
        { answer: 'System', correct: false },
        { answer: 'Method', correct: true },
      ],
    },
    {
      question:
        'What name is commonly given to a distinct piece of a JavaScript program?',
      answers: [
        { answer: 'Segment', correct: false },
        { answer: 'Box', correct: false },
        { answer: 'Folder', correct: false },
        { answer: 'Module', correct: true },
      ],
    },
    {
      question:
        'Which programming model allows for multiple things to happen at the same time?',
      answers: [
        { answer: 'Coinciding', correct: false },
        { answer: 'Coexistent', correct: false },
        { answer: 'Synchronal', correct: false },
        { answer: 'Asynchronous', correct: true },
      ],
    },
    {
      question:
        'What name is commonly given to a function that is passed as an argument of another function?',
      answers: [
        { answer: 'Database', correct: false },
        { answer: 'Slide', correct: false },
        { answer: 'Pepper', correct: false },
        { answer: 'Callback', correct: true },
      ],
    },
    {
      question: "How can't JavaScript be associated with an HTML file?",
      answers: [
        { answer: 'Inline', correct: false },
        { answer: 'Internal', correct: false },
        { answer: 'External', correct: false },
        { answer: 'Beside', correct: true },
      ],
    },
    {
      question: 'What JavaScript type is Null?',
      answers: [
        { answer: 'String', correct: false },
        { answer: 'Undefined', correct: false },
        { answer: 'Number', correct: false },
        { answer: 'Object', correct: true },
      ],
    },
    {
      question: 'What JavaScript type is NaN?',
      answers: [
        { answer: 'String', correct: false },
        { answer: 'Object', correct: false },
        { answer: 'Symbol', correct: false },
        { answer: 'Number', correct: true },
      ],
    },
    {
      question: 'What kind of programming language is JavaScript?',
      answers: [
        { answer: 'Side-Level', correct: false },
        { answer: 'Middle-Level', correct: false },
        { answer: 'Low-Level', correct: false },
        { answer: 'High-Level', correct: true },
      ],
    },
    {
      question: 'What technology does JavaScript not have access to?',
      answers: [
        { answer: 'DOM', correct: false },
        { answer: 'AJAX', correct: false },
        { answer: 'JSON', correct: false },
        { answer: 'SQL', correct: true },
      ],
    },
    {
      question:
        'What label is commonly given, in JavaScript, to an instruction to perform a specific action?',
      answers: [
        { answer: 'Equivalency', correct: false },
        { answer: 'Arrangement', correct: false },
        { answer: 'Expression', correct: false },
        { answer: 'Statement', correct: true },
      ],
    },
    {
      question: 'What can JavaScript values be represented by and stored in?',
      answers: [
        { answer: 'Correspondences', correct: false },
        { answer: 'Fruits', correct: false },
        { answer: 'Buildings', correct: false },
        { answer: 'Variables', correct: true },
      ],
    },
    {
      question:
        'What label is commonly given to the automatic or implicit conversion of JavaScrpt values from one type to another?',
      answers: [
        { answer: 'Computation', correct: false },
        { answer: 'Constriction', correct: false },
        { answer: 'Compulsion', correct: false },
        { answer: 'Coercion ', correct: true },
      ],
    },
    {
      question: 'What kind of characters are JavaScript strings composed of?',
      answers: [
        { answer: 'SimpleText', correct: false },
        { answer: 'Query7', correct: false },
        { answer: 'AFG', correct: false },
        { answer: 'Unicode', correct: true },
      ],
    },
    {
      question:
        'What label is commonly given to JavaScript code that performs an action on a value(s), thereby producing a result?',
      answers: [
        { answer: 'Operative', correct: false },
        { answer: 'Orchestrator', correct: false },
        { answer: 'Operand', correct: false },
        { answer: 'Operator', correct: true },
      ],
    },
    {
      question:
        'What kind of JavaScript object represents the potential completion of an asychronous operation and the resulting value?',
      answers: [
        { answer: 'Excuse', correct: false },
        { answer: 'Wish', correct: false },
        { answer: 'Commitment', correct: false },
        { answer: 'Promise', correct: true },
      ],
    },
    {
      question:
        'What label is commonly given to the programming technique of repeatedly calling one or more JavaScript method(s) on an object, via a single line of code?',
      answers: [
        { answer: 'Multiplying', correct: false },
        { answer: 'Simulating', correct: false },
        { answer: 'Tokenizing', correct: false },
        { answer: 'Chaining', correct: true },
      ],
    },
    {
      question:
        'What kind of JavaScript function can return multiple values on demand?',
      answers: [
        { answer: 'Maker', correct: false },
        { answer: 'Formulator', correct: false },
        { answer: 'Mover', correct: false },
        { answer: 'Generator', correct: true },
      ],
    },
  ];
  function chooseQuestion() {
    return Math.floor(Math.random() * library.length);
  }
  const currentQuestion = library[chooseQuestion()];
  // Primary interface DIV.
  const primaryInterface = document.createElement('div');
  primaryInterface.classList.add('primaryInterface');
  display.appendChild(primaryInterface);
  // H3 title element for game.
  const g2H3Title = document.createElement('h3');
  g2H3Title.textContent = 'Multi-Choice Questions';
  primaryInterface.appendChild(g2H3Title);
  // Next question button.
  const gameTwoNextButton = document.createElement('button');
  gameTwoNextButton.textContent = 'Next';
  gameTwoNextButton.id = 'gameTwoNextButton';
  gameTwoNextButton.addEventListener('click', () => {
    makeGameTwo(arg0, arg1);
  });
  // Question text.
  const gameTwoQuestionTextP = document.createElement('p');
  gameTwoQuestionTextP.id = 'gameTwoQuestionTextP';
  gameTwoQuestionTextP.textContent = currentQuestion.question;
  primaryInterface.appendChild(gameTwoQuestionTextP);
  // Answers DIV.
  const answersDIV = document.createElement('div');
  answersDIV.id = 'answersDIV';
  primaryInterface.appendChild(answersDIV);
  // Different answers, organized in random order, to selected question.
  let randomizedAnswers = currentQuestion.answers.sort(randomize);
  for (let i = 0; i < 10; i += 1) {
    randomizedAnswers = randomizedAnswers.sort(randomize);
  }
  // Populating the app with the correct buttons and associated answers.
  const answerButtonArray = [];
  let answered = 0;
  for (let i = 0; i < randomizedAnswers.length; i += 1) {
    const tempAnswerButton = document.createElement('button');
    answerButtonArray.push(tempAnswerButton);
    tempAnswerButton.classList.add('multiChoiceAnswers');
    tempAnswerButton.textContent = randomizedAnswers[i].answer;
    answersDIV.appendChild(tempAnswerButton);
    // Giving each button an event listener for a click action.
    tempAnswerButton.addEventListener('click', function () {
      answered += 1;
      const retrievedMaster = localStorage.getItem('master');
      const retrievedMasterParsed = JSON.parse(retrievedMaster);
      for (let j = 0; j < randomizedAnswers.length; j += 1) {
        if (randomizedAnswers[j].correct) {
          answerButtonArray[j].classList.add('greenButton');
          answerButtonArray[j].style.color = 'lime';
        }
        if (!randomizedAnswers[j].correct && i === j && answered === 1) {
          this.style.color = 'darkgray';
          this.style.border = '1px solid darkgray';
        }
        if (randomizedAnswers[j].correct && i === j && answered === 1) {
          retrievedMasterParsed.gameTwo.totalCorrectGuesses += 1;
        }
      }
      if (answered === 1) {
        retrievedMasterParsed.gameTwo.totalGuesses += 1;
      }
      localStorage.setItem('master', JSON.stringify(retrievedMasterParsed));
      gameTwoNextButton.classList.add('greenButton');
    });
  }
  primaryInterface.appendChild(gameTwoNextButton);
  // Details button.
  const detailsGameTwo = document.createElement('button');
  detailsGameTwo.textContent = 'Details';
  detailsGameTwo.id = 'detailsGameTwo';
  primaryInterface.appendChild(detailsGameTwo);
  // Details pop-up.
  const gameTwoDetails = document.createElement('div');
  gameTwoDetails.id = 'gameTwoDetails';
  gameTwoDetails.textContent =
    'Select an answer from the multiple options available, to any given question posed, and see if your choice is correct.';
  // Paragraph element for the performance stats.
  const gameTwoStatsP = document.createElement('p');
  gameTwoStatsP.id = 'gameTwoStatsP';
  gameTwoDetails.appendChild(gameTwoStatsP);
  // Details pop-up close.
  const gameTwoDetailsClose = document.createElement('p');
  gameTwoDetailsClose.textContent = 'x';
  gameTwoDetailsClose.id = 'gameTwoDetailsClose';
  gameTwoDetails.appendChild(gameTwoDetailsClose);
  // Event listener for opening and populating the Details pop-up.
  detailsGameTwo.addEventListener('click', () => {
    display.appendChild(gameTwoDetails);
    const retrievedMaster = localStorage.getItem('master');
    const retrievedMasterParsed = JSON.parse(retrievedMaster);
    // Function for calculating the Correct Guess Rate.
    function correctGuessRate() {
      const temp =
        (retrievedMasterParsed.gameTwo.totalCorrectGuesses /
          retrievedMasterParsed.gameTwo.totalGuesses) *
        100;
      if (Number.isNaN(temp)) {
        return 0;
      }
      return temp;
    }
    gameTwoStatsP.textContent = `Total Guesses: ${
      retrievedMasterParsed.gameTwo.totalGuesses
    } and Correct Guess Rate: ${correctGuessRate().toFixed(2)}%`;
    // Event listener for closing the Details pop-up.
    gameTwoDetailsClose.addEventListener('click', () => {
      display.removeChild(gameTwoDetails);
    });
  });
}
