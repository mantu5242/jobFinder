import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path='/register' element = { <Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
