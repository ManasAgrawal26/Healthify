import React from 'react'
import {
  Link, useNavigate
} from 'react-router-dom';

export default function HomeButtons() {
  return (
    <div className='btn-container'>
        <button className='home-btn' ><Link to="/patientlogin" class="btn-link">Patient</Link></button>
        <button className='home-btn'>Doctor</button>
        <button className='home-btn'>Lab</button>
    </div>
  )
}
