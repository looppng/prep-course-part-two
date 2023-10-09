/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(word: string) {
    const lowerWord = word.toLowerCase();
    const vowels = ['a','e','i','o','u'];
    let vowelcount = 0

    for (let i = 0; i < lowerWord.length; i++) {
        const currentChar = lowerWord[i];
        if (vowels.includes(currentChar)) {
            vowelcount++;
        }
    }
    return vowelcount;
}

export { vowels };
