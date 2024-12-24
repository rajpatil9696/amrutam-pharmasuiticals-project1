import React from 'react'
import './workexperience.css'
import midtown from '../images/midtown1.svg'
import midtown2 from '../images/midtown2.svg'
const Workexperience = () => {
  return (
    <div className='w-[628px] h-[331px] rounded-md border-2  absolute top-[1570px] left-[112px] flex-col'>
      <div className=' title w-[628px] h-[61px] border-b-2 pt-[14px] pr-[27px] pb-[14px] pl-[27px]'>
        <p className='w-[226px] h-[33px] font-semibold text-2xl'>My Work Experience </p>
      </div>
      <div>
        <p className='w-[361px] h-[29px] border-b-2 mt-9 ml-9 font-semibold text-lg heading '>I HAVE BEEN IN PRACTICE FOR : 7+ YEARS </p>
      </div>
      <div className='w-[471.5px] h-[51.6px] mt-9 ml-9'>
        <img src={midtown}></img>
      </div>
      <div className='w-[471.5px] h-[51.6px] mt-9 ml-9'>
        <img src={midtown2}></img>
      </div>
    </div>
  )
}

export default Workexperience
