import React, {useState} from 'react'

const ButtonDigit = ({ id, tag, handleClick, className}) => {
  const [isPressed, setIsPressed] = useState(false);


  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false)
    }, 100)
  }

  return (
      <button 
        id={id}
        className={className}
        onClick={() => {handleClick(tag) ; handlePress()}}
        style= { isPressed ? {background:'#C9BBCF'} : {background:'#B7D3DF'}}>
        {tag}
      </button>
  )
}

export default ButtonDigit