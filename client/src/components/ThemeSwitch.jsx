import { FaSun, FaMoon } from 'react-icons/fa';
import { SwitchProvider } from './switchLight';
import { useContext } from 'react';

const ThemeSwitch = () => {
  const { switchLight, setSwitchLight} = useContext(SwitchProvider)
  
  return (
    <div className='w-full mb-1'>
      <button className='ml-[90%]' onClick={() => setSwitchLight(prev => !prev)}>
      {switchLight ? <FaMoon className='text-3xl m-[3px] cursor-pointer active:scale-[80%]' />:
                      <FaSun className='text-3xl m-[3px] cursor-pointer active:scale-[80%]' />}
      </button>
    </div>
  )
}

export default ThemeSwitch