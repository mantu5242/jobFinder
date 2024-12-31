import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='cardMainBox1'>
        <div className='cardProfileBox'>
            <img className='cardImage' src='https://lh3.googleusercontent.com/p/AF1QipPb1lRwZU4vaI2QVHo_mcYG4bsp13P2jn5vudmK=s1360-w1360-h1020'></img>
        </div>
        <div className='cardProfileContent'>
            <div className='companyName cardTextHead'>Shop : </div>
            <div className='vaccantPosition cardTextHead'>Position :</div>
        </div>
    </div>
  )
}

export default Card