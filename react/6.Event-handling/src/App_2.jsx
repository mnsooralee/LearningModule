import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("adam")
  const [form, setForm] = useState({})

  const handleClick = () => {
    console.log("I am onClick")
  }
  const handleMouseOver = () => {
    console.log("Mouse over")
  }
  const handleChange = (e) => {
    setName(e.target.value) //changes name
    console.log(name)
  }
  const handleChange1 = (e) => {
    setForm({...form, [e.target.name]:[e.target.value]})
    console.log(form)
  }

  return (
    <>
      <button onClick={handleClick} onMouseOver = {handleMouseOver}>Click me</button>
      <p>
        <input type="text" value={name} onChange={handleChange}/>
      </p>
      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange1} />
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange1} />
    
    </>
    
  )
}

export default App
