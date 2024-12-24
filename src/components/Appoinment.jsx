import React from 'react'
import './appoinment.css'
import calender from '../images/calender.svg'

const Appoinment = () => {
  return (
    <div className='w-[584px] h-[1087px] absolute top-[565px] left-[769px] border-2'>
      <div className='flex w-[543px] h-[59px] border-2 rounded-lg mt-8 ml-6 justify-between'>
        <p className='w-[161px] h-[27px] font-semibold text-xl mt-2 ml-3'>Appoinment Fee </p>
        <p className=' price w-[83px] h-[24px] font-semibold text-xl mt-2'>699.00</p>
      </div>
      <p className='w-[273px] h-[27px] font-bold text-xl ml-6 mt-8'>Select your mode of session </p>
      <div className='w-[540px] h-[78px] ml-6 mt-6 gap-[22px] flex  '>
        <div className='w-[158px] h-[78px] rounded-lg border-2 pt-4 pl-14'>
          <p className='w-[71px] h-[19px] font-medium text-base '>In-Clinic</p>
          <p className='w-[61px] h-[22px] font-normal text-base mt-1'>45 min</p>
        </div>
        <div className='w-[158px] h-[78px] rounded-lg border-2 pt-4 pl-14 video'>
          <p className='w-[71px] h-[19px] font-medium text-base video-text '>Video</p>
          <p className='w-[61px] h-[22px] font-normal text-base mt-1 video-text'>45 min</p>
        </div>
        <div className='w-[158px] h-[78px] rounded-lg border-2 pt-4 pl-14'>
          <p className='w-[71px] h-[19px] font-medium text-base '>Chat</p>
          <p className='w-[61px] h-[22px] font-normal text-base mt-1'>10 min</p>
        </div>
      </div>
      <div className='w-[537px] flex justify-between mt-8 ml-6'>
          <p className='w-[200px] h-[27px] font-bold text-xl'>Pick a Time Slot </p>
          <img src={calender} className='w-[44px] h-[43px] '></img>
      </div>
      <div className='w-[530px] h-[123px] rounded-[21px] border-2 mt-8 ml-6 pt-6 pl-10 flex '>
        <div className='slot w-[123px] h-[80px] rounded-[11px] border-2 pt-4 pl-4'>
          <p className='w-[95px] h-[19px] font-semibold slot-text text-[16px]'>Mon, 10 Oct</p>
          <p className='w-[60px] h-[22px] font-semibold text-[16px] slot-text2 mt-1'>10 Slots</p>
        </div>
        <div className=' w-[123px] h-[80px] rounded-[11px] border-2 pt-4 pl-4 ml-10'>
          <p className='w-[95px] h-[19px] font-semibold  text-[16px]'>Tue, 11 Oct</p>
          <p className='w-[60px] h-[22px] font-semibold text-[16px] mt-1 slottext2'>02 Slots</p>
        </div>
        <div className=' w-[123px] h-[80px] rounded-[11px] border-2 pt-4 pl-4 ml-10'>
          <p className='w-[95px] h-[19px] font-semibold  text-[16px]'>wed, 12 Oct</p>
          <p className='w-[60px] h-[22px] font-semibold text-[16px]  mt-1 slottext3'>06 Slots</p>
        </div>
      </div>
      <div className='w-[508px] h-[181px] mt-8 ml-6'>
          <p className='w-[106px] h-[21px] font-semibold text-[18px]'>Morning</p>
          <div className='w-[508px] h-[147.5px] gap-[12px] mt-2 ml-6 flex-col '>
           <div className='flex gap-2'>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>9:00 AM</div>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>9:30 AM</div>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>10:00 AM</div>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>10:15 AM</div>
           </div>
           <div className='flex mt-2 gap-2'>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>10:45 AM</div>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] bg-green-700 text-white'>11:00 AM</div>
           </div>
          </div>
      </div>
      <div className='w-[508px] h-[181px] mt-8 ml-6'>
          <p className='w-[106px] h-[21px] font-semibold text-[18px]'>Evening</p>
          <div className='w-[508px] h-[147.5px] gap-[12px] mt-2 ml-6 flex-col '>
           <div className='flex gap-2'>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>4:00 PM</div>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>4:15 PM</div>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>4:30 PM</div>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>4:45 PM</div>
           </div>
           <div className='flex mt-2 gap-2'>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>5:00 PM</div>
           <div className='w-[106px] h-[67px] rounded-[22px] border-2 p-[12.5px] '>5:15 PM</div>
           </div>
          </div>
      </div>
      <div className='w-[476px] h-[59.73px] rounded-[8px] pt-[12px] pb-[12px] pl-[171px] pr-[171px] gap-[10px] bg-green-500 mt-11 ml-8'>
        <p className='w-[213px] h-[24px] font-medium text-[20px] text-white'>Make An Appointment </p>
      </div>
    </div>
  )
}

export default Appoinment
