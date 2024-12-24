import React from 'react'
import './concern.css'
import skintreatement from '../images/skintreatement.svg'
import pregnency from '../images/pregnency.svg'
import period from '../images/perioddoubt.svg'
import endometresis from '../images/endometriosis.svg'
import pelvicpain from '../images/pelvicpain.svg'
import overiancysts from '../images/overiancysts.svg'
import fivemore from '../images/5more.svg'
const Concers = () => {
  return (
    <div className=' concern w-[628px] h-[222px] border-2 rounded-2xl absolute top-[1300px] left-[112px] '>
      <div className=' title w-[623px] h-[62px] border-y-2 pt-[20px] pr-[28px] pb-[20px] pl-[28px] gap-[10px]'>
        <p className='w-[255px] h-[33px] font-semibold text-2xl'>The Concern I Treat </p>
      </div>
    <div className='flex-col'>
    <div className='topsection  flex '>
      <div className='mt-7 ml-2'>
        <img src={skintreatement}></img>
      </div>
      <div className='mt-7 ml-2'>
        <img src={pregnency}></img>
      </div>
      <div  className='mt-7 ml-2'>
        <img src={period}></img>
      </div>
      <div  className='mt-7 ml-2'>
        <img src={endometresis}></img>
      </div>
      </div>
      <div className='bottomsection flex'>
        <div className='mt-4 ml-2'>
          <img src={pelvicpain}></img>
        </div>
        <div className='mt-4 ml-2'>
          <img src={overiancysts}></img>
        </div>
        <div className='mt-4 ml-2'>
          <img src={fivemore}></img>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Concers
