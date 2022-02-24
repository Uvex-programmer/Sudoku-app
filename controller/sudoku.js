import sudoku from 'sudoku'
import utils from '../utils/utils.js'

/**
 * Takes the solution and creates a new board with it and sends back
 */
const solveSudoku = async (req, res) => {
  const { sudokuSolution } = req.body

  const solvedBoard = utils.createSudokuBoard(sudokuSolution)

  res.send(JSON.stringify({ board: solvedBoard }))
}

const createSudoku = async (req, res) => {
  const { difficulty } = req.body
  //Creates a sudoku based on what difficulty user sets
  let sudokuData = utils.createSudokuData(difficulty)
  //we create the solution for the sudoku here.
  const sudokuSolution = utils.replaceNumbersArray(
    sudoku.solvepuzzle(sudokuData),
    0,
    9
  )
  sudokuData = utils.replaceNumbersArray(sudokuData, 0, 9)
  //creates the board and send it to client
  const board = utils.createSudokuBoard(sudokuData, sudokuSolution)
  res.send(JSON.stringify({ board: board, solution: sudokuSolution }))
}

// checks if the values from the board matches the values in the solution
const checkSudokuBoard = async (req, res) => {
  const { board, solution } = req.body

  let boardArray = board.rows
    .map((row) => row.cols.map((col) => col.value))
    .flat()

  for (let i = 0; i < boardArray.length; i++) {
    if (boardArray[i] !== solution[i]) {
      res.send(false)
      return
    }
  }
  res.send(true)
}

const controller = {
  createSudoku,
  solveSudoku,
  checkSudokuBoard,
}

export default controller
