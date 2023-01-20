import React from 'react'
import HomeNavbar from './HomeComponents/HomeNavbar'
import Infoslider from './HomeComponents/Infoslider'
import HomeButtons from './HomeComponents/HomeButtons'

export default function Home() {

  return(
    <>
    <HomeNavbar/> 
    <div className='info-container'>
      <div className="info">
        <h1 className='box-heading' style={{backgroundColor:"#F8F8FF", textAlign:"center", borderRadius:"20px", color:"#3b3355"}}>ABCD EFGH</h1>
        <p style={{backgroundColor:"#F8F8FF",fontFamily:"Ubuntu",color:"#3b3355"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illum neque quae alias eaque officiis beatae repellat. Asperiores nam ullam cupiditate illum perspiciatis maxime, commodi, ipsa aperiam, distinctio rerum iste?</p></div>
      <Infoslider/>
    </div>
    
    <HomeButtons/>
    </>
  )
}
// #43C6DB