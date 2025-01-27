import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index: i,
    isMagical: i===29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  //const magical = numbers.find(item=>item.isMagical===true) //Expensive computation coz 30M values
  //const magical = useMemo(() => numbers.find(item=>item.isMagical===true), []) //now that component won't rerender throught states(others) changing
  const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers]) // [numbers] is the dependency array and now this useMemo will rerender when numbers are changed...and I am changing numbers below on a condition when count = 10
  //const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers, count]) //this will make it rerender everytime when count changes and will work same as the first code of expensive computation.
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
        <span>Magical number:{magical.index}</span>
        <button onClick={() => {
          setCount((count) => count + 1);
          if(count==10) {
            setNumbers(
              new Array(10_000_000).fill(0).map((_,i)=>{
                return {
                  index: i,
                  isMagical: i===9_000_000
                }
              })
            )
          }
          }}>
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
