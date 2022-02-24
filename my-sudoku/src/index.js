import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import SudokuProvider from './store/SudokuCtx'

ReactDOM.render(
  <SudokuProvider>
    <App />
  </SudokuProvider>,
  document.getElementById('root')
)
