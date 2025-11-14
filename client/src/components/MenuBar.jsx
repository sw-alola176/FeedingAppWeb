import { Link, NavLink } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { SwitchProvider } from "./switchLight";
import { useContext } from "react";

const MenuBar = () => {

  const {showMenu, setShowMenu} = useContext(SwitchProvider)

  const homeActiveStyle = {
    color: "#932A98"
  }
  const historyActiveStyle = {
    color: "#932A98"
  }
  const settingsActiveStyle = {
    color: "#932A98"
  }

  return (
    <div onClick={() => setShowMenu(prev => !prev)} className='flex items-center z-20 border-[#932A98] bottom-50 fixed'>
        {showMenu ? <FaX style={{padding: "10px"}} className={`text-[55px] text-white bg-[#932A98] border-[#932A98] rounded-3xl`} /> :
        <FaList style={{padding: "10px"}} className='text-white bg-[#932A98] border-[#932A98] rounded-3xl text-[55px]' />}
        {showMenu ? (
          <div style={{padding: "16px"}} className='bg-white shadow-[#932A98] shadow-2xs border-2 border-[#932A98] rounded-4xl h-10'>
            <ul className='h-full flex items-center justify-center gap-4 text-sm text-[#C578C8E5]'>
              <li className='hover:text-[#932A98]'><NavLink style={({isActive}) => (isActive ? homeActiveStyle: null)} to='/home'>Home</NavLink></li>
              <li className='hover:text-[#932A98]'><NavLink style={({isActive}) => (isActive ? historyActiveStyle: null)} to='/history'>History</NavLink></li>
              <li className='hover:text-[#932A98]'><NavLink style={({isActive}) => (isActive ? settingsActiveStyle: null)} to='/settings'>Settings</NavLink></li>
            </ul>
          </div>
        ) : null}
      </div>
  )
}

export default MenuBar