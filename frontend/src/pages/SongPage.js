import React from 'react'
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
      <RightComponent></RightComponent>
  )
}

export async function loader()
{
  const token=localStorage.getItem('jwt');
  const response=await fetch(`${process.env.REACT_APP_API_URL}/api/v1/playlist`,{
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