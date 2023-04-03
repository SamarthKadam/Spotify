import React from 'react'
import LeftComponent from '../components/LeftComponent'
import MusicBottomBar from '../components/MusicBottomBar';
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Root() {

  const data=useSelector(state=>state.controller.IsBarVisible)

  return (
    <div className='flex h-[100%] bg-[#121212] flex-row select-none'>
      <LeftComponent></LeftComponent>
     {data&&<MusicBottomBar></MusicBottomBar>}
      <Outlet></Outlet>
    </div>
  )
}
