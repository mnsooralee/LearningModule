//practice version

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [typing, settyping] = useState("Default text")
  //const [form, setForm] = useState({email:"Me", phone:"yoyo"})
  const [form, setForm] = useState({})

  const editInput = (e) => {
    settyping(e.target.value)
    console.log(typing)
  } 

  const editData = (e) => {
    setForm({...form, [e.target.name]:[e.target.value]})
    console.log(form)
  }

  const clickEvent = () => {
    console.log("Click event")
  }
  const mouseOverEvent = () => {
    console.log("Mouse over")
  }
  return (
    <>
      <button onClick={clickEvent} onMouseOver={mouseOverEvent}>Click me</button>
      <p>
      <input type="text" value={typing} onChange={editInput}/>
      </p>
      <p>
        <input type="text" placeholder="email" name="email" value={form.email? form.email:""} onChange={editData}/>
        <input type="text" placeholder="phone" name="phone" value={form.phone? form.phone:""} onChange={editData} />
      </p>
    
    
    </>
    
    
  )
}

export default App
