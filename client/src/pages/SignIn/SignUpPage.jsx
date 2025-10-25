import styles from './SignUpPage.module.css'

const SignInPage = () => {
  return (
    <div 
    id="signup-page-container" 
    className={`flex flex-col items-center justify-center-safe w-screen h-screen  bg-[#ffffffd1]`}>
      <div 
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
      </div>
    </div>
  )
};

export default SignInPage