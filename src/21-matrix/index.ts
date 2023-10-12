/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  private matrix: number[][];

  constructor(matrixString: string) {
      // Parse the input matrix string into a two-dimensional array of numbers.
      this.matrix = matrixString.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows() {
      return this.matrix;
  }

  get columns() {
      const numRows = this.matrix.length;
      const numCols = this.matrix[0].length;
      const result: number[][] = [];

      // Transpose the matrix to get the columns.
      for (let col = 0; col < numCols; col++) {
          result[col] = [];
          for (let row = 0; row < numRows; row++) {
              result[col][row] = this.matrix[row][col];
          }
      }

      return result;
  }
}

export { Matrix };
