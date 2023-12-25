import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/home';
import { GoSun } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import Singin from './components/singIn';
import CreateAcc from './components/createAccaunt';
import { useEffect, useState } from 'react';
import { FaRegMoon } from "react-icons/fa";
function App() {
 useEffect(()=>{
  document.querySelector('body').setAttribute('data-theme', ('ligth'))
 }, [])

 function setDataMode (){
  document.querySelector('body').setAttribute('data-theme', 'dark')
 }
 function setLightMode (){
  document.querySelector('body').setAttribute('data-theme', ('ligth'))
 }
 function onchangeMode() {
  let moonElement = document.getElementById("Moon");
  let sunElement = document.getElementById("Sun");

  if (moonElement.style.display === "none") {
      moonElement.style.display = "block";
      sunElement.style.display = "none";
      setDataMode();
  } else {
      moonElement.style.display = "none";
      sunElement.style.display = "block";
      setLightMode();
  }
}


  return (
    <div className='container'>
      <BrowserRouter>
        <header className="header-container">
          <div className="Login">
            <ul>
              <li>
              <Link to='/login'>Sign in / Guest</Link>
              </li>
              <li>
                <Link to='/singin'>Create Accaunt</Link>
              </li>
            </ul>
          </div>
          <nav className='navbar-container'>
            <span>C</span>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/products'>Products</Link>
              </li>
              <li>
                <Link to='/cart'>Cart</Link>
              </li>
            </ul>
            <div className="icon-container">
              <GoSun className='icon' id='Sun'  onClick={onchangeMode} />
              <FaRegMoon className='icon' onClick={onchangeMode} id='Moon' />
              <MdOutlineShoppingCart className='icon' />
            </div>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Singin />}/>
          <Route path='/singin' element={<CreateAcc />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
