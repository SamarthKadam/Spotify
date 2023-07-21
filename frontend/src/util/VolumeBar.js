import React from 'react'
import { useRef } from 'react';

export default function VolumeBar() {

  const ref=useRef();
  function ChangePosition(e)
    {
      const x=e.nativeEvent.offsetX

      console.log(x);
      console.log(5*16)
    }


  return (<div className='relative group'>
  <div style={{'--widthB':'88%'}} className=' after:-top-1 after:left-[var(--widthB)] after:z-50 after:absolute after:w-3 after:h-3 after:rounded-[50%] after:bg-white '></div>
  <div ref={ref} onClick={ChangePosition} className='w-[5rem]  relative  overflow-hidden h-1 rounded-sm bg-[#5E5E5E]'>
    <div style={{'--widthB':'89%'}} className='w-[var(--widthB)] group-hover:bg-[#1D9C4A] h-[100%] bg-white'></div>
  </div>
</div>
  )
// return (
//   <div className='relative group'>
//     <input style={{'---heightB':'10'}} className='h-[var(--heightB)]' type='range'></input>
//  </div>
// )
}

