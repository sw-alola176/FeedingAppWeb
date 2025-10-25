import styles from './SignUpPage.module.css'
import { Link } from 'react-router-dom'

const SignInPage = () => {

  const handleSubmit = () => {
    console.log("Form submitted")
  }

  return (
    <>
      <div 
      id="signup-page-container" 
      className={`flex flex-col items-center justify-center-safe w-screen h-screen  bg-[#f5f5f5]`}>
        <div 
        id="form-container"
        className={`${styles["form-container"]}`}>
          <h1 className='font-bold text-3xl mt-5 text-[#932A98]'>Sign Up</h1>
          <form 
            id="signup-form" 
            className={`h-[85%] w-full flex flex-col items-center justify-center`} 
            onSubmit={handleSubmit}
          >
            <input 
              type="text" 
              id="username" 
              placeholder='Enter your full name'
              className={`mt-8 border-b border-[#932A98] w-[80%] h-[8%] pl-10`}
              required
              onInvalid={(e) => e.target.setCustomValidity('Please type in your name.')}
              onInput={(e) => e.target.setCustomValidity('')} 
            />
            <input 
              type="email" 
              id="email" 
              placeholder='Enter an e-mail'
              className={`mt-8 border-b border-[#932A98] w-[80%] h-[8%] pl-10`}
              required
              onInvalid={(e) => e.target.setCustomValidity('Please type in a valid e-mail.')}
              onInput={(e) => e.target.setCustomValidity('')} 
            />
            <input 
              type="password" 
              id="password" 
              placeholder='Enter a password'
              className={`mt-8 border-b border-[#932A98] w-[80%] h-[8%] pl-10`}
              required
              onInvalid={(e) => e.target.setCustomValidity('Please type in a password.')}
              onInput={(e) => e.target.setCustomValidity('')} 
            />
            <p className='pl-10 text-[12px]'>Must be at least 8 characters</p>

            <button 
              type='submit'
              className={`mt-10 w-70 h-15 font-medium ${styles['submit-btn']}`}
            >Sign Up</button>
            <p className='text-[13px] mt-5'>Already have an account?  
              <Link to={'/login'}><span className='font-bold text-[#932A98]'> Login</span></Link></p>
          </form>
          
          <hr className='w-[80%]'></hr>

          <button 
            className={`mt-10 mb-8 w-60 h-15 font-medium ${styles['google-btn']}`}
            >Sign in with Google</button>
        </div>

        <p className='text-[13px] pb-15 ml-10 mr-10'>
          By signing up, you agree to our <span className='font-bold text-[#932A98]'>Terms of service</span> and
          <span className='font-bold text-[#932A98]'> Privacy Policy</span>
        </p>
      </div>
    </>
  )
};

export default SignInPage