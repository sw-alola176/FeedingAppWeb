import { Link } from 'react-router-dom'
import styles from './Login.module.css'

const LoginInPage = () => {
  return (
    <div id="login-container" className={styles["login-container"]}>
      <form id="login-form" className={styles["login-form"]}>
        <h1>Login</h1>
        <input 
          type="text" 
          id="email" 
          placeholder='Enter your username'
          required
          onInvalid={(e) => e.target.setCustomValidity('Please type in your username.')}
          onInput={(e) => e.target.setCustomValidity('')}
        />
        <input 
          type="password" 
          id="password" 
          placeholder='Enter your password'
          required
          onInvalid={(e) => e.target.setCustomValidity('Please type in your password.')}
          onInput={(e) => e.target.setCustomValidity('')}
        />
        <Link to="/forgot" className='text-[#932A98] font-medium'><h4>Forgot Password?</h4></Link>

        <button 
          type="submit"
          className={`w-full h-15 bg-[#932A98] text-white cursor-pointer text-[18px]`}
        >Login</button>

        <div>
          <input type="checkbox" id="remember-me"/>
          <label className='text-sm flex '> Remember these login details </label>
        </div>
        
        <p className='text-[13px] ml-15'>
          Not a member? <span className='font-bold text-[#932A98]'><Link to="/signup">Sign up</Link></span>
        </p>
      </form>
    
    </div>
  )
}

export default LoginInPage