import React from 'react'


export default function VolumeBar() {


  return (<div className='relative group'>
  <div style={{'--widthB':'88%'}} className=' after:-top-1 after:left-[var(--widthB)] after:z-50 after:absolute after:w-3 after:h-3 after:rounded-[50%] after:bg-white '></div>
  <div className='w-[5rem]  relative  overflow-hidden h-1 rounded-sm bg-[#5E5E5E]'>
    <div style={{'--widthB':'89%'}} className='w-[var(--widthB)] group-hover:bg-[#1D9C4A] h-[100%] bg-white'></div>
  </div>
</div>
  )
}

