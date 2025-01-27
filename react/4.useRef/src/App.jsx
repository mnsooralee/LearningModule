import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnref = useRef() //keeps from updating value during renderings. and this is a dom element

  //10:35 of lecture: https://www.youtube.com/watch?v=VlSNiL_x4mo&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=118
  // do not use re.current in the dom because this way the component will not rerender and its value will not be changed
  //use state when you need to show updated value of dom because state renders the value. as count increases on page 
  //use Ref when you need to access the dom element and you do not need to display the updated value because Ref does not renders  
  //when ref changes the component does not rerenders
  //use ref when does not use its value in dom but change its value and persist its value

  //By using a ref, you ensure that:(says react.dev)
  // You can store information between re-renders (unlike regular variables, which reset on every render).
  // Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
  // The information is local to each copy of your component (unlike the variables outside, which are shared).
  //Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use state for that instead. Read more about
  //If you show {ref.current} in the JSX, the number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.
  useEffect(() => {
    console.log(`first rendering...`)
    btnref.current.style.backgroundColor = "red" //we can access a dom element by .current anywhere even below in main page(return)
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => { btnref.current.style.backgroundColor = "yellow" }}>click me</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

