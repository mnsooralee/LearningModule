import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = ({count}) => {
  const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1 count={count}/></span>I am a button</button>
    </div>
  )
}

export default Button
