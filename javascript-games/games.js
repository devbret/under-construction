function gamesGo(){
    //////////Main program variables.
    const display = document.querySelector("#display");
    const gameArray = document.querySelectorAll(".game");
    const g1 = document.querySelector("#g1");
    const g2 = document.querySelector("#g2");
    const g3 = document.querySelector("#g3");
    const g4 = document.querySelector("#g4");
    const g5 = document.querySelector("#g5");
    const g6 = document.querySelector("#g6");
    const g7 = document.querySelector("#g7");
    //////////Support functions.
    function changeToGold() {
      this.style.backgroundColor = `gold`;
    }
    function changeToWhite() {
      this.style.backgroundColor = `white`;
    }
    function makeMaster() {
      if (localStorage.getItem("master") === null) {
        const masterTemplate = {
            gameOne:{
                wins:0,
                totalGuesses:0,
                totalIncorrectGuesses:0
            },
            gameTwo:{
                totalGuesses:0,
                totalCorrectGuesses:0
            },
            gameThree:{
                totalGuesses:0,
                totalCorrectGuesses:0,
                clueClicks:0
            },
            gameFour:{
                totalWins:0,
                totalGuesses:0
            },
            gameFive:{
                totalWins:0,
                totalGuesses:0
            },
            gameSix:{
                totalWins:0,
                totalMoves:0
            },
            gameSeven:{
                totalWins:0,
                totalTime:0,
                totalInputs:0
            }
        };
        localStorage.setItem("master", JSON.stringify(masterTemplate));
      }
    }
    function golden(e){
        for (let i = 0; i < gameArray.length; i++) {
            gameArray[i].style.backgroundColor = `white`;
            gameArray[i].removeEventListener("mouseover",changeToGold);
            gameArray[i].removeEventListener("mouseout",changeToWhite);
            if (i !== e) {
                gameArray[i].addEventListener("mouseover",changeToGold);
                gameArray[i].addEventListener("mouseout",changeToWhite);   
            }
        }
    }
    function randomize(){
        let rN = Math.random();
        if (rN <= .33) {
            return 1;
        } else if (rN >= .67) {
            return -1;
        } else {
            return 0;
        }
    }
    //////////The first JavaScript learning game; word guessing.
    function makeGameOne(arg0,arg1) {
        //Local storage assurance.
        makeMaster();
        //Changing certain CSS and HTML properties to accomodate the creation of a new game.
        golden(arg0);
        arg1.style.backgroundColor = `gold`;
        display.innerHTML = ``;
        //Library of words to be randomly chosen from.
        const library = [
            "prototype",
            "class",
            "invoked",
            "function",
            "scope",
            "closure",
            "module",
            "hoisting",
            "currying",
            "memoization",
            "method",
            "polymorphism",
            "asynchronous",
            "callback",
            "promise",
            "javascript",
            "developer",
            "console",
            "code",
            "variable",
            "type",
            "data",
            "conversion",
            "comparison",
            "conditional",
            "operator",
            "loop",
            "expression",
            "function",
            "browser",
            "debugging",
            "comment",
            "polyfill",
            "object",
            "constructor",
            "chaining",
            "primitive",
            "array",
            "number",
            "iterable",
            "destructuring",
            "json",
            "recursion",
            "stack",
            "parameter",
            "syntax",
            "global",
            "binding",
            "getter",
            "setter",
            "inheritance",
            "property",
            "static",
            "mixin",
            "error",
            "handling",
            "api",
            "generator",
            "export",
            "import",
            "dynamic",
            "proxy",
            "reference",
            "dom",
            "node",
            "attribute",
            "event",
            "bubbling",
            "input",
            "value",
            "assignment",
            "spread",
            "rest",
            "equality",
            "functional",
            "programming",
            "development",
            "javascript",
            "html",
            "css",
            "hosting",
            "internet"
        ];
        //Randomly selecting one of the words from the library.
        function generateWord() {
            return Math.floor(Math.random() * library.length);
        } 
        const word = library[generateWord()];
        //Primary interface DIV.
        const primaryInterface = document.createElement("div");
        primaryInterface.classList.add("primaryInterface");
        display.appendChild(primaryInterface);
        //H3 title element for game.
        const g1H3Title = document.createElement("h3");
        g1H3Title.textContent = `Word Completion`;
        primaryInterface.appendChild(g1H3Title);
        //Paragraph element for displaying answer, as it is revealed.
        const answerRevealedP = document.createElement("p");
        answerRevealedP.id = `answerRevealedP`;
        for (let i = 0; i < word.length; i++) {
            const temp = document.createElement("span");
            temp.textContent = `_`;
            answerRevealedP.appendChild(temp);
        }
        primaryInterface.appendChild(answerRevealedP);
        //User input field.
        const userInput = document.createElement("input");
        userInput.classList.add("userInput");
        userInput.placeholder = `Enter letter guess here`;
        primaryInterface.appendChild(userInput);
        //Incorrect guesses.
        const incorrectGuessesP = document.createElement("p");
        incorrectGuessesP.id = "incorrectGuessesP";
        incorrectGuessesP.textContent = `Incorrect Guesses:`;
        //Total guesses.
        const totalGuessesP = document.createElement("p");
        totalGuessesP.id = `totalGuessesP`;
        totalGuessesP.textContent = `Total Guesses: 0`;
        //Retry button.
        const retry = document.createElement("button");
        retry.textContent = `Next`;
        retry.id = "gameOneRetry";
        retry.addEventListener("click",function(){
            makeGameOne(arg0,arg1);
        });
        //Submit button.
        const submit = document.createElement("button");
        submit.id = `gameOneSubmitButton`;
        submit.textContent = `Submit`;
        //Submit button variables.
        const guesses = [];
        const incorrectGuesses = [];
        let correctCharacters = 0;
        let totalGuesses = 0;
        const wordSplit = word.split("");
        //Submit button event listener.
        submit.addEventListener("click",function(){
            const inputValue = userInput.value.toLowerCase();
            if (inputValue.length === 1 && correctCharacters < wordSplit.length && (inputValue.charCodeAt(0) >= 97 && inputValue.charCodeAt(0) <= 122)) {
            if (guesses.every(g => g !== inputValue)) {
                totalGuesses++;
                guesses.push(inputValue);
                let present = false;
                for (let i = 0; i < wordSplit.length; i++) {
                    if (inputValue === wordSplit[i]) {
                        answerRevealedP.children[i].textContent = inputValue;
                        correctCharacters++;
                        present = true;
                        if (correctCharacters === wordSplit.length) {
                            answerRevealedP.style.borderBottom = `1px solid lime`;
                            const retrievedMaster = localStorage.getItem(`master`);
                            const retrievedMasterParsed = JSON.parse(retrievedMaster);
                            retrievedMasterParsed.gameOne.wins++;
                            retrievedMasterParsed.gameOne.totalGuesses += totalGuesses;
                            retrievedMasterParsed.gameOne.totalIncorrectGuesses += incorrectGuesses.length;
                            localStorage.setItem("master", JSON.stringify(retrievedMasterParsed));
                            retry.classList.add("greenButton");
                        }
                    }
                }
                if (!present) {
                    incorrectGuesses.push(inputValue);
                    incorrectGuessesP.textContent = `Incorrect Guesses: ${incorrectGuesses.join(", ")}`;
                }
                totalGuessesP.textContent = `Total Guesses: ${totalGuesses}`;
                userInput.value = ``;
                }
            }
        });
        primaryInterface.appendChild(submit);
        primaryInterface.appendChild(incorrectGuessesP);
        primaryInterface.appendChild(totalGuessesP);
        primaryInterface.appendChild(retry);
        //Details button.
        const detailsGameOne = document.createElement("button");
        detailsGameOne.textContent = `Details`;
        detailsGameOne.id = `detailsGameOne`;
        primaryInterface.appendChild(detailsGameOne);
        //Details pop-up.
        const gameOneDetails = document.createElement("div");
        gameOneDetails.id = `gameOneDetails`;
        gameOneDetails.textContent = `Complete the word by entering a letter into the text field, and then pressing Submit to see if your guess is correct.`;
        //Paragraph element for the performance stats.
        const gameOneStatsP = document.createElement("p");
        gameOneStatsP.id = `gameOneStatsP`;
        gameOneDetails.appendChild(gameOneStatsP);
        //Details pop-up close.
        const gameOneDetailsClose = document.createElement("p");
        gameOneDetailsClose.textContent = `x`;
        gameOneDetailsClose.id = `gameOneDetailsClose`;
        gameOneDetails.appendChild(gameOneDetailsClose);
        //Event listener for opening and populating the Details pop-up.
        detailsGameOne.addEventListener(`click`,function(){
            display.appendChild(gameOneDetails);
            const retrievedMaster = localStorage.getItem(`master`);
            const retrievedMasterParsed = JSON.parse(retrievedMaster);
            function correctGuessRate() {
                const temp = ((retrievedMasterParsed.gameOne.totalGuesses - retrievedMasterParsed.gameOne.totalIncorrectGuesses) / retrievedMasterParsed.gameOne.totalGuesses) * 100;
                if (isNaN(temp)) {
                    return 0;
                }
                return temp;
            }
            gameOneStatsP.textContent = `Wins: ${retrievedMasterParsed.gameOne.wins}, Total Guesses: ${retrievedMasterParsed.gameOne.totalGuesses} and Correct Guess Rate: ${correctGuessRate().toFixed(2)}%`;
            gameOneDetailsClose.addEventListener(`click`,function(){
            display.removeChild(gameOneDetails);
            })
        });
    }
    //////////The second JavaScript learning game; multiple choice questions.
    function makeGameTwo(arg0,arg1) {
        //Local storage assurance.
        makeMaster();
        //Changing certain CSS and HTML properties to accomodate the creation of a new game.
        golden(arg0);
        arg1.style.backgroundColor = `gold`;
        display.innerHTML = ``;
        //Library of questions, and their respective answers, to be randonly selected from.
        const library = [
            {
                question:`What year was JavaScript first released?`,
                answers:[
                    {answer:`1996`,correct:false},
                    {answer:`1992`,correct:false},
                    {answer:`2000`,correct:false},
                    {answer:`1995`,correct:true}
                ]
            },{
                question:`Who invented the JavaScript language?`,
                answers:[
                    {answer:`Susan Winters`,correct:false},
                    {answer:`Steve Jobs`,correct:false},
                    {answer:`Lewis Alder`,correct:false},
                    {answer:`Brendan Eich`,correct:true}
                ]
            },{
                question:`Which particular Standard is JavaScript based on?`,
                answers:[
                    {answer:`CSS`,correct:false},
                    {answer:`Vanilla`,correct:false},
                    {answer:`Modern Text`,correct:false},
                    {answer:`ECMAScript`,correct:true}
                ]
            },{
                question:`How many processing threads does JavaScript use?`,
                answers:[
                    {answer:`Four`,correct:false},
                    {answer:`Three`,correct:false},
                    {answer:`Two`,correct:false},
                    {answer:`One`,correct:true}
                ]
            },{
                question:`What internal project name was given to JavaScript during its initial development?`,
                answers:[
                    {answer:`Zeta`,correct:false},
                    {answer:`Whisper`,correct:false},
                    {answer:`Waterfall`,correct:false},
                    {answer:`Mocha`,correct:true}
                ]
            },{
                question:`How long was the initial release of JavaScript in development?`,
                answers:[
                    {answer:`78 Days`,correct:false},
                    {answer:`152 Days`,correct:false},
                    {answer:`8 Days`,correct:false},
                    {answer:`10 Days`,correct:true}
                ]
            },{
                question:`Which data type does not exist in the JavaScript language?`,
                answers:[
                    {answer:`String`,correct:false},
                    {answer:`Number`,correct:false},
                    {answer:`Boolean`,correct:false},
                    {answer:`Integer`,correct:true}
                ]
            },{
                question:`Which programming language did not originally inspire the creation of JavaScript?`,
                answers:[
                    {answer:`Java`,correct:false},
                    {answer:`Scheme`,correct:false},
                    {answer:`Self`,correct:false},
                    {answer:`C++`,correct:true}
                ]
            },{
                question:`What kind of inheritance does JavaScript use?`,
                answers:[
                    {answer:`Single`,correct:false},
                    {answer:`Hybrid`,correct:false},
                    {answer:`Hierarchical`,correct:false},
                    {answer:`Prototypical`,correct:true}
                ]
            },{
                question:`Which company is responsible for the creation of JavaScript?`,
                answers:[
                    {answer:`Apple`,correct:false},
                    {answer:`IBM`,correct:false},
                    {answer:`HP`,correct:false},
                    {answer:`Netscape`,correct:true}
                ]
            },{
                question:`Which company owns the trademark for JavaScript?`,
                answers:[
                    {answer:`Microsoft`,correct:false},
                    {answer:`Google`,correct:false},
                    {answer:`GE`,correct:false},
                    {answer:`Oracle`,correct:true}
                ]
            },{
                question:`How is JavaScript typed?`,
                answers:[
                    {answer:`Strongly`,correct:false},
                    {answer:`Positively`,correct:false},
                    {answer:`Objectively`,correct:false},
                    {answer:`Weakly`,correct:true}
                ]
            },{
                question:`What is the outermost scope in JavaScript commonly referred to as?`,
                answers:[
                    {answer:`Universal`,correct:false},
                    {answer:`Local`,correct:false},
                    {answer:`Base`,correct:false},
                    {answer:`Global`,correct:true}
                ]
            },{
                question:`What year was ECMAScript 6 released in?`,
                answers:[
                    {answer:`1999`,correct:false},
                    {answer:`2020`,correct:false},
                    {answer:`2019`,correct:false},
                    {answer:`2015`,correct:true}
                ]
            },{
                question:`What is another name for a value that is considered to be true in JavaScript?`,
                answers:[
                    {answer:`Strongly`,correct:false},
                    {answer:`Falsy`,correct:false},
                    {answer:`Rigidly`,correct:false},
                    {answer:`Truthy`,correct:true}
                ]
            },{
                question:`Which of the following do modern browsers not provide as a means for interacting with users?`,
                answers:[
                    {answer:`Alerts`,correct:false},
                    {answer:`Prompts`,correct:false},
                    {answer:`Confirmations`,correct:false},
                    {answer:`Shutdowns`,correct:true}
                ]
            },{
                question:`What type of operator does JavaScript not include?`,
                answers:[
                    {answer:`Unary`,correct:false},
                    {answer:`Binary`,correct:false},
                    {answer:`Ternary`,correct:false},
                    {answer:`Quaternary`,correct:true}
                ]
            },{
                question:`What type of logical operator is not found in JavaScript?`,
                answers:[
                    {answer:`AND`,correct:false},
                    {answer:`OR`,correct:false},
                    {answer:`NOT`,correct:false},
                    {answer:`EQV`,correct:true}
                ]
            },{
                question:`What is a Developer doing when finding and fixing errors in their code?`,
                answers:[
                    {answer:`Buffering`,correct:false},
                    {answer:`Classifying`,correct:false},
                    {answer:`Instantiating`,correct:false},
                    {answer:`Debugging`,correct:true}
                ]
            },{
                question:`Was JavaScript originally intended to be used by the Client and/or Server?`,
                answers:[
                    {answer:`Yes, Server Only`,correct:false},
                    {answer:`Yes, Client Only`,correct:false},
                    {answer:`No, Neither`,correct:false},
                    {answer:`Yes, Both`,correct:true}
                ]
            },{
                question:`What is the name of Mozilla's JavaScript engine?`,
                answers:[
                    {answer:`Category9`,correct:false},
                    {answer:`Hot Rod`,correct:false},
                    {answer:`Greenhouse`,correct:false},
                    {answer:`SpiderMonkey`,correct:true}
                ]
            },{
                question:`What is the name of Google's JavaScript engine?`,
                answers:[
                    {answer:`Critical`,correct:false},
                    {answer:`Develope`,correct:false},
                    {answer:`Spirit Wagon`,correct:false},
                    {answer:`V8`,correct:true}
                ]
            },{
                question:`What label is given to a function that calls itself?`,
                answers:[
                    {answer:`Restrictive`,correct:false},
                    {answer:`Regenerative`,correct:false},
                    {answer:`Responsive`,correct:false},
                    {answer:`Recursive`,correct:true}
                ]
            },{
                question:`What explicitly manages variable accessibility in JavaScript?`,
                answers:[
                    {answer:`Inheritance`,correct:false},
                    {answer:`Binding`,correct:false},
                    {answer:`Conversion`,correct:false},
                    {answer:`Scope`,correct:true}
                ]
            },{
                question:`What name is commonly given to functions that are object properties in JavaScript?`,
                answers:[
                    {answer:`Head`,correct:false},
                    {answer:`Action`,correct:false},
                    {answer:`System`,correct:false},
                    {answer:`Method`,correct:true}
                ]
            },{
                question:`What name is commonly given to a distinct piece of a JavaScript program?`,
                answers:[
                    {answer:`Segment`,correct:false},
                    {answer:`Box`,correct:false},
                    {answer:`Folder`,correct:false},
                    {answer:`Module`,correct:true}
                ]
            },{
                question:`Which programming model allows for multiple things to happen at the same time?`,
                answers:[
                    {answer:`Coinciding`,correct:false},
                    {answer:`Coexistent`,correct:false},
                    {answer:`Synchronal`,correct:false},
                    {answer:`Asynchronous`,correct:true}
                ]
            },{
                question:`What name is commonly given to a function that is passed as an argument of another function?`,
                answers:[
                    {answer:`Database`,correct:false},
                    {answer:`Slide`,correct:false},
                    {answer:`Pepper`,correct:false},
                    {answer:`Callback`,correct:true}
                ]
            },{
                question:`How can't JavaScript be associated with an HTML file?`,
                answers:[
                    {answer:`Inline`,correct:false},
                    {answer:`Internal`,correct:false},
                    {answer:`External`,correct:false},
                    {answer:`Beside`,correct:true}
                ]
            },{
                question:`What JavaScript type is Null?`,
                answers:[
                    {answer:`String`,correct:false},
                    {answer:`Undefined`,correct:false},
                    {answer:`Number`,correct:false},
                    {answer:`Object`,correct:true}
                ]
            },{
                question:`What JavaScript type is NaN?`,
                answers:[
                    {answer:`String`,correct:false},
                    {answer:`Object`,correct:false},
                    {answer:`Symbol`,correct:false},
                    {answer:`Number`,correct:true}
                ]
            },{
                question:`What kind of programming language is JavaScript?`,
                answers:[
                    {answer:`Side-Level`,correct:false},
                    {answer:`Middle-Level`,correct:false},
                    {answer:`Low-Level`,correct:false},
                    {answer:`High-Level`,correct:true}
                ]
            },{
                question:`What technology does JavaScript not have access to?`,
                answers:[
                    {answer:`DOM`,correct:false},
                    {answer:`AJAX`,correct:false},
                    {answer:`JSON`,correct:false},
                    {answer:`SQL`,correct:true
                }
            ]},{
                question:`What label is commonly given, in JavaScript, to an instruction to perform a specific action?`,
                answers:[
                    {answer:`Equivalency`,correct:false},
                    {answer:`Arrangement`,correct:false},
                    {answer:`Expression`,correct:false},
                    {answer:`Statement`,correct:true}
                ]
            },{
                question:`What can JavaScript values be represented by and stored in?`,
                answers:[
                    {answer:`Correspondences`,correct:false},
                    {answer:`Fruits`,correct:false},
                    {answer:`Buildings`,correct:false},
                    {answer:`Variables`,correct:true}
                ]
            },{
                question:`What label is commonly given to the automatic or implicit conversion of JavaScrpt values from one type to another?`,
                answers:[
                    {answer:`Computation`,correct:false},
                    {answer:`Constriction`,correct:false},
                    {answer:`Compulsion`,correct:false},
                    {answer:`Coercion `,correct:true}
                ]
            },{
                question:`What kind of characters are JavaScript strings composed of?`,
                answers:[
                    {answer:`SimpleText`,correct:false},
                    {answer:`Query7`,correct:false},
                    {answer:`AFG`,correct:false},
                    {answer:`Unicode`,correct:true}
                ]
            },{
                question:`What label is commonly given to JavaScript code that performs an action on a value(s), thereby producing a result?`,
                answers:[
                    {answer:`Operative`,correct:false},
                    {answer:`Orchestrator`,correct:false},
                    {answer:`Operand`,correct:false},
                    {answer:`Operator`,correct:true}
                ]
            },{
                question:`What kind of JavaScript object represents the potential completion of an asychronous operation and the resulting value?`,
                answers:[
                    {answer:`Excuse`,correct:false},
                    {answer:`Wish`,correct:false},
                    {answer:`Commitment`,correct:false},
                    {answer:`Promise`,correct:true}
                ]
            },{
                question:`What label is commonly given to the programming technique of repeatedly calling one or more JavaScript method(s) on an object, via a single line of code?`,
                answers:[
                    {answer:`Multiplying`,correct:false},
                    {answer:`Simulating`,correct:false},
                    {answer:`Tokenizing`,correct:false},
                    {answer:`Chaining`,correct:true}
                ]
            },{
                question:`What kind of JavaScript function can return multiple values on demand?`,
                answers:[
                    {answer:`Maker`,correct:false},
                    {answer:`Formulator`,correct:false},
                    {answer:`Mover`,correct:false},
                    {answer:`Generator`,correct:true}
                ]
            }
        ];
        function chooseQuestion(){
            return Math.floor(Math.random() * library.length);
        }
        const currentQuestion = library[chooseQuestion()];
        //Primary interface DIV.
        const primaryInterface = document.createElement(`div`);
        primaryInterface.classList.add(`primaryInterface`);
        display.appendChild(primaryInterface);
        //H3 title element for game.
        const g2H3Title = document.createElement(`h3`);
        g2H3Title.textContent = `Multi-Choice Questions`;
        primaryInterface.appendChild(g2H3Title);
        //Next question button.
        const gameTwoNextButton = document.createElement(`button`);
        gameTwoNextButton.textContent = `Next`;
        gameTwoNextButton.id = `gameTwoNextButton`;
        gameTwoNextButton.addEventListener(`click`,function(){
            makeGameTwo(arg0,arg1);
        });
        //Question text.
        const gameTwoQuestionTextP = document.createElement(`p`);
        gameTwoQuestionTextP.id = `gameTwoQuestionTextP`;
        gameTwoQuestionTextP.textContent = currentQuestion.question;
        primaryInterface.appendChild(gameTwoQuestionTextP);
        //Answers DIV.
        const answersDIV = document.createElement(`div`);
        answersDIV.id = `answersDIV`;
        primaryInterface.appendChild(answersDIV);
        //Different answers, organized in random order, to selected question.
        let randomizedAnswers = currentQuestion.answers.sort(randomize);
        for (let i = 0; i < 10; i++) {
            randomizedAnswers = randomizedAnswers.sort(randomize);
        }
        //Populating the app with the correct buttons and associated answers.
        const answerButtonArray = [];
        let answered = 0;
        for (let i = 0; i < randomizedAnswers.length; i++) {
            const tempAnswerButton = document.createElement(`button`);
            answerButtonArray.push(tempAnswerButton);
            tempAnswerButton.classList.add(`multiChoiceAnswers`);
            tempAnswerButton.textContent = randomizedAnswers[i].answer;
            answersDIV.appendChild(tempAnswerButton);
            //Giving each button an event listener for a click action.
            tempAnswerButton.addEventListener(`click`,function(){
                answered++;
                const retrievedMaster = localStorage.getItem(`master`);
                const retrievedMasterParsed = JSON.parse(retrievedMaster);
                for (let j = 0; j < randomizedAnswers.length; j++) {
                    if (randomizedAnswers[j].correct) {
                        answerButtonArray[j].classList.add(`greenButton`);
                        answerButtonArray[j].style.color = `lime`;
                    }
                    if (!randomizedAnswers[j].correct && i === j && answered === 1) {
                        this.style.color = `darkgray`;
                        this.style.border = `1px solid darkgray`;
                    }
                    if (randomizedAnswers[j].correct  && i === j && answered === 1) {
                        retrievedMasterParsed.gameTwo.totalCorrectGuesses++;
                    }
                }
                if (answered === 1) {
                    retrievedMasterParsed.gameTwo.totalGuesses++;
                }
                localStorage.setItem(`master`, JSON.stringify(retrievedMasterParsed));
                gameTwoNextButton.classList.add(`greenButton`);
            });
        }
        primaryInterface.appendChild(gameTwoNextButton);
        //Details button.
        const detailsGameTwo = document.createElement(`button`);
        detailsGameTwo.textContent = `Details`;
        detailsGameTwo.id = `detailsGameTwo`;
        primaryInterface.appendChild(detailsGameTwo);
        //Details pop-up.
        const gameTwoDetails = document.createElement(`div`);
        gameTwoDetails.id = `gameTwoDetails`;
        gameTwoDetails.textContent = `Select an answer from the multiple options available, to any given question posed, and see if your choice is correct.`;
        //Paragraph element for the performance stats.
        const gameTwoStatsP = document.createElement(`p`);
        gameTwoStatsP.id = `gameTwoStatsP`;
        gameTwoDetails.appendChild(gameTwoStatsP);
        //Details pop-up close.
        const gameTwoDetailsClose = document.createElement(`p`);
        gameTwoDetailsClose.textContent = `x`;
        gameTwoDetailsClose.id = `gameTwoDetailsClose`;
        gameTwoDetails.appendChild(gameTwoDetailsClose);
        //Event listener for opening and populating the Details pop-up.
        detailsGameTwo.addEventListener(`click`,function(){
            display.appendChild(gameTwoDetails);
            const retrievedMaster = localStorage.getItem(`master`);
            const retrievedMasterParsed = JSON.parse(retrievedMaster);
            //Function for calculating the Correct Guess Rate.
            function correctGuessRate() {
                const temp = (retrievedMasterParsed.gameTwo.totalCorrectGuesses / retrievedMasterParsed.gameTwo.totalGuesses) * 100;
                if (isNaN(temp)) {
                    return 0;
                }
                return temp;
            }
            gameTwoStatsP.textContent = `Total Guesses: ${retrievedMasterParsed.gameTwo.totalGuesses} and Correct Guess Rate: ${correctGuessRate().toFixed(2)}%`;
            //Event listener for closing the Details pop-up.
            gameTwoDetailsClose.addEventListener(`click`,function(){
                display.removeChild(gameTwoDetails);
            });
        });
    }
    //////////The third JavaScript learning game; completing code samples, looking for specific answers from a text input.
    function makeGameThree(arg0,arg1) {
        //Local storage assurance.
        makeMaster();
        //Changing certain CSS and HTML properties to accomodate the creation of a new game.
        golden(arg0);
        arg1.style.backgroundColor = `gold`;
        display.innerHTML = ``;
        //Library of challenges and solutions.
        const library = [
            {
                challenge:`con____.log("Hello, World!");`,
                clues:[`cons___.log("Hello, World!");`,`con_o__.log("Hello, World!");`,`con__l_.log("Hello, World!");`,`con___e.log("Hello, World!");`,],
                solutions:[`sole`],
                complete:`console.log("Hello, World!");`
            },{
                challenge:`console.___("Hello, World!");`,
                clues:[`console.l__("Hello, World!");`,`console._o_("Hello, World!");`,`console.__g("Hello, World!");`],
                solutions:[`log`],
                complete:`console.log("Hello, World!");`
            },{
                challenge:`() __ "Hello, World!";`,
                clues:[`() =_ "Hello, World!";`,`() _> "Hello, World!";`],
                solutions:[`=>`],
                complete:`() => "Hello, World";`
            },{
                challenge:`body._____HTML = "";`,
                clues:[`body.i____HTML = "";`,`body._n___HTML = "";`,`body.__n__HTML = "";`,`body.___e_HTML = "";`,`body.____rHTML = "";`],
                solutions:[`inner`],
                complete:`body.innerHTML = "";`
            },{
                challenge:`localStorage.get____("master");`,
                clues:[`localStorage.getI___("master");`,`localStorage.get_t__("master");`,`localStorage.get__e_("master");`,`localStorage.get___m("master");`],
                solutions:[`Item`],
                complete:`localStorage.getItem("master");`
            },{
                challenge:`_____Storage.getItem("master");`,
                clues:[`l____Storage.getItem("master");`,`_o___Storage.getItem("master");`,`__c__Storage.getItem("master");`,`___a_Storage.getItem("master");`,`____lStorage.getItem("master");`,],
                solutions:[`local`],
                complete:`localStorage.getItem("master");`
            },{
                challenge:`localStorage.set____("m", myObj);`,
                clues:[`localStorage.setI___("m", myObj);`,`localStorage.set_t__("m", myObj);`,`localStorage.set__e_("m", myObj);`,`localStorage.set___m("m", myObj);`],
                solutions:[`Item`],
                complete:`localStorage.setItem("m", myObj);`
            },{
                challenge:`elem.class____.add("myClass");`,
                clues:[`elem.classL___.add("myClass");`,`elem.class_i__.add("myClass");`,`elem.class__s_.add("myClass");`,`elem.class___t.add("myClass");`],
                solutions:[`List`],
                complete:`elem.classList.add("myClass");`
            },{
                challenge:`________.createElement("div");`,
                clues:[`d_______.createElement("div");`,`_o______.createElement("div");`,`__c_____.createElement("div");`,`___u____.createElement("div");`,`____m___.createElement("div");`,`_____e__.createElement("div");`,`______n_.createElement("div");`,`_______t.createElement("div");`],
                solutions:[`document`],
                complete:`document.createElement("div");`
            },{
                challenge:`_____ num = 75;`,
                clues:[`c____ num = 75;`,`_o___ num = 75;`,`__n__ num = 75;`,`___s_ num = 75;`,`____t num = 75;`],
                solutions:[`const`],
                complete:`const num = 75;`
            },{
                challenge:`isN__(variable);`,
                clues:[`isNa_(variable);`,`isN_N(variable);`],
                solutions:[`aN`],
                complete:`isNaN(variable)`
            },{
                challenge:`____.random();`,
                clues:[`M___.random();`,`_a__.random();`,`__t_.random();`,`___h.random();`],
                solutions:[`Math`],
                complete:`Math.random();`
            },{
                challenge:`[1,2,3,4].conc__([5,6,7,8]);`,
                clues:[`[1,2,3,4].conca_([5,6,7,8]);`,`[1,2,3,4].conc_t([5,6,7,8]);`],
                solutions:[`at`],
                complete:`[1,2,3,4].concat([5,6,7,8]);`
            },{
                challenge:`[1,2,3,4].____Within(2, 0);`,
                clues:[`[1,2,3,4].c___Within(2, 0);`,`[1,2,3,4]._o__Within(2, 0);`,`[1,2,3,4].__p_Within(2, 0);`,`[1,2,3,4].___yWithin(2, 0);`],
                solutions:[`copy`],
                complete:`[1,2,3,4].copyWithin(2, 0);`
            },{
                challenge:`[1,2,3,4].ever_(n => n !== 2);`,
                clues:[`[1,2,3,4].every(n => n !== 2);`,],
                solutions:[`y`],
                complete:`[1,2,3,4].every(n => n !== 2);`
            },{
                challenge:`[1,2,3,4].__ery(n => n !== 2);`,
                clues:[`[1,2,3,4].e_ery(n => n !== 2);`,`[1,2,3,4]._very(n => n !== 2);`],
                solutions:[`ev`],
                complete:`[1,2,3,4].every(n => n !== 2);`
            },{
                challenge:`[1,2,3,4].fi____dex(n => n === 3);`,
                clues:[`[1,2,3,4].fin___dex(n => n === 3);`,`[1,2,3,4].fi_d__dex(n => n === 3);`,`[1,2,3,4].fi__I_dex(n => n === 3);`,`[1,2,3,4].fi___ndex(n => n === 3);`],
                solutions:[`ndIn`],
                complete:`[1,2,3,4].findIndex(n => n === 3);`
            },{
                challenge:`[1,2,3,4].___Each(n => n * 2);`,
                clues:[`[1,2,3,4].f__Each(n => n * 2);`,`[1,2,3,4]._o_Each(n => n * 2);`,`[1,2,3,4].__rEach(n => n * 2);`],
                solutions:[`for`],
                complete:`[1,2,3,4].forEach(n => n * 2;`
            },{
                challenge:`[1,2,3,4].index__(2);`,
                clues:[`[1,2,3,4].indexO_(2);`,`[1,2,3,4].index_f(2);`],
                solutions:[`Of`],
                complete:`[1,2,3,4].indexOf(2);`
            },{
                challenge:`Array.is___ay([1,2,3,4]);`,
                clues:[`Array.isA__ay([1,2,3,4]);`,`Array.is_r_ay([1,2,3,4]);`,`Array.is__ray([1,2,3,4]);`],
                solutions:[`Arr`],
                complete:`Array.isArray([1,2,3,4]);`
            },{
                challenge:`[1,2,3,4].____IndexOf(4);`,
                clues:[`[1,2,3,4].l___IndexOf(4);`,`[1,2,3,4]._a__IndexOf(4);`,`[1,2,3,4].__s_IndexOf();`,`[1,2,3,4].___tIndexOf(4);`],
                solutions:[`last`],
                complete:`[1,2,3,4].lastIndexOf(4);`
            },{
                challenge:`JSON.str____fy(myObj);`,
                clues:[`JSON.stri___fy(myObj);`,`JSON.str_n__fy(myObj);`,`JSON.str__g_fy(myObj);`,`JSON.str___ify(myObj);`],
                solutions:[`ingi`],
                complete:`JSON.stringify(myObj);`
            },{
                challenge:`Math.a__(-43);`,
                clues:[`Math.ab_(-43);`,`Math.a_s(-43);`],
                solutions:[`bs`],
                complete:`Math.abs(-43);`
            },{
                challenge:`Math.c___(23.55);`,
                clues:[`Math.ce__(23.55);`,`Math.c_i_(23.55);`,`Math.c__l(23.55);`],
                solutions:[`eil`],
                complete:`Math.ceil(23.55);`
            },{
                challenge:`Math.__p(50);`,
                clues:[`Math.e_p(50);`,`Math._xp(50);`],
                solutions:[`ex`],
                complete:`Math.exp(50);`
            },{
                challenge:`Math.f____(23.55);`,
                clues:[`Math.fl___(23.55);`,`Math.f_o__(23.55);`,`Math.f__o_(23.55);`,`Math.f___r(23.55);`],
                solutions:[`loor`],
                complete:`Math.floor(23.55);`
            },{
                challenge:`Math.r____(23.55);`,
                clues:[`Math.ro___(23.55);`,`Math.r_u__(23.55);`,`Math.r__n_(23.55);`,`Math.r___d(23.55);`],
                solutions:[`ound`],
                complete:`Math.round(23.55);`
            },{
                challenge:`"Hello, World!".____At(2);`,
                clues:[`"Hello, World!".c___At(2);`,`"Hello, World!"._h__At(2);`,`"Hello, World!".__a_At(2);`,`"Hello, World!".___rAt(2);`],
                solutions:[`char`],
                complete:`"Hello, World!".charAt(2);`
            },{
                challenge:`"Hello, World!".char_____t(2);`,
                clues:[`"Hello, World!".charC____t(2);`,`"Hello, World!".char_o___t(2);`,`"Hello, World!".char__d__t(2);`,`"Hello, World!".char___e_t(2);`,`"Hello, World!".char____At(2);`],
                solutions:[`CodeA`],
                complete:`"Hello, World!".charCodeAt(2);`
            },{
                challenge:`"Hello, World!".___cat(myStr);`,
                clues:[`"Hello, World!".c__cat(myStr);`,`"Hello, World!"._o_cat(myStr);`,`"Hello, World!".__ncat(myStr);`],
                solutions:[`con`],
                complete:`"Hello, World!".concat(myStr);`
            },{
                challenge:`"Hello, World!".r__eat(3);`,
                clues:[`"Hello, World!".re_eat(3);`,`"Hello, World!".r_peat(3);`],
                solutions:[`ep`],
                complete:`"Hello, World!".repeat(3);`
            },{
                challenge:`"Hello, World!".toL____Case();`,
                clues:[`"Hello, World!".toLo___Case();`,`"Hello, World!".toL_w__Case();`,`"Hello, World!".toL__e_Case();`,`"Hello, World!".toL___rCase();`],
                solutions:[`ower`],
                complete:`"Hello, World!".toLowerCase();`
            },{
                challenge:`myNum.toSt____();`,
                clues:[`myNum.toStr___();`,`myNum.toSt_i__();`,`myNum.toSt__n_();`,`myNum.toSt___g();`],
                solutions:[`ring`],
                complete:`myNum.toString();`
            },{
                challenge:`myNum.t_____nential();`,
                clues:[`myNum.to____nential();`,`myNum.t_E___nential();`,`myNum.t__x__nential();`,`myNum.t___p_nential();`,`myNum.t____onential();`],
                solutions:[`oExpo`],
                complete:`myNum.toExponential();`
            },{
                challenge:`myNum.toF____(3);`,
                clues:[`myNum.toFi___(3);`,`myNum.toF_x__(3);`,`myNum.toF__e_(3);`,`myNum.toF___d(3);`],
                solutions:[`ixed`],
                complete:`myNum.toFixed(3);`
            },{
                challenge:`myNum._____cision(5);`,
                clues:[`myNum.t____cision(5);`,`myNum._o___cision(5);`,`myNum.__P__cision(5);`,`myNum.___r_cision(5);`,`myNum.____ecision(5);`],
                solutions:[`toPre`],
                complete:`myNum.toPrecision(5);`
            },{
                challenge:`myNum.value__();`,
                clues:[`myNum.valueO_();`,`myNum.value_f();`],
                solutions:[`Of`],
                complete:`myNum.valueOf();`
            },{
                challenge:`l__ num = 40;`,
                clues:[`le_ num = 40;`,`l_t num = 40;`],
                solutions:[`et`],
                complete:`let num = 40;`
            },{
                challenge:`v_r num = 40;`,
                clues:[`var num = 40;`],
                solutions:[`a`],
                complete:`var num = 40;`
            },{
                challenge:`50 >_ 25;`,
                clues:[`50 >= 25;`],
                solutions:[`=`],
                complete:`50 >= 25;`
            },{
                challenge:`25 <_ 50;`,
                clues:[`25 <= 50;`],
                solutions:[`=`],
                complete:`25 <= 50;`
            },{
                challenge:`50 ==_ 50;`,
                clues:[`50 === 50;`],
                solutions:[`=`],
                complete:`50 === 50;`
            },{
                challenge:`75 !=_ 50;`,
                clues:[`75 !== 50;`],
                solutions:[`=`],
                complete:`75 !== 50;`
            },{
                challenge:`ty___f 50;`,
                clues:[`typ__f 50;`,`ty_e_f 50;`,`ty__of 50;`],
                solutions:[`peo`],
                complete:`typeof 50;`
            },{
                challenge:`myNum *_ 50;`,
                clues:[`myNum *= 50;`],
                solutions:[`=`],
                complete:`myNum *= 50;`
            },{
                challenge:`myNum = a |_ 50;`,
                clues:[`myNum = a || 50;`],
                solutions:[`|`],
                complete:`myNum = a || 50;`
            },{
                challenge:`myNum-_;`,
                clues:[`myNum--;`],
                solutions:[`-`],
                complete:`myNum--;`
            },{
                challenge:`myNum+_;`,
                clues:[`myNum++;`],
                solutions:[`+`],
                complete:`myNum++;`
            },{
                challenge:`typeof myNum === "und___ned";`,
                clues:[`typeof myNum === "unde__ned";`,`typeof myNum === "und_f_ned";`,`typeof myNum === "und__ined";`],
                solutions:[`efi`],
                complete:`typeof myNum === "undefined";`
            },{
                challenge:`typeof n__l";`,
                clues:[`typeof nu_l";`,`typeof n_ll";`],
                solutions:[`ul`],
                complete:`typeof null";`
            }
        ];
        function chooseChallenge(){
            return Math.floor(Math.random() * library.length);
        }
        const currentChallenge = library[chooseChallenge()];
        //Primary interface DIV.
        const primaryInterface = document.createElement(`div`);
        primaryInterface.classList.add(`primaryInterface`);
        display.appendChild(primaryInterface);
        //H3 title element for game.
        const g3H3Title = document.createElement(`h3`);
        g3H3Title.textContent = `Code Completion`;
        primaryInterface.appendChild(g3H3Title);
        //Challenge text.
        const gameThreeChallengeTextP = document.createElement(`p`);
        gameThreeChallengeTextP.id = `gameThreeChallengeTextP`;
        gameThreeChallengeTextP.textContent = currentChallenge.challenge;
        primaryInterface.appendChild(gameThreeChallengeTextP);
        //Challenge solution input.
        const gameThreeSolutionInput = document.createElement(`input`);
        gameThreeSolutionInput.classList.add(`userInput`);
        gameThreeSolutionInput.id = `gameThreeSolutionInput`;
        gameThreeSolutionInput.placeholder = `Enter missing JavaScript code here`;
        primaryInterface.appendChild(gameThreeSolutionInput);
        //Button DIV.
        const gameThreeButtonDIV = document.createElement(`div`);
        gameThreeButtonDIV.id = `gameThreeButtonDIV`;
        primaryInterface.appendChild(gameThreeButtonDIV);
        const gameThreeClueButton = document.createElement(`button`);
        //Solution submit button.
        const gameThreeSubmitButton = document.createElement(`button`);
        gameThreeSubmitButton.textContent = `Submit`;
        gameThreeSubmitButton.id = `gameThreeSubmitButton`;
        gameThreeButtonDIV.appendChild(gameThreeSubmitButton);
        let correctAnswers = 0;
        let totalGuesses = 0;
        let clueClicks = 0;
        const incorrectGuessesArray = [];
        function determineCorrect() {
            const preData = gameThreeSolutionInput.value;
            const data = preData.split(``).reduce(function(total,d){
                if (d !== ` `) {
                    total.push(d);
                }
                return total;
            },[]).join(``);
            if (correctAnswers < 1 && data.length > 0 && incorrectGuessesArray.every(g => g !== data)) {
                totalGuesses++;
                const retrievedMaster = localStorage.getItem(`master`);
                const retrievedMasterParsed = JSON.parse(retrievedMaster);
                if (currentChallenge.solutions.some(s => s === data)) {
                    gameThreeTotalGuesses.innerText = `Total Guesses: ${totalGuesses}`;
                    correctAnswers++;
                    gameThreeChallengeTextP.textContent = currentChallenge.complete;
                    gameThreeChallengeTextP.style.borderBottom = `1px solid lime`;
                    gameThreeNextButton.classList.add(`greenButton`);
                    retrievedMasterParsed.gameThree.totalCorrectGuesses++;
                    retrievedMasterParsed.gameThree.totalGuesses += totalGuesses;
                    retrievedMasterParsed.gameThree.clueClicks += clueClicks;
                    localStorage.setItem("master", JSON.stringify(retrievedMasterParsed));
                } else {
                    gameThreeSolutionInput.value = ``;
                    incorrectGuessesArray.push(data);
                    gameThreeIncorrectGuesses. innerText = `Incorrect Guesses: ${incorrectGuessesArray.join(`, `)}`;
                    gameThreeTotalGuesses.innerText = `Total Guesses: ${totalGuesses}`;
                }
            }
        }
        gameThreeSubmitButton.addEventListener(`click`, determineCorrect);
        //Next game button.
        const gameThreeNextButton = document.createElement(`button`);
        gameThreeNextButton.id = `gameThreeNextButton`;
        gameThreeNextButton.innerText = `Next`;
        primaryInterface.appendChild(gameThreeNextButton);
        gameThreeNextButton.addEventListener(`click`,function(){
            makeGameThree(arg0,arg1);
        });
        //Clue button.
        let guessesRemaining = currentChallenge.clues.length;
        gameThreeClueButton.textContent = `Clue (${guessesRemaining})`;
        gameThreeClueButton.id = `gameThreeClueButton`;
        gameThreeButtonDIV.appendChild(gameThreeClueButton);
        let receivedClues = [];
        gameThreeClueButton.addEventListener(`mousedown`,function(e){
            if (guessesRemaining > 0) {
                let rN = Math.floor(Math.random() * currentChallenge.clues.length);
                while (receivedClues[rN] === 1) {
                    rN = Math.floor(Math.random() * currentChallenge.clues.length);
                }
                if (correctAnswers < 1 && e.buttons == 1) {
                    clueClicks++;
                    guessesRemaining--;
                    const clue = currentChallenge.clues[rN];
                    gameThreeChallengeTextP.textContent = clue;
                    receivedClues[rN] = 1;
                    gameThreeClueButton.textContent = `Clue (${guessesRemaining})`;
                    gameThreeClueButton.style.borderColor = `magenta`;
                }
            }
            if (guessesRemaining === 0) {
                gameThreeClueButton.style.color = `darkgray`;
            }
        });
        gameThreeClueButton.addEventListener(`mouseup`,function(){
            if (correctAnswers < 1) {
                gameThreeChallengeTextP.textContent = currentChallenge.challenge;
                gameThreeClueButton.style.borderColor = `black`;
                gameThreeClueButton.style.color = `black`;
            }
            if (guessesRemaining === 0) {
                gameThreeClueButton.style.color = `darkgray`;
            }
        });
        primaryInterface.addEventListener(`mouseup`,function(){
            if (correctAnswers < 1) {
                gameThreeChallengeTextP.textContent = currentChallenge.challenge;
                gameThreeClueButton.style.borderColor = `black`;
                gameThreeClueButton.style.color = `black`;
            }
            if (guessesRemaining === 0) {
                gameThreeClueButton.style.color = `darkgray`;
            }
        });
        //Incorrect guesses paragraph element.
        const gameThreeIncorrectGuesses = document.createElement(`p`);
        gameThreeIncorrectGuesses.id = `gameThreeIncorrectGuesses`;
        gameThreeIncorrectGuesses.textContent = `Incorrect Guesses: `;
        primaryInterface.appendChild(gameThreeIncorrectGuesses);
        //Total guesses paragraph element.
        const gameThreeTotalGuesses = document.createElement(`p`);
        gameThreeTotalGuesses.id = `gameThreeTotalGuesses`;
        gameThreeTotalGuesses.textContent = `Total Guesses: 0`;
        primaryInterface.appendChild(gameThreeTotalGuesses);
        //Details button.
        const detailsGameThree = document.createElement(`button`);
        detailsGameThree.textContent = `Details`;
        detailsGameThree.id = `detailsGameThree`;
        primaryInterface.appendChild(detailsGameThree);
        //Details pop-up.
        const gameThreeDetails = document.createElement(`div`);
        gameThreeDetails.id = `gameThreeDetails`;
        gameThreeDetails.textContent = `Enter a case-sensitive solution for the missing JavaScript code represented by underscores. Or click and hold Clue for a hint. Then press Submit to see if you're correct.`;
        //Paragraph element for the performance stats.
        const gameThreeStatsP = document.createElement(`p`);
        gameThreeStatsP.id = `gameThreeStatsP`;
        gameThreeDetails.appendChild(gameThreeStatsP);
        //Details pop-up close.
        const gameThreeDetailsClose = document.createElement(`p`);
        gameThreeDetailsClose.textContent = `x`;
        gameThreeDetailsClose.id = `gameThreeDetailsClose`;
        gameThreeDetails.appendChild(gameThreeDetailsClose);
        //Event listener for opening and populating the Details pop-up.
        detailsGameThree.addEventListener(`click`,function(){
            display.appendChild(gameThreeDetails);
            const retrievedMaster = localStorage.getItem(`master`);
            const retrievedMasterParsed = JSON.parse(retrievedMaster);
            //Function for calculating the Correct Guess Rate.
            function correctGuessRate() {
                const temp = (retrievedMasterParsed.gameThree.totalCorrectGuesses / retrievedMasterParsed.gameThree.totalGuesses) * 100;
                if (isNaN(temp)) {
                    return 0;
                }
                return temp;
            }
            gameThreeStatsP.textContent = `Total Guesses: ${retrievedMasterParsed.gameThree.totalGuesses}, Total Clues Given: ${retrievedMasterParsed.gameThree.clueClicks} and Correct Guess Rate: ${correctGuessRate().toFixed(2)}%`;
            //Event listener for closing the Details pop-up.
            gameThreeDetailsClose.addEventListener(`click`,function(){
                display.removeChild(gameThreeDetails);
            });
        });
    }
    //////////The fourth JavaScript learning game; matching squares.
    function makeGameFour(arg0,arg1) {
        //Local storage assurance.
        makeMaster();
        //Changing certain CSS and HTML properties to accomodate the creation of a new game.
        golden(arg0);
        arg1.style.backgroundColor = `gold`;
        display.innerHTML = ``;
        //Primary interface DIV.
        const primaryInterface = document.createElement(`div`);
        primaryInterface.classList.add(`primaryInterface`);
        display.appendChild(primaryInterface);
        //H3 title element for game.
        const g4H3Title = document.createElement(`h3`);
        g4H3Title.textContent = `Matching Squares`;
        primaryInterface.appendChild(g4H3Title);
        //Next game button.
        const gameFourNextButton = document.createElement(`button`);
        gameFourNextButton.id = `gameFourNextButton`;
        gameFourNextButton.innerText = `Next`;
        gameFourNextButton.addEventListener(`click`,function(){
            makeGameFour(arg0,arg1);
        });
        primaryInterface.appendChild(gameFourNextButton);
        //Library.
        const preLibrary = [
            {
                display:`++`
            },{
                display:`<=`
            },{
                display:`--`
            },{
                display:`>=`
            },{
                display:`===`
            },{
                display:`!=`
            },{
                display:`!==`
            },{
                display:`==`
            },{
                display:`*=`
            },{
                display:`+=`
            },{
                display:`-=`
            },{
                display:`+`
            },{
                display:`-`
            },{
                display:`*`
            },{
                display:`/`
            },{
                display:`%`
            },{
                display:`||`
            },{
                display:`&&`
            },{
                display:`/=`
            },{
                display:`null`
            },{
                display:`var`
            },{
                display:`let`
            },{
                display:`const`
            },{
                display:`%=`
            },{
                display:`NaN`
            },{
                display:`isNaN()`
            },{
                display:`false`
            },{
                display:`true`
            },{
                display:`typeof`
            },{
                display:`new`
            },{
                display:`Date()`
            },{
                display:`;`
            },{
                display:`delete`
            },{
                display:`if`
            },{
                display:`else`
            },{
                display:`else if`
            },{
                display:`return`
            },{
                display:`switch`
            },{
                display:`break`
            },{
                display:`continue`
            },{
                display:`throw`
            },{
                display:`//`
            },{
                display:`while`
            },{
                display:`do`
            },{
                display:`for`
            },{
                display:`length`
            },{
                display:`prototype`
            },{
                display:`undefined`
            },{
                display:`function`
            },{
                display:`=>`
            },{
                display:`=`
            },{
                display:`[ ]`
            },{
                display:`( )`
            },{
                display:`{ }`
            },{
                display:`Map()`
            },{
                display:`Set()`
            },{
                display:`Promise()`
            },{
                display:`...`
            },{
                display:`get`
            },{
                display:`set`
            },{
                display:`" "`
            },{
                display:`' '`
            },{
                display:`?`
            },{
                display:`:`
            },{
                display:"` `"
            }
        ];
        //Selecting eight random objects from the Library array.
        let almostLibrary = [];
        for (let i = 0; i < 8; i++) {
            let rN = Math.floor(Math.random() * preLibrary.length);
            while (almostLibrary.some(l => l === preLibrary[rN])) {
                rN = Math.floor(Math.random() * preLibrary.length);
            }
            almostLibrary.push(preLibrary[rN]);
        }
        const library = almostLibrary;
        //Generating squares, variables and support functions.
        const squareHolder = document.createElement(`div`);
        squareHolder.id = `squareHolder`;
        primaryInterface.appendChild(squareHolder);
        squareHolder.style.height = `${squareHolder.offsetWidth}px`;
        function hoveringOver(){
            this.style.cursor = `pointer`;
            this.style.backgroundColor = `gold`;
        }
        function hOActivated(){
            this.style.cursor = `default`;
            this.style.backgroundColor = `lightgray`;
        }
        function hoveringOut(){
            this.style.cursor = `default`;
            this.style.backgroundColor = `white`;
        }
        let spreadOne = [];
        let spreadTwo = [];
        let activated = [];
        let activeSquares = [];
        let gameFourGuesses = 0;
        const retrievedMaster = localStorage.getItem(`master`);
        const retrievedMasterParsed = JSON.parse(retrievedMaster);
        //Generating squares, the main for loop.
        for (let i = 0; i < 16; i++) {
            activated[i] = 0;
            const tempSquare = document.createElement(`div`);
            tempSquare.classList.add(`tempSquares`);
            squareHolder.appendChild(tempSquare);
            tempSquare.style.width = `25%`;
            tempSquare.style.height = `25%`;
            const tempSquareP = document.createElement(`p`);
            if (i % 2 === 0) {
                let rN = Math.floor(Math.random() * library.length);
                while (spreadOne.some(s => s === library[rN].display)) {
                    rN = Math.floor(Math.random() * library.length);
                }
                tempSquareP.innerText = library[rN].display;
                tempSquare.appendChild(tempSquareP);
                tempSquareP.style.display = `none`;
                spreadOne.push(library[rN].display);
            }
            if (i % 2 === 1) {
                let rN = Math.floor(Math.random() * library.length);
                while (spreadTwo.some(s => s === library[rN].display)) {
                    rN = Math.floor(Math.random() * library.length);
                }
                tempSquareP.innerText = library[rN].display;
                tempSquare.appendChild(tempSquareP);
                tempSquareP.style.display = `none`;
                spreadTwo.push(library[rN].display);
            }
            function matched(){
                if (activeSquares.length < 2) {
                    gameFourGuesses++;
                    if (activeSquares.length === 0 && !activated[i]) {
                        activeSquares.push({
                            display:tempSquareP.innerText,
                            child:i,
                            elem:tempSquareP
                        });
                        tempSquareP.style.display = `block`;
                        return;
                    }
                    if (activeSquares.length === 1 && activeSquares[0].display !== tempSquare.children[0].innerText && activeSquares[0].child !== i && (!activated[i] && !activated[activeSquares[0].child])) {
                        tempSquareP.style.display = `block`;
                        activeSquares.push({
                            display:tempSquareP.innerText,
                            child:i,
                            elem:tempSquareP
                        });
                        setTimeout(function(){
                            tempSquareP.style.display = `none`;
                            activeSquares[0].elem.style.display = `none`;
                            activeSquares = [];
                        },500);
                        return;
                    }
                    if (activeSquares.length === 1 && activeSquares[0].display === tempSquare.children[0].innerText && activeSquares[0].child !== i && (!activated[i] && !activated[activeSquares[0].child])) {
                        activeSquares.push({
                            display:tempSquareP.innerText,
                            child:i,
                            elem:tempSquareP
                        });
                        this.style.backgroundColor = `lightgray`;
                        activeSquares[1].elem.style.display = `block`;
                        squareHolder.children[activeSquares[0].child].style.backgroundColor = `lightgray`;
                        activeSquares[0].elem.parentNode.removeEventListener(`click`, matched);
                        activeSquares[1].elem.parentNode.removeEventListener(`click`, matched);
                        activeSquares[0].elem.parentNode.removeEventListener(`mouseover`, hoveringOver);
                        activeSquares[1].elem.parentNode.removeEventListener(`mouseover`, hoveringOver);
                        activeSquares[0].elem.parentNode.removeEventListener(`mouseout`, hoveringOut);
                        activeSquares[1].elem.parentNode.removeEventListener(`mouseout`, hoveringOut);
                        activeSquares[0].elem.parentNode.addEventListener(`mouseover`, hOActivated);
                        activeSquares[1].elem.parentNode.addEventListener(`mouseover`, hOActivated);
                        activeSquares[0].elem.parentNode.addEventListener(`mouseout`, hOActivated);
                        activeSquares[1].elem.parentNode.addEventListener(`mouseout`, hOActivated);
                        activated[i] = 1;
                        activated[activeSquares[0].child] = 1;
                        activeSquares = [];
                        if (activated.every(a => a === 1)) {
                            retrievedMasterParsed.gameFour.totalWins++;
                            retrievedMasterParsed.gameFour.totalGuesses += gameFourGuesses;
                            localStorage.setItem("master", JSON.stringify(retrievedMasterParsed));
                            squareHolder.style.border = `1px solid lime`;
                            gameFourNextButton.style.border = `1px solid lime`;
                            for (let ch in squareHolder.children) {
                                squareHolder.children[ch].style.border = `1px solid darkgray`;
                            }
                        }
                        return;
                    }
                }
            }
            tempSquare.addEventListener(`click`, matched);
            tempSquare.addEventListener(`mouseover`, hoveringOver);
            tempSquare.addEventListener(`mouseout`, hoveringOut);
        }
        //Details button.
        const detailsGameFour = document.createElement(`button`);
        detailsGameFour.textContent = `Details`;
        detailsGameFour.id = `detailsGameFour`;
        primaryInterface.appendChild(detailsGameFour);
        //Details pop-up.
        const gameFourDetails = document.createElement(`div`);
        gameFourDetails.id = `gameFourDetails`;
        gameFourDetails.textContent = `Click on different game squares, thereby revealing JavaScript code, until they are all matched as pairs of the initially hidden content.`;
        //Paragraph element for the performance stats.
        const gameFourStatsP = document.createElement(`p`);
        gameFourStatsP.id = `gameFourStatsP`;
        gameFourDetails.appendChild(gameFourStatsP);
        //Details pop-up close.
        const gameFourDetailsClose = document.createElement(`p`);
        gameFourDetailsClose.textContent = `x`;
        gameFourDetailsClose.id = `gameFourDetailsClose`;
        gameFourDetails.appendChild(gameFourDetailsClose);
        //Event listener for opening and populating the Details pop-up.
        detailsGameFour.addEventListener(`click`,function(){
            display.appendChild(gameFourDetails);
            const retrievedMaster = localStorage.getItem(`master`);
            const retrievedMasterParsed = JSON.parse(retrievedMaster);
            //Function for calculating the Average Guesses Per Game.
            function guessesPerGame() {
                const temp = retrievedMasterParsed.gameFour.totalGuesses / retrievedMasterParsed.gameFour.totalWins;
                if (isNaN(temp)) {
                    return 0;
                }
                return temp;
            }
            gameFourStatsP.textContent = `Total Wins: ${retrievedMasterParsed.gameFour.totalWins} and Average Guesses Per Game: ${guessesPerGame().toFixed(2)}`;
            //Event listener for closing the Details pop-up.
            gameFourDetailsClose.addEventListener(`click`,function(){
                display.removeChild(gameFourDetails);
            });
        });
        window.addEventListener(`resize`,function(){
            squareHolder.style.height = `${squareHolder.offsetWidth}px`;
        });
    }
    //////////The fifth JavaScript learning game; drag and drop interface for rearranging different scrambled JavaScript expressions.
    function makeGameFive(arg0,arg1) {
        //Local storage assurance.
        makeMaster();
        //Changing certain CSS and HTML properties to accomodate the creation of a new game.
        golden(arg0);
        arg1.style.backgroundColor = `gold`;
        display.innerHTML = ``;
        //Variables for each game.
        let movesMade = 0;
        //Inner support functions.
        function guessesPerGame(z) {
            const temp =  z.gameFive.totalGuesses / z.gameFive.totalWins;
            if (isNaN(temp)) {
                return 0;
            }
            return temp;
        }
        function calcDiff(s) {
            const temp = (movesMade / s) * 100;
            if (!isFinite(temp)) {
                return 0;
            }
            return temp;
        }
        //Primary interface DIV.
        const primaryInterface = document.createElement("div");
        primaryInterface.classList.add("primaryInterface");
        display.appendChild(primaryInterface);
        //H3 title element for game.
        const g5H3Title = document.createElement("h3");
        g5H3Title.textContent = `Code Re-Arrangement`;
        g5H3Title.id = `g5H3Title`;
        primaryInterface.appendChild(g5H3Title);
        //Re-arranging DIV.
        const gameFiveReDIV = document.createElement(`div`);
        gameFiveReDIV.id = `gameFiveReDIV`;
        primaryInterface.appendChild(gameFiveReDIV);
        //Total moves paragraph element.
        const gameFiveMovesP = document.createElement(`p`);
        gameFiveMovesP.innerText = `Total Moves: 0`;
        gameFiveMovesP.id = `gameFiveMovesP`;
        primaryInterface.appendChild(gameFiveMovesP);
        //Difference from average moves per game.
        const gameFiveDiffP = document.createElement(`p`);
        gameFiveDiffP.innerText = `Percentage Of Average: 0.00%`;
        gameFiveDiffP.id = `gameFiveDiffP`;
        primaryInterface.appendChild(gameFiveDiffP);
        //Next game button.
        const gameFiveNextButton = document.createElement(`button`);
        gameFiveNextButton.id = `gameFiveNextButton`;
        gameFiveNextButton.innerText = `Next`;
        gameFiveNextButton.addEventListener(`click`,function(){
            makeGameFive(arg0,arg1);
        });
        primaryInterface.appendChild(gameFiveNextButton);
        //Library of code to re-arrange.
        const aLibrary = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
        const letter = aLibrary[Math.floor(Math.random() * aLibrary.length)];
        const library = [
            {
                code:`${Math.floor(Math.random() * 50) + 50} >= ${Math.floor(Math.random() * 25)} ;`
            },{
                code:`${Math.floor(Math.random() * 25)} <= ${Math.floor(Math.random() * 50) + 50} ;`
            },{
                code:`const myNum = ${Math.floor(Math.random() * 50)} ;`
            },{
                code:`${Math.floor(Math.random() * 25)} < ${Math.floor(Math.random() * 100) + 100} ;`
            },{
                code:`${Math.floor(Math.random() * 100) + 100} > ${Math.floor(Math.random() * 25)} ;`
            },{
                code:`let myNum = ${Math.floor(Math.random() * 100) + 100} ;`
            },{
                code:`var myNum = ${Math.floor(Math.random() * 100) + 100} ;`
            },{
                code:`let ${letter} = () => '${Math.floor(Math.random() * 1000)}' ;`
            },{
                code:`let ${letter} = () => ${letter}++ ;`
            },{
                code:`let num = !${letter} || ${Math.floor(Math.random() * 100)} ;`
            },{
                code:`if ( ${letter} ) { ${letter}++ ; }`
            },{
                code:`else if ( ${letter} ) { ${letter}++; }`
            },{
                code:`else { ${letter}-- ; }`
            },{
                code:`while ( !${letter} ) { ${letter}++ ; }`
            },{
                code:`myFunction ( ...${letter} ) ;`
            },{
                code:`let my${letter.toUpperCase()} = ${letter} => ${letter}++ ;`
            },{
                code: `isNaN ( ${letter} ) ;`
            },{
                code: `isFinite ( ${letter} ) ;`
            },{
                code: `let ${letter} = [ ${Math.floor(Math.random() * 25)} ] ;`
            },{
                code: `let ${letter} = { } ;`
            },{
                code: `const ${letter} = [ ${Math.floor(Math.random() * 25)} ] ;`
            },{
                code: `const ${letter} = { } ;`
            },{
                code: `var ${letter} = [ ${Math.floor(Math.random() * 25)} ] ;`
            },{
                code: `var ${letter} = { } ;`
            },{
                code: `typeof '${letter}' ;`
            },{
                code: "typeof `" + letter + "` ;"
            },{
                code: `typeof ${Math.floor(Math.random() * 25)} ;`
            },{
                code: `typeof [ "${letter}" ] ;`
            },{
                code: `typeof [ ${Math.floor(Math.random() * 25)} ] ;`
            },{
                code: `typeof { } ;`
            },{
                code: `typeof myVar ;`
            },{
                code: `typeof null ;`
            },{
                code: `typeof "${letter}" ;`
            }
        ];
        //Choosing and formatting a random object from the Library array.
        const codeChoice = library[Math.floor(Math.random() * library.length)].code.split(" ").reduce(function(total,p,ind){
            total.push(
                {
                    item:p,
                    position:ind
                }
            );
            return total;
        },[]);
        //Scramble the code.
        let scrambledCode = codeChoice.sort(randomize);
        while (scrambledCode.some((s,ind) => s.position === ind)) {
            scrambledCode = scrambledCode.sort(randomize);
        }
        //Drag And Drop interface functions.
        function dragStart(e){
            e.target.style.color = `darkgray`;
            e.target.style.border = `1px solid darkgray`;
            e.dataTransfer.setData(`id`, e.target.id);
        }
        function dragFunc(e){
            e.preventDefault();
        }
        function dragOver(e){
            e.preventDefault();
            const id = e.dataTransfer.getData(`id`);
            if (e.target.id !== id) {
                const currentObj = e.target.getBoundingClientRect();
                const x = e.offsetX;
                const refNode = document.querySelector(`#${e.target.id}`);
                if (x <= (currentObj.width / 2)) {
                    refNode.style.background = `linear-gradient(to right, rgba(255,215,0,0.67), white, white, white)`;
                } else {
                    refNode.style.background = `linear-gradient(to left, rgba(255,215,0,0.67), white, white, white)`;
                }
            }
        }
        function dragLeave(e){
            e.preventDefault();
            const id = e.dataTransfer.getData(`id`);
            if (e.target.id !== id) {
                e.target.style.border = `1px solid black`;
                e.target.style.background = `white`;
            }
        }
        function onDrop(e){
            e.preventDefault();
            const id = e.dataTransfer.getData(`id`);
            if (e.target.id !== id) {
                movesMade++;
                const currentObj = e.target.getBoundingClientRect();
                const x = e.offsetX;
                const newNode = document.querySelector(`#${id}`);
                const refNode = document.querySelector(`#${e.target.id}`);
                if (x <= (currentObj.width / 2)) {
                    gameFiveReDIV.insertBefore(newNode, refNode);
                } else {
                    gameFiveReDIV.insertBefore(newNode, refNode.nextSibling);
                }
                refNode.style.background = `white`;
                gameFiveMovesP.innerText = `Total Moves: ${movesMade}`;
                const retrievedMaster = localStorage.getItem(`master`);
                const retrievedMasterParsed = JSON.parse(retrievedMaster);
                gameFiveDiffP.innerText = `Percentage Of Average: ${calcDiff(guessesPerGame(retrievedMasterParsed)).toFixed(2)}%`;
                const chs = gameFiveReDIV.children;
                let complete = 1;
                for (let q = 0; q < codeChoice.length; q++) {
                    if (chs[q].children[0].innerText !== String(q)) {
                        complete = 0;
                    }
                }
                if (complete === 1) {
                    retrievedMasterParsed.gameFive.totalWins++;
                    retrievedMasterParsed.gameFive.totalGuesses += movesMade;
                    localStorage.setItem("master", JSON.stringify(retrievedMasterParsed));
                    gameFiveReDIV.style.borderBottom = `1px solid lime`;
                    gameFiveNextButton.style.border = `1px solid lime`;
                    for (let c in chs) {
                        chs[c].removeEventListener(`dragstart`, dragStart);
                        chs[c].removeEventListener(`drag`, dragFunc);
                        chs[c].removeEventListener(`dragover`, dragOver);
                        chs[c].removeEventListener(`dragleave`, dragLeave);
                        chs[c].removeEventListener(`drop`, onDrop);
                        chs[c].removeEventListener(`dragend`, dragEnd);
                        chs[c].style.color = `black`;
                        chs[c].style.border = `1px solid black`;
                        chs[c].style.background = `white`;
                        chs[c].draggable = false;
                        chs[c].addEventListener(`mouseover`,function(){
                            this.style.cursor = `default`;
                        });
                    }
                }
            }
        }
        function dragEnd(e){
            e.target.style.color = `black`;
            e.target.style.border = `1px solid black`;
        }
        //Populating the re-arranging DIV with the scrambled code as blocks.
        for (let sC in scrambledCode) {
            //The code div itself.
            const temp = document.createElement(`div`);
            temp.id = `sCodeBlock${sC}`;
            temp.draggable = true;
            temp.classList.add(`scrambledCodeBlock`);
            temp.innerText = scrambledCode[sC].item;
            //Tracking element.
            const invisiP = document.createElement(`p`);
            invisiP.innerText = scrambledCode[sC].position;
            invisiP.style.display = `none`;
            temp.appendChild(invisiP);
            gameFiveReDIV.appendChild(temp);
            //Adding event listeners to enable drag-and-drop features.
            temp.addEventListener(`dragstart`, dragStart);
            temp.addEventListener(`drag`, dragFunc);
            temp.addEventListener(`dragover`, dragOver);
            temp.addEventListener(`dragleave`, dragLeave);
            temp.addEventListener(`drop`, onDrop);
            temp.addEventListener(`dragend`, dragEnd);
        }
        //Details button.
        const detailsGameFive = document.createElement(`button`);
        detailsGameFive.textContent = `Details`;
        detailsGameFive.id = `detailsGameFive`;
        primaryInterface.appendChild(detailsGameFive);
        //Details pop-up.
        const gameFiveDetails = document.createElement(`div`);
        gameFiveDetails.id = `gameFiveDetails`;
        gameFiveDetails.textContent = `Rearrange the scrambled JavaScript code by dragging and dropping each box until a meaningful statement is produced.`;
        //Paragraph element for the performance stats.
        const gameFiveStatsP = document.createElement(`p`);
        gameFiveStatsP.id = `gameFiveStatsP`;
        gameFiveDetails.appendChild(gameFiveStatsP);
        //Details pop-up close.
        const gameFiveDetailsClose = document.createElement(`p`);
        gameFiveDetailsClose.textContent = `x`;
        gameFiveDetailsClose.id = `gameFiveDetailsClose`;
        gameFiveDetails.appendChild(gameFiveDetailsClose);
        //Event listener for opening and populating the Details pop-up.
        detailsGameFive.addEventListener(`click`,function(){
            display.appendChild(gameFiveDetails);
            //Accessing stats.
            const retrievedMaster = localStorage.getItem(`master`);
            const retrievedMasterParsed = JSON.parse(retrievedMaster);
            //Displaying current stats.
            gameFiveStatsP.textContent = `Total Wins: ${retrievedMasterParsed.gameFive.totalWins} and Average Moves Per Game: ${guessesPerGame(retrievedMasterParsed).toFixed(2)}`;
            //Event listener for closing the Details pop-up.
            gameFiveDetailsClose.addEventListener(`click`,function(){
                display.removeChild(gameFiveDetails);
            });
        });
    }
    //////////The sixth JavaScript learning game; clicking on and moving circles that display facts (or something else) related to JavaScript.
    function makeGameSix(arg0,arg1) {
        //Local storage assurance.
        makeMaster();
        //Changing certain CSS and HTML properties to accomodate the creation of a new game.
        golden(arg0);
        arg1.style.backgroundColor = `gold`;
        display.innerHTML = ``;
        //Primary interface DIV.
        const primaryInterface = document.createElement("div");
        primaryInterface.classList.add("primaryInterface");
        display.appendChild(primaryInterface);
        //H3 title element for game.
        const g6H3Title = document.createElement("h3");
        g6H3Title.textContent = `JavaScript Fact Finding`;
        primaryInterface.appendChild(g6H3Title);
        //Next game button.
        const gameSixNextButton = document.createElement(`button`);
        gameSixNextButton.id = `gameSixNextButton`;
        gameSixNextButton.innerText = `Next`;
        gameSixNextButton.addEventListener(`click`,function(){
            makeGameSix(arg0,arg1);
        });
        primaryInterface.appendChild(gameSixNextButton);
        //Library of JavaScript facts.
        const library = [
            `JavaScript was released in 1995.`,
            `Brendan Eich invented JavaScript while working at Netscape.`,
            `JavaScript is a loosely typed programming language.`,
            `JavaScript was referred to as "Mocha" by Netscape during its initial development.`,
            `A JavaScript function is referred to as "recursive" when it calls itself.`,
            `Developers who "debug" their code, are looking for errors within and improvements for it.`,
            `Any JavaScript value that is considered true can be referred to as "truthy".`,
            `Any JavaScript value that is considered false can be referred to as "falsy".`,
            `JavaScript does not include an Integer type.`,
            `Repeatedly calling one or more JavaScript method(s) on an object via a single line of code is referred to as "chaining".`,
            `JavaScript was originally inspired by the Java, Scheme and Self programming languages.`,
            `Scope explicitly manages variable accessibility in JavaScript.`,
            `JavaScript was initially in development for ten days.`,
            `The outermost scope in JavaScript is commonly referred to as "Global".`,
            `Oracle currently owns the trademark for JavaScript.`,
            `JavaScript strings are composed of Unicode characters.`,
            `JavaScript relies on a single processing thread.`,
            `JavaScript values can be stored in and represented by variables.`,
            `JavaScript was originally invented for both the server and browser.`,
            `ECMAScript is the standard which JavaScript is based on.`,
            `JavaScript is a high-level programming language.`,
            `Asynchronous programming allows for multiple things to happen at the same time.`,
            `Google's JavaScript engine is known as "V8".`,
            `In JavaScript, generator functions can return multiple values on demand.`,
            `ECMAScript 6 was released in 2015.`,
            `A promise is a JavaScript object that represents the potential completion of an asychronous operation and the resulting value.`,
            `JavaScript functions that are object properties are commonly referred to as "methods".`,
            `Modern browsers provide prompts, alerts and confirmations as means for interacting with users.`,
            `A distinct piece of a JavaScript program is commonly referred to as a "module".`,
            `Mozilla's JavaScript engine is known as "SpiderMonkey".`,
            `JavaScript uses prototypical inheritance.`,
            `The label of "coercion" is commonly given to the automatic or implicit conversion of JavaScrpt values from one type to another.`,
            `An instruction to perform a specific action, in JavaScript, is commonly referred to as a "statement".`,
            `JavaScript includes unary, binary and ternary operators.`,
            `A function that is passed as an argument of another function is commonly referred to as a "callback".`
        ];
        //The play field.
        const playField = document.createElement(`div`);
        playField.id = `playField`;
        primaryInterface.appendChild(playField);
        //Support functions.
        function rN() {
            return Math.floor(Math.random() * 100);
        }
        function libraryChoose() {
            return Math.floor(Math.random() * library.length);
        }
        function movesPerGame(x) {
            const temp = x.gameSix.totalMoves / x.gameSix.totalWins;
            if (isNaN(temp)) {
                return 0;
            }
            return temp;
        }
        //Game variables.
        let zInd = 100000;
        let clickedOn = [];
        let isActive = true;
        let factsChosen = [];
        //Creating the ten different interactive circles.
        for (let i = 0; i < 10; i++) {
            clickedOn.push({
                id:`circle${i}`,
                clicked:0
            });
            const temp = document.createElement(`div`);
            temp.classList.add(`gameSixCircles`);
            temp.id = `circle${i}`;
            temp.style.width = `50px`;
            temp.style.height = `50px`;
            temp.style.left = `${rN()}%`;
            temp.style.top = `${rN()}%`;
            playField.appendChild(temp);
            //Correcting any circle which was initially positioned outside of the play field.
            while (temp.offsetLeft + 50 > playField.offsetWidth - 5 || temp.offsetLeft < 5) {
                temp.style.left = `${rN()}%`;
            }
            while (temp.offsetTop + 50 > playField.offsetHeight - 5 || temp.offsetTop < 5) {
                temp.style.top = `${rN()}%`;
            }
            //Choosing a random fact text and generating the relevant paragraph element.
            let factChooser = libraryChoose();
            while (factsChosen.some(f => f === factChooser)) {
                factChooser = libraryChoose();
            }
            factsChosen.push(factChooser);
            const fact = library[factChooser];
            const factP = document.createElement(`p`);
            factP.innerText = fact;
            factP.classList.add(`factP`);
            playField.appendChild(factP);
            //Movement variables.
            let positioningExtra = [0,0];
            let mouseIsDown = false;
            let mouseIsHovering = false;
            //Movement functions.
            function onMouseOver() {
                if (isActive) {
                    this.style.cursor = `grab`;
                    this.style.background = `rgba(255,223,0,0.67)`;
                    mouseIsHovering = true;
                } else {
                    this.style.cursor = `default`;
                    this.style.background = `rgba(255,255,255,0.67)`;
                }
            }
            function onMouseOut() {
                this.style.background = `rgba(255,255,255,0.67)`;
                mouseIsHovering = false;
            }
            function onMouseDown(e) {
                if (e.button == 0) {
                    //Setting the initial values for an active circle.
                    if (isActive) {
                        if (mouseIsHovering) {
                            temp.style.cursor = `grabbing`;
                        }
                        mouseIsDown = true;
                        factP.style.display = `block`;
                        const x = this.offsetLeft - e.clientX;
                        const y = this.offsetTop - e.clientY;
                        positioningExtra = [x,y];
                        this.style.zIndex = `${zInd += 1000}`;
                        this.style.backgroundColor = `rgba(255,223,0,0.67)`;
                    }
                }
            }
            function onMouseMove(e) {
                e.preventDefault();
                if (e.button == 0) {
                    //Making sure the background remains gold while the mouse is hovering over it.
                    if (isActive && mouseIsHovering) {
                        let playFieldObj = playField.getBoundingClientRect();
                        if (temp.offsetLeft + 50 < playFieldObj.width && temp.offsetLeft > 0) {
                            temp.style.backgroundColor = `rgba(255,223,0,0.67)`;
                        }
                        if (temp.offsetTop + 50 < playFieldObj.height && temp.offsetTop > 0) {
                            temp.style.backgroundColor = `rgba(255,223,0,0.67)`;
                        }
                    }
                    //Conditions for a loss are when a circle is dragged to any of the play field's edges.
                    if (mouseIsDown && isActive) {
                        let playFieldObj = playField.getBoundingClientRect();
                        if (temp.offsetLeft + 50 < playFieldObj.width && temp.offsetLeft > 0) {
                            const translation = (e.clientX + positioningExtra[0]) / playFieldObj.width;
                            temp.style.left = `${translation * 100}%`;
                            temp.style.cursor = `grabbing`;
                        } else {
                            playField.style.backgroundColor = `lightgray`;
                            playField.style.border = `1px solid darkgray`;
                            playField.innerHTML = `Please Try Again`;
                            gameSixNextButton.style.border = `1px solid lime`;
                            isActive = false;
                        }
                        if (temp.offsetTop + 50 < playFieldObj.height && temp.offsetTop > 0) {
                            const translation = (e.clientY + positioningExtra[1]) / playFieldObj.height;
                            temp.style.top  = `${translation * 100}%`;
                            temp.style.cursor = `grabbing`;
                        } else {
                            playField.style.backgroundColor = `lightgray`;
                            playField.style.border = `1px solid darkgray`;
                            playField.innerHTML = `Please Try Again`;
                            gameSixNextButton.style.border = `1px solid lime`;
                            isActive = false;
                        }
                    }
                }
            }
            function onMouseUp(e) {
                if (e.button == 0) {
                    mouseIsDown = false;
                    this.style.border = `darkgray`;
                    this.style.cursor = `grab`;
                    factP.style.display = `none`;
                    if (!mouseIsHovering) {
                        this.style.backgroundColor = `rgba(255,255,255,0.67)`;
                        this.style.cursor = `default`;
                    }
                    //Adding a click count for the relevant circle.
                    clickedOn.forEach(function(c){
                        if (c.id === temp.id) {
                            c.clicked++;
                        }
                    });
                    //Checking to see if each circle has been clicked on.
                    if (clickedOn.every(c => c.clicked >= 1)) {
                        isActive = false;
                        const finalClickCount = clickedOn.reduce(function(total,c){
                            total += c.clicked;
                            return total;
                        },0);
                        //Changing CSS properties to indicate a win.
                        playField.style.border = `1px solid lime`;
                        gameSixNextButton.style.border = `1px solid lime`;
                        //Accessing and updating stats.
                        const retrievedMaster = localStorage.getItem(`master`);
                        const retrievedMasterParsed = JSON.parse(retrievedMaster);
                        retrievedMasterParsed.gameSix.totalWins++;
                        retrievedMasterParsed.gameSix.totalMoves += finalClickCount;
                        localStorage.setItem("master", JSON.stringify(retrievedMasterParsed));
                    }
                }
            }
            //Movement event listeners.
            temp.addEventListener(`mouseover`, onMouseOver);
            temp.addEventListener(`mouseout`, onMouseOut);
            temp.addEventListener(`mousedown`, onMouseDown);
            temp.addEventListener(`mouseup`, onMouseUp);
            playField.addEventListener(`mousemove`, onMouseMove);
        }
        //Details button.
        const detailsGameSix = document.createElement(`button`);
        detailsGameSix.textContent = `Details`;
        detailsGameSix.id = `detailsGameSix`;
        primaryInterface.appendChild(detailsGameSix);
        //Details pop-up.
        const gameSixDetails = document.createElement(`div`);
        gameSixDetails.id = `gameSixDetails`;
        gameSixDetails.textContent = `Uncover the JavaScript facts by clicking on and moving different circles; until all have been interacted with. But beware of colliding circles against the edges.`;
        //Paragraph element for the performance stats.
        const gameSixStatsP = document.createElement(`p`);
        gameSixStatsP.id = `gameSixStatsP`;
        gameSixDetails.appendChild(gameSixStatsP);
        //Details pop-up close.
        const gameSixDetailsClose = document.createElement(`p`);
        gameSixDetailsClose.textContent = `x`;
        gameSixDetailsClose.id = `gameSixDetailsClose`;
        gameSixDetails.appendChild(gameSixDetailsClose);
        //Event listener for opening and populating the Details pop-up.
        detailsGameSix.addEventListener(`click`,function(){
            gameSixDetails.style.zIndex = `${zInd + 10000000}`;
            display.appendChild(gameSixDetails);
            //Accessing stats.
            const retrievedMaster = localStorage.getItem(`master`);
            const retrievedMasterParsed = JSON.parse(retrievedMaster);
            //Displaying current stats.
            gameSixStatsP.textContent = `Total Wins: ${retrievedMasterParsed.gameSix.totalWins} and Average Moves Per Game: ${movesPerGame(retrievedMasterParsed).toFixed(2)}`;
            //Event listener for closing the Details pop-up.
            gameSixDetailsClose.addEventListener(`click`,function(){
                display.removeChild(gameSixDetails);
            });
        });
    }
    //////////The seventh JavaScript learning game; timed typing of JavaScript related words.
    function makeGameSeven(arg0,arg1) {
        //Local storage assurance.
        makeMaster();
        //Changing certain CSS and HTML properties to accomodate the creation of a new game.
        golden(arg0);
        arg1.style.backgroundColor = `gold`;
        display.innerHTML = ``;
        //Primary interface DIV.
        const primaryInterface = document.createElement("div");
        primaryInterface.classList.add("primaryInterface");
        display.appendChild(primaryInterface);
        //H3 title element for game.
        const g7H3Title = document.createElement("h3");
        g7H3Title.textContent = `Timed Typing`;
        primaryInterface.appendChild(g7H3Title);
        //Next game button.
        const gameSevenNextButton = document.createElement(`button`);
        gameSevenNextButton.id = `gameSevenNextButton`;
        gameSevenNextButton.innerText = `Next`;
        gameSevenNextButton.addEventListener(`click`,function(){
            makeGameSeven(arg0,arg1);
        });
        primaryInterface.appendChild(gameSevenNextButton);
        //Library.
        const library = [
            "prototype",
            "class",
            "invoked",
            "function",
            "scope",
            "closure",
            "module",
            "hoisting",
            "currying",
            "memoization",
            "method",
            "polymorphism",
            "asynchronous",
            "callback",
            "promise",
            "javascript",
            "developer",
            "console",
            "code",
            "variable",
            "type",
            "data",
            "conversion",
            "comparison",
            "conditional",
            "operator",
            "loop",
            "expression",
            "function",
            "browser",
            "debugging",
            "comment",
            "polyfill",
            "object",
            "constructor",
            "chaining",
            "primitive",
            "array",
            "number",
            "iterable",
            "destructuring",
            "json",
            "recursion",
            "stack",
            "parameter",
            "syntax",
            "global",
            "binding",
            "getter",
            "setter",
            "inheritance",
            "property",
            "static",
            "mixin",
            "error",
            "handling",
            "api",
            "generator",
            "export",
            "import",
            "dynamic",
            "proxy",
            "reference",
            "dom",
            "node",
            "attribute",
            "event",
            "bubbling",
            "input",
            "value",
            "assignment",
            "spread",
            "rest",
            "equality",
            "functional",
            "programming",
            "development",
            "javascript",
            "html",
            "css",
            "hosting",
            "internet"
        ];
        //Selecting a random library item.
        function rN() {
            return Math.floor(Math.random() * library.length);
        }
        const word = library[rN()];
        //Displaying the word as selected.
        const selectionText = document.createElement(`p`);
        selectionText.innerText = `The selected word is "${word}".`;
        primaryInterface.appendChild(selectionText);
        //Timer text.
        const timerText = document.createElement(`p`);
        timerText.id = `timerText`;
        timerText.textContent = `Seconds Timer: 0.0`
        //Total characters input.
        const totalCharInput = document.createElement(`p`);
        totalCharInput.id = `totalCharInput`;
        totalCharInput.innerText = `Total Inputs: 0`;
        //User input element and related variables.
        const gameSevenUI = document.createElement(`input`);
        gameSevenUI.classList.add(`userInput`);
        gameSevenUI.id = `gameSevenUI`;
        gameSevenUI.placeholder = `Begin typing selected word here`;
        //Primary game variables.
        let inputTotal = 0;
        let timerTotal = 0;
        let mainInterval;
        let engaged = false;
        const wordSplit = word.split(``);
        //Determining if the input is valid.
        gameSevenUI.addEventListener(`keydown`, function(e){
            const k = e.key;
            if (k === `a` || k === `b` || k === `c` || k === `d` || k === `e` || k === `f` || k === `g` || k === `h` || k === `i` || k === `j` || k === `k` || k === `l` || k === `m` || k === `n` || k === `o` || k === `p` || k === `q` || k === `r` || k === `s` || k === `t` || k === `u` || k === `v` || k === `w` || k === `x` || k === `y` || k === `z`) {
                ++inputTotal;
            }
        })
        //Main event listener.
        gameSevenUI.addEventListener(`input`, function(){
            if (inputTotal === 1 && !engaged) {
                engaged = true;
                //Initiating the timer.
                mainInterval = setInterval(function(){
                    timerTotal += .1;
                    timerText.innerText = `Seconds Timer: ${timerTotal.toFixed(1)}`;
                }, 100)
            }
            totalCharInput.innerText = `Total Inputs: ${inputTotal}`;
            const userInputText = gameSevenUI.value.split("");
            //Checking to see if the currrent input value is correct.
            if (wordSplit.every((u,ind) => u === userInputText[ind])) {
                //Cancelling the timer.
                clearInterval(mainInterval);
                //Changing relevant CSS values to indicate a win.
                gameSevenUI.disabled = `disabled`;
                gameSevenUI.style.border = `1px solid lime`;
                gameSevenNextButton.style.border = `1px solid lime`;
                //Accessing and updating stats.
                const retrievedMaster = localStorage.getItem(`master`);
                const retrievedMasterParsed = JSON.parse(retrievedMaster);
                retrievedMasterParsed.gameSeven.totalWins++;
                retrievedMasterParsed.gameSeven.totalTime += timerTotal;
                retrievedMasterParsed.gameSeven.totalInputs += inputTotal;
                localStorage.setItem("master", JSON.stringify(retrievedMasterParsed));
            }
        });
        primaryInterface.appendChild(gameSevenUI);
        primaryInterface.appendChild(timerText);
        primaryInterface.appendChild(totalCharInput);
        //Details button.
        const detailsGameSeven = document.createElement(`button`);
        detailsGameSeven.textContent = `Details`;
        detailsGameSeven.id = `detailsGameSeven`;
        primaryInterface.appendChild(detailsGameSeven);
        //Details pop-up.
        const gameSevenDetails = document.createElement(`div`);
        gameSevenDetails.id = `gameSevenDetails`;
        gameSevenDetails.textContent = `Type the randomly selected word into the text field using lowercase English letters, and see how long it takes you by referencing the automatic timer.`;
        //Paragraph element for the performance stats.
        const gameSevenStatsP = document.createElement(`p`);
        gameSevenStatsP.id = `gameSevenStatsP`;
        gameSevenDetails.appendChild(gameSevenStatsP);
        //Details pop-up close.
        const gameSevenDetailsClose = document.createElement(`p`);
        gameSevenDetailsClose.textContent = `x`;
        gameSevenDetailsClose.id = `gameSevenDetailsClose`;
        gameSevenDetails.appendChild(gameSevenDetailsClose);
        //Event listener for opening and populating the Details pop-up.
        detailsGameSeven.addEventListener(`click`,function(){
            display.appendChild(gameSevenDetails);
            //Accessing stats.
            const retrievedMaster = localStorage.getItem(`master`);
            const retrievedMasterParsed = JSON.parse(retrievedMaster);
            //Support functions.
            function averageTime() {
                const answer = retrievedMasterParsed.gameSeven.totalTime / retrievedMasterParsed.gameSeven.totalWins;
                if (isNaN(answer)) {
                    return 0;
                }
                return answer;
            }
            function averageInputs() {
                const answer = retrievedMasterParsed.gameSeven.totalInputs / retrievedMasterParsed.gameSeven.totalWins;
                if (isNaN(answer)) {
                    return 0;
                }
                return answer;
            }
            //Displaying current stats.
            gameSevenStatsP.textContent =  `Total Wins: ${retrievedMasterParsed.gameSeven.totalWins}, Average Seconds Per Word: ${averageTime().toFixed(2)} and Average Inputs Per Word: ${averageInputs().toFixed(2)}`;
            //Event listener for closing the Details pop-up.
            gameSevenDetailsClose.addEventListener(`click`,function(){
                display.removeChild(gameSevenDetails);
            });
        });
    }
    //////////Randomized navigation event listeners.
    let navArray = [g1,g2,g3,g4,g5,g6,g7];
    const gameFunctionArray = [makeGameOne,makeGameTwo,makeGameThree,makeGameFour,makeGameFive,makeGameSix,makeGameSeven];
    let gameFunctionArraySorted = gameFunctionArray.sort(randomize); 
    for (let z = 0; z < 10; z++) {
        gameFunctionArraySorted = gameFunctionArraySorted.sort(randomize);
    }
    navArray.forEach(function(n,index){
        n.addEventListener(`click`,function(){
            gameFunctionArraySorted[index](index,n);
        });
    });
    gameFunctionArraySorted[0](0,g1);
}
gamesGo();