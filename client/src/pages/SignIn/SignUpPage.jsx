import styles from './SignUpPage.module.css'
import { Link } from 'react-router-dom'

const SignInPage = () => {

  const handleSubmit = () => {
    console.log("Form submitted")
  }

  return (
    <>
      <div 
<<<<<<< HEAD
      id="signup-page-container" 
      className={`flex flex-col items-center justify-center-safe w-screen h-screen  bg-[#ffffffd1]`}>
        <div 
        id="form-container"
        className={`${styles["form-container"]}`}>
          <h1 className='font-bold text-3xl mt-5 text-[#932A98]'>Sign Up</h1>
          <form id="signup-form" className={`h-[70%] w-full`} onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="username" 
              placeholder='Enter your full name'
              className={`mt-8 border-b w-[80%] h-[8%] pl-10`}
              required
              onInvalid={(e) => e.target.setCustomValidity('Please type in your name.')}
              onInput={(e) => e.target.setCustomValidity('')} 
            />
            <input 
              type="email" 
              id="email" 
              placeholder='Enter an e-mail'
              className={`mt-8 border-b w-[80%] h-[8%] pl-10`}
              required
              onInvalid={(e) => e.target.setCustomValidity('Please type in a valid e-mail.')}
              onInput={(e) => e.target.setCustomValidity('')} 
            />
            <input 
              type="password" 
              id="password" 
              placeholder='Enter a password'
              className={`mt-8 border-b w-[80%] h-[8%] pl-10`}
              required
              onInvalid={(e) => e.target.setCustomValidity('Please type in a password.')}
              onInput={(e) => e.target.setCustomValidity('')} 
            />
            <p className='pl-10 text-[12px]'>Must be at least 8 characters</p>

            <button 
              type='submit'
              className={`ml-10 mt-10 w-60 h-15 font-medium ${styles['submit-btn']}`}
            >Sign Up</button>
            <p className='text-[13px] ml-13 mt-2'>Already have an account? 
              <Link to={'/log-in'}><span className='font-bold text-[#932A98]'>Login</span></Link></p>
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
=======
      id="form-container"
      className={`${styles["form-container"]}`}>
        <h1 className='font-bold text-3xl mt-5 text-[#932A98]'>Sign Up</h1>
        <form id="signup-form" className={`h-full w-full`}>
          <input 
            type="text" 
            id="username" 
            placeholder='Enter your full name'
            className={`mt-8 border-b w-[80%] h-[8%] pl-10`}
          />
          <input 
            type="email" 
            id="email" 
            placeholder='Enter an e-mail'
            className={`mt-8 border-b w-[80%] h-[8%] pl-10`}
          />
          <input 
            type="password" 
            id="password" 
            placeholder='Enter a password'
            className={`mt-8 border-b w-[80%] h-[8%] pl-10`}
          />
          <p className='pl-10 text-[12px]'>Must be at least 8 characters</p>
        </form>

        <div></div>
>>>>>>> 8bf61dcb96a9e66f0672b8ae05186c73fa51acba
      </div>
    </>
  )
};

export default SignInPage