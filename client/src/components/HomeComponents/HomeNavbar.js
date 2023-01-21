import React from 'react'
import logo from './flask.png'

export default function HomeNavbar() {
  return (
    <div className='home-nav'>
      <div>
        <img src={logo} />
        <span className='nav-heading' style={{color:"#c393cc",marginLeft:"10px"}}>avera</span>
        <span className='nav-heading' style={{color:"#fa9398"}}>health</span>
      </div>
      <div>
        <span>Home</span>
        <span>Contact</span>
      </div>
    </div>
  )
}
