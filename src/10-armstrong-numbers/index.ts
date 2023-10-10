/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

function validate(n: number):boolean {
    const numStr = n.toString();
    const NumDigits = numStr.length;

    if (NumDigits === 2 || NumDigits === 3 || NumDigits === 4 || NumDigits === 7) {
        let sum = 0
        for (let i = 0; i < NumDigits; i++) {
            const digit = parseInt(numStr.charAt(i));
            sum += Math.pow(digit, NumDigits);
        }
        return sum === n;
    }

    const sum = numStr.split('').reduce((acc, digit) => {
        return acc + Math.pow(parseInt(digit), NumDigits);
    }, 0);

    return sum === n;
}

export { validate };
