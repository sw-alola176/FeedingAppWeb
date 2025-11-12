import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import { useState } from 'react'

const LoginInPage = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };


  return (
    <>
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
          <Link to="/forgot" className='text-[#932A98] font-[12px] ml-8'><h4>Forgot Password?</h4></Link>

          <button 
            type="submit"
            className={`w-full h-15 bg-[#932A98] text-white cursor-pointer text-[18px] font-medium`}
          >Login</button>

          <div>
            <input type="checkbox" id="remember-me" onClick={toggleVisible}/>
            <label className='text-sm flex'> Remember these login details </label>
          </div>
          
          <p className='text-[13px] ml-12'>
            Not a member? <span className='font-bold text-[#932A98]'><Link to="/signup">Sign up</Link></span>
          </p>
        </form>

        { isVisible && (
          <p id="remember-me-text" className='text-[13px] w-[70%] ml-6 opacity-80'>
            You will be signed in with these details in subsequent sessions.
          </p>
        )}

        <p className='text-[13px] pb-10 ml-10 mr-10 mt-8'>
      By signing up, you agree to our <span className='font-bold text-[#932A98]'>Terms of service</span> and
      <span className='font-bold text-[#932A98]'> Privacy Policy</span>
      </p>
      
      </div>
    </>
  )
}

export default LoginInPage