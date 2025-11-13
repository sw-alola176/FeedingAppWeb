import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { FaList } from "react-icons/fa";

const MenuBar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(null);
  const [isHistoryActive, setIsHistoryActive] = useState(null);
  const [isSettingsActive, setIsSettingsActive] = useState(null);

  const homeActiveStyle = {
    color: "white"
  }
  const historyActiveStyle = {
    color: "white"
  }
  const settingsActiveStyle = {
    color: "white"
  }

  const currentPath = location.pathname;

  if (currentPath === '/home') {
    setIsHomeActive(true)
  } else if (currentPath === '/history') {
    setIsHistoryActive(true)
  } else if (currentPath === '/settings') {
    setIsSettingsActive(true)
  } 

  return (
    <div onClick={() => setShowMenu(prev => !prev)} className='flex items-center z-20 border-[#932A98] bottom-50 fixed'>
        {showMenu ? <FaX className={`text-2xl text-white bg-[#932A98] w-12 h-12 border-[#932A98] p-2 rounded-3xl`} /> :
        <FaList className='text-white bg-[#932A98] border-[#932A98] border-0 rounded-3xl text-2xl p-2 w-12 h-12' />}
        {showMenu ? (
          <div className='bg-[#932A98] rounded-4xl p-2'>
            <ul className='flex gap-4 text-[#C578C8E5]'>
              <li className='hover:text-[#932A98]'><NavLink style={isHomeActive ? homeActiveStyle : null} to='/home'>Home</NavLink></li>
              <li className='hover:text-[#932A98]'><NavLink style={isHistoryActive ? historyActiveStyle : null} to='/history'>History</NavLink></li>
              <li className='hover:text-[#932A98]'><NavLink style={isSettingsActive ? settingsActiveStyle : null} to='/settings'>Settings</NavLink></li>
            </ul>
          </div>
        ) : null}
      </div>
  )
}

export default MenuBar