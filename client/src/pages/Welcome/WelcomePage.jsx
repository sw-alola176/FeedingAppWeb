import './WelcomePage.module.css'
import welcomeImage from '../../assets/welcome-page/boy.png'

const WelcomePage = () => {
  
  const signUpBtnStyles = {
    border: '3px solid #932A98',
    color: '#932A98',
    backgroundColor: '#ffffff',
    borderRadius: '30px'
  };

  const loginBtnStyles = {
    border: '3px solid #fff',
    color: '#fff',
    backgroundColor: '#932A98',
    borderRadius: '30px'
  }

  return (
    <div id="welcome-page-container" className='flex flex-col items-center justify-center-safe'>
      <div id="title-box" className='w-max mt-[30vh]'> 
        <img 
          src={welcomeImage}
          className='rounded-full w-[140px] h-auto ml-3.5'
        />
        <p className='ml-3.5 mt-5 font-medium text-2xl'>Feeding App</p>
      </div>
      <div id="description-text" className='mt-[13vh] w-80 ml-[0.625rem]'>
        <p className='font-medium'>
          A cheaper and personalized way to purchase food
          from your favourite locations...
        </p>
      </div>
      <div id="button-container" className='mt-[8vh] flex flex-row items-center justify-center gap-6'>
        <a href="#"><button id="signup-btn" style={signUpBtnStyles} className='w-[40vw] h-[45px] font-medium'>
          Sign up
        </button></a>
        <a href="/home"><button id="login-btn" style={loginBtnStyles} className='w-[40vw] h-[45px] font-medium'>
          Log in
        </button></a>
      </div>
    </div>  
  )
}

export default WelcomePage