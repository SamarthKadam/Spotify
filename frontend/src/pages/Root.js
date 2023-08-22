import React from 'react'
import LeftComponent from '../components/LeftComponent'
import MusicBottomBar from '../components/MusicBottomBar';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { controllerAction } from '../store/controllerSlice';
import Popup from '../util/Popup';

export default function Root() {



  const dispatch=useDispatch();
  const data=useSelector(state=>state.controller.IsBarVisible)
  const popup=useSelector(state=>state.controller.isPopup)

  useEffect(()=>{

    const cookie=localStorage.getItem('jwt');

     fetch(`${process.env.REACT_APP_API_URL}/api/v1/songs/AllLikedSongs`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${cookie}`
      }
    }).then(res=>res.json()).then(data=>{
      dispatch(controllerAction.initializeLikedSongs(data.likedSongs));
    }).catch(err=>{
      console.log(err);
    })

  },[dispatch])


  if(popup===true)
  {

    setTimeout(()=>{
      dispatch(controllerAction.setIsPopUpFalse());
    },3000)
  }

  return (
    <div className='flex h-[100%] bg-[#121212] flex-row select-none'>
      {popup&&<Popup message="Added to your Liked Songs"></Popup>}
      <LeftComponent></LeftComponent>
     {data&&<MusicBottomBar></MusicBottomBar>}
      <Outlet></Outlet>
    </div>
  )
}
