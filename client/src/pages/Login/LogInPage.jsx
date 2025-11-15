import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import { useState, useContext } from 'react'
import { SwitchProvider } from '../../components/switchLight.jsx';

const LoginInPage = () => {

  const [user, setUser] = useState({email: '', password: ''});

  function handleEmailChange (e) {
    setUser(u => ({...u, email: e.target.value}))
  }

  function handlePasswordChange (e) {
    setUser(u => ({...u, password: e.target.value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(user)
  }

  const {switchLight} = useContext(SwitchProvider);

  const style = {
    backgroundColor: switchLight ? "black": "white",
    color: switchLight ? "white": "#932A98"
  };

  const inputDarkStyle = {
    borderBottom: switchLight ? "1px solid #3b3b3b" : "1px solid #932A98"
  };

  return (
    <>
      <div id="login-container" className={styles["login-container"]} style={style}>
        <form id="login-form" className={styles["login-form"]} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input 
            type="text" 
            id="email" 
            placeholder='Enter your email'
            required
            style={inputDarkStyle}
            onChange={handleEmailChange}
            onInvalid={(e) => e.target.setCustomValidity('Please type in your email.')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <input 
            type="password" 
            id="password" 
            placeholder='Enter your password'
            required
            style={inputDarkStyle}
            onChange={handlePasswordChange}
            onInvalid={(e) => e.target.setCustomValidity('Please type in your password.')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <Link to="/forgot" className='text-[#932A98] font-[12px]'><h4>Forgot Password?</h4></Link>

          <button 
            type="submit"
            className={`w-full h-15 bg-[#932A98] text-white cursor-pointer text-[18px] font-medium`}
          >Login</button>
          
          <p className='text-[13px] mb-10'>
            Not a member? <span className='font-bold text-[#932A98]'><Link to="/signup">Sign up</Link></span>
          </p>
        </form>

        {/* { isVisible && (
          <p id="remember-me-text" className='text-[13px] w-[70%] ml-6 opacity-80'>
            You will be signed in with these details in subsequent sessions.
          </p>
        )} */}

        <p className='text-[13px] pb-10 ml-10 mr-10 mt-8'>
      By signing up, you agree to our <span className='font-bold text-[#932A98]'>Terms of service</span> and
      <span className='font-bold text-[#932A98]'> Privacy Policy</span>
      </p>
      
      </div>
    </>
  )
}

export default LoginInPage