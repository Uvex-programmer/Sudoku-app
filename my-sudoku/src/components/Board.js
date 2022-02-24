import { Field } from '.'

const Board = ({ board, check }) => {
  return (
    <div>
      {board?.rows.map((row, idx) => (
        <div className='boardRow' key={idx}>
          {row.cols.map((col, index) => (
            <Field field={col} key={index} index={index} check={check} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
