// Validates key input on the input field. only allows keys 0-9 be pressed
// and copy past numbers
export const validateNumber = (e) => {
  var theEvent = e || window.event
  var key
  if (theEvent.type === 'paste') {
    key = window.event.clipboardData.getData('text/plain')
  } else {
    key = theEvent.keyCode || theEvent.which
    key = String.fromCharCode(key)
  }
  var regex = /[1-9]|\./
  if (!regex.test(key)) {
    theEvent.returnValue = false
    if (theEvent.preventDefault) theEvent.preventDefault()
  } else {
    return key
  }
}
// Checks the value of number entered.
export const checkValueOfNumber = (value) => {
  if (value > 9) {
    return 9
  }
  return value < 1 ? 1 : value
}
// Css for the borders that creates the "boxes 3x3" in the sudoku board
export const checkInputFieldLocation = (field) => {
  if (
    (field.row === 2 && field.col === 2) ||
    (field.row === 2 && field.col === 5) ||
    (field.row === 5 && field.col === 2) ||
    (field.row === 5 && field.col === 5)
  )
    return 'inputField bottomBorder rightBorder'
  if (field.col === 2 || field.col === 5) return 'inputField rightBorder'
  if (field.row === 2 || field.row === 5) return 'inputField bottomBorder'

  return 'inputField'
}
