import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import SectionPage from '../components/SectionPage';
import { useState } from 'react';
import Loading from '../components/Loading';

export default function HomePage() {

  const navigate=useNavigate();
  const cookie=localStorage.getItem('jwt');

  const[IsLoading,setLoading]=useState(false);




  useEffect(()=>{


    const fetchData=async()=>{

    const response=await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/protect`,{
      method:'post',
      headers:{
        'Content-type':'application/json',
        'Authorization':`Bearer ${cookie}`
      }
    })

    const data=await response.json();
    
    if(data.status==='success')
    {
      setLoading(true);
      navigate('/play');
    }
  }



    fetchData()

  },[cookie,navigate])

  if(IsLoading)
  {
    return <Loading></Loading>
  }

  

  return (
    <div className='h-screen overflow-hidden select-none'>
    <Header isError={1}></Header>
    <SectionPage></SectionPage>
    </div>
  )
}
