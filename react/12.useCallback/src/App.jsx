  import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar"

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("good")

  // const getAdjective = () => {//when full app renders. this function(which is also prop of NavBar) changes and that's why NavBar renders, because NavBar's prop is changed so it renders whether or not it is in memo 
  //   return "another" + count //this function changes, count changes, so NavBar rerenders
  // }

  //use useCallback when we donot want this rerendering
  
  

  const getAdjective = useCallback(
    () => {
      return "another" + count
    },
    //[]// this will freez completely
    [count], //this will freez the function but rerender when count is changed and this is what we want
  )
  
  

  return (
    <>
    <NavBar adjecive={"normal"} getAdjective={getAdjective}/> {/*when full app renders. this function(which is also prop of NavBar) changes and that's why NavBar renders, because NavBar's prop is changed so it renders whether or not it is in memo */}
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
