import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LeftComponent from '../components/LeftComponent';
import Track from '../components/Track';

export default function Playlist() {

  const data=useParams();

  const playlistInfo=useSelector((state)=>state.controller.playlist);


  const [playlist]=playlistInfo.filter((val,index)=>val.name===data.id)

  console.log(playlist);

  return (
    <div className='flex h-[100%] flex-row w-[100%] select-none'>
      <LeftComponent></LeftComponent>
      <Track playlist={playlist}></Track>
    </div>
  )
}
