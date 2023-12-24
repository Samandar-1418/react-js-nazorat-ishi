import React from 'react'
import './index.css'
import CreateAcc from '../About/createAccaunt'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Singin() {
  return (

    <div className='input-container'>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          <p>Email</p>
        </label>
        <input type="email" id="email" />

        <label htmlFor="password">
          <p>Password</p>
        </label>
        <input type="password" id="password" /><br />
        <input className='btnLogin' type="button" value="LOGIN" /><br />
        <input className='btnAcc' type="button" value="GUEST USER" /><br />
        <span>Not a member yet? <Link to='/login'>salom</Link></span>

        <div>
          <Routes>
            <Route path='/login' element={<CreateAcc />} />
          </Routes>
        </div>
      </form>
    </div>
  )
}
