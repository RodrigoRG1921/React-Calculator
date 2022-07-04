import ButtonDigit from "./components/ButtonDigit";
import './App.css'
import { useEffect, useState } from "react";
import ButtonOperator from "./components/ButtonOperator";
import Screen from "./components/Screen";

const calculation = (operand, result, operation) => {
  let _operand = parseFloat(operand)
    let _result = parseFloat(result)
    let _operation = operation
    let value = ""
    switch (_operation) {
      case '÷':
        value = _result/_operand
        break;
      case '+':
        value = _result+_operand
        break;
      case '*':
        value= _result*_operand
        break;
      case '-':
        value= _result - _operand
        break;
      case '%':
        value = _result % _operand
        break;
      default:
        console.log("Error")
    }
    return value.toString()
}

function App() {
  const [operand, setOperand] = useState("-");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleDigitClick = (tag) => {
    if (operand === '0' || operand === '-') setOperand("")
    if (tag === '.') {
      if (operand.includes('.')) return operand
    }
    setOperand(_prevOperand => _prevOperand + tag)
    
  }

  useEffect(() => {
    if (operand !== '-'){
      setIsEmpty(false);
    }
  }, [operand])

  const handleClear = () => {
    setOperand("-");
    setResult(0);
    setOperation("");
    setIsEmpty(true);
  }

  const handleOperator = (tag) => {
    
    

    setIsEmpty(true)
    if (result === 0 && operand !== '-') {
      setOperation(tag)
      setResult(operand)
    }
    if (result !== 0 && operand !== '-') {
      setOperation(tag)
      setResult(calculation(operand, result, operation))
    }
    if (result !== 0 && operand === '-') setOperation(tag)
    setOperand("-");

  }

  const handleEqual = () => {
    setIsEmpty(true)
    setResult(calculation(operand, result, operation))
    setOperand('-');
    setOperation('');
  }

  return (
    <div className="App">
      <Screen isEmpty={isEmpty} operand={operand} result={result} operation={operation} />
      <ButtonDigit id='clear' tag='AC' handleClick={handleClear}/>
      <ButtonOperator id='residui' tag='%' handleClick={handleOperator} />
      <ButtonOperator id='divide' tag='÷' handleClick={handleOperator} />
      <ButtonDigit id='seven' tag='7' handleClick={handleDigitClick}/>
      <ButtonDigit id='eight' tag='8' handleClick={handleDigitClick}/>
      <ButtonDigit id='nine' tag='9' handleClick={handleDigitClick}/>
      <ButtonOperator id='multiply' tag='*' handleClick={handleOperator} />
      <ButtonDigit id='four' tag='4' handleClick={handleDigitClick}/>
      <ButtonDigit id='five' tag='5' handleClick={handleDigitClick}/>
      <ButtonDigit id='six' tag='6' handleClick={handleDigitClick}/>
      <ButtonOperator id='subtract' tag='-' handleClick={handleOperator} />
      <ButtonDigit id='one' tag='1' handleClick={handleDigitClick}/>
      <ButtonDigit id='two' tag='2' handleClick={handleDigitClick}/>
      <ButtonDigit id='three' tag='3' handleClick={handleDigitClick}/>
      <ButtonOperator id='add' tag='+' handleClick={handleOperator} />
      <ButtonDigit id='zero' tag='0' handleClick={handleDigitClick} className='bottom-button-left'/>
      <ButtonDigit id='decimal' tag='.' handleClick={handleDigitClick}/>
      <ButtonDigit id='equals' tag='=' handleClick={handleEqual} className='bottom-button-right' />
    </div>
  );
}

export default App;
