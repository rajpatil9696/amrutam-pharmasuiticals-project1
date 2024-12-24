import React from 'react'
import './navbar.css'
import amrutamlogo from '../images/amrutamlogo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='content flex'>
        <div className='inner-content flex'>
          <img src={amrutamlogo}></img>
          <div className='inner-content2 flex'>
            <p className='home'>Home</p>
            <p className='find'>Find Doctors</p>
            <p className='about'>About Us </p>
          </div>
        </div>
       <div className='buttons flex justify-between'> 
       <button className='login'><p className='w-[60]px h-[30px] font-medium text-base leading-8 text-green-900'>Login</p></button>
       <button className='signup'><p className='w-[85]px h-[31]px font-medium font-base leading-8 text-white'>Sign-Up</p></button>
       </div>
      </div>
    </div>
  )
}

export default Navbar

