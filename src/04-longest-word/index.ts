/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    const WordArray = []; 
    let word = "";
    let longestWord = "";
    for (let i = 0; i < sen.length; i++) {
        if (sen[i] !== " ") {
            word += sen[i];
        } else {
            WordArray.push(word);
            word = "";
        }
    }
    WordArray.push(word);
    for (let i = 0; i < WordArray.length; i++) {
        if (WordArray[i].length > longestWord.length) {
            longestWord = WordArray[i];
            longestWord = WordArray[i].replace(/[^a-z]/gi, '');
        }
    }
    return longestWord;
}


export { longestWord };
