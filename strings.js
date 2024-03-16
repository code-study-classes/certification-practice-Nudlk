// Задание 1
function countUppercaseLetters(str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (char >= 'A' && char <= 'Z') {
      count += 1;
    }
  }

  return count;
}
 
        console.log(countUppercaseLetters('HellO, World!'));
// Задание 2
function combineStrings(N1, N2, S1, S2) {
    First = S1.slice(0, N1);
    Second = S2.slice(-N2);
    return (First + Second);
}

console.log(combineStrings(3, 2, 'Hello', 'World'));
// Задание 3
function containsSubstring(S, S0) {
    return S.includes(S0);
}

console.log(containsSubstring('Hello, World!', 'World'));
// Задание 4
function replaceSubstring(S, S1, S2) {
    S0 = S.replace(S1, S2);
    return (S0);
}

console.log(replaceSubstring('Hello, World!', 'World', 'Universe'))
// Задание 5
function countWordsWithSameLetters(sentence) {
    let count = 0;
    let words = sentence.split(" ");
 for (let i = 0; i < words.length; i++) {
        if (words[i][0].toLowerCase() === words[i][words[i].length - 1].toLowerCase()) {
            count++;
        }
    }
    return (count);
}

console.log(countWordsWithSameLetters('Racecar radar level Civic'));
// Задание 6
function countWordsWithA(sentence) {
    let words = sentence.split(" ");
    let count = 0;
     for (let i = 0; i < words.length; i++) {
        if (words[i].includes('A') || words[i].includes('a')) {
            count++;
        }
    }
    return (count)
}

console.log(countWordsWithA('This is a sample sentence.'));
// Задание 7
function normalizeSpaces(sentence) {
   fix = sentence.replace(/\s+/g, ' ');
    return (fix);
}

console.log(normalizeSpaces('  This  is   a   sample    sentence. '));
// Задание 8
function extractFileName(fullFileName) {
    let word = fullFileName.split('/').pop();
    return (word.split('.').slice(0, -1).join('.'));
}

console.log(extractFileName('C:/Users/username/Documents/example.txt'));
// Задание 9
function encryptSentence(sentence) {
  let a = '';
  let b = '';

  for (let i = 0; i < sentence.length; ++i) {
    if (i % 2 === 0) {
      a += sentence[i];
    } else {
      b = sentence[i] + b;
    }
  }
  const word = a + b;
  return word.split('').reverse().join('');
}

console.log(encryptSentence('JavaScript'));
// Задание 10
function checkBrackets(expression) {
let stack = [];

for(let i = 0; i < expression.length; i++) {
    if(expression[i] === '(') {
        stack.push(i);
    } else if(expression[i] === ')') {
        if(stack.length === 0) {
            return ++i;
        }
        stack.pop();
    }
}

if(stack.length > 0) {
    return -1;
} else {
    return 0;
}
}

console.log(checkBrackets('((a + b) * (c - d))'));

export {countUppercaseLetters, combineStrings, containsSubstring, replaceSubstring, countWordsWithSameLetters, countWordsWithA, normalizeSpaces, extractFileName, encryptSentence, checkBrackets};
