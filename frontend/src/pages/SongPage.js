import React from 'react'
import LeftComponent from '../components/LeftComponent'
import RightComponent from '../components/RightComponent'
import { json } from 'react-router-dom'
import { controllerAction } from '../store/controllerSlice'
import {useDispatch} from 'react-redux'
import { useRouteLoaderData } from 'react-router-dom'


export default function SongPage() {

  const dispatch=useDispatch();
  const data=useRouteLoaderData('songPage');


  dispatch(controllerAction.setPlaylist(data.playlist))
  dispatch(controllerAction.setUser(data.user));


  return (
    <div className='flex h-[100%] flex-row  select-none'>
      <LeftComponent></LeftComponent>
      <RightComponent></RightComponent>
    </div>
  )
}

export async function loader()
{
  const token=localStorage.getItem('jwt');
  const response=await fetch('http://127.0.0.1:8000/api/v1/playlist',{
    headers:{
      'Content-type':'application/json',
      'Authorization':`Bearer ${token}`
    }
  })

  if(!response.ok)
  {
    json({message:"Something went wrong"},{status:400});
  }

  const data=await response.json();

  return data;
}