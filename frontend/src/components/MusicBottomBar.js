import React from 'react'
import {CiHeart} from 'react-icons/ci'
import {AiFillStepForward,AiFillStepBackward} from 'react-icons/ai'
import {GrPlayFill} from 'react-icons/gr'
import {IoMdPause} from 'react-icons/io'
import {SlVolume1} from 'react-icons/sl'
import VolumeBar from '../util/VolumeBar'
import { useSelector } from 'react-redux'
import PlayerBar from '../util/PlayerBar'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { controllerAction } from '../store/controllerSlice'
import {MdExpandLess,MdExpandMore} from 'react-icons/md'
import getNextPlayingSong from '../helper/nextPlay'
import getBeforePlayingSong from '../helper/beforePlay';

export default function MusicBar() {
  const AlbumName=useSelector((state)=>state.controller.CurrplayingName);



const[isShown,setIsShown]=useState(false);
const playlist=useSelector((state)=>state.controller.playlist);
const[isThumbView,setIsThumbView]=useState(true)



function backPlay()
{
  const {inde,value,playListSongs}=getBeforePlayingSong(data,playlist,AlbumName);
  console.log("this is back play");
  console.log(inde);
  if(inde===-1)
  {
    return;
  }
 dispatch(controllerAction.initializeIsPlaying(playListSongs))
 const audio=new Audio(value.audioURL);

 dispatch(controllerAction.playSong(audio));
 dispatch(controllerAction.setActivePlaying(inde));
 dispatch(controllerAction.setCurrentPlayingName(AlbumName))
 dispatch(controllerAction.setCurrPlayingSong(value));
}

function frontPlay()
{
 const {inde,value,playListSongs}=getNextPlayingSong(data,playlist,AlbumName);
 dispatch(controllerAction.initializeIsPlaying(playListSongs))
 const audio=new Audio(value.audioURL);

 dispatch(controllerAction.playSong(audio));
 dispatch(controllerAction.setActivePlaying(inde));
 dispatch(controllerAction.setCurrentPlayingName(AlbumName))
 dispatch(controllerAction.setCurrPlayingSong(value));
}


function ToggleTransition()
{
setIsShown(false);
setIsThumbView((state)=>!state);

}



  const dispatch=useDispatch();
  const isPlaying=useSelector(state=>state.controller.isCurrentPlay);


 function ChanngePlayingMode()
 {
  dispatch(controllerAction.togglePlaying());
  dispatch(controllerAction.setPlayStop());
 }

 let content=<GrPlayFill size={16}></GrPlayFill>
 if(!isPlaying)
 {
  content=<IoMdPause size={19}></IoMdPause>
 }



  const data=useSelector(state=>state.controller.currPlayingSongUI);



  let cont=<div className='relative group '>
{isShown && <div className='bg-[#333333] text-sm p-[5px] rounded text-white absolute font-poppins -top-[60%] left-[10%]'>Expand</div>}
<div onClick={ToggleTransition} onMouseEnter={()=>setIsShown(true)} onMouseLeave={()=>setIsShown(false)} className=' group-hover:flex rounded-[50%] hidden justify-center items-center bg-[#000000a2] h-6 w-6 absolute top-[10%] -translate-y-[10%] left-[85%] -translate-x-[85%]'><MdExpandLess fontSize={26} color='white'></MdExpandLess></div>
<img alt='img' className='h-14' src={data.smImg}></img>
</div>

if(isThumbView)
{
cont=<div className='relative hidden group  '>
{isShown && <div className='bg-[#333333] text-sm p-[5px] rounded text-white absolute font-poppins -top-[60%] left-[10%]'>Expand</div>}
<div onClick={ToggleTransition} onMouseEnter={()=>setIsShown(true)} onMouseLeave={()=>setIsShown(false)} className=' group-hover:flex rounded-[50%] hidden justify-center items-center bg-[#000000a2] h-6 w-6 absolute top-[10%] -translate-y-[10%] left-[85%] -translate-x-[85%]'><MdExpandLess fontSize={26} color='white'></MdExpandLess></div>
<img alt='img' className='h-14' src={data.smImg}>
</img>
</div>
}


  return (
    <div className='px-5 h-[13%] items-center grid fixed bottom-0 z-50 w-[100%] bg-[#181818] grid-cols-[1fr,2fr,1fr]'>
      <div style={{display:!isThumbView?'none':''}} className=' fixed w-[15%] z-0 bottom-[12%] group'>
        <img alt='img' className=' w-[100%]  mb-[4%] ' src={data.CoverImg}>
           </img>
      <div onClick={ToggleTransition} className=' group-hover:block hidden rounded-[50%] bg-[#333333] absolute top-[2%] left-[93%] -translate-x-[93%]'><MdExpandMore color='white'size={30} ></MdExpandMore></div>
      </div>
      <div className='flex items-center'>
        {/* <div><img alt='img' className='h-14' src={data.smImg}></img></div> */}
        {cont}
        <div className='flex flex-col mx-3  text-white'>
          <div className='text-sm font-bold font-poppins mb-1'>{data.name}</div>
          <div className='text-[11px] font-normal font-poppins text-[#ACACAC]'>{data.artists}</div>
        </div>
        <div><CiHeart fontSize={25} color='white'></CiHeart></div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex mb-2 items-center justify-center h-[65%]'>
          <div className='mx-3'><AiFillStepBackward onClick={backPlay} size={25} color='#BABABA'></AiFillStepBackward></div>
          <div onClick={ChanngePlayingMode} className='mx-3 h-[35px] w-[35px] flex items-center justify-center bg-white rounded-[50%]'>
            {content}
          </div>
          <div className='mx-3'><AiFillStepForward onClick={frontPlay} size={25} color='#BABABA'></AiFillStepForward></div>
        </div>
        <div className='grid w-[100%] grid-cols-[1fr,10fr,1fr]  items-center text-white'>
         <PlayerBar URL={data.audioURL} isVolume={false}></PlayerBar>
        </div>
      </div>
      <div className='flex justify-end items-center' >
        <div className='mr-2'><SlVolume1 size={17} color='white'></SlVolume1></div>
        <VolumeBar></VolumeBar>
      </div>
    </div>
  )
}
