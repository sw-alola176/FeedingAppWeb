
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.module.css'

const LoginInPage = () => {
  return (
    <div id="login">

      <form id="login-form">

        <h1>Login</h1>

        <input 
          type="email" 
          id="email" 
          placeholder='Username'
        />
        <input 
          type="password" 
          id="password" 
          placeholder='Password'
        />

        <Link to="/forgot" className='text-[#932A98] font-medium'><h4>Forgot Password?</h4></Link>

        <button type="submit">Login</button>

          <div>
            <input type="checkbox" id="remember-me"/>
            <label className='text-sm flex '> Remember these login details </label>
          </div>
        
        <p>Not a member? <span><Link to="/sign-up">Sign up</Link></span></p>
      </form>
    
    </div>
  )
}

export default LoginInPage