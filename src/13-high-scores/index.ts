/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    if (this.scores.length === 0) {
    return 0; 
    }
    return this.scores[this.scores.length -1];
  }

  get personalBest() {
    if (this.scores.length === 0) {
      return 0;
    }

    return Math.max(...this.scores)
  }

  get personalTopThree() {
    if (this.scores.length === 0) {
      return [];
    }

    const sortedScores = this.scores.slice().sort((a, b) => b - a);

    return sortedScores.slice(0, 3);
  }
}

export { HighScores };
