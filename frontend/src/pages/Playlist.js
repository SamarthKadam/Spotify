import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Track from '../components/Track';

export default function Playlist() {

  const data=useParams();

  const playlistInfo=useSelector((state)=>state.controller.playlist);


  const [playlist]=playlistInfo.filter((val,index)=>val.name===data.id)


  return (
      <Track playlist={playlist}></Track>
  )
}
