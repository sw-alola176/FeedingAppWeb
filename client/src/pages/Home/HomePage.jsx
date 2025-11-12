import React from 'react'
import'./HomePage.module.css'
import { Link } from "react-router-dom"
import img from "../../assets/home-page/Ellipse 1.png"
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { SwitchProvider } from '../../components/switchLight';
import { useContext, useState, useEffect } from 'react';

const HomePage = () => {

  const {switchLight, setSwitchLight} = useContext(SwitchProvider)
  const style = {
    backgroundColor: switchLight ? "black": "white",
    color: switchLight ? "white": "#932A98"
  }
  const [showMenu,setShowMenu] = useState(false)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMove = (x, y) => {
      if (dragging) {
        setPosition({
          x: x - offset.x,
          y: y - offset.y,
        });
      }
    };

    const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    const handleMouseUp = () => setDragging(false);
    const handleTouchEnd = () => setDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging, offset])



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
    <div style={style} className={`w-full h-full m-0 self-center justify-self-center place-content-center relative p-3 flex flex-col`}>
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
            Kelvin Donye
          </div>
        </div>

        <button  className='bg-[#932A98] cursor-pointer text-white font-bold rounded-[10px] h-[43px] w-[238px]'>#12,000</button>

        <p className={`${switchLight ? 'text-white': 'text-black'}`}>Pick a restaurant of your choice to purchase a <br /> <Link to="/coupon" className={`${switchLight ? 'text-[#932A98]' : 'text-[#932A98]'}`}>coupon</Link></p>
      </header>

      <button onClick={() => setSwitchLight(prev => !prev)} className='absolute top-2 right-2'>
        {switchLight ? <FaMoon className='text-2xl cursor-pointer active:scale-[80%]' />:<FaSun className='text-2xl cursor-pointer active:scale-[80%]' />}
      </button>

      <main className='mt-2.5 w-full m-0'>
        <Link className='text-[#932A98] mb-1.5' to=''>Available Restaurants</Link>

        <section className='flex flex-wrap justify-center gap-5 mt-5'>
          {restaurants.map(data => {
            return (
              <div key={data.name} className={`border-3 size-[150px] w-[170px] ${switchLight ? 'text-white bg-black': ''} text-center pt-4 pb-4 pr-2 pl-2 rounded-[30px] flex flex-col items-center border-[#932A98]`}>
                <img
                  className='size-[70px] mr-0'
                  src={data.image}
                  alt="food place"/>
                <p className='text-[16px] text-nowrap mt-1.5 w-100'> {data.name}</p>
              </div>
            )
          })}


        </section>

      </main>
    
    <div
      className='flex items-center gap-4'
      onMouseDown={(e) => {
        setDragging(true);
        setOffset({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        });
      }}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        setDragging(true);
        setOffset({
          x: touch.clientX - position.x,
          y: touch.clientY - position.y,
        });
      }}
      onClick={() => setShowMenu((prev) => !prev)}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: dragging ? 'grabbing' : 'pointer',
        background: '#fff',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '10px',
        userSelect: 'none',
        touchAction: 'none'
      }}
    >
      <FaList className='text-2xl' />
      {showMenu ? (
        <div>
          <ul className='flex gap-4 text-[#C578C8E5]'>
            <li className='hover:text-[#932A98]'>Home</li>
            <li className='hover:text-[#932A98]'>History</li>
            <li className='hover:text-[#932A98]'>Settings</li>
          </ul>
        </div>
      ) : null}
    </div>


      <p>x: {mousePosition.x} <br/> y: {mousePosition.y}</p>
    </div>

    </>
  )
}

export default HomePage