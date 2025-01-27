import React from 'react'
// import { NavLink } from 'react-router-dom'
import {NavLink} from 'react-router-dom' //now can give NavLinks classname and withfunction

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive? "yellow": ""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "yellow": ""}} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive? "yellow": ""}} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default NavBar
