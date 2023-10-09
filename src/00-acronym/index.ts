/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
    // 0. Declare var to store in the letters
    // 1. Split input string into word strings
    // 2. Get all the words
    // 3. Get all first word letters
    // 4. Glue all var letters together
    // 5. Return the result 

    let acronym = ''
    const words = input.split(/[ -]/)
    words.forEach (word => {
        if(word?.trim()) {
            const cleanWord = word.replace(/[^a-z]/gi, '')
            const firstL = cleanWord[0]
            acronym += firstL
        }
    })
    return acronym.toUpperCase()

}

export { parse };
