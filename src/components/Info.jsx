import React from 'react'
import './info.css'
import facebook from '../images/facebook.svg'
import insta from '../images/insta.svg';
import youtube from '../images/youtube.svg';
import twitter from '../images/twitter.svg'

const Info = () => {
  return (
    <div className=' info w-[628px] h-[410px] rounded-2xl border-2 mt-5'>
      <div className=' top w-[625px] h-[62px] border-y-2 flex '>
        <p className='w-[195px] h-[33px] absolute top-3.5 left-9 font-medium text-2xl'>A Little About Me </p>
        <button className='w-[113.66px] h-[36px] absolute top-3.5 right-7  rounded-xl border-2 pt-[6px] pr-[21px] pb-[6px] pl-[21] bg-white'>Follow +</button>
      </div>
      <div className='w-[534px] h-[134px]   mt-7 ml-9 gap-[6px] pt-4 font-semibold text-m text-slate-500'>
        <p>Hello I am Dr.Bruce Wayne a Gynecologist in sanjivani Hospital surat. 
            I love to work with my all hospital staff and senior doctors .
            completed my graduation in Gynochemist from .... 
            <br></br>
            ---------------------------------------------------------------  <span className='text-black'>read more</span> 
        </p>
      </div>
      <div className='w-[491px] h-[40px] gap-[15px] absolute mt-7 ml-12 flex justify-between'>
        <p className='mt-2 ml-2 font-semibold text-m '>Language Spoken</p>
        <div>
        <button id="button" className='w-[105px] h-[40px] rounded-2xl'>English</button>
        <button id="button" className='w-[105px] h-[40px] rounded-2xl'>Hindi</button>
        <button id="button" className='w-[105px] h-[40px] rounded-2xl'>Telagu</button>
        </div>
      </div>
      <div className='w-[205px] h-[40px] gap-[15px] absolute top-[340px] left-[30px]  flex '>
        <img src={facebook}></img>
        <img src={insta}></img>
        <img src={youtube}></img>
        <img src={twitter}></img>
      </div>
    </div>
  )
}

export default Info
