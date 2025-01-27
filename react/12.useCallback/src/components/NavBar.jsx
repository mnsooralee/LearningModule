import React from 'react'
import { memo } from 'react' 

const NavBar = ({adjecive, getAdjective}) => {
  console.log("NavBar rendered")
  return (
    <div>
      I am a {adjecive} NavBar.
      <button onClick={()=>{getAdjective()}}>change me: {getAdjective()}</button>
    </div>
  )
}

export default memo(NavBar) //memo will prevent NavBar from rendering when other states change
