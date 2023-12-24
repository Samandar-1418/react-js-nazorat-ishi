import React from 'react'

export default function Singin() {
  return (
    <div>
        <h1>Login</h1>
        <form >
          <label htmlFor="email">
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            <input type="password" id="password" />
          </label>
        </form>
    </div>
  )
}
