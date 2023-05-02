import React from 'react'
import Logo from './Logo'
import Nav from './Nav'


const Header = () => {
  const headerStyle={
    display:"flex",
    justifyContent:"space-between",
    height:"80px",
    alignItems:"center",
    margin: "0px 8%", 
  }
  return (
    <header style={headerStyle}>
        <Logo/>
        <Nav />
    </header>
  )
}

export default Header