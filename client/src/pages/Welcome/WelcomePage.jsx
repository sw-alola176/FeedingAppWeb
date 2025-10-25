import welcomeImage from '../../assets/welcome-page/boy.png';
import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {

  return (
    <div 
      id="welcome-page-container" 
      className={`flex flex-col items-center justify-center-safe w-screen h-screen ${styles["welcome-page-bg"]}`}>
      <div id="title-box" className='w-max mt-[15vh]'> 
        <img 
          src={welcomeImage}
          className='rounded-full w-[140px] h-auto ml-3.5'
        />
        <p className='ml-3.5 mt-5 font-medium text-2xl'>Feeding App</p>
      </div>
      <div id="description-text" className='mt-[18vh] w-80 ml-2.5'>
        <p className='font-medium'>
          A cheaper and personalized way to purchase food
          from your favourite locations...
        </p>
      </div>
      <div id="button-container" className='mt-[5vh] flex flex-row items-center justify-center gap-6 '>
        <Link to='/signup'><button id="signup-btn" className={styles["signup-btn"]}>
          Sign up
        </button></Link>
        <Link to='/login'><button id="login-btn" className={styles["login-btn"]}>
          Log in
        </button></Link>
      </div>
    </div>  
  )
}

export default WelcomePage