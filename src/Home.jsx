import React from 'react'
import { useForm } from 'react-hook-form';
import "./Home.css";
import Frame from "./assets/Frame.svg";
import User from "./assets/user.png"
import Member from "./Member";
import {useState} from "react"
const Home = () => {

    let [count ,setCount] = useState(6)
    let membersCount=Array(count).fill(null)
  function handleMember(e){
    let a=e.target.innerText;
    if(a === '1'){
      setCount(1);
    }
    else if(a === '2'){
      setCount(2);
    }
    else if(a === '3'){
      setCount(3);
    }
    else if(a === '+' && count<9){
      setCount((prev=> prev+1));
    }
  }

  return (
    <>
      <div className="container">
        <div className="cell cell-1">
          <div className="frame">
            <img src={Frame} alt="" />
          </div>
        </div>
        <div className="cell cell-2">
          <p>Get Your Best Travel Travel Insurance</p>
          <form action="">
            <div className="rows">

                <div className="row-1">
                      <div className='count one' onClick={handleMember}>1</div>
                      <div className='count two' onClick={handleMember}>2</div>
                      <div className='count three' onClick={handleMember}>3</div>
                      <div className='count more' onClick={handleMember}>+</div>
                </div>
              <div className="row-2">
                 {membersCount.map((e,i)=> <Member data={i}/>)}
              </div>
              <div className="row-3">
                <div><button>Next <i className="fa-solid fa-arrow-right"></i></button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home