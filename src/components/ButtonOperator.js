import React, { useState } from 'react'

const ButtonOperator = ({ id, tag, handleClick}) => {
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
      onClick={() => {handleClick(tag); handlePress()}} 
      style= { isPressed ? {background:'#C9BBCF'} : {background:'#B7D3DF'}}>
      {tag}
    </button>
  )
}

export default ButtonOperator