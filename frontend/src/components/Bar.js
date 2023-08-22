import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Bar({logo,text,loc}) {

  // oc='/play' logo={homeLogo} text='Home'></Bar>
  //           <Bar loc='/play' logo={searchLogo} text='Search'></Bar>
  //           <Bar loc='/play' logo={albumLogo} text='Your Library'></Bar>
  //       </div>
  //       <div className='flex flex-col'>
  //           <Bar loc='/play' logo={addLogo} text='Create Playlist'></Bar>
  //           <Bar loc='/play/likedSongs' logo={likeLogo} text='Liked Songs'></Bar>
  //           <Bar loc='/play' logo={bookmarkLogo} text='Your Episodes' ></Bar>


  const clickHandler=()=>{
    if(text==='Search'||text==='Your Library'||text==='Create Playlist'||text==='Your Episodes')
     alert('Limited its functionality will be working soon') 
  }


  return (
    <NavLink onClick={clickHandler} to={loc} className={({isActive}) => isActive?'text-white font-bold text-base ':'text-[#B3B3B3] text-sm'}>
    <div className='flex w-40 items-center m-2'>
                <img style={{borderRadius:'3px'}} className='w-6' src={logo} alt='logo'></img>
               <div className='hover:text-white ease-in-out duration-300 cursor-pointer  font-semibold ml-5  font-sans'>{text}</div>
     </div>
     </NavLink>
  )
}

// text-[#B3B3B3]