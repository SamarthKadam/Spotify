import React from 'react'

export default function Popup({message}) {
  return (
    <div className='absolute -translate-y-[85%] z-30 -translate-x-[50%] top-[85%] left-[50%]'>
    <div className="bg-[#2E77D0] px-6 py-2 font-poppins text-base text-white rounded-md flex justify-center items-center">{message}</div>
    </div>
  )
}
