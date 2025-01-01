import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className="<navbarMainBox1">
        <div className='navbarMainBox2'>
            <ul className='navbarList'>
                <li style={{ listStyleType: "none" }}>Home</li>
                <li>about</li>
                <li>jobs</li>
            </ul>
            <div>
                <input placeholder='search' className='navbarSearchBox'></input>
            </div>
            <div className='navbarProfilePic'></div>
            <Link to = '/login'>
                <li style={{listStyleType: "none"}}>Login </li>
            </Link>
        </div>
    
    </div>
  )
}

export default Navbar