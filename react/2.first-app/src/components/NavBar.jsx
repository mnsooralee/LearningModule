import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
        <a href="/"><li>Home</li></a> {/* this reloads the page */}
        <a href="/"><li>About</li></a>
        <a href="/"><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
