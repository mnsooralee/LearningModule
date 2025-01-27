import React, { useEffect } from 'react'

const NavBar = ({ color }) => {
  //case 1: runs on every . no [] in the end
  useEffect(() => {
    alert("Hello world: runs on every render");
  })

  //case 2: runs on first render only, when [] in the end
  useEffect(() => {
    alert("Hello world: The first render");
  }, [])

  //case 3: runs when a perticular state or prop changes exp: [count]

  useEffect(() => {
    alert("The color was changed: render inside the NavBar component")
  }, [color])
  //doesnt run when changing the color. do not know why

  //Example of cleanup function: comment out <NavBar/> in app.jsx and see component unmounted
  useEffect(() => {
    alert()
    return () => {
      alert("The component unmounted.")
    }
  }, [])
  

  return (
    <div>
      I am a NavBar of color {color} color hehe...
    </div>
  )
}

export default NavBar
