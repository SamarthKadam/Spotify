import React from 'react'
import Play from '../content/play.png'
import Pause from '../content/pause.png'
import { useDispatch } from 'react-redux';
import { controllerAction } from '../store/controllerSlice';
import { useSelector } from 'react-redux';

export default function MusicBar({ActiveValue,data,val,playlist}) {

  const dispatch=useDispatch();
  const AlbumName=useSelector((state)=>state.controller.CurrplayingName);
  const isBarShowing=useSelector((state)=>state.controller.IsBarVisible);

    function playSong()
    {
      if(!isBarShowing)
      {
        dispatch(controllerAction.showBar());
      }

      dispatch(controllerAction.initializeIsPlaying(playlist.playListSongs))
      const audio=new Audio(data.audioURL);

      dispatch(controllerAction.playSong(audio));;
      dispatch(controllerAction.setActivePlaying(val-1));
      dispatch(controllerAction.setCurrentPlayingName(playlist.name))
      dispatch(controllerAction.setCurrPlayingSong(data));
    }

    const isActive=ActiveValue[val-1] && AlbumName===playlist.name


  return (
    <div className='grid grid-cols-[1fr,19fr,18fr] mt-1 items-center group px-6 py-1 rounded hover:bg-[#ffffff15]'>
            <div className='text-[#B3B3B3] text-sm font-poppins group-hover:hidden '>{val}</div>
            <div onClick={playSong} className='text-white text-sm hidden group-hover:block'><img alt='play' src={isActive?Pause:Play} className='w-3'></img></div>
            <div className='text-[#B3B3B3] text-xs font-poppins'>
                <div className='flex items-center'>
                    <img className='w-10 mr-4' alt='img' src={data.smImg}></img>
                    <div className='flex flex-col'>
                        <div className={isActive?'text-[#1DB251] text-sm font-normal':'text-white text-sm font-normal'}>{data.name}</div>
                        <div>{data.artists}</div>
                    </div>
                </div>
            </div>
            <div className='text-[#9E9D9D] text-sm font-poppins flex justify-end'>Album</div>
            
          </div>
  )
}
