/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  private wordCountMap: Map<string, number>;

  constructor() {
      this.wordCountMap = new Map<string, number>();
  }

  countWords(phrase: string): void {
      const words = phrase.split('');

      for (const word of words) {
          const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
          const count = this.wordCountMap.get(cleanedWord) || 0;
          this.wordCountMap.set(cleanedWord, count + 1);
      }
  }

  getWordCountMap(): Map<string, number> {
      return this.wordCountMap;
  }
}

export { Words };

