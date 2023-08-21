import React from 'react'
import {RiMusicFill} from 'react-icons/ri'

export default function EmptyColl() {
  return (
    <div className="bg-transparent flex flex-col items-center ml-[-20%] mt-10">
        <RiMusicFill size={45} color='white'></RiMusicFill>
        <div className="font-poppins mt-6 font-bold text-xl text-white">Songs you like will appear here</div>
        <div className='font-poppins mt-4  text-sm text-white'>Save songs by tapping the heart icon</div>
    </div>
  )
}
