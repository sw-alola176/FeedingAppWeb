import React, { useState } from 'react'
import "./settingsPage.module.css"
import img from "../../assets/home-page/Ellipse 1.png"
import { MdSwitchLeft, MdSwitchRight } from "react-icons/md";
import { SwitchProvider } from '../../components/switchLight'; 
import { useContext } from 'react';
import MenuBar from "../../components/MenuBar.jsx"

const SettingsPage = () => {

  const {switchLight, setSwitchLight} = useContext(SwitchProvider)
  const [del, setDel] = useState(false)
  const [logout, setLogout] = useState(false)
  
  const blocks = [
    {
      texts: del ? "Are you sure you want to delete your account?" : "Your password is automatically saved for the next time you want to log in",
      buttonOne: del ? "YES" : "LOG OUT",
      buttonTwo: del ? "CANCEL" : "BACK"
    }
  ]
  
  return (
    <div style={{paddingTop: '20px'}} className={`${switchLight ? 'bg-black' : ''} relative place-self-center h-screen w-screen flex flex-col gap-10`}>
      <div className='flex self-center items-center gap-4'>
        <div className='border-[#932A98] flex justify-center rounded-full size-40 border-4'>
          <img className='size-30 self-center object-cover' src={img} alt='picture of restaurants' />
        </div>
        <div className='text-[#932A98] text-2xl flex flex-col w-3xs'>
          <p className='self-start font-bold'>Alola Oshodi</p>
          <p className=' text-[18px] self-end'>08064458326</p>
        </div>
      </div>
      <div className={`${switchLight ? 'text-white': ''} text-xl`}>
        <p style={{paddingLeft: '33px'}} className='border-t-2 flex items-center border-[#932A98] h-18 w-full'>View Details</p>
        <button 
          onClick={() => setDel(prev => !prev)}
          disabled={del || logout ? true : false}
          style={{paddingLeft: '33px'}} 
          className='border-t-2 cursor-pointer flex items-center border-[#932A98] h-18 w-full'
          >
          Delete Account
        </button>
        <div style={{paddingLeft: '0px'}} className='flex items-center justify-around w-full border-t-2 border-[#932A98] h-18 '>
          <p>Light Mode</p>
          <button onClick={() => setSwitchLight(prev => !prev)}>
            { switchLight ? <MdSwitchLeft className='text-3xl' /> : <MdSwitchRight className='text-3xl' />}
          </button>
          <p>Dark Mode</p>
        </div>
        <button disabled={logout || del ? true: false} onClick={() => setLogout(prev => !prev)} style={{paddingLeft: '33px'}} className='border-t-2 w-full cursor-pointer flex items-center justify-start border-b-2 border-[#932A98] h-18'>Log out</button>
      </div>

      {del || logout ? blocks.map(data => (<div className='bg-[#C578C866] border-[#932A98] border-2 backdrop-blur-[10px] w-[350px] h-[205px] p-10 flex flex-col justify-center gap-4 items-center rounded-3xl absolute self-center top-40 bottom-50 place-self-center z-10'>
        <p className={`${switchLight ? 'text-white font-bold': ''} text-[20px] text-center`}>{data.texts}</p>
        <div className='flex gap-4'>
          <button className={`bg-white w-[90px] font-bold h-10 rounded-2xl ${!switchLight ? 'active:bg-[#932A98] active:text-white': 'active:bg-black active:text-white'}`}>{data.buttonOne}</button>
          <button onClick={() => del ? setDel(prev => !prev): setLogout(prev => !prev)} className={`bg-white w-[90px] font-bold h-10 rounded-2xl ${!switchLight ? 'active:bg-[#932A98] active:text-white': 'active:bg-black active:text-white'}`}>{data.buttonTwo}</button>
        </div>
      </div>)) : null}

      <MenuBar />
    </div>
  )
}

export default SettingsPage