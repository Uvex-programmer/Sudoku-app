import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import {
  validateNumber,
  checkInputFieldLocation,
  checkValueOfNumber,
} from '../utils/utils'
import useSudoku from '../hooks/useSudoku'

const Field = ({ field, index, check }) => {
  const [number, setNumber] = useState('')
  const [color, setColor] = useState('')
  const [className, setClassName] = useState('')

  const ctx = useSudoku()

  // Need to set style on input before render
  useLayoutEffect(() => {
    const style = checkInputFieldLocation(field)
    setClassName(style)
  }, [field])

  // First render check
  const firstUpdate = useRef(true)
  // Sets the color on the field on check if it correct or not
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (field.readOnly) return
    if (number === field.correctValue || number === '') {
      setColor('')
      return
    }
    setColor('red')
  }, [check])

  // handles the input from the user in the field
  const setNumberHandler = (num) => {
    let enteredValue = parseInt(num)
    // Makes so the numbers only can be between 1 -> 9
    enteredValue = checkValueOfNumber(enteredValue)
    if (isNaN(enteredValue)) {
      setNumber('')
      setColor('')
      ctx.updateSudoku(field, null)
      return
    }
    setNumber(enteredValue)
    ctx.updateSudoku(field, enteredValue)
  }
  // Small useEffect that will clear the fields if we change sudoku board
  useEffect(() => {
    setNumber('')
    setColor('')
  }, [ctx.updateSudoku])

  return (
    <input
      className={className}
      type='text'
      onKeyPressCapture={(e) => validateNumber(e)}
      key={index}
      value={field.value ? field.value : number}
      readOnly={field.readOnly}
      onChange={(e) => setNumberHandler(e.target.value)}
      style={{ backgroundColor: color }}
    />
  )
}

export default Field
