/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number): void {
    for (let row = 0; row < n; row++) {
        let step = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                step += '#';
            } else {
                step += ' ';
            }
        }

        console.log(step);
    }
}

export { steps };
