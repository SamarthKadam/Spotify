import React from 'react'
import {CiHeart} from 'react-icons/ci'
import {AiFillStepForward,AiFillStepBackward} from 'react-icons/ai'
import {GrPlayFill} from 'react-icons/gr'
import {IoMdPause} from 'react-icons/io'
import {SlVolume1,SlVolumeOff} from 'react-icons/sl'
import VolumeBar from '../util/VolumeBar'
import { useSelector } from 'react-redux'
import PlayerBar from '../util/PlayerBar'

export default function MusicBar() {
  const data=useSelector(state=>state.controller.currPlayingSongUI);
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
         <PlayerBar URL={data.audioURL} isVolume={false}></PlayerBar>
          <div className='text-[12px] text-center text-[#BABABA]'>4:22</div>
        </div>
      </div>
      <div className='flex justify-end items-center' >
        <div className='mr-2'><SlVolume1 size={17} color='white'></SlVolume1></div>
        <VolumeBar></VolumeBar>
      </div>
    </div>
  )
}
