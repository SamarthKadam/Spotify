import React from 'react'
import {CiHeart} from 'react-icons/ci'
import {AiFillStepForward,AiFillStepBackward} from 'react-icons/ai'
import {GrPlayFill} from 'react-icons/gr'
import {IoMdPause} from 'react-icons/io'
import {SlVolume1,SlVolumeOff} from 'react-icons/sl'
import { useState,useRef,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { controllerAction } from '../store/controllerSlice'

let widthBar=0;
let VolBar=80;
export default function MusicBar() {



  const dispatch=useDispatch();
  const data=useSelector(state=>state.controller.currPlayingSongUI);
  const duration=useSelector(state=>state.controller.currSongDuration)
  const music=useSelector(state=>state.controller.currSong);


    
    const[playingBarCur,setPlayingBarCur]=useState(0);
    const[palyingVolume,setPlayingVolume]=useState(80);
    const LenRef=useRef();
    const VolBarRef=useRef();


  function getOffset(e)
  {
    widthBar=LenRef.current.clientWidth;
    setPlayingBarCur(e.nativeEvent.offsetX);
  }


  function ChangeVolume(e)
  {
    setPlayingVolume(e.nativeEvent.offsetX);
  }



  let CompletedWidth;
  let CompletedVolWidth;
  if(playingBarCur===0 && widthBar===0)
  {
    CompletedWidth=0+'%';
  }
  else{
    console.log(playingBarCur,widthBar);
    CompletedWidth=(playingBarCur/widthBar)*100+'%';
  }

  if(palyingVolume===0)
  {
    CompletedVolWidth=0+'%';
  }
  else{
    CompletedVolWidth=(palyingVolume/VolBar)*100+'%';
  }



  useEffect(()=>{

   const timerUpd=setInterval(()=>{
      let value=(music.currentTime/music.duration)*100
       widthBar=LenRef.current.clientWidth;
     let assignedValue=Math.trunc((value*widthBar)/100);
     setPlayingBarCur(assignedValue);
     
    },1000)

    return()=>{
      clearInterval(timerUpd)
    }

  },[music.currentTime,music.duration,])



  const hours=(Math.trunc(duration/60))
  const minutes=(Math.trunc(duration%60)).toString().padStart(2,'0');

  return (
    <div className='px-5 h-[13%] items-center grid fixed bottom-0 z-50 w-[100%] bg-[#181818] grid-cols-[1fr,2fr,1fr]'>
      <div className='flex items-center'>
        <div><img alt='img' className='h-14' src={data.smImg}></img></div>
        <div className='flex flex-col mx-3  text-white'>
          <div className='text-sm font-bold font-poppins mb-1'>{data.name}</div>
          <div className='text-[11px] font-normal font-poppins text-[#ACACAC]'>{data.artists}</div>
        </div>
        <div><CiHeart fontSize={25} color='white'></CiHeart></div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex mb-2 items-center justify-center h-[65%]'>
          <div className='mx-3'><AiFillStepBackward size={25} color='#BABABA'></AiFillStepBackward></div>
          <div className='mx-3 h-[35px] w-[35px] flex items-center justify-center bg-white rounded-[50%]'>
            <GrPlayFill size={16}></GrPlayFill>
            {/* <IoMdPause size={17}></IoMdPause> */}
          </div>
          <div className='mx-3'><AiFillStepForward size={25} color='#BABABA'></AiFillStepForward></div>
        </div>
        <div className='grid w-[100%] grid-cols-[1fr,10fr,1fr]  items-center text-white'>
          <div className='text-[12px] text-center text-[#BABABA]'>0:00</div>
          <div className='relative group'>
            <div style={{'--widthB':CompletedWidth}} className=' after:-top-1 after:left-[var(--widthB)] after:z-50 after:absolute after:w-3 after:h-3 after:rounded-[50%] after:bg-white '></div>
            <div ref={LenRef} onClick={getOffset} className='w-[100%]  relative  overflow-hidden h-1 rounded-sm bg-[#5E5E5E]'>
              <div style={{'--widthB':CompletedWidth}} className='w-[var(--widthB)] group-hover:bg-[#1D9C4A] h-[100%] bg-white'></div>
            </div>
          </div>
          <div className='text-[12px] text-center text-[#BABABA]'>{hours}:{minutes}</div>
        </div>
      </div>
      <div className='flex justify-end items-center' >
        <div className='mr-2'><SlVolume1 size={17} color='white'></SlVolume1></div>
        <div className='relative group'>
          <div style={{'--VolBar':CompletedVolWidth}} className='after:-top-1 after:left-[var(--VolBar)] after:z-50 after:absolute after:w-3 after:h-3 after:rounded-[50%] after:bg-white'></div>
        <div ref={VolBarRef} onClick={ChangeVolume} className='w-20 overflow-hidden rounded h-1 bg-[#5E5E5E]'>
          <div style={{'--VolBar':CompletedVolWidth}} className='w-[var(--VolBar)] group-hover:bg-[#1D9C4A] h-[100%] bg-white'></div>
        </div>
        </div>
      </div>
    </div>
  )
}
