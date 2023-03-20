import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorCard({message}) {

  const navigate=useNavigate();

  function redirect()
  {
    navigate('/home');
  }

  return (
    <div className='h-[90%] flex flex-col gap-10 justify-center items-center'>
        <div className='font-poppins text-7xl font-semibold'>Uh oh.</div>
        <div className='font-poppins text-xl '>Something Went Wrong</div>
        <button onClick={redirect} className='px-14 mt-6 text-white font-semibold rounded-3xl text-2xl py-6 bg-[#1BD760] max-[495px]:text-sm'>TRY AGAIN</button>
    </div>
  )
}
