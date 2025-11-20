import './HomePage.module.css';
import { Link, NavLink } from "react-router-dom";
import { SwitchProvider } from '../../components/switchLight.jsx';
import { useContext, useEffect, useState } from 'react';
import MenuBar from '../../components/MenuBar.jsx';
import restaurantData from "../../data/restaurantData.js";
import img from "../../assets/home-page/Ellipse 1.png";

const HomePage = () => {

  const {switchLight} = useContext(SwitchProvider);

  const style = {
    backgroundColor: switchLight ? "black": "white",
    color: switchLight ? "white": "#932A98"
  };

  // const userData = {
  //   name: "Hiba Abdul",
  //   balance: 100000,
  //   phone: "08103944029"
  // };

  //COMMENT STARTING FROM HERE
  const [ userData, setUserData ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const userId = '691a5a9eb33226f6bf3c3fc6';

  useEffect(() => {
      
    fetch(`http://localhost:5001/api/v1/users/${userId}`)
    .then(response => response.json())
    .then(responseJSON => {
      console.log(responseJSON.success)
      
      setUserData(responseJSON.data);
      setIsLoading(false)
    })

  }, [])
  //AND END HERE TO AVOID ERRORS

  const restaurants = [...restaurantData];

  return (
    <>
    {!isLoading
     &&

      <div style={style} className='max-w-full h-full m-0 self-center justify-self-center place-content-center  relative p-3 flex flex-col'>
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

          <p  className='bg-[#932A98] cursor-pointer text-white font-bold rounded-[10px] h-[53px] w-55 pt-3'>#{userData.phone}</p>

          <p className={`${switchLight ? 'text-white': 'text-black'}`}>Pick a restaurant of your choice to purchase a <br />
          <Link to="/coupon" className={`${switchLight ? 'text-[#932A98]' : 'text-[#932A98]'}`}>
            coupon
          </Link>
          </p>
        </header>
        
        <main className='mt-2.5 w-full m-0 '>
          <div className='mb-1.5 mt-1.5 h-min flex justify-center'>
            <p className='text-[#932A98] text-3xl font-bold'>Available Restaurants</p>
          </div>

          <section  className='flex flex-wrap justify-center gap-5 mt-5'>
            {restaurants.map(restaurant => {
              return (
                <div 
                  key={restaurant.id} 
                  className={`border-3 h-35 w-40 ${switchLight ? 'text-white bg-black': ''} text-center pt-4 pb-4 pr-2 pl-2 rounded-[30px] flex flex-col items-center border-[#932A98]`}>
                  <img
                    className='size-[70px] mr-0'
                    src={restaurant.image}
                    alt="food place"/>
                  <p className='text-[16px] text-nowrap mt-1.5'> {restaurant.name}</p>
                </div>
              )
            })}
            <MenuBar />
          </section>
        </main>
      </div>
     
     ||

      <div className={`flex flex-col items-center justify-center-safe w-screen h-screen  bg-[#f5f5f5] text-fuchsia-800`}>
      Loading...
      </div>
    }
  </>
  )
}

export default HomePage