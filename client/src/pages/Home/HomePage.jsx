import './HomePage.module.css'
import { Link, NavLink } from "react-router-dom"
import img from "../../assets/home-page/Ellipse 1.png"
import { SwitchProvider } from '../../components/switchLight.jsx';
import { useContext } from 'react';
import ThemeSwitch from '../../components/ThemeSwitch.jsx';
import MenuBar from '../../components/MenuBar.jsx';

const HomePage = () => {

  const {switchLight} = useContext(SwitchProvider);
  const style = {
    backgroundColor: switchLight ? "black": "white",
    color: switchLight ? "white": "#932A98"
  };

  const userData = {
    name: "Hiba Abdul",
    balance: 100000
  }

  const restaurants = [
    {name: "Chicken Republic",
      image: img
    }, 
    {name: "KFC",
      image: img
    },
    {name: "Betajollof",
      image: img
    },
    {name: "Burger King",
      image: img
    },
    {name: "The place",
      image: img
    },
    {name: "Domino's Pizza",
      image: img
    },
    {name: "Mega Chicken",
      image: img
    },
    {name: "Cold Stone",
      image: img
    },
    {name: "Dodo Pizza",
      image: img
    },
    {name: "Food co",
      image: img
    }
  ]

  return (
    <>
    <div style={style} className='max-w-full h-full m-0 self-center justify-self-center place-content-center  relative p-3 flex flex-col'>
      <ThemeSwitch />
      <header className='text-center self-center gap-4 w-fit'>
        <div className="flex items-center justify-center">
          <div className="size-[120px] border-[3px] border-[#932A98] -mr-2 rounded-full flex items-center justify-center">
            <img
              className="size-[90px] object-cover"
              src={img} 
              alt="food place"
            />
          </div>

          <div className={`w-[238px] h-[70px] ${switchLight ? 'bg-black tracking-wider': 'bg-white'} border-[3px] border-[#932A98] flex items-center pl-3 pr-10 rounded-2xl rounded-l-2xl border-l-0 text-[24px] font-bold z-10 text-[#932A98]`}>
            {userData.name}
          </div>
        </div>

        <p  className='bg-[#932A98] cursor-pointer text-white font-bold rounded-[10px] h-[53px] w-55 pt-3'>#{userData.balance}</p>

        <p className={`${switchLight ? 'text-white': 'text-black'}`}>Pick a restaurant of your choice to purchase a <br /> <Link to="/coupon" className={`${switchLight ? 'text-[#932A98]' : 'text-[#932A98]'}`}>coupon</Link></p>
      </header>
      
      <main className='mt-2.5 w-full m-0 '>
        <div className='mb-1.5 mt-1.5 h-min flex justify-center'>
          <p className='text-[#932A98] text-3xl font-bold'>Available Restaurants</p>
        </div>

        <section className='flex flex-wrap justify-center gap-5 mt-5'>
          {restaurants.map(data => {
            return (
              <div key={data.name} className={`border-3 size-[150px] w-[170px] ${switchLight ? 'text-white bg-black': ''} text-center pt-4 pb-4 pr-2 pl-2 rounded-[30px] flex flex-col items-center border-[#932A98]`}>
                <img
                  className='size-[70px] mr-0'
                  src={data.image}
                  alt="food place"/>
                <p className='text-[16px] text-nowrap mt-1.5'> {data.name}</p>
              </div>
            )
          })}
          <MenuBar />
        </section>
      </main>
    </div>
  </>
  )
}

export default HomePage