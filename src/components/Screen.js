import React from 'react'

function formatOperand(operand) {
  if (operand === '-' || operand === 0 || operand === null || isNaN(operand)) return operand
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits:0,
})

const Screen = ({ isEmpty, operand, operation, result}) => {
  return (
    <div id='display' >
        <div id='display-top' >
          <span className={isEmpty ? 'operand blink-2' : 'operand'}>
            {formatOperand(operand)}
          </span>
          <span>{operation}</span>
        </div>
        <div id='display-bottom'>
          <span className='result'>{formatOperand(result)}</span>
        </div>
        
      </div>
  )
}

export default Screen