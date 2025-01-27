import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, settodos] = useState([
    {
      title: "hey",
      desc: "I am a todo"
    },
    {
      title: "hey another todo",
      desc: "I am a good todo"
    },
    {
      title: "hey you!",
      desc: "I am a good todo 2"
    },
  ])
  const Todo = ({todo}) => {
    return (<>
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>  
    </>)
  }

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{showbtn ? <button>Show button is true</button> : <button>Show button is false</button>}</p>
        {/* <p>{showbtn && <button>Show button is true</button>}</p> */}
        <p><button onClick={() => { setshowbtn(!showbtn) }}>Toggle</button></p>
        {todos.map(todo => {
          return <Todo todo={todo}/>
        })}
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
