import './App.scss'
import { useState, useEffect } from 'react'
import { Board, Settings } from './components'
import useSudoku from './hooks/useSudoku'
import { solveSudoku, checkSudoku } from './api/endpoints'

function App() {
  const [board, setBoard] = useState()
  const [check, setCheck] = useState(false)

  const ctx = useSudoku()

  useEffect(() => {
    setBoard(ctx.sudoku)
  }, [ctx.sudoku])

  //Solves the sudoku for the user
  const solveSudokuHandler = async () => {
    const solvedBoard = await solveSudoku(ctx.sudokuSolution)
    ctx.setSudoku(solvedBoard)
  }
  //Checks all input fields if its correct and if the sudoku is solved
  const checkSudokuHandler = async () => {
    setCheck((prev) => !prev)
    const status = await checkSudoku(board, ctx.sudokuSolution)
    ctx.checkSudokuSolved(status)
  }

  return (
    <div className='App'>
      <header className='App-header'>Sudoku</header>
      <Settings />
      {ctx.sudokuSolved && <h1>Congratulations, you made it !!</h1>}
      {!board && <h1>Choose a sudoku above, have fun!</h1>}
      {board && <Board board={board} check={check} />}
      {board && <button onClick={solveSudokuHandler}>solve the sudoku</button>}
      {board && <button onClick={checkSudokuHandler}>check sudoku</button>}
    </div>
  )
}

export default App
