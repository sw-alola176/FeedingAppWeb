import "./historyPage.module.css";
import { useState, useContext } from 'react';
import { SwitchProvider } from '../../components/switchLight.jsx';
import img from "../../assets/home-page/Ellipse 1.png";
import transactionData from "../../data/userTransactions.js";
import MenuBar from "../../components/MenuBar.jsx";

const HistoryPage = () => {

  const {switchLight} = useContext(SwitchProvider);

  const transactions = [...transactionData];

  const style = {
    backgroundColor: switchLight ? "black" : "white",
    color: switchLight ? "white": "#932A98"
  };

  const containerStyle = {
    backgroundColor: switchLight ? "black" : "white"
  };

  return (
    <>
      <div 
      className='min-h-screen w-screen bg-[#f0f0f036] flex justify-between flex-col gap-6'
      style={style}>
        <div id="transactions-text" className="flex justify-center align-center font-bold z-10 ">
          <p className="text-3xl mt-10">Transactions</p>
        </div>
          
        <div className="h-full pl-3 pr-3 mb-5">
          {transactions.map((transaction) => {
            return (
              <div 
              className="w-full h-25 mt-2 text-[0.95rem] p-2 border-3 border-[#932A98] flex justify-between align-center rounded-xl"
              >

                <img src={img} className="h-[80%] rounded-3xl"/>

                <div className="flex flex-col mr-auto ml-5">
                  <p className="font-bold">{transaction.restaurant}</p>
                  <p className="font-bold">#{transaction.amount}</p>
                </div>

                <div className="flex flex-col">
                  <p><span className="font-bold">Date: </span>{transaction.date}</p>
                  <p><span className="font-bold">Time: </span>{transaction.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <MenuBar />
    </>
  )
}

export default HistoryPage