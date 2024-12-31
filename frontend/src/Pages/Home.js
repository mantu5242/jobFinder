import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Card from '../Components/Card/Card';
import './Home.css'


const Home = () => {
  return (
    <div className='homeMainBox1'>
      <Navbar />
      <div className='homeMainBox2'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </div>
  );
}

export default Home