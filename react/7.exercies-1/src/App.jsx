import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [cards, setcards] = useState([])  
  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
    <NavBar />
    <div className="container">
      {cards.map((card) => {
        return <div key={card.id} className="card">
          <h3>{card.title}</h3>
          <p>{card.body}</p>
          <p>id: {card.id}</p>
          <span>by : user ID: {card.userId}</span>
        </div>        
      })}   
    </div>    
    </>
  )
}

export default App
