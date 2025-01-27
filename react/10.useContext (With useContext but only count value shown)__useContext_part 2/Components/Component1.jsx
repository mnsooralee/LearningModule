import React, {useContext} from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
  const counter = useContext(counterContext)//this will only pass "count"
  return (
    <div>
      {counter}
    </div>
  )
}

export default Component1
