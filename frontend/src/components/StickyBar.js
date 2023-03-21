import React from 'react'
import avatarLogo from '../content/avatar.png';
import downLogo from '../content/caret-down.png'

export default function StickyBar({user}) {
  return (
    <div className=' sticky top-0 h-14 bg-[#1D0D46] flex flex-row px-10 items-center justify-end  box-border'>
        <div className='bg-[#090414] flex items-center rounded-2xl w-30 px-2'>
        <div className='bg-[#535353] mr-4 rounded-[50%] h-8 w-8 flex items-center justify-center'><img src={avatarLogo} alt='logo' className='w-4'></img></div><div className='text-white font-bold text-sm mr-4'>{user.name}</div><img className='w-3' alt='logo' src={downLogo}></img>
        </div>
      </div>
  )
}
