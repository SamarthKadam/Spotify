import React from 'react'
import avatarLogo from '../content/avatar.png';
import downLogo from '../content/caret-down.png'
import greetingTime from 'greeting-time';
import likedLogo from '../content/liked-songs-300.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function RightComponent() {

  const playlist=useSelector(state=>state.controller.playlist);
  const user=useSelector(state=>state.controller.user);
  const values=playlist.filter((val,index)=>index!==0)





  let greet=greetingTime(new Date());

  return (
    <div className='bg-[#111111] min-h-screen  w-screen '>
      <div className=' sticky top-0 h-14 bg-[#1D0D46] flex flex-row px-10 items-center justify-end  box-border'>
        <div className='bg-[#090414] flex items-center rounded-2xl w-30 px-2'>
        <div className='bg-[#535353] mr-4 rounded-[50%] h-8 w-8 flex items-center justify-center'><img src={avatarLogo} alt='logo' className='w-4'></img></div><div className='text-white font-bold text-sm mr-4'>{user.name}</div><img className='w-3' alt='logo' src={downLogo}></img>
        </div>
      </div>
      <div className='bg-gradient-to-b from-[#1e0f45] via-[#1a1033] to-[#131217]  px-10 flex-col'>
        <div className='text-white text-3xl font-bold font-poppins mb-6' >{greet}</div>
        <div className='grid grid-cols-3 max-[937px]:grid-cols-2 max-[834px]:grid-cols-1 gap-4 text-white font-semibold'>
          {
            <div className='bg-[#ffffff1e] ease-in-out duration-300 cursor-pointer  hover:bg-[#ffffff36]  flex items-center overflow-hidden rounded '>
            <img alt='img' className='w-20 mr-5' src={likedLogo}></img> Liked Songs
          </div>
          }
          {
            values.map((data,index)=>{
              return <Link key={`${data.name}`} to={data.name}>
              <div className='bg-[#ffffff1e] ease-in-out duration-300 cursor-pointer  hover:bg-[#ffffff36] flex items-center overflow-hidden rounded '>
              <img alt='img' className='w-20 mr-5' src={data.img}></img> {data.name}
            </div>
            </Link>
            })
          }
        </div>
      </div>
      <div className='px-10 font-poppins text-white mt-10'>
          <div className='font-semibold text-2xl mb-8'>Made for {user.name}</div>
          <div className='grid gap-4 grid-cols-6 max-[1334px]:grid-cols-3 max-[1030px]:grid-cols-2'>
           {
            playlist.map((data,index)=>{
              return (
                <Link key={index} to={data.name}>
              <div  className='h-[100%] px-2 py-2 ease-in-out duration-300 cursor-pointer hover:bg-[#282828]  rounded-md bg-[#181818] flex flex-col'>
               <div className='flex items-center justify-center'>
                 <img alt='icon' className='w-40 ' src={data.img}></img>
                </div>
                <div className='flex flex-col justify-start w-[100%] mt-4'>
                  <div>{data.name}</div>
                  <div className='text-sm font-poppins text-[#8F8F8F]'>{data.playListSongs[9].artists.split(',')[0]},{data.playListSongs[5].artists.split(',')[0]}</div>
                </div>
              </div>
              </Link>)
            })
           }
          </div>
        </div>
    </div>
  )
}
