import React from 'react'

export default function Track({playlist}) {
  return (
    <div className='h-[100%] w-[100%]'>
    <div className='grid grid-cols-2 w-[100%]'>
        <div className='bg-[#D03052]'>
          <img className='w-56' src={playlist.img}></img>
        </div>
        <div className='bg-[#208d2b] text-white' >Title</div>
      </div>
      </div>
  )
}
