import sudoku from 'sudoku'

/**
 * A function that can replace numbers in an array. When we create new sudoku boards
 * the numbers will be from 0 -> 8. But we want 1 -> 9.
 */
const replaceNumbersArray = (array, removeNum, addNum) => {
  return array.map((num) => (num === removeNum ? addNum : num))
}

/**
 * Here we create the sudoku board for the client. Creating 9 rows with columns.
 * Each object will have data on which column / row it is on.
 * And its correct value also.
 */
const createSudokuBoard = (sudokuData, sudokuSolution = null) => {
  const board = { rows: [] }
  var counter = 0

  for (let i = 0; i < 9; i++) {
    let row = { cols: [], index: i }
    for (let j = 0; j < 9; j++) {
      const value = sudokuData[i * 9 + j]
      const col = {
        row: i,
        col: j,
        value: value,
        correctValue: sudokuSolution ? sudokuSolution[counter] : null,
        readOnly: value !== null,
      }
      row.cols.push(col)
      counter++
    }
    board.rows.push(row)
  }
  return board
}

/**
 * Creates the sudoku array as a flat array with numbers
 * and null values.
 */
const createSudokuData = (difficulty) => {
  var valueCounter = 0
  var sudokuBoard
  while (valueCounter !== difficulty) {
    valueCounter = 0
    const generatedSudoku = sudoku.makepuzzle()
    for (const value of generatedSudoku) {
      if (value !== null) {
        valueCounter++
      }
    }
    sudokuBoard = generatedSudoku
  }
  return sudokuBoard
}

const utils = {
  replaceNumbersArray,
  createSudokuBoard,
  createSudokuData,
}

export default utils
