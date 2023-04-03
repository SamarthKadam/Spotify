import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Bar({logo,text,loc}) {
  return (
    <NavLink to={loc} className={({isActive}) => isActive?'text-white font-bold text-base ':'text-[#B3B3B3] text-sm'}>
    <div className='flex w-40 items-center m-2'>
                <img style={{borderRadius:'3px'}} className='w-6' src={logo} alt='logo'></img>
               <div className='hover:text-white ease-in-out duration-300 cursor-pointer  font-semibold ml-5  font-sans'>{text}</div>
     </div>
     </NavLink>
  )
}

// text-[#B3B3B3]