import React, { useState } from 'react'

/**
 * Added a context provider so we can easily set and update
 * the sudoku board.
 */
export const SudokuContext = React.createContext({
  sudoku: {},
  sudokuSolution: {},
  sudokuSolved: false,
  setSudoku: () => {},
  updateSudoku: () => {},
  checkSudokuSolved: () => {},
})

const SudokuCtx = (props) => {
  const [sudoku, setSudoku] = useState()
  const [sudokuSolution, setSudokuSolution] = useState()
  const [sudokuSolved, setSudokuSolved] = useState(false)

  const setSudokuHandler = (data) => {
    setSudoku(data.board)
    if (!data.solution) return
    setSudokuSolution(data.solution)
  }

  // Updates the fields on the board when user enters a value
  const updateSudokuBoard = (field, num) => {
    sudoku.rows[field.row].cols[field.col].value = num
  }
  // Sets the state for if the sudoku is solved or not
  const sudokuSolvedHandler = (bool) => {
    bool ? setSudokuSolved(true) : setSudokuSolved(false)
  }

  return (
    <SudokuContext.Provider
      value={{
        sudoku: sudoku,
        sudokuSolution: sudokuSolution,
        sudokuSolved: sudokuSolved,
        setSudoku: setSudokuHandler,
        updateSudoku: updateSudokuBoard,
        checkSudokuSolved: sudokuSolvedHandler,
      }}
    >
      {props.children}
    </SudokuContext.Provider>
  )
}

export default SudokuCtx
