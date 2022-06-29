import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='header'>
    <nav className='Nav-design'>
       
        <ul className='Full-Details'>
          <Link className='text-class'  to="/userdetails">UserDetails</Link>
          <Link className='icon-class' to="/Form"><i class="fa-solid fa-circle-plus fa-2x"></i><span style={{fontSize:"35px"}}>Form</span></Link>
        </ul>
    </nav>
</div>
  )
}

export default NavBar