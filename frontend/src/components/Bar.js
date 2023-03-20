import React from 'react'

export default function Bar({logo,text}) {
  return (
    <div className='flex w-40 items-center m-2'>
                <img style={{borderRadius:'3px'}} className='w-6' src={logo} alt='logo'></img>
                <div className='hover:text-white ease-in-out duration-300 cursor-pointer text-sm font-semibold ml-5 text-[#B3B3B3]  font-sans'>{text}</div>
     </div>
  )
}
