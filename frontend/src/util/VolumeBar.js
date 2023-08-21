import React from 'react'
import { useRef } from 'react';
import { useState} from 'react';
import {useSelector} from 'react-redux'
export default function VolumeBar() {

  const song=useSelector((state)=>state.controller.currSong);

  const[volWidth,setVolWidth]=useState(100);

  const ref=useRef();
  function ChangePosition(e)
    {
      const x=e.nativeEvent.offsetX
      let value=Math.round((x/72)*100);

      const VolumePercent=(value/100);
      song.volume=VolumePercent;
      setVolWidth(value)
    }


  return (<div className='relative group'>
  <div style={{'--widthB':`${volWidth-10}%`}} className=' after:-top-1 after:left-[var(--widthB)] after:z-50 after:absolute after:w-3 after:h-3 after:rounded-[50%] after:bg-white '></div>
  <div ref={ref} onClick={ChangePosition} className='w-[5rem]  relative  overflow-hidden h-1 rounded-sm bg-[#5E5E5E]'>
    <div style={{'--widthB':`${volWidth}%`}} className='w-[var(--widthB)] group-hover:bg-[#1D9C4A] h-[100%] bg-white'></div>
  </div>
</div>
  )
// return (
//   <div className='relative group'>
//     <input style={{'---heightB':'10'}} className='h-[var(--heightB)]' type='range'></input>
//  </div>
// )
}

