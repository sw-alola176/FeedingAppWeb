import { useState, useContext } from 'react';
import styles from './SignUpPage.module.css'
import { Link } from 'react-router-dom'
import { SwitchProvider } from '../../components/switchLight.jsx';

const SignInPage = () => {

  const [user, setUser] = useState({name: '', email: '', password: '', phone: ''});
  const [isLoading, setIsLoading] = useState(false);

  function handleNameChange(e) {
    setUser(u => ({...u, name: e.target.value}))
  }

  function handleEmailChange(e) {
    setUser(u => ({...u, email: e.target.value}))
  }

  function handlePasswordChange(e) {
    setUser(u => ({...u, password: e.target.value}))
  }

  function handlePhoneChange(e) {
    setUser(u => ({...u, phone: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setIsLoading(true)
      fetch('http://localhost:5001/api/v1/auth/sign-up', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user)
      }).then((response) => {
        console.log(response.json());
        setIsLoading(false)
      })
    }, 1000)
  }

  const {switchLight} = useContext(SwitchProvider);

    const pageDarkstyle = {
      backgroundColor: switchLight ? "black": "white",
      color: switchLight ? "white": "#932A98"
    };

    const inputDarkStyle = {
      borderBottom: switchLight ? "1px solid #3b3b3b" : "1px solid #932A98"
    }

  return (
    <>
      {!isLoading 
       && 
       
        <div 
        id="signup-page-container" 
        style={pageDarkstyle}
        className={`flex flex-col items-center justify-center w-screen h-screen  bg-[#f5f5f5]`}>
          <div 
          id="form-container"
          className={`${styles["form-container"]}`}>
            <h1 className='font-bold text-3xl mt-5 mb-3 text-[#932A98]'>Sign Up</h1>
            <form 
              id="signup-form" 
              className={`h-[85%] w-full flex flex-col items-center justify-center`} 
              onSubmit={handleSubmit}
            >
              <input 
                type="text" 
                id="username" 
                name="username"
                placeholder='Enter your full name'
                style={inputDarkStyle}
                className={`mt-8 w-[80%] h-[8%] pl-10`}
                required
                onChange={handleNameChange}
                onInvalid={(e) => e.target.setCustomValidity('Please type in your name.')}
                onInput={(e) => e.target.setCustomValidity('')} 
              />
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder='Enter an e-mail'
                style={inputDarkStyle}
                className={`mt-8 w-[80%] h-[8%] pl-10`}
                required
                onChange={handleEmailChange}
                onInvalid={(e) => e.target.setCustomValidity('Please type in a valid e-mail.')}
                onInput={(e) => e.target.setCustomValidity('')} 
              />
              <input 
                type="text" 
                id="phone" 
                name="phone"
                placeholder='Enter your phone number'
                style={inputDarkStyle}
                className={`mt-8 w-[80%] h-[8%] pl-10`}
                required
                onChange={handlePhoneChange}
                onInvalid={(e) => e.target.setCustomValidity('Please type in your phone number.')}
                onInput={(e) => e.target.setCustomValidity('')} 
              />
              <input 
                type="password" 
                id="password" 
                name="password"
                placeholder='Enter a password'
                style={inputDarkStyle}
                className={`mt-8 w-[80%] h-[8%] pl-10`}
                required
                onChange={handlePasswordChange}
                onInvalid={(e) => e.target.setCustomValidity('Please type in a password.')}
                onInput={(e) => e.target.setCustomValidity('')} 
              />
              <p className='pl-10 text-[12px]'>Must be at least 8 characters</p>
  
              <button 
                type='submit'
                className={`mt-10 w-60 h-20 font-medium ${styles['submit-btn']}`}
              >Sign Up</button>
              <p className='text-[13px] mt-8 mb-10'>Already have an account?  
                <Link to={'/login'}><span className='font-bold text-[#932A98]'> Login</span></Link></p>
            </form>
            
            {/* <hr className='w-[80%]'></hr> */}
  
            {/* <button 
              className={`mt-10 mb-8 w-60 h-15 font-medium ${styles['google-btn']}`}
              >Sign in with Google</button> */}
          </div>
  
          <p className='text-[13px] pb-7 ml-10 mr-10 '>
            By signing up, you agree to our <span className='font-bold text-[#932A98]'>Terms of service</span> and
            <span className='font-bold text-[#932A98]'> Privacy Policy</span>
          </p>
        </div>

       || 

        <div className={`flex flex-col items-center justify-center-safe w-screen h-screen  bg-[#f5f5f5]`}>
          Loading...
        </div>}
    </>
  )
};

export default SignInPage