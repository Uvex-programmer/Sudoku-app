import useSudoku from '../hooks/useSudoku'
import { createBoard } from '../api/endpoints'

const Settings = () => {
  const ctx = useSudoku()

  //Creates board on which difficulty choosen
  const setBoardHandler = async (difficulty) => {
    const board = await createBoard(difficulty)
    ctx.setSudoku(board)
    ctx.checkSudokuSolved(false)
  }

  return (
    <div className='settings'>
      <button onClick={() => setBoardHandler(27)}>Easy sudoku</button>
      <button onClick={() => setBoardHandler(25)}>Medium sudoku</button>
      <button onClick={() => setBoardHandler(22)}>Hard sudoku</button>
    </div>
  )
}

export default Settings
