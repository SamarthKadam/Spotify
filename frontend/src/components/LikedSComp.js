import React from 'react'
import likImg from '../content/liked-songs-300.png';
import SpotifyLogo from '../content/spotifylogo.png'
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import chroma from 'chroma-js';
import EmptyColl from './EmptyColl';
// import playbutton from '../content/playbutton.png';
// import playlist from '../content/playlist.png';
import playbutton from '../content/play-button.png'
import MusicList from '../util/MusicList';

export default function LikedSComp() {

    const navigate=useNavigate();
    const user=useSelector(state=>state.controller.user);
    const LikedSongsList=useSelector(state=>state.controller.likedSongs);



    const from='#503A9B';
  const value=chroma.hex(from).darken(2).hex();

    const[innerHeight,setInnerHeight]=useState(window.innerHeight-10);

    const handleResize=()=>{
      setInnerHeight(window.innerHeight-10);
    }
  
    useEffect(()=>{
      window.addEventListener('resize',handleResize);
  
      return ()=>{
        window.removeEventListener('resize',handleResize);
      }
  
    },[])
  
    // const innerHeight=window.innerHeight-10;
    let innerValue=innerHeight.toString()+'px'
  





  return (
    <>
    <div style={{'--hgt':innerValue}} className='h-[var(--hgt)] overflow-y-scroll relative w-[100%] bg-[#121212] scrollbar scrollbar-thumb-[#5A5A5A] scrollbar-track-[#11111100]  hover:scrollbar-thumb-[#757575]'>
      <div className='absolute w-[100%] h-[7%] flex items-center '>
        <div className='flex ml-[2%]'>
        <div onClick={()=>navigate(-1)} className='bg-#1B0A0D cursor-pointer m-1'><IoIosArrowBack color='white' size={27}></IoIosArrowBack></div>
        <div className='bg-#1B0A0D cursor-pointer m-1' ><IoIosArrowForward color='grey' size={27}></IoIosArrowForward></div>
        </div>
      </div>
    <div className="grid gap-2 grid-cols-[1fr,4fr] w-[100%] px-12 py-14 pb-32  bg-gradient-to-b from-[var(--fro)]  to-[var(--to)]" style={{'--fro':from,'--to':value}}>
        <div className='flex items-center justify-center'>
          <img alt='logo' className='w-60' src={likImg}></img>
        </div>
        <div className='text-white font-poppins' >
          <div className='mt-8'>Playlist</div>
          <div className='mt-2 text-8xl font-semibold'>Liked Songs </div>
          <div className='text-sm text-[#ffffffd1] ml-2 mt-6'>{user.name} {LikedSongsList.length} songs</div>
          <div className='text-sm mt-2 flex'>
            <div className='flex mr-3'>
            <img alt='logo' className='w-5 mr-1' src={SpotifyLogo}></img>
            <div>Spotify</div>
            </div>
            </div>
        </div>
      </div>
      {
        LikedSongsList.length!==0&&<div className='bg-[#111111a0] px-10 pb-[5%] relative -top-24'>
        <div className='h-[13%] py-5  flex items-center justify-start'>
          <div className='group'>
            <img alt='play'className='w-14  group-hover:scale-[1.1] ease-in-out duration-300' src={playbutton}>
              </img>
          </div>
          </div>
          <div className='grid grid-cols-[1fr,19fr,18fr] px-6 mt-6 mb-6'>
            <div className='text-[#9E9D9D] text-sm font-poppins'>#</div>
            <div className='text-[#9E9D9D] text-sm font-poppins '>Title</div>
            <div className='text-[#9E9D9D] text-sm font-poppins flex justify-end'>Album</div>
          </div>
          { LikedSongsList.map((data,index)=>{
            // return <MusicBar  data={data} val={index+1} key={index}></MusicBar>
            return <MusicList data={data} val={index+1} key={index}></MusicList>
          })}
      </div>
      }
      {
        LikedSongsList.length===0&&<EmptyColl></EmptyColl>
      }
      </div>
      </>
  )
}
