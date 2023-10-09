/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string) {
    // true if string is palindrom
    // false if string is NOT palindrome
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    } if (reversed === str) {
        return true
    } else {
        return false
    }
}

export { palindrome };
