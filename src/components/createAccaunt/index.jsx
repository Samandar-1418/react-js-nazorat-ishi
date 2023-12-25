import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateAcc() {
  return (
      
    <div className='input-container'>
    <h1>Login</h1>
    <form>
    <label htmlFor="username">
        <p>username</p>
      </label>
      <input type="text" id="username" />

      <label htmlFor="email">
        <p>Email</p>
      </label>
      <input type="email" id="email" />

      <label htmlFor="password">
        <p>Password</p>
      </label>
      <input type="password" id="password" /><br />
      <input className='btnLogin' type="button" value="REGISTER" /><br />
      <span >Not a member yet? <Link to='/login'>Login</Link></span>

    </form>
  </div>
  )
}
