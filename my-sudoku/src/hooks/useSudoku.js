import { useContext } from 'react'
import { SudokuContext } from '../store/SudokuCtx'

const useSudoku = () => {
  return useContext(SudokuContext)
}

export default useSudoku
