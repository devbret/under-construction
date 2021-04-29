function makeGameThree(arg0, arg1) {
  // Local storage assurance.
  makeMaster();
  // Changing certain CSS and HTML properties to accomodate the creation of a new game.
  golden(arg0);
  const a1 = arg1;
  a1.style.backgroundColor = 'gold';
  display.innerHTML = '';
  // Library of challenges and solutions.
  const library = [
    {
      challenge: 'con____.log("Hello, World!");',
      clues: [
        'cons___.log("Hello, World!");',
        'con_o__.log("Hello, World!");',
        'con__l_.log("Hello, World!");',
        'con___e.log("Hello, World!");',
      ],
      solutions: ['sole'],
      complete: 'console.log("Hello, World!");',
    },
    {
      challenge: 'console.___("Hello, World!");',
      clues: [
        'console.l__("Hello, World!");',
        'console._o_("Hello, World!");',
        'console.__g("Hello, World!");',
      ],
      solutions: ['log'],
      complete: 'console.log("Hello, World!");',
    },
    {
      challenge: '() __ "Hello, World!";',
      clues: ['() =_ "Hello, World!";', '() _> "Hello, World!";'],
      solutions: ['=>'],
      complete: '() => "Hello, World";',
    },
    {
      challenge: 'body._____HTML = "";',
      clues: [
        'body.i____HTML = "";',
        'body._n___HTML = "";',
        'body.__n__HTML = "";',
        'body.___e_HTML = "";',
        'body.____rHTML = "";',
      ],
      solutions: ['inner'],
      complete: 'body.innerHTML = "";',
    },
    {
      challenge: 'localStorage.get____("master");',
      clues: [
        'localStorage.getI___("master");',
        'localStorage.get_t__("master");',
        'localStorage.get__e_("master");',
        'localStorage.get___m("master");',
      ],
      solutions: ['Item'],
      complete: 'localStorage.getItem("master");',
    },
    {
      challenge: '_____Storage.getItem("master");',
      clues: [
        'l____Storage.getItem("master");',
        '_o___Storage.getItem("master");',
        '__c__Storage.getItem("master");',
        '___a_Storage.getItem("master");',
        '____lStorage.getItem("master");',
      ],
      solutions: ['local'],
      complete: 'localStorage.getItem("master");',
    },
    {
      challenge: 'localStorage.set____("m", myObj);',
      clues: [
        'localStorage.setI___("m", myObj);',
        'localStorage.set_t__("m", myObj);',
        'localStorage.set__e_("m", myObj);',
        'localStorage.set___m("m", myObj);',
      ],
      solutions: ['Item'],
      complete: 'localStorage.setItem("m", myObj);',
    },
    {
      challenge: 'elem.class____.add("myClass");',
      clues: [
        'elem.classL___.add("myClass");',
        'elem.class_i__.add("myClass");',
        'elem.class__s_.add("myClass");',
        'elem.class___t.add("myClass");',
      ],
      solutions: ['List'],
      complete: 'elem.classList.add("myClass");',
    },
    {
      challenge: '________.createElement("div");',
      clues: [
        'd_______.createElement("div");',
        '_o______.createElement("div");',
        '__c_____.createElement("div");',
        '___u____.createElement("div");',
        '____m___.createElement("div");',
        '_____e__.createElement("div");',
        '______n_.createElement("div");',
        '_______t.createElement("div");',
      ],
      solutions: ['document'],
      complete: 'document.createElement("div");',
    },
    {
      challenge: '_____ num = 75;',
      clues: [
        'c____ num = 75;',
        '_o___ num = 75;',
        '__n__ num = 75;',
        '___s_ num = 75;',
        '____t num = 75;',
      ],
      solutions: ['const'],
      complete: 'const num = 75;',
    },
    {
      challenge: 'isN__(variable);',
      clues: ['isNa_(variable);', 'isN_N(variable);'],
      solutions: ['aN'],
      complete: 'isNaN(variable)',
    },
    {
      challenge: '____.random();',
      clues: [
        'M___.random();',
        '_a__.random();',
        '__t_.random();',
        '___h.random();',
      ],
      solutions: ['Math'],
      complete: 'Math.random();',
    },
    {
      challenge: '[1,2,3,4].conc__([5,6,7,8]);',
      clues: ['[1,2,3,4].conca_([5,6,7,8]);', '[1,2,3,4].conc_t([5,6,7,8]);'],
      solutions: ['at'],
      complete: '[1,2,3,4].concat([5,6,7,8]);',
    },
    {
      challenge: '[1,2,3,4].____Within(2, 0);',
      clues: [
        '[1,2,3,4].c___Within(2, 0);',
        '[1,2,3,4]._o__Within(2, 0);',
        '[1,2,3,4].__p_Within(2, 0);',
        '[1,2,3,4].___yWithin(2, 0);',
      ],
      solutions: ['copy'],
      complete: '[1,2,3,4].copyWithin(2, 0);',
    },
    {
      challenge: '[1,2,3,4].ever_(n => n !== 2);',
      clues: ['[1,2,3,4].every(n => n !== 2);'],
      solutions: ['y'],
      complete: '[1,2,3,4].every(n => n !== 2);',
    },
    {
      challenge: '[1,2,3,4].__ery(n => n !== 2);',
      clues: [
        '[1,2,3,4].e_ery(n => n !== 2);',
        '[1,2,3,4]._very(n => n !== 2);',
      ],
      solutions: ['ev'],
      complete: '[1,2,3,4].every(n => n !== 2);',
    },
    {
      challenge: '[1,2,3,4].fi____dex(n => n === 3);',
      clues: [
        '[1,2,3,4].fin___dex(n => n === 3);',
        '[1,2,3,4].fi_d__dex(n => n === 3);',
        '[1,2,3,4].fi__I_dex(n => n === 3);',
        '[1,2,3,4].fi___ndex(n => n === 3);',
      ],
      solutions: ['ndIn'],
      complete: '[1,2,3,4].findIndex(n => n === 3);',
    },
    {
      challenge: '[1,2,3,4].___Each(n => n * 2);',
      clues: [
        '[1,2,3,4].f__Each(n => n * 2);',
        '[1,2,3,4]._o_Each(n => n * 2);',
        '[1,2,3,4].__rEach(n => n * 2);',
      ],
      solutions: ['for'],
      complete: '[1,2,3,4].forEach(n => n * 2;',
    },
    {
      challenge: '[1,2,3,4].index__(2);',
      clues: ['[1,2,3,4].indexO_(2);', '[1,2,3,4].index_f(2);'],
      solutions: ['Of'],
      complete: '[1,2,3,4].indexOf(2);',
    },
    {
      challenge: 'Array.is___ay([1,2,3,4]);',
      clues: [
        'Array.isA__ay([1,2,3,4]);',
        'Array.is_r_ay([1,2,3,4]);',
        'Array.is__ray([1,2,3,4]);',
      ],
      solutions: ['Arr'],
      complete: 'Array.isArray([1,2,3,4]);',
    },
    {
      challenge: '[1,2,3,4].____IndexOf(4);',
      clues: [
        '[1,2,3,4].l___IndexOf(4);',
        '[1,2,3,4]._a__IndexOf(4);',
        '[1,2,3,4].__s_IndexOf();',
        '[1,2,3,4].___tIndexOf(4);',
      ],
      solutions: ['last'],
      complete: '[1,2,3,4].lastIndexOf(4);',
    },
    {
      challenge: 'JSON.str____fy(myObj);',
      clues: [
        'JSON.stri___fy(myObj);',
        'JSON.str_n__fy(myObj);',
        'JSON.str__g_fy(myObj);',
        'JSON.str___ify(myObj);',
      ],
      solutions: ['ingi'],
      complete: 'JSON.stringify(myObj);',
    },
    {
      challenge: 'Math.a__(-43);',
      clues: ['Math.ab_(-43);', 'Math.a_s(-43);'],
      solutions: ['bs'],
      complete: 'Math.abs(-43);',
    },
    {
      challenge: 'Math.c___(23.55);',
      clues: ['Math.ce__(23.55);', 'Math.c_i_(23.55);', 'Math.c__l(23.55);'],
      solutions: ['eil'],
      complete: 'Math.ceil(23.55);',
    },
    {
      challenge: 'Math.__p(50);',
      clues: ['Math.e_p(50);', 'Math._xp(50);'],
      solutions: ['ex'],
      complete: 'Math.exp(50);',
    },
    {
      challenge: 'Math.f____(23.55);',
      clues: [
        'Math.fl___(23.55);',
        'Math.f_o__(23.55);',
        'Math.f__o_(23.55);',
        'Math.f___r(23.55);',
      ],
      solutions: ['loor'],
      complete: 'Math.floor(23.55);',
    },
    {
      challenge: 'Math.r____(23.55);',
      clues: [
        'Math.ro___(23.55);',
        'Math.r_u__(23.55);',
        'Math.r__n_(23.55);',
        'Math.r___d(23.55);',
      ],
      solutions: ['ound'],
      complete: 'Math.round(23.55);',
    },
    {
      challenge: '"Hello, World!".____At(2);',
      clues: [
        '"Hello, World!".c___At(2);',
        '"Hello, World!"._h__At(2);',
        '"Hello, World!".__a_At(2);',
        '"Hello, World!".___rAt(2);',
      ],
      solutions: ['char'],
      complete: '"Hello, World!".charAt(2);',
    },
    {
      challenge: '"Hello, World!".char_____t(2);',
      clues: [
        '"Hello, World!".charC____t(2);',
        '"Hello, World!".char_o___t(2);',
        '"Hello, World!".char__d__t(2);',
        '"Hello, World!".char___e_t(2);',
        '"Hello, World!".char____At(2);',
      ],
      solutions: ['CodeA'],
      complete: '"Hello, World!".charCodeAt(2);',
    },
    {
      challenge: '"Hello, World!".___cat(myStr);',
      clues: [
        '"Hello, World!".c__cat(myStr);',
        '"Hello, World!"._o_cat(myStr);',
        '"Hello, World!".__ncat(myStr);',
      ],
      solutions: ['con'],
      complete: '"Hello, World!".concat(myStr);',
    },
    {
      challenge: '"Hello, World!".r__eat(3);',
      clues: ['"Hello, World!".re_eat(3);', '"Hello, World!".r_peat(3);'],
      solutions: ['ep'],
      complete: '"Hello, World!".repeat(3);',
    },
    {
      challenge: '"Hello, World!".toL____Case();',
      clues: [
        '"Hello, World!".toLo___Case();',
        '"Hello, World!".toL_w__Case();',
        '"Hello, World!".toL__e_Case();',
        '"Hello, World!".toL___rCase();',
      ],
      solutions: ['ower'],
      complete: '"Hello, World!".toLowerCase();',
    },
    {
      challenge: 'myNum.toSt____();',
      clues: [
        'myNum.toStr___();',
        'myNum.toSt_i__();',
        'myNum.toSt__n_();',
        'myNum.toSt___g();',
      ],
      solutions: ['ring'],
      complete: 'myNum.toString();',
    },
    {
      challenge: 'myNum.t_____nential();',
      clues: [
        'myNum.to____nential();',
        'myNum.t_E___nential();',
        'myNum.t__x__nential();',
        'myNum.t___p_nential();',
        'myNum.t____onential();',
      ],
      solutions: ['oExpo'],
      complete: 'myNum.toExponential();',
    },
    {
      challenge: 'myNum.toF____(3);',
      clues: [
        'myNum.toFi___(3);',
        'myNum.toF_x__(3);',
        'myNum.toF__e_(3);',
        'myNum.toF___d(3);',
      ],
      solutions: ['ixed'],
      complete: 'myNum.toFixed(3);',
    },
    {
      challenge: 'myNum._____cision(5);',
      clues: [
        'myNum.t____cision(5);',
        'myNum._o___cision(5);',
        'myNum.__P__cision(5);',
        'myNum.___r_cision(5);',
        'myNum.____ecision(5);',
      ],
      solutions: ['toPre'],
      complete: 'myNum.toPrecision(5);',
    },
    {
      challenge: 'myNum.value__();',
      clues: ['myNum.valueO_();', 'myNum.value_f();'],
      solutions: ['Of'],
      complete: 'myNum.valueOf();',
    },
    {
      challenge: 'l__ num = 40;',
      clues: ['le_ num = 40;', 'l_t num = 40;'],
      solutions: ['et'],
      complete: 'let num = 40;',
    },
    {
      challenge: 'v_r num = 40;',
      clues: ['var num = 40;'],
      solutions: ['a'],
      complete: 'var num = 40;',
    },
    {
      challenge: '50 >_ 25;',
      clues: ['50 >= 25;'],
      solutions: ['='],
      complete: '50 >= 25;',
    },
    {
      challenge: '25 <_ 50;',
      clues: ['25 <= 50;'],
      solutions: ['='],
      complete: '25 <= 50;',
    },
    {
      challenge: '50 ==_ 50;',
      clues: ['50 === 50;'],
      solutions: ['='],
      complete: '50 === 50;',
    },
    {
      challenge: '75 !=_ 50;',
      clues: ['75 !== 50;'],
      solutions: ['='],
      complete: '75 !== 50;',
    },
    {
      challenge: 'ty___f 50;',
      clues: ['typ__f 50;', 'ty_e_f 50;', 'ty__of 50;'],
      solutions: ['peo'],
      complete: 'typeof 50;',
    },
    {
      challenge: 'myNum *_ 50;',
      clues: ['myNum *= 50;'],
      solutions: ['='],
      complete: 'myNum *= 50;',
    },
    {
      challenge: 'myNum = a |_ 50;',
      clues: ['myNum = a || 50;'],
      solutions: ['|'],
      complete: 'myNum = a || 50;',
    },
    {
      challenge: 'myNum-_;',
      clues: ['myNum--;'],
      solutions: ['-'],
      complete: 'myNum--;',
    },
    {
      challenge: 'myNum+_;',
      clues: ['myNum++;'],
      solutions: ['+'],
      complete: 'myNum++;',
    },
    {
      challenge: 'typeof myNum === "und___ned";',
      clues: [
        'typeof myNum === "unde__ned";',
        'typeof myNum === "und_f_ned";',
        'typeof myNum === "und__ined";',
      ],
      solutions: ['efi'],
      complete: 'typeof myNum === "undefined";',
    },
    {
      challenge: 'typeof n__l";',
      clues: ['typeof nu_l";', 'typeof n_ll";'],
      solutions: ['ul'],
      complete: 'typeof null";',
    },
  ];
  function chooseChallenge() {
    return Math.floor(Math.random() * library.length);
  }
  const currentChallenge = library[chooseChallenge()];
  // Primary interface DIV.
  const primaryInterface = document.createElement('div');
  primaryInterface.classList.add('primaryInterface');
  display.appendChild(primaryInterface);
  // H3 title element for game.
  const g3H3Title = document.createElement('h3');
  g3H3Title.textContent = 'Code Completion';
  primaryInterface.appendChild(g3H3Title);
  // Challenge text.
  const gameThreeChallengeTextP = document.createElement('p');
  gameThreeChallengeTextP.id = 'gameThreeChallengeTextP';
  gameThreeChallengeTextP.textContent = currentChallenge.challenge;
  primaryInterface.appendChild(gameThreeChallengeTextP);
  // Challenge solution input.
  const gameThreeSolutionInput = document.createElement('input');
  gameThreeSolutionInput.classList.add('userInput');
  gameThreeSolutionInput.id = 'gameThreeSolutionInput';
  gameThreeSolutionInput.placeholder = 'Enter missing JavaScript code here';
  primaryInterface.appendChild(gameThreeSolutionInput);
  // Button DIV.
  const gameThreeButtonDIV = document.createElement('div');
  gameThreeButtonDIV.id = 'gameThreeButtonDIV';
  primaryInterface.appendChild(gameThreeButtonDIV);
  const gameThreeClueButton = document.createElement('button');
  // Solution submit button.
  const gameThreeSubmitButton = document.createElement('button');
  gameThreeSubmitButton.textContent = 'Submit';
  gameThreeSubmitButton.id = 'gameThreeSubmitButton';
  gameThreeButtonDIV.appendChild(gameThreeSubmitButton);
  let correctAnswers = 0;
  let totalGuesses = 0;
  let clueClicks = 0;
  const incorrectGuessesArray = [];
  function determineCorrect() {
    const preData = gameThreeSolutionInput.value;
    const data = preData
      .split('')
      .reduce((total, d) => {
        if (d !== ' ') {
          total.push(d);
        }
        return total;
      }, [])
      .join('');
    if (
      correctAnswers < 1 &&
      data.length > 0 &&
      incorrectGuessesArray.every((g) => g !== data)
    ) {
      totalGuesses += 1;
      const retrievedMaster = localStorage.getItem('master');
      const retrievedMasterParsed = JSON.parse(retrievedMaster);
      if (currentChallenge.solutions.some((s) => s === data)) {
        gameThreeTotalGuesses.innerText = `Total Guesses: ${totalGuesses}`;
        correctAnswers += 1;
        gameThreeChallengeTextP.textContent = currentChallenge.complete;
        gameThreeChallengeTextP.style.borderBottom = '1px solid lime';
        gameThreeNextButton.classList.add('greenButton');
        retrievedMasterParsed.gameThree.totalCorrectGuesses += 1;
        retrievedMasterParsed.gameThree.totalGuesses += totalGuesses;
        retrievedMasterParsed.gameThree.clueClicks += clueClicks;
        localStorage.setItem('master', JSON.stringify(retrievedMasterParsed));
      } else {
        gameThreeSolutionInput.value = '';
        incorrectGuessesArray.push(data);
        gameThreeIncorrectGuesses.innerText = `Incorrect Guesses: ${incorrectGuessesArray.join(
          ', '
        )}`;
        gameThreeTotalGuesses.innerText = `Total Guesses: ${totalGuesses}`;
      }
    }
  }
  gameThreeSubmitButton.addEventListener('click', determineCorrect);
  // Next game button.
  const gameThreeNextButton = document.createElement('button');
  gameThreeNextButton.id = 'gameThreeNextButton';
  gameThreeNextButton.innerText = 'Next';
  primaryInterface.appendChild(gameThreeNextButton);
  gameThreeNextButton.addEventListener('click', () => {
    makeGameThree(arg0, arg1);
  });
  // Clue button.
  let guessesRemaining = currentChallenge.clues.length;
  gameThreeClueButton.textContent = `Clue (${guessesRemaining})`;
  gameThreeClueButton.id = 'gameThreeClueButton';
  gameThreeButtonDIV.appendChild(gameThreeClueButton);
  const receivedClues = [];
  gameThreeClueButton.addEventListener('mousedown', (e) => {
    if (guessesRemaining > 0) {
      let rN = Math.floor(Math.random() * currentChallenge.clues.length);
      while (receivedClues[rN] === 1) {
        rN = Math.floor(Math.random() * currentChallenge.clues.length);
      }
      if (correctAnswers < 1 && e.buttons === 1) {
        clueClicks += 1;
        guessesRemaining -= 1;
        const clue = currentChallenge.clues[rN];
        gameThreeChallengeTextP.textContent = clue;
        receivedClues[rN] = 1;
        gameThreeClueButton.textContent = `Clue (${guessesRemaining})`;
        gameThreeClueButton.style.borderColor = 'magenta';
      }
    }
    if (guessesRemaining === 0) {
      gameThreeClueButton.style.color = 'darkgray';
    }
  });
  gameThreeClueButton.addEventListener('mouseup', () => {
    if (correctAnswers < 1) {
      gameThreeChallengeTextP.textContent = currentChallenge.challenge;
      gameThreeClueButton.style.borderColor = 'black';
      gameThreeClueButton.style.color = 'black';
    }
    if (guessesRemaining === 0) {
      gameThreeClueButton.style.color = 'darkgray';
    }
  });
  primaryInterface.addEventListener('mouseup', () => {
    if (correctAnswers < 1) {
      gameThreeChallengeTextP.textContent = currentChallenge.challenge;
      gameThreeClueButton.style.borderColor = 'black';
      gameThreeClueButton.style.color = 'black';
    }
    if (guessesRemaining === 0) {
      gameThreeClueButton.style.color = 'darkgray';
    }
  });
  // Incorrect guesses paragraph element.
  const gameThreeIncorrectGuesses = document.createElement('p');
  gameThreeIncorrectGuesses.id = 'gameThreeIncorrectGuesses';
  gameThreeIncorrectGuesses.textContent = 'Incorrect Guesses: ';
  primaryInterface.appendChild(gameThreeIncorrectGuesses);
  // Total guesses paragraph element.
  const gameThreeTotalGuesses = document.createElement('p');
  gameThreeTotalGuesses.id = 'gameThreeTotalGuesses';
  gameThreeTotalGuesses.textContent = 'Total Guesses: 0';
  primaryInterface.appendChild(gameThreeTotalGuesses);
  // Details button.
  const detailsGameThree = document.createElement('button');
  detailsGameThree.textContent = 'Details';
  detailsGameThree.id = 'detailsGameThree';
  primaryInterface.appendChild(detailsGameThree);
  // Details pop-up.
  const gameThreeDetails = document.createElement('div');
  gameThreeDetails.id = 'gameThreeDetails';
  gameThreeDetails.textContent =
    "Enter a case-sensitive solution for the missing JavaScript code represented by underscores. Or click and hold Clue for a hint. Then press Submit to see if you're correct.";
  // Paragraph element for the performance stats.
  const gameThreeStatsP = document.createElement('p');
  gameThreeStatsP.id = 'gameThreeStatsP';
  gameThreeDetails.appendChild(gameThreeStatsP);
  // Details pop-up close.
  const gameThreeDetailsClose = document.createElement('p');
  gameThreeDetailsClose.textContent = 'x';
  gameThreeDetailsClose.id = 'gameThreeDetailsClose';
  gameThreeDetails.appendChild(gameThreeDetailsClose);
  // Event listener for opening and populating the Details pop-up.
  detailsGameThree.addEventListener('click', () => {
    display.appendChild(gameThreeDetails);
    const retrievedMaster = localStorage.getItem('master');
    const retrievedMasterParsed = JSON.parse(retrievedMaster);
    // Function for calculating the Correct Guess Rate.
    function correctGuessRate() {
      const temp =
        (retrievedMasterParsed.gameThree.totalCorrectGuesses /
          retrievedMasterParsed.gameThree.totalGuesses) *
        100;
      if (Number.isNaN(temp)) {
        return 0;
      }
      return temp;
    }
    gameThreeStatsP.textContent = `Total Guesses: ${
      retrievedMasterParsed.gameThree.totalGuesses
    }, Total Clues Given: ${
      retrievedMasterParsed.gameThree.clueClicks
    } and Correct Guess Rate: ${correctGuessRate().toFixed(2)}%`;
    // Event listener for closing the Details pop-up.
    gameThreeDetailsClose.addEventListener('click', () => {
      display.removeChild(gameThreeDetails);
    });
  });
}
