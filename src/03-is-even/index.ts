/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */
const even_digits = [2,4,6,8];

function isEven(n: number) {
    const firstHalf = n.toString().split('.')[0];
    const lastDigit = firstHalf[firstHalf.length-1];
   return even_digits.includes(+lastDigit)
}
export { isEven };