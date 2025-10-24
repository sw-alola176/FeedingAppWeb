import welcomeImage from '../../assets/welcome-page/boy.png';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

const WelcomePage = () => {

  return (
    <div id="welcome-page-container" className='flex flex-col items-center justify-center-safe'>
      <div id="title-box" className='w-max mt-[30vh]'> 
        <img 
          src={welcomeImage}
          className='rounded-full w-[140px] h-auto ml-3.5'
        />
        <p className='ml-3.5 mt-5 font-medium text-2xl'>Feeding App</p>
      </div>
      <div id="description-text" className='mt-[13vh] w-80 ml-2.5'>
        <p className='font-medium'>
          A cheaper and personalized way to purchase food
          from your favourite locations...
        </p>
      </div>
      <div id="button-container" className='mt-[8vh] flex flex-row items-center justify-center gap-6'>
        <Link to='/sign-up'><button id="signup-btn" className={styles["signup-btn"]}>
          Sign up
        </button></Link>
        <Link to='#'><button id="login-btn" className={styles["login-btn"]}>
          Log in
        </button></Link>
      </div>
    </div>  
  )
}

export default WelcomePage