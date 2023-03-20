import React from 'react'
import Limage from '../content/RLogo.gif'

export default function Loading() {
  return (
    <div className='h-screen w-screen bg-white flex items-center justify-center'>
        <img className=' w-[50%]' alt='Loader' src={Limage}></img>
    </div>
  )
}
