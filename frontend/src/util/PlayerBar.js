import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { controllerAction } from '../store/controllerSlice';

let endingMinutes;
let endingSeconds;
let startingMinutes;
let startingSeconds;

export default function PlayerBar(){
    const dispatch=useDispatch();
    const volumeWidth=useSelector((state)=>state.controller.SongBarWidth);
    const audio=useSelector((state)=>state.controller.currSong)
    const widthPlayer=useRef();



    audio.onloadeddata = function() {
      endingMinutes=Math.trunc(audio.duration/60);
      endingSeconds=(Math.trunc(audio.duration%60)).toString().padStart(2,'0');
  };


    useEffect(()=>{

     let timer=setInterval(()=>{
        const duration=audio.duration;
        const currentDuration=audio.currentTime;
        const result=(currentDuration/duration)*100;

        startingMinutes=Math.trunc(currentDuration/60);
        startingSeconds=Math.trunc(currentDuration%60).toString().padStart(2,'0');

        if(currentDuration===0)
        {
          dispatch(controllerAction.setSongBarWidth(0));
        }
        else{
          dispatch(controllerAction.setSongBarWidth(result));
        }
      },1000)


      return ()=>{
        dispatch(controllerAction.setSongBarWidth(0));
        clearInterval(timer);
      }

    },[audio,dispatch]);


    function ChangePosition(e)
    {
      const x=e.nativeEvent.offsetX
      const y=widthPlayer.current.clientWidth;
      const result=(x/y)*100;
      const duration=audio.duration;
      const currentDuration=(duration*result)/100;
      dispatch(controllerAction.setSongDuration(currentDuration))
      dispatch(controllerAction.setSongBarWidth(result))
    }

  return (<>
  <div className='text-[12px] text-center text-[#BABABA]'>{startingMinutes?startingMinutes:'0'}:{startingSeconds?startingSeconds:'00'}</div>
  <div className='relative group'>
  <div style={{'--widthB':volumeWidth-1+'%'}} className=' after:-top-1 after:left-[var(--widthB)] after:z-50 after:absolute after:w-3 after:h-3 after:rounded-[50%] after:bg-white '></div>
  <div ref={widthPlayer} onClick={ChangePosition} className='w-[100%]  relative  overflow-hidden h-1 rounded-sm bg-[#5E5E5E]'>
    <div style={{'--widthB':volumeWidth+'%'}} className='w-[var(--widthB)] group-hover:bg-[#1D9C4A] h-[100%] bg-white'></div>
  </div>
</div>
<div className='text-[12px] text-center text-[#BABABA]'>{endingMinutes?endingMinutes:'0'}:{endingSeconds?endingSeconds:'00'}</div>
</>
  )
}
