import express from 'express'
import sudoku from '../controller/sudoku.js'
const router = express.Router()

router.post('/', sudoku.createSudoku)
router.post('/solve', sudoku.solveSudoku)
router.post('/check', sudoku.checkSudokuBoard)

export default router
