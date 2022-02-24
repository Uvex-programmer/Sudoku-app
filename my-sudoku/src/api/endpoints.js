// Solves the sudoku automatic
export const solveSudoku = async (solution) => {
  let response = await fetch('/api/solve', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ sudokuSolution: solution }),
  })
  return response.json()
}
// Check if sudoku is solved
export const checkSudoku = async (board, solution) => {
  let response = await fetch('/api/check', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ board: board, solution: solution }),
  })
  return response.json()
}
// Fetch new board depending on difficulty
export const createBoard = async (difficulty) => {
  let response = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ difficulty: difficulty }),
  })
  return response.json()
}
