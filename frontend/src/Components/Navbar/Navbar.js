import React from 'react'
import "./Navbar.css"

const Navbar = () => {
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
            <li style={
                {listStyleType: "none"}
            }>UserName</li>
        </div>
    
    </div>
  )
}

export default Navbar