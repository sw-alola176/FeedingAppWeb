import React from 'react'
import "./settingsPage.module.css"
import img from "../../assets/home-page/Ellipse 1.png"

const SettingsPage = () => {

  const  settingTabs = [
    {
      name: "View Details"
    },
    {
      name: "Delete Account"
    },
    {
      name: "Light Mode"
    },
    {
      name: "Log out"
    }
  ]
  
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
      <div>
        <ul className='w-full'>
          {settingTabs.map(data => 
            (<li className='border-t-2 border-[#932A98] h-20.5 flex justify-center items-center' key={data.name}>{data.name}</li>)
          )}
        </ul>
      </div>
    </div>
  )
}

export default SettingsPage