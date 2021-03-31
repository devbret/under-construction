function main() {
  /// ///////Primary program variables.
  const userTextInput = document.querySelector('#userTextInput');
  const optionsButton = document.querySelector('#optionsButton');
  const submitButton = document.querySelector('#submitButton');
  const options = document.querySelector('#options');
  const exclude = document.querySelector('#exclude');
  const extraWords = document.querySelector('#extraWords');
  const numOfTwoLetters = document.querySelector('#numOfTwoLetters');
  const numOfTwoLettersRep = document.querySelector('#numOfTwoLettersRep');
  const numOfSingleWords = document.querySelector('#numOfSingleWords');
  const numOfSingleWordsRep = document.querySelector('#numOfSingleWordsRep');
  const numOfTwoWordPhrases = document.querySelector('#numOfTwoWordPhrases');
  const numOfTwoWordPhrasesRep = document.querySelector(
    '#numOfTwoWordPhrasesRep'
  );
  const results = document.querySelector('#results');
  let opened = 0;
  let excludedWords = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const punctuation = [
    '.',
    ',',
    '?',
    '!',
    ':',
    ';',
    '-',
    '_',
    "'",
    '"',
    '(',
    ')',
    ']',
    '[',
    '/',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '=',
    '\\',
    '|',
    '{',
    '}',
    '<',
    '>',
    '`',
    '~',
  ];
  const sentences = ['. ', '." ', '! ', '!" ', '? ', '?" '];
  let totalPunctuation;
  let totalLetters;
  let totalChars;
  let totalVowels;
  let totalConsonants;
  /// ///////Reseting program when page is (re)loaded.
  window.addEventListener('load', () => {
    userTextInput.value = '';
    exclude.checked = 'true';
    extraWords.value = '';
    numOfTwoLetters.value = 50;
    numOfSingleWords.value = 50;
    numOfTwoWordPhrases.value = 50;
  });
  /// ///////Reading settings, as determined by the user.
  // Whether or not the default words are excluded from processing.
  function excludeCheck() {
    if (exclude.checked) {
      const tempArray = [
        'the',
        'be',
        'of',
        'and',
        'a',
        'to',
        'in',
        'he',
        'have',
        'it',
        'that',
        'for',
        'they',
        'i',
        'with',
        'as',
        'not',
        'on',
        'she',
        'at',
        'by',
        'this',
        'we',
        'you',
        'do',
        'but',
        'from',
        'or',
        'which',
        'one',
        'would',
        'all',
        'will',
        'there',
        'say',
        'who',
        'make',
        'when',
        'can',
        'more',
        'if',
        'no',
        'man',
        'out',
        'other',
        'so',
        'what',
        'time',
        'up',
        'go',
        'about',
        'than',
        'into',
        'could',
        'state',
        'only',
        'new',
        'year',
        'some',
        'take',
        'come',
        'these',
        'know',
        'see',
        'use',
        'get',
        'like',
        'then',
        'first',
        'any',
        'work',
        'now',
        'may',
        'such',
        'give',
        'over',
        'think',
        'most',
        'even',
        'find',
        'day',
        'also',
        'after',
        'way',
        'many',
        'must',
        'look',
        'before',
        'great',
        'back',
        'through',
        'long',
        'where',
        'much',
        'should',
        'well',
        'people',
        'down',
        'own',
        'just',
        'his',
        'was',
        'had',
        'him',
        'an',
        'were',
        'its',
        'is',
        'me',
        'your',
        'got',
        'been',
        'here',
        'them',
        'my',
        'youre',
        'their',
        'are',
        'dont',
        'took',
        'im',
        'her',
        'how',
        'thats',
        'himself',
        'said',
        'hed',
        'else',
        'am',
        'yet',
        'our',
        'did',
        'very',
        'every',
        'shall',
        'saw',
        'those',
        'whom',
        'has',
        'thus',
        'us',
        'went',
        'upon',
        'herself',
        'oh',
        'la',
        'el',
        'ever',
        'cant',
        'ie',
        'mr',
        'miss',
        'mrs',
        'ms',
        'having',
        'came',
        'yeah',
        'mean',
        'too',
        'theyre',
        'youve',
        'ive',
        'didnt',
        'ye',
        'unto',
        'thou',
        'hath',
        'thee',
        'thy',
      ];
      for (let i = 0; i < tempArray.length; i += 1) {
        excludedWords.push(tempArray[i]);
      }
    } else {
      excludedWords = [];
    }
  }
  // Adding and additional words submitted by the user to be excluded.
  function additionalExcludedWords() {
    const temp = extraWords.value.split(',');
    for (let i = 0; i < temp.length; i += 1) {
      const trimmed = temp[i].trim();
      excludedWords.push(trimmed);
    }
  }
  /// ///////Support functions for the program.
  // Counts the number of sentences in the submitted body of text.
  function countSentences(t, sen, index, arr) {
    let sentenceCount = t;
    if (arr[index] && arr[index + 1] && arr[index + 2]) {
      if (
        sentences.some(
          (z) => z === `${arr[index]}${arr[index + 1]}${arr[index + 2]}`
        ) ||
        sentences.some((z) => z === `${arr[index]}${arr[index + 1]}`)
      ) {
        sentenceCount += 1;
      }
    }
    return sentenceCount;
  }
  // Produces usable data for the program; including the calculation of unique letters.
  function filterData(t, ind) {
    const temp = ind.split('');
    const holder = [];
    for (let i = 0; i < temp.length; i += 1) {
      const innerLetter = temp[i].toLowerCase();
      if (innerLetter.charCodeAt(0) >= 97 && innerLetter.charCodeAt(0) <= 122) {
        holder.push(innerLetter);
        if (totalLetters.some((l) => l.word === innerLetter)) {
          const index = totalLetters.findIndex((x) => x.word === innerLetter);
          totalLetters[index] = {
            ...totalLetters[index],
            times: totalLetters[index].times + 1,
          };
        } else {
          totalLetters.push({ word: innerLetter, times: 1 });
        }
      }
      if (punctuation.some((p) => p === innerLetter)) {
        totalPunctuation += 1;
      }
    }
    const answer = holder.join('');
    if (
      answer !== '' &&
      answer !== ' ' &&
      excludedWords.every((e) => answer !== e)
    ) {
      t.push(answer);
    }
    return t;
  }
  /**
   * Looks for unique words in a body of submitted text.
   * @param {*} t - Array of word objects.
   * @param {*} i - New word that is being checked by the function.
   * @returns array
   */
  function singleMemberReduce(t, i) {
    const innerT = t;
    if (innerT.every((z) => z.word !== i)) {
      innerT.push({ word: i, times: 1 });
    } else {
      const index = innerT.findIndex((x) => x.word === i);
      innerT[index] = {
        ...innerT[index],

        times: innerT[index].times + 1,
      };
    }
    totalChars += i.length;
    for (let z = 0; z < i.length; z += 1) {
      if (vowels.some((v) => v === i[z])) {
        totalVowels += 1;
      } else {
        totalConsonants += 1;
      }
    }
    return innerT;
  }
  // Searches for dual letter instances.
  function dualLetterReduce(t, i, index, arr) {
    const innerT = t;
    if (arr[index] && arr[index + 1]) {
      if (innerT.every((z) => z.word !== `${arr[index]}${arr[index + 1]}`)) {
        innerT.push({ word: `${arr[index]}${arr[index + 1]}`, times: 1 });
      } else {
        const indy = t.findIndex(
          (x) => x.word === `${arr[index]}${arr[index + 1]}`
        );
        innerT[indy].times += 1;
      }
    }
    return innerT;
  }
  // Searches for dual word instances.
  function dualWordReduce(t, i, index, arr) {
    const innerT = t;
    if (arr[index] && arr[index + 1]) {
      if (innerT.every((z) => z.word !== `${arr[index]} ${arr[index + 1]}`)) {
        innerT.push({ word: `${arr[index]} ${arr[index + 1]}`, times: 1 });
      } else {
        const indy = t.findIndex(
          (x) => x.word === `${arr[index]} ${arr[index + 1]}`
        );
        innerT[indy].times += 1;
      }
    }
    return innerT;
  }
  // Sorts all arrays, with the highest value being at the front.
  function properSort(a, b) {
    if (a.times > b.times) {
      return -1;
    }
    if (b.times > a.times) {
      return 1;
    }
    return 0;
  }
  // Makes a HTML element, given the parameters.
  function makeHTMLElement(y, z, iden) {
    const elem = document.createElement(`${y}`);
    elem.innerHTML = `${z}`;
    if (iden) {
      elem.id = `${iden}`;
    }
    results.appendChild(elem);
  }
  // Makes a paragraph element and attaches it to the results div.
  function makeParagraphElement(id) {
    const elem = document.createElement('p');
    elem.id = `${id}`;
    results.appendChild(elem);
    return elem;
  }
  // Loops through an array and displays a given number of properties.
  function displayItems(length, element, array) {
    const elem = element;
    for (let i = 0; i < length; i += 1) {
      if (!array[i]) {
        break;
      }
      elem.innerHTML += `${array[i].word} <span class="detailedStats">(${array[i].times})</span>, `;
    }
  }
  /// ///////The options button logic.
  optionsButton.addEventListener('click', () => {
    if (opened === 0) {
      opened += 1;
      options.style.display = 'block';
    } else {
      opened = 0;
      options.style.display = 'none';
    }
  });
  /// ///////Number of two letter combinations to display.
  numOfTwoLetters.addEventListener('input', function onNumOfTwoLettersInput() {
    numOfTwoLettersRep.innerText = this.value;
  });
  /// ///////Number of single words to display.
  numOfSingleWords.addEventListener(
    'input',
    function onNumOfSingleWordsInput() {
      numOfSingleWordsRep.innerText = this.value;
    }
  );
  /// ///////Number of two word phrases to display.
  numOfTwoWordPhrases.addEventListener(
    'input',
    function ofNumTwoWordPhrasesInput() {
      numOfTwoWordPhrasesRep.innerText = this.value;
    }
  );
  /// ///////The primary action/function for this program.
  submitButton.addEventListener('click', () => {
    // Making sure the user has input at least one character value before running the application.
    if (userTextInput.value.length > 0) {
      // Capturing the start time.
      const startTime = new Date();
      // Clearing all of the output fields to ensure previous results are not displayed.
      results.innerHTML = '';
      // Resetting all counters and holders from the previous run.
      totalPunctuation = 0;
      totalLetters = [];
      totalChars = 0;
      totalVowels = 0;
      totalConsonants = 0;
      // Reseting the words to exclude, so that no added words from previous runs are included.
      excludedWords = [];
      // Checking to see if the use wants the default set of words to be excluded.
      excludeCheck();
      // Adding any additional words submitted by the user to be excluded from final results.
      additionalExcludedWords();
      // Calculating the number of sentences.
      const splitSentenceData = userTextInput.value.split('');
      const totalSentences = splitSentenceData.reduce(countSentences, 0);
      // Preparing the data for use.
      const predata = userTextInput.value.split(' ');
      const filteredData = predata.filter((z) => z !== '');
      // Making sure all of the characters being considered are English letters.
      const data = filteredData.reduce(filterData, []);
      // Unique two letter combos.
      const joinedAndSplitData = data.join('').split('');
      const uniqueTwoLetterCombos = joinedAndSplitData.reduce(
        dualLetterReduce,
        []
      );
      // Unique individual words.
      const uniqueWords = data.reduce(singleMemberReduce, []);
      // Unique two word phrases
      const uniqueTwoWordPhrases = data.reduce(dualWordReduce, []);
      // Sorting the individual letters so that the most common is at the front.
      const sortedUniqueLetters = totalLetters.sort(properSort);
      /// /Sorting the two letter combos so that the most common is at the front.
      const sortTwoLetterCombos = uniqueTwoLetterCombos.sort(properSort);
      // Sorting the individual words so that the most common is at the front.
      const sortedUniqueWords = uniqueWords.sort(properSort);
      // Sorting the two word phrases so that the most common is at the front.
      const sortedTwoWordPhrases = uniqueTwoWordPhrases.sort(properSort);
      // Calculating the final or total amount of time processing took to complete.
      const endTime = new Date();
      const totalTime = (
        (endTime.getTime() - startTime.getTime()) /
        1000
      ).toFixed(2);
      // Displaying the primary stats.
      makeHTMLElement('h3', 'Summary', 'summary');
      makeHTMLElement(
        'p',
        `Your submitted text contains ${totalSentences} sentences, ${totalChars} characters, ${
          data.length
        } total words and ${
          uniqueWords.length
        } unique words. With an average of ${(Number.isFinite(
          data.length / totalSentences
        )
          ? data.length / totalSentences
          : 0
        ).toFixed(2)} words and ${(Number.isNaN(
          totalPunctuation / totalSentences
        )
          ? 0
          : totalPunctuation / totalSentences
        ).toFixed(
          2
        )} punctuation marks per sentence, as well as ${(Number.isNaN(
          totalChars / data.length
        )
          ? 0
          : totalChars / data.length
        ).toFixed(2)} letters per word; each including ${(Number.isNaN(
          totalVowels / data.length
        )
          ? 0
          : totalVowels / data.length
        ).toFixed(2)} vowels and ${(Number.isNaN(totalConsonants / data.length)
          ? 0
          : totalConsonants / data.length
        ).toFixed(2)} consonants. And took ${
          totalTime || 0
        } seconds to be evaluated, at a speed of ${(
          data.length / (totalTime >= 1 ? totalTime : 1)
        ).toFixed(2)} words per second (WPS).`,
        'output'
      );
      makeHTMLElement(
        'p',
        `The estimated reading time for your text is ${(
          predata.length / 180
        ).toFixed(2)} minutes, while the estimated speaking time is ${(
          predata.length / 125
        ).toFixed(
          2
        )} minutes. Your text also has a novelty score of ${(Number.isNaN(
          (uniqueWords.length / data.length) * 100
        )
          ? 0
          : (uniqueWords.length / data.length) * 100
        ).toFixed(2)}%.`,
        'secondaryOutput'
      );
      // Displaying the common single letters used.
      makeHTMLElement('h3', 'Common Single Letters');
      displayItems(
        sortedUniqueLetters.length,
        makeParagraphElement('commonLetters'),
        sortedUniqueLetters
      );
      // Displaying the two letter combos.
      makeHTMLElement('h3', 'Common Two Letter Combos');
      displayItems(
        numOfTwoLetters.value,
        makeParagraphElement('commonLetterCombos'),
        sortTwoLetterCombos
      );
      // Displaying the common single words used.
      makeHTMLElement('h3', 'Common Single Words');
      displayItems(
        numOfSingleWords.value,
        makeParagraphElement('commonWords'),
        sortedUniqueWords
      );
      // Displaying the common two word phrases used.
      makeHTMLElement('h3', 'Common Two Word Phrases');
      displayItems(
        numOfTwoWordPhrases.value,
        makeParagraphElement('commonPhrases'),
        sortedTwoWordPhrases
      );
    }
  });
}
main();
