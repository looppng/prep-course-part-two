/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */
function pyramid(n: number): void {
    // Calculate the maximum width of the pyramid
    const maxWidth = 2 * n - 1;

    for (let i = 1; i <= n; i++) {
        // Initialize a string to store the current level
        let level = '';

        // Calculate the number of '#' characters for the current level
        const numChars = 2 * i - 1;

        // Calculate the number of spaces on each side
        const numSpaces = (maxWidth - numChars) / 2;

        // Add the left spaces
        level += ' '.repeat(numSpaces);

        // Add the '#' characters
        level += '#'.repeat(numChars);

        // Add the right spaces
        level += ' '.repeat(numSpaces);

        // Print the current level
        console.log(level);
    }
}

export{pyramid}