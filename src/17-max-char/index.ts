/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string): string {
    const charMap: { [char: string]: number } = {};
    let maxChar = '';
    let maxCount = 0;

    // Build a character frequency map
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // Find the character with the maximum frequency
    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

export { maxChar };
