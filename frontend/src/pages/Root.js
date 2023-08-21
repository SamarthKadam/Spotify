import React from 'react'
import LeftComponent from '../components/LeftComponent'
import MusicBottomBar from '../components/MusicBottomBar';
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { controllerAction } from '../store/controllerSlice';
import Popup from '../util/Popup';

export default function Root() {


  const dispatch=useDispatch();
  const data=useSelector(state=>state.controller.IsBarVisible)
  const popup=useSelector(state=>state.controller.isPopup)


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
