import React from 'react';
import { Link } from 'react-router-dom';
import img from '../content/pngegg.png';
 export default function Header({isError}) {


  const NavigateP=(link)=>{
    // window.location.replace('https://www.spotify.com/us/download/windows/');
    window.open(link, '_blank');
  }



   return (
    <nav className='h-[10%] overflow-hidden bg-black flex w-auto max-[650px]:justify-center' >
    <div className='max-[860px]:w-1/4 w-2/4 flex items-center max-[650px]:hidden max-[572px]:flex max-[572px]:w-auto'>
    <img src={img} alt='logo' className='max-[860px]:ml-5 h-32 ml-44 -mt-4'></img>
    </div>
    {isError &&
    <div className='max-[974px]:justify-start max-[860px]:w-3/4 w-2/4 flex items-center justify-center font-sans text-base font-medium max-[572px]:hidden'>
        <ul className='text-[#989898] flex gap-5'>
        <li><Link onClick={NavigateP.bind(this,'https://www.spotify.com/in-en/premium/')} className='hover:text-white'>Premium</Link></li>
        <li><Link onClick={NavigateP.bind(this,'https://support.spotify.com/us/')} className='hover:text-white'>Support</Link></li>
        <li><Link onClick={NavigateP.bind(this,'https://www.spotify.com/us/download/windows/')} className='hover:text-white'>Download</Link></li>
        <li><Link to='/signup' className='hover:text-white'>Sign up</Link></li>
        </ul>
        <Link to='/login' className='max-[974px]:ml-4 font-sans text-base font-semibold ml-14 px-6 py-3 bg-white text-black rounded-3xl  '>Log in</Link>
    </div>
    }
    </nav>
   )
 }
 
