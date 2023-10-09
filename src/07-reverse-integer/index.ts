/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    // return integer that is reverse order of numbers
    // if number is negative, keep negative
    // if number is positive, keep positive
    let reversed = "";
    let intToString = int.toString();
    for (let i = intToString.length - 1; i >= 0; i--) {
        reversed += intToString[i];
    }
    return parseInt(reversed) * Math.sign(int);
}

export { reverse };
 