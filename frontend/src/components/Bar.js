import React from 'react'
import {NavLink} from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Bar({logo,text,loc}) {

  const notify = () => {
    return toast.info(`Limited it's functionality, will be working soon!!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const clickHandler=()=>{
    if(text==='Search'||text==='Your Library'||text==='Create Playlist'||text==='Your Episodes')
    notify();
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