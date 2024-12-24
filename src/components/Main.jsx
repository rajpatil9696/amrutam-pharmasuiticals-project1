import React from 'react'
import mainimage from '../images/image159.svg'
import './main.css'
import girlimage from '../images/Ellipse727.svg'
import verification from '../images/vefification.svg'
import star from '../images/stars.svg'
const Main = () => {
  return (
    <div className='main'>
    <div className='uppersection'>
        <img src={mainimage}></img>
    </div>  
    <div className='lowersection flex justify-between align-middle pt-9 '>
      <img src={girlimage} className='ml-3 w-[159px] h-[159px] border-4 rounded-full'></img>
      <div>
           <div className='doctorinfo gap-2'>
           <p className='flex font-serif text-xl font-medium col'>Dr.Bruce Wayne <span><img src={verification} alt="no image found " /></span></p>
           <p className='w-[109px] h-[16px] font-medium text-base'>Gynecologist</p>
           </div>
           <p className='flex w-[107px] h-[22px] position:absolute mt-4'><span>4</span> <img src={star}/><img src={star}></img> <img src={star}></img> <img src={star}></img></p>
      </div>
      <div className='flex gap-[74px] ml-[100px]'>
        <div className='gap-[5px]'>
          <p className='w-[65.82px] h-[16.8px] font-medium text-sm font-poppins'>Followers</p>
          <p  className='w-[39px] h-[24px] text-xl font-semibold font-sans'>850</p>
        </div>
        <div className='gap-[5px]'>
          <p className='w-[65.82px] h-[16.8px] font-medium text-sm font-serif'>Following</p>
          <p className='w-[39px] h-[24px] text-xl font-semibold font-sans'>18K</p>
        </div>
        <div className='gap-[5px]'>
          <p className='w-[65.82px] h-[16.8px] font-medium text-sm font-serif'>Posts</p>
          <p className='w-[39px] h-[24px] text-xl font-semibold font-sans'>250</p>
        </div>
      </div>
      <div>
        <button className='w-[274px] h-[59px] rounded-lg pt-[12px] pr-[17px] pb-[12px] pl-[17px] gap-[10px] bg-green-600 '><p className='w-[207px] h-[24px] font-medium text-xl text-white mr-4 '>Book An Appoinment</p> </button>
      </div>
    </div>
    </div>
  )
}

export default Main
