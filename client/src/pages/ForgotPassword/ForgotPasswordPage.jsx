import { useState } from 'react';
import forgotStyles from "./forgotPasswordPage.module.css";
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import { RiErrorWarningLine } from "react-icons/ri";
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {

  const [newChangedPassword, setNewChangedPassword] = useState(false)
  const [warning, setWarning] = useState(false)

  const handleChangePassword = (e) => {
    e.preventDefault()

    const password = e.target.elements.password.value
    const newPassword = e.target.elements.newPassword.value
    
    if(password === newPassword){
      setNewChangedPassword(prev => !prev)
    }else if( password && newPassword === '' ){
      setNewChangedPassword(false)
    }else{
      setWarning(prev => !prev)
    }    
  }

  return (
    <div className='flex flex-col max-w-full h-full'>
      {!newChangedPassword ? 
      <><Link className='flex items-center gap-4 ml-8 mt-5' to='..'>
          <FaArrowLeftLong className='text-[#932A98] text-2xl'/>
          <p className='text-xl'>Back</p>
        </Link>
      
        <form 
          onSubmit={handleChangePassword} 
          className={`mt-[25%] p-10 w-[85%] ${forgotStyles['forgot']} rounded-4xl flex-col gap-10 self-center`}
          >

          <h1 className='text-xl text-center text-[#932A98]'>Encryption password change</h1>
          <p className='text-center'>Passwords must be at least 
            <span className='text-[#932A98] font-bold'> eight </span>
            characters long
          </p>

          <div className={`${forgotStyles['forgot-div']}`}>
            <label htmlFor='password'>New password</label>
            <input
              className={`${forgotStyles['forgot-input']}`}
              id='password' 
              name='password' 
              type="password" 
              onInvalid={(e) => e.target.setCustomValidity("Please type in your password")} 
              onInput={(e) => e.target.setCustomValidity('')}/>
          </div>

          <div className={`${forgotStyles['forgot-div']}`}>
            <label htmlFor='newPassword'>Confirm new password</label>
            <input
            className={`${forgotStyles['forgot-input']}`}
              id='newPassword' 
              name='newPassword'
              type="password" 
              required
              onInvalid={(e) => e.target.setCustomValidity("Please type in your password")} 
              onInput={(e) => e.target.setCustomValidity('')}/>
            {warning ? <p className='flex items-center gap-2 text-[#932A98] text-sm text-center'><RiErrorWarningLine /> Passwords must contain the same value</p>: null}
          </div>

          <button
            className={`${forgotStyles['forgot-btn']}`}
            disabled={setNewChangedPassword ? false : true} 
            type="submit">Change Password
          </button>

          {newChangedPassword ? <p>changed password</p>: null}

        </form>
        </>
        :
        <div className='flex flex-col gap-15 h-full text-center mt-[50%]'>

          <div className='bg-[#932A98] self-center w-fit p-6 rounded-full'>
            <FaCheck className='text-9xl text-white'/>
          </div>

          <p className='text-[#932A98] text-2xl w-full'>PASSWORD CHANGED SUCCESFULLY</p>

          <button 
            className={`flex justify-center bg-[#932A98] text-white rounded-3xl items-center gap-4 self-center p-4 w-[70%]`}>
              Next <FaArrowRightLong />
            </button>
        </div> 
        }
    </div>
  )
}

export default ForgotPasswordPage