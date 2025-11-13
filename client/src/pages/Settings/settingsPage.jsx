import React from 'react'
import "./settingsPage.module.css"
import img from "../../assets/home-page/Ellipse 1.png"
import { MdSwitchLeft, MdSwitchRight } from "react-icons/md";
import { SwitchProvider } from '../../components/switchLight'; 
import { useContext } from 'react';

const SettingsPage = () => {

  const {switchLight, setSwitchLight} = useContext(SwitchProvider)
  
  return (
    <div className='place-self-center h-screen w-screen flex flex-col gap-4'>
      <div className='flex self-center items-center gap-4'>
        <div className='border-[#932A98] flex justify-center rounded-full size-[120px] border-2'>
          <img className='size-20 self-center object-cover' src={img} alt='picture of restaurants' />
        </div>
        <div className='text-[#932A98] text-2xl flex flex-col w-3xs'>
          <p className='self-start font-bold'>Alola Oshodi</p>
          <p className=' text-[18px] self-end'>08064458326</p>
        </div>
      </div>
      <div                                                                                                                                                                                                                                                                    >
        <div className='border-t-2 flex items-center border-[#932A98] h-12 w-full p-10'>View Details</div>
        <p className='border-t-2 flex items-center border-[#932A98] h-12 w-full '>Delete Account</p>
        <div className='flex items-center gap-4 p-3 w-full pl-4 border-t-2 border-[#932A98] h-12 '>
          <p>Light Mode</p>
            <button onClick={() => setSwitchLight(prev => !prev)}>
              { switchLight ? <MdSwitchLeft /> : <MdSwitchRight />}
            </button>
          <p>Dark Mode</p>
        </div>
        <p className='border-t-2 w-full pl-3 flex items-center justify-start border-b-2 border-[#932A98] h-12 '>Log out</p>
      </div>

    </div>
  )
}

export default SettingsPage