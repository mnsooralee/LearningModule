import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply, incrementByAmount } from './redux/counter/counterSlice'



function App() {
  const count = useSelector((state) => state.counter.value) //redux count from redux store  
  const dispatch = useDispatch()
  
  return (
    <>
     <NavBar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        counter is curruntly {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <br/>
        <button onClick={() => dispatch(incrementByAmount(5))}>increase by 5</button>
        <br/>
        <button onClick={() => dispatch(multiply())}>multiply by 2</button>
      </div>
    </>
  )
}

export default App
