import React from 'react'
import info1 from '../images/info1.svg'
import info2 from '../images/info2.svg'

const Featured = () => {
  return (
    <div className='w-[628px] h-[524px] absolute top-[1950px] left-[112px] border-2 rounded-md'>
      <div className='title w-[625px] h-[67px] rounded-t-lg pt-[17px] pl-[31px] pb-[17px] pr-[31px]'>
        <p className=' title-text w-[261px] h-[33px] font-semibold text-2xl'>Featured Reviews (102) </p>
      </div>
      <div className='mt-7 ml-9'>
        <img src={info1}></img>
      </div>
      <div className='mt-7 ml-9'>
        <img src={info2}></img>
      </div>
    </div>
  )
}

export default Featured
