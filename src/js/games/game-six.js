function makeGameSix(arg0, arg1) {
  // Local storage assurance.
  makeMaster();
  // Changing certain CSS and HTML properties to accomodate the creation of a new game.
  golden(arg0);
  arg1.style.backgroundColor = 'gold';
  display.innerHTML = '';
  // Primary interface DIV.
  const primaryInterface = document.createElement('div');
  primaryInterface.classList.add('primaryInterface');
  display.appendChild(primaryInterface);
  // H3 title element for game.
  const g6H3Title = document.createElement('h3');
  g6H3Title.textContent = 'JavaScript Fact Finding';
  primaryInterface.appendChild(g6H3Title);
  // Next game button.
  const gameSixNextButton = document.createElement('button');
  gameSixNextButton.id = 'gameSixNextButton';
  gameSixNextButton.innerText = 'Next';
  gameSixNextButton.addEventListener('click', () => {
    makeGameSix(arg0, arg1);
  });
  primaryInterface.appendChild(gameSixNextButton);
  // Library of JavaScript facts.
  const library = [
    'JavaScript was released in 1995.',
    'Brendan Eich invented JavaScript while working at Netscape.',
    'JavaScript is a loosely typed programming language.',
    'JavaScript was referred to as "Mocha" by Netscape during its initial development.',
    'A JavaScript function is referred to as "recursive" when it calls itself.',
    'Developers who "debug" their code, are looking for errors within and improvements for it.',
    'Any JavaScript value that is considered true can be referred to as "truthy".',
    'Any JavaScript value that is considered false can be referred to as "falsy".',
    'JavaScript does not include an Integer type.',
    'Repeatedly calling one or more JavaScript method(s) on an object via a single line of code is referred to as "chaining".',
    'JavaScript was originally inspired by the Java, Scheme and Self programming languages.',
    'Scope explicitly manages variable accessibility in JavaScript.',
    'JavaScript was initially in development for ten days.',
    'The outermost scope in JavaScript is commonly referred to as "Global".',
    'Oracle currently owns the trademark for JavaScript.',
    'JavaScript strings are composed of Unicode characters.',
    'JavaScript relies on a single processing thread.',
    'JavaScript values can be stored in and represented by variables.',
    'JavaScript was originally invented for both the server and browser.',
    'ECMAScript is the standard which JavaScript is based on.',
    'JavaScript is a high-level programming language.',
    'Asynchronous programming allows for multiple things to happen at the same time.',
    'Google\'s JavaScript engine is known as "V8".',
    'In JavaScript, generator functions can return multiple values on demand.',
    'ECMAScript 6 was released in 2015.',
    'A promise is a JavaScript object that represents the potential completion of an asychronous operation and the resulting value.',
    'JavaScript functions that are object properties are commonly referred to as "methods".',
    'Modern browsers provide prompts, alerts and confirmations as means for interacting with users.',
    'A distinct piece of a JavaScript program is commonly referred to as a "module".',
    'Mozilla\'s JavaScript engine is known as "SpiderMonkey".',
    'JavaScript uses prototypical inheritance.',
    'The label of "coercion" is commonly given to the automatic or implicit conversion of JavaScrpt values from one type to another.',
    'An instruction to perform a specific action, in JavaScript, is commonly referred to as a "statement".',
    'JavaScript includes unary, binary and ternary operators.',
    'A function that is passed as an argument of another function is commonly referred to as a "callback".',
  ];
  // The play field.
  const playField = document.createElement('div');
  playField.id = 'playField';
  primaryInterface.appendChild(playField);
  // Support functions.
  function rN() {
    return Math.floor(Math.random() * 100);
  }
  function libraryChoose() {
    return Math.floor(Math.random() * library.length);
  }
  function movesPerGame(x) {
    const temp = x.gameSix.totalMoves / x.gameSix.totalWins;
    if (Number.isNaN(temp)) {
      return 0;
    }
    return temp;
  }
  // Game variables.
  let zInd = 100000;
  const clickedOn = [];
  let isActive = true;
  const factsChosen = [];
  // Creating the ten different interactive circles.
  for (let i = 0; i < 10; i += 1) {
    clickedOn.push({
      id: `circle${i}`,
      clicked: 0,
    });
    const temp = document.createElement('div');
    temp.classList.add('gameSixCircles');
    temp.id = `circle${i}`;
    temp.style.width = '50px';
    temp.style.height = '50px';
    temp.style.left = `${rN()}%`;
    temp.style.top = `${rN()}%`;
    playField.appendChild(temp);
    // Correcting any circle which was initially positioned outside of the play field.
    while (
      temp.offsetLeft + 50 > playField.offsetWidth - 5 ||
      temp.offsetLeft < 5
    ) {
      temp.style.left = `${rN()}%`;
    }
    while (
      temp.offsetTop + 50 > playField.offsetHeight - 5 ||
      temp.offsetTop < 5
    ) {
      temp.style.top = `${rN()}%`;
    }
    // Choosing a random fact text and generating the relevant paragraph element.
    let factChooser = libraryChoose();
    while (factsChosen.some((f) => f === factChooser)) {
      factChooser = libraryChoose();
    }
    factsChosen.push(factChooser);
    const fact = library[factChooser];
    const factP = document.createElement('p');
    factP.innerText = fact;
    factP.classList.add('factP');
    playField.appendChild(factP);
    // Movement variables.
    let positioningExtra = [0, 0];
    let mouseIsDown = false;
    let mouseIsHovering = false;
    // Movement functions.
    function onMouseOver() {
      if (isActive) {
        this.style.cursor = 'grab';
        this.style.background = 'rgba(255,223,0,0.67)';
        mouseIsHovering = true;
      } else {
        this.style.cursor = 'default';
        this.style.background = 'rgba(255,255,255,0.67)';
      }
    }
    function onMouseOut() {
      this.style.background = 'rgba(255,255,255,0.67)';
      mouseIsHovering = false;
    }
    function onMouseDown(e) {
      if (e.button === 0) {
        // Setting the initial values for an active circle.
        if (isActive) {
          if (mouseIsHovering) {
            temp.style.cursor = 'grabbing';
          }
          mouseIsDown = true;
          factP.style.display = 'block';
          const x = this.offsetLeft - e.clientX;
          const y = this.offsetTop - e.clientY;
          positioningExtra = [x, y];
          this.style.zIndex = `${(zInd += 1000)}`;
          this.style.backgroundColor = 'rgba(255,223,0,0.67)';
        }
      }
    }
    function onMouseMove(e) {
      e.preventDefault();
      if (e.button === 0) {
        // Making sure the background remains gold while the mouse is hovering over it.
        if (isActive && mouseIsHovering) {
          const playFieldObj = playField.getBoundingClientRect();
          if (
            temp.offsetLeft + 50 < playFieldObj.width &&
            temp.offsetLeft > 0
          ) {
            temp.style.backgroundColor = 'rgba(255,223,0,0.67)';
          }
          if (temp.offsetTop + 50 < playFieldObj.height && temp.offsetTop > 0) {
            temp.style.backgroundColor = 'rgba(255,223,0,0.67)';
          }
        }
        // Conditions for a loss are when a circle is dragged to any of the play field's edges.
        if (mouseIsDown && isActive) {
          const playFieldObj = playField.getBoundingClientRect();
          if (
            temp.offsetLeft + 50 < playFieldObj.width &&
            temp.offsetLeft > 0
          ) {
            const translation =
              (e.clientX + positioningExtra[0]) / playFieldObj.width;
            temp.style.left = `${translation * 100}%`;
            temp.style.cursor = 'grabbing';
          } else {
            playField.style.backgroundColor = 'lightgray';
            playField.style.border = '1px solid darkgray';
            playField.innerHTML = 'Please Try Again';
            gameSixNextButton.style.border = '1px solid lime';
            isActive = false;
          }
          if (temp.offsetTop + 50 < playFieldObj.height && temp.offsetTop > 0) {
            const translation =
              (e.clientY + positioningExtra[1]) / playFieldObj.height;
            temp.style.top = `${translation * 100}%`;
            temp.style.cursor = 'grabbing';
          } else {
            playField.style.backgroundColor = 'lightgray';
            playField.style.border = '1px solid darkgray';
            playField.innerHTML = 'Please Try Again';
            gameSixNextButton.style.border = '1px solid lime';
            isActive = false;
          }
        }
      }
    }
    function onMouseUp(e) {
      if (e.button === 0) {
        mouseIsDown = false;
        this.style.border = 'darkgray';
        this.style.cursor = 'grab';
        factP.style.display = 'none';
        if (!mouseIsHovering) {
          this.style.backgroundColor = 'rgba(255,255,255,0.67)';
          this.style.cursor = 'default';
        }
        // Adding a click count for the relevant circle.
        clickedOn.forEach((c) => {
          if (c.id === temp.id) {
            c.clicked += 1;
          }
        });
        // Checking to see if each circle has been clicked on.
        if (clickedOn.every((c) => c.clicked >= 1)) {
          isActive = false;
          const finalClickCount = clickedOn.reduce((total, c) => {
            total += c.clicked;
            return total;
          }, 0);
          // Changing CSS properties to indicate a win.
          playField.style.border = '1px solid lime';
          gameSixNextButton.style.border = '1px solid lime';
          // Accessing and updating stats.
          const retrievedMaster = localStorage.getItem('master');
          const retrievedMasterParsed = JSON.parse(retrievedMaster);
          retrievedMasterParsed.gameSix.totalWins += 1;
          retrievedMasterParsed.gameSix.totalMoves += finalClickCount;
          localStorage.setItem('master', JSON.stringify(retrievedMasterParsed));
        }
      }
    }
    // Movement event listeners.
    temp.addEventListener('mouseover', onMouseOver);
    temp.addEventListener('mouseout', onMouseOut);
    temp.addEventListener('mousedown', onMouseDown);
    temp.addEventListener('mouseup', onMouseUp);
    playField.addEventListener('mousemove', onMouseMove);
  }
  // Details button.
  const detailsGameSix = document.createElement('button');
  detailsGameSix.textContent = 'Details';
  detailsGameSix.id = 'detailsGameSix';
  primaryInterface.appendChild(detailsGameSix);
  // Details pop-up.
  const gameSixDetails = document.createElement('div');
  gameSixDetails.id = 'gameSixDetails';
  gameSixDetails.textContent =
    'Uncover the JavaScript facts by clicking on and moving different circles; until all have been interacted with. But beware of colliding circles against the edges.';
  // Paragraph element for the performance stats.
  const gameSixStatsP = document.createElement('p');
  gameSixStatsP.id = 'gameSixStatsP';
  gameSixDetails.appendChild(gameSixStatsP);
  // Details pop-up close.
  const gameSixDetailsClose = document.createElement('p');
  gameSixDetailsClose.textContent = 'x';
  gameSixDetailsClose.id = 'gameSixDetailsClose';
  gameSixDetails.appendChild(gameSixDetailsClose);
  // Event listener for opening and populating the Details pop-up.
  detailsGameSix.addEventListener('click', () => {
    gameSixDetails.style.zIndex = `${zInd + 10000000}`;
    display.appendChild(gameSixDetails);
    // Accessing stats.
    const retrievedMaster = localStorage.getItem('master');
    const retrievedMasterParsed = JSON.parse(retrievedMaster);
    // Displaying current stats.
    gameSixStatsP.textContent = `Total Wins: ${
      retrievedMasterParsed.gameSix.totalWins
    } and Average Moves Per Game: ${movesPerGame(retrievedMasterParsed).toFixed(
      2
    )}`;
    // Event listener for closing the Details pop-up.
    gameSixDetailsClose.addEventListener('click', () => {
      display.removeChild(gameSixDetails);
    });
  });
}
