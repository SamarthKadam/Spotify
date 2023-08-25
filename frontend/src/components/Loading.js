import React from 'react'
import Limage from '../content/RLogo.gif'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () =>{
  return toast.info(`Server's aren't paid. So hold on!`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }

export default function Loading() {

  useEffect(()=>{
      notify();
  },[])

  return (
    <div className='h-screen w-screen bg-[#F9F9F9] flex items-center justify-center'>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClickrtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        <img className=' w-[50%]' alt='Loader' src={Limage}></img>
    </div>
  )
}
