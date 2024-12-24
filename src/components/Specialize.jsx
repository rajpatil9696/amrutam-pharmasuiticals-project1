import React from 'react'
import './specialize.css'
import women from '../images/women.svg';
import skin from '../images/skin.svg';
import immunity from '../images/immunity.svg';
import hair from '../images/hair.svg'

const Specialize = () => {
  return (
    <div className='w-[628px] h-[251px] absolute top-[1000px] left-[112px] border-2 rounded-md '>
      <div className=' title  w-[623px] h-[61px]  '> <p className='w-[149px] h-[33px] absolute top-[14px] left-[37px] font-semibold text-2xl'>I  Specialize In</p> </div>
      <div className='w-[445px] h-[123px]  mt-7 ml-7 flex gap-4'>
        <div className='w-[121px] h-[123px] '>
            <img src={women}></img>
        </div >
        <div className='w-[121px] h-[123px] '>
            <img src={skin}></img>
        </div>
        <div className='w-[121px] h-[123px] '>
            <img src={immunity}></img>
        </div>
        <div className='w-[121px] h-[123px] '>
            <img src={hair}></img>
        </div>
     
      </div>
    </div>
  )
}

export default Specialize
