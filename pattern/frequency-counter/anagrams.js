let word = "iceman";
let anagramWord = "cinema";

// using 3 loops
function validAnagram(word, anagramWord) {
    let wordLength = word.length;
    let anagramWordLength = anagramWord.length;
    let wordCount = {};
    let anagramWordCount = {};

    if (wordLength !== anagramWordLength) return false;

    for (let char of word) {
        if (wordCount[char]) {
            wordCount[char]++;
        } else {
            wordCount[char] = 1;
        }
    }
    for (let char of anagramWord) {
        if (anagramWordCount[char]) {
            anagramWordCount[char]++;
        } else {
            anagramWordCount[char] = 1;
        }
    }

    for (let key in wordCount) {
        if (!(key in anagramWordCount)) return false;
        if (wordCount[key] !== anagramWordCount[key]) return false;
    }
    return true;
}

//using 2 loops

function validAnagrams(word, anagramWord) {
    let wordLength = word.length;
    let anagramWordLength = anagramWord.length;
    let wordCount = {};

    if (wordLength !== anagramWordLength) return false;

    for (let char of word) {
        if (wordCount[char]) {
            wordCount[char]++;
        } else {
            wordCount[char] = 1;
        }
    }
    for (let char of anagramWord) {
        //check if value of char is in wordCount
        // if not present or the value is zero return false
        if (!wordCount[char]) return false;
        // if present we subtract it by 1
        wordCount[char]--;
    }

    return true;
}

validAnagram(word, anagramWord);
validAnagrams(word, anagramWord);
